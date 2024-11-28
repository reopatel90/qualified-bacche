pipeline {
   
    environment {
        GIT_REPO = 'https://github.com/reopatel90/qualified-bacche.git'
        EMAIL_RECIPIENT = 'nathantran895@gmail.com'
        DEPLOY_PATH = '/var/www/html'  
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${GIT_REPO}"
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy to Apache2') {
            steps {
                script {
                    // Copy the build folder contents to Apache's document root
                    sh '''
                    sudo rm -rf ${DEPLOY_PATH}/*  // Clear the old files in the Apache document root
                    sudo cp -r build/* ${DEPLOY_PATH}/  // Copy the new build files
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}  // Set proper file ownership for Apache
                    sudo systemctl restart apache2  // Restart Apache to apply changes
                    '''
                }
            }
        }
    }
    post {
        success {
            mail to: "${EMAIL_RECIPIENT}",
                subject: "Jenkins Build Success: ${currentBuild.fullDisplayName}",
                body: "The build for ${currentBuild.fullDisplayName} was successful and deployed to Apache2."
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                subject: "Jenkins Build Failed: ${currentBuild.fullDisplayName}",
                body: "The build for ${currentBuild.fullDisplayName} has failed."
        }
    }
}
