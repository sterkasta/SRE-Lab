node(){
    stage("Initialize"){
        echo "Initialize"
        echo "checkout SCM"
    }
    stage("Build"){
        echo "build"
    }
    stage("Code Coverage"){
        echo "Code Coverage"
    }
    stage("Async triggers"){
        parallel("paralelo") {
        stage("Regression"){
            echo "Regression"
        }
        stage("Security Code Scan"){
            echo "Security Code Scan"
        }
        stage("Container Vulnerabilities"){
            echo "Container Vulnerabilities"
        } 
        }
    }
    stage("Container Registry"){
        echo "Container Registry"
    }
    stage("Deployment"){
        echo "Deployment"
    }
}