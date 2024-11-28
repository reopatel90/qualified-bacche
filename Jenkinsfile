pipeline {
    agent any
    environment {
        // Set the Node.js version you want to install
        NODE_VERSION = '20'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/reopatel90/qualified-bacche.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js using NVM
                    sh '''
                    # Install NVM (Node Version Manager)
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                    nvm install $NODE_VERSION
                    nvm use $NODE_VERSION

                    # Install dependencies
                    npm install
                    '''
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
                    // Assuming the React app is built into a 'build' directory
                    sh '''
                    sudo cp -r build/* /var/www/html/
                    sudo systemctl restart apache2
                    '''
                }
            }
        }
    }
    post {
        failure {
            mail to: 'your-email@example.com', subject: "Build Failed", body: "The Jenkins build has failed."
        }
    }
}
