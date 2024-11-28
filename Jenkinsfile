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

                    # Load NVM and install Node.js v18
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install 18  # Install Node.js v18
                    nvm use 18       # Use Node.js v18

                    # Ensure npm is available
                    export PATH=$NVM_DIR/versions/node/v18.20.5/bin:$PATH
                    echo "Node version: $(node -v)"
                    echo "NPM version: $(npm -v)"
                    '''
                }
            }
        }

        stage('Check Node Version') {
            steps {
                script {
                    sh 'node -v'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing npm dependencies..."
                    // Install npm dependencies
                    sh 'npm install --force'
                }
            }
        }

        stage('Update Dependencies') {
            steps {
                script {
                    echo "Updating dependencies..."
                    // Update eslint-webpack-plugin and other dependencies
                    sh 'npm install eslint-webpack-plugin@latest --save-dev'
                    sh 'npm update'  // Update all dependencies to their latest versions
                }
            }
        }

        stage('Reinstall Node Modules') {
            steps {
                script {
                    echo "Removing node_modules and reinstalling..."
                    // Clean and reinstall node modules
                    sh 'rm -rf node_modules'
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Building the project..."
                    // Run the build process
                    sh 'npm run build --verbose'  // Use --verbose for detailed logs
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
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
            // Collect and output logs for further debugging
            // sh 'cat /var/lib/jenkins/.npm/_logs/*.log'
        }
    }
}
