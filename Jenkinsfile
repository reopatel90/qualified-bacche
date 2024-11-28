pipeline {
    agent any

    environment {
        // Set the Node version that you want to use
        NODE_VERSION = '16.x'  // Change to the version required for your project
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Install Node.js and npm (if not installed already)
                    echo "Setting up Node.js..."
                    sh 'curl -sL https://deb.nodesource.com/setup_${env.NODE_VERSION} | bash -'
                    sh 'apt-get install -y nodejs'
                    
                    // Check Node.js and npm versions
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Clean npm Cache') {
            steps {
                script {
                    echo "Cleaning npm cache..."
                    sh 'npm cache clean --force'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing dependencies..."
                    sh 'rm -rf node_modules'  // Remove the current node_modules if exists
                    sh 'npm install'  // Install dependencies
                }
            }
        }

        stage('Update Dependencies') {
            steps {
                script {
                    echo "Updating dependencies..."
                    sh 'npm install eslint-webpack-plugin@latest --save-dev'  // Update specific dependency
                    sh 'npm update'  // Update all dependencies
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Building project..."
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying project..."
                    // Add your deployment commands here
                }
            }
        }
    }

    post {
        failure {
            echo "Build failed. Collecting logs..."
            // You can collect more logs or perform any other cleanup if required
            sh 'cat /var/lib/jenkins/.npm/_logs/*.log'  // Display npm logs in case of failure
        }
        always {
            echo "Cleaning up after pipeline..."
            // Any cleanup steps after pipeline runs
        }
    }
}
