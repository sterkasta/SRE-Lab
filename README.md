# SRE-Lab

Let’s image that a new application is being developed and you are part of the SRE team where your task to take care of the continuous integration and continuous deployment pipeline as well as make the application ready for responding to a high demand.

## Design

I will desing a cloud solution based on AWS. The first decission would be to move to an IaaS or SaaS solution, depend on that we will use ec2 machines or EKS as our platform. I think for a better control of our environments would be better to move to an IaaS solution. In order of that we can deploy our cluster on an ec2 machines. We can automate our infraestructure deploys using an infraestructure as code tool. Terraform is fully integrated with AWS. 

Terraform on AWS Best Practices:
https://medium.com/xebia-engineering/best-practices-to-create-organize-terraform-code-for-aws-2f4162525a1a

We will deploy our k8s clusters in ec2 in order to admin our apps. 



![](img/Infra%20Diagram.png)


## Pipeline
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

