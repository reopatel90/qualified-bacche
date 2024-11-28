pipeline {
    agent any

    environment {
        // Git repository and recipient email
        GIT_REPO = 'https://github.com/reopatel90/qualified-bacche.git'
        EMAIL_RECIPIENT = 'nathantran895@gmail.com'

        // Deployment path for Apache
        DEPLOY_PATH = '/var/www/html'  

        // Define Node.js environment (can be 'development', 'production', etc.)
        NODE_ENV = 'production'  // Can change this based on your needs

        // Ensure the right Node.js version is used, by specifying the path to Node.js
        NODE_VERSION = '16'  // Specify the version of Node.js you want to use
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the Git repository
                git branch: 'main', url: "${GIT_REPO}"
            }
        }

        stage('Install Node.js and npm') {
            steps {
                script {
                    // Ensure Node.js and npm are installed on the Jenkins agent
                    sh '''
                    # Install Node.js (specific version) if not already installed
                    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                    sudo apt-get install -y nodejs

                    # Verify Node.js and npm versions
                    node -v
                    npm -v
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    // Set NODE_ENV for production builds (optional, depending on your app)
                    withEnv(["NODE_ENV=${NODE_ENV}"]) {
                        // Run the build command to create the production build
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy to Apache2') {
            steps {
                script {
                    // Deploy the built React app to Apache2
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
            // Send success email notification
            mail to: "${EMAIL_RECIPIENT}",
                 subject: "Jenkins Build Success: ${currentBuild.fullDisplayName}",
                 body: "The build for ${currentBuild.fullDisplayName} was successful and deployed to Apache2."
        }
        failure {
            // Send failure email notification
            mail to: "${EMAIL_RECIPIENT}",
                 subject: "Jenkins Build Failed: ${currentBuild.fullDisplayName}",
                 body: "The build for ${currentBuild.fullDisplayName} has failed."
        }
    }
}
