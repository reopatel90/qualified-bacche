pipeline {
    agent any

    environment {
        APP_DIR = '/var/www/my-node-app' // Directory where the app will be deployed
        SERVER_USER = 'www-data'        // User running Apache2
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh '''
                    rm -rf node_modules
                    npm install --force
                    '''
                }
            }
        }

        stage('Build Application') {
            steps {
                script {
                    echo 'Building the application...'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    echo 'Deploying application to Apache2...'
                    sh '''
                    sudo rm -rf $APP_DIR/*
                    sudo mkdir -p $APP_DIR
                    sudo cp -r ./* $APP_DIR/
                    sudo chown -R $SERVER_USER:$SERVER_USER $APP_DIR
                    '''
                }
            }
        }

        stage('Restart Apache') {
            steps {
                script {
                    echo 'Restarting Apache2...'
                    sh 'sudo systemctl restart apache2'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up temporary resources...'
        }
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
