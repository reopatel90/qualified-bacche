pipeline {
    agent any  // Use any available agent to run the pipeline

    environment {
        GIT_REPO = 'https://github.com/reopatel90/qualified-bacche.git'  // Replace with your repository URL
        EMAIL_RECIPIENT = 'nathantran895@gmail.com'  // Email to notify upon build success/failure
        DEPLOY_PATH = '/var/www/html'  // Apache2 document root
        NODE_VERSION = '16'  // Define the Node.js version you want to use
    }

    stages {
        // Stage 1: Clone Repository
        stage('Clone Repository') {
            steps {
                script {
                    // Clone the repository from GitHub
                    git branch: 'main', url: "${GIT_REPO}"
                }
            }
        }

        // Stage 2: Install Dependencies
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js (ensure it's available)
                    sh '''
                    curl -sL https://deb.nodesource.com/setup_20 | sudo -E bash -
                    sudo apt-get install -y nodejs
                    node -v  # Verify Node.js installation
                    npm -v   # Verify npm installation
                    npm install  # Install project dependencies
                    '''
                }
            }
        }

        // Stage 3: Build React App
        stage('Build React App') {
            steps {
                script {
                    // Build the React app
                    sh 'npm run build'
                }
            }
        }

        // Stage 4: Deploy to Apache2
        stage('Deploy to Apache2') {
            steps {
                script {
                    // Deploy the build to Apache2's document root
                    sh '''
                    sudo rm -rf ${DEPLOY_PATH}/*  # Remove any existing files in the Apache document root
                    sudo cp -r build/* ${DEPLOY_PATH}/  # Copy the build folder contents to Apache's document root
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}  # Ensure Apache owns the files
                    sudo systemctl restart apache2  # Restart Apache to apply changes
                    '''
                }
            }
        }
    }

    // Post-actions (Success/Failure Notifications)
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
