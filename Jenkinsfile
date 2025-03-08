pipeline {
    agent any
      tools {
        nodejs 'nodeRecent' 
      }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'echo build'
            }
        }
        stage('Test') {
            steps {
                sh 'echo test'
            }      
        }

        stage('Deploy for production') {       
            steps {
                 sh 'echo deploy'
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