# SRE-Lab

Let’s image that a new application is being developed and you are part of the SRE team where your task to take care of the continuous integration and continuous deployment pipeline as well as make the application ready for responding to a high demand.

## Design

I will desing a cloud solution based on AWS. The first decission would be to move to an IaaS or SaaS solution, depend on that we will use ec2 machines or EKS as our platform. I think for a better control of our environments would be better to move to an IaaS solution. In order of that we can deploy our cluster on an ec2 machines. We can automate our infraestructure deploys using an infraestructure as code tool. Terraform is fully integrated with AWS. 

Terraform on AWS Best Practices:
https://medium.com/xebia-engineering/best-practices-to-create-organize-terraform-code-for-aws-2f4162525a1a

I will deploy our k8s clusters in ec2 in order to admin our apps. We need to design our environments at the logic level. So we will define our cluster in order of they usability. We need to deploy inside our k8s:
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



![](img/Jenkins%20Build.png)

Ideally, if several teams work in similar tech staks, you can consider using heavy customizable tempaltes for pipelines, or creating Jenkins libraries and plugins, based on the DSL as example. 

![](img/pipeline.gif)

## Observability
Infra


## Availability

How to configure K8s + CDN (Akamai), load balancers 

helm

kustomize

ejemplo kubernetes config 

configmap by environment
ingress deployment service & HPA


Personal experience with Openshift, solving proxy and traffic limitations of K8s 



## Trade offs 

A lot of hands needed

