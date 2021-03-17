# SRE-Lab

Let’s image that a new application is being developed and you are part of the SRE team where your task to take care of the continuous integration and continuous deployment pipeline as well as make the application ready for responding to a high demand.

## Design

We will desing a cloud solution based on AWS. The first decission would be to move to an IaaS or SaaS solution, depend on that we will use ec2 machines or EKS as our platform. I think for a better control of our environments would be better to move to an IaaS solution. In order of that we can deploy our cluster on an ec2 machines. We can automate our infraestructure deploys using an infraestructure as code tool. Terraform is fully integrated with AWS. 

Terraform on AWS Best Practices:
https://medium.com/xebia-engineering/best-practices-to-create-organize-terraform-code-for-aws-2f4162525a1a

We will deploy our k8s clusters in ec2 in order to admin our apps. We need to design our environments at the logic level. So we will define our cluster in order of they usability. We need to deploy inside our k8s:
+ Jenkins cluster to manage the CD/CI integration
+ Observability cluster to monitoring our platform
+ Apps cluster by usability (for example: frontal vs backend, ml/ia, etc)

K8s Best Practices:
https://www.stackrox.com/post/2019/09/12-kubernetes-configuration-best-practices/

We need an external container image registry to help us to deploy on K8s. For example: Harbor
https://aws.amazon.com/marketplace/pp/Bitnami-Harbor-Registry-Container-Solution/B07YWDQ9Q5

![](img/Infra%20Diagram.png)


## Pipeline

To automatize the update changes on our apps using our infra, we need to configure our code repository to trigger every release. So we need to create a hook on our code repository, for example github. 

https://nearsoft.com/blog/how-to-get-jenkins-to-execute-builds-automatically-with-github/#:~:text=The%20Github%20Integration%20plugin%20will,polling%20login%20you%20previously%20defined.

![](img/Webhook%20Config.jpeg)

Once we have our web hook configured, we need to create our pipeline to automatize the process. We can create differente stages in our automatization process in order to verified the code is it suitable to move to the next environment. We have defined the next stages:

+ Initializate
+ Build
+ Code Coverage
+ Regression Test
+ Security Code Scan
+ Container Vulnerabilities
+ Container Registry
+ Deployment

This stages could be processes developed for other teams in other to guarantiee the move of the app between environments. 

![](img/Jenkins%20Build.png)

To check this we implemented a small jenkins pipeline on node.js 

[Jenkinsfile](Setup/Jenkins/Jenkinsfile)

Ideally, if several teams work in similar tech staks, you can consider using heavy customizable tempaltes for pipelines, or creating Jenkins libraries and plugins, based on the DSL as example. 

![](img/pipeline.gif)

## Observability

You need tools to monitor your infraestructure in order to prevent issues. 

ELK Stack:

Instana: 
Will help you to monitor health and performance metrics (KPIs) to the overall state of the k8s environment
You need to install the host agent in k8s
https://www.instana.com/docs/setup_and_manage/host_agent/on/kubernetes/

Grafana: 
Will help you to see easily with dashboard of use from resource of cluster of Kubernetes
You need to install the grafana agent 
https://grafana.com/docs/grafana-cloud/quickstart/agent_k8s/

We need to monitor the performance of our clusters: 
+ State of containers from Cluster.
+ State of Pods from Cluster.
+ State of Jobs from Cluster.
+ Deployment and ReplicationController state of Cluster.
+ Nodes number and state of they
+ Network Activity by namespaces.
+ CPU use in the cluster and CPU use in the cluster by namespaces.
+ Ram memory use in the cluster and Ram memory use in the cluster by namespaces.

## Availability

K8s provides us tools to create an HA infraestructure in order to offer to our customer SLAs:
+ Creating a MultiMaster Cluster
+ Creating a Load Balancer to distribute the load between nodes
+ External etcd nodes 

https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/

! In order to improve the HA on K8S there is other products like Openshift that has implemented this labe using HA Proxy in order to facilite the maintance of the solution.


Akamaai: 
CDN providers minimize user access time for your service by caching static content across their points of presence (PoPs) worldwide. These PoPs consist of several edge servers providing cached content to users requesting static assets like images. If a requested asset is not found, the edge server pulls the asset, either from the origin server (i.e your server), or from nearby edge servers. This setup improves the UX for geographically distributed users as they see reduced latencies and packet loss.

https://blog.insightdatascience.com/how-to-build-your-own-cdn-with-kubernetes-5cab00d5c258

Helm: 

Helm is a tool that streamlines installing and managing Kubernetes applications. Think of it like apt/yum/homebrew for Kubernetes.

+ Helm renders your templates and communicates with the Kubernetes API
+ Helm runs on your laptop, CI/CD, or wherever you want it to run.
+ Charts are Helm packages that contain at least two things:
+ A description of the package (Chart.yaml)
+ One or more templates, which contain Kubernetes manifest files
+ Charts can be stored on disk, or fetched from remote chart repositories (like Debian or RedHat packages)

https://github.com/helm/helm


## Trade offs 

You need to know how many resources do you have in your team. This will help you to decide if you want an IaaS solution or SaaS solution. 
If you decice to choose an IaaS solution you will need differents teams to deploy de solution. 
You need to know how your infraestructura will grow in time to provision costs. 

