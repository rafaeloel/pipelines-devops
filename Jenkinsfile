pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 5173:5173'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x ./jenkins/scripts/test.sh'            
                sh './jenkins/scripts/test.sh'
            }
        }

        stage('Deploy for production') {       
            steps {
                 sh 'echo deploy'
            }
        }

        stage('Serve React App') {
            steps {
                sh 'npx serve -s build -l 5173 &'
            }
        }

        stage('Deliver') { 
            steps {
                sh 'chmod -R +x ./jenkins/scripts'
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }     
    }
}