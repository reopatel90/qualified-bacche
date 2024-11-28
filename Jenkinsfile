pipeline {
    agent any

    environment {
        NVM_DIR = "$HOME/.nvm"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                script {
                    // Ensure NVM is installed first
                    sh '''
                    if [ ! -d "$NVM_DIR" ]; then
                        echo "NVM not found, installing..."
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                    fi

                    # Load NVM and install Node.js
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install 20
                    nvm use 20

                    # Ensure npm is available
                    export PATH=$NVM_DIR/versions/node/v20.18.1/bin:$PATH
                    echo "Node version: $(node -v)"
                    echo "NPM version: $(npm -v)"
                    '''
                }
            }
        }

        stage('Clean Up Node Modules') {
            steps {
                script {
                    // Remove node_modules to ensure a clean install
                    sh 'rm -rf node_modules'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    sh 'npm install --force'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build your project
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy your project (This step can vary depending on your setup)
                    echo 'Deploying application...'
                    // Add deployment script/commands here
                }
            }
        }
    }

    post {
        always {
            // Clean up any resources or actions to be performed after the pipeline
            echo 'Cleaning up...'
        }

        success {
            echo 'Pipeline successfully completed.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
