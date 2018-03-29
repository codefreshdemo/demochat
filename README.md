
![Let's Chat Greylock](http://i.imgur.com/0a3l5VF.png)
Demo!
Use this tutorial to familiarize yourself with codefresh.yml file and codefresh functionality.

![Screenshot](http://i.imgur.com/C4uMD67.png)

###Let’s chat is self-hosted chat app for small teams or big

This tutorial will walk you through the process of adding the following :


* Build step - that will build docker image for your let’s chat app

* Push to registry step - that will push your image to docker hub

* Unit Test step - A freestyle step that runs the unit test of the demo chat after the build

* Composition step - This step will run a composition which use your chat image from the build step, docker image of curl
and check if your application is responsive. It will do so by printing "works" if a curl command to our app at port 5000 succeed.

So the first thing you need to do is :

##Fork our repo
![Doron & Oleg]
Enter the following link https://github.com/codefreshdemo/demochat and fork let’s chat app
![Screenshot](screenshots/Screen Shot 2016-09-27 at 8.01.32 PM.png)

* [Getting started with Docker](#docker)
* [Getting started with DockerCompose](#docker_compose)
* [Getting started with Codefresh YAML](#codefresh_yml)

<a name="docker"/>
#Getting started with Docker

##Add a repository
Now enter Codefresh and add your let’s chat app as a codefresh service.

press on ___Add Repository___

now add you forked demochat repo.
toggle to ___Add by URL___

![Screenshot](screenshots/codefresh_add_by_url.png)

enter the forked repo url

and choose the branch for your first build (in this case ```master```)


when you finish press ___next___.

![Screenshot](screenshots/codefresh_select_service_repo_by_url.png)

select the build method Dockerfile

![Screenshot](screenshots/codefresh_build_method.png)

enter the path of your docker file (in our case it's simply ```Dockerfile```)
and press ___next___

![Screenshot](screenshots/codefresh_dockerfile_build_method.png)

make sure you can see the preview of your dockerfile
and press ___create___

![Screenshot](screenshots/codefresh_preview_dockerfile.png)

pressing on ___build___  button will trigger a regular build

![Screenshot](screenshots/codefresh_build_dockerfile.png)

great , you  are running  your build for the first time !

![Screenshot](screenshots/codefresh_demochat_regular_build.png)

in order to see the list of you current services press on the ___services___ button

![Screenshot](screenshots/2016-09-29_1729.png)

and see your new service

![Screenshot](screenshots/codefresh_demochat_service.png)

<a name="docker_compose"/>
#Getting started with DockerCompose

Go to the tab "Compositions" and press on the button __ADD COMPOSITION__

![Screenshot](screenshots/codefresh_add_first_compose.png)

In the **Composition Name** text box, type a name for your composition and click __NEXT__

![Screenshot](screenshots/codefresh_name_compose.png)

Select Composition Starting Point. On this screen you can choose: __What type of composition would you like to create?__
Select the **File in repo** and click **NEXT**.

![Screenshot](screenshots/codefresh_compose_fileinrepo.png)

Enter the path https://github.com/codefreshdemo/demochat, choose the branch "master" and click **NEXT**.

![Screenshot](screenshots/codefresh_select_repos.png)

Enter the path of your docker-compose.yml file (in our case it's simply ```docker-compose-build.yml```) and press ___NEXT___

![Screenshot](screenshots/codefresh_locate_compose_file.png)

Then click on the **CREATE**.

![Screenshot](screenshots/codefresh_customize_compose.png)

Click on the button __BUILD IMAGES__

![Screenshot](screenshots/codefresh_configure_compose.png)

<a name="codefresh_yml"/>
#Getting started with Codefresh YAML

##Add a service
Now enter Codefresh and add your let’s chat app as a codefresh service.

press on ___Add Repository___

now add you forked demochat repo.
toggle to ___Add by URL___

![Screenshot](screenshots/codefresh_add_by_url.png)

enter the forked repo url

and choose the branch for your first build (in this case ```master```)


when you finish press ___next___.

![Screenshot](screenshots/codefresh_select_service_repo_by_url.png)

select the build method Codefresh.YML

![Screenshot](screenshots/codefresh_build_method.png)

enter the path of your codefresh.yml (in our case it's simply ```./codefresh.yml```)
and press ___NEXT___

![Screenshot](screenshots/codefresh_build_method_yml.png)

make sure you can see the preview of your dockerfile
and press ___CREATE___

![Screenshot](screenshots/codefresh_review_yml.png)

pressing on ___BUILD___  button will trigger a regular build

![Screenshot](screenshots/codefresh_build_codefresh_yml.png)

great , you  are running  your build for the first time !

![Screenshot](screenshots/codefresh_demochat_regular_build.png)

in order to see the list of you current services press on the ___services___ button

![Screenshot](screenshots/2016-09-29_1729.png)

and see your new service

![Screenshot](screenshots/codefresh_demochat_service.png)




