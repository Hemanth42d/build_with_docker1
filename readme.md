# Build Docker Image (Node js application)

In this repository I am going to build a docker image from a simple node js application which contains : </br>

- profile.ejs --> simple ejs file for updating user profile and used as rendering page
- userModel.js --> Creates a default user when connection is established and connected it to the docker container mongo
- server.js --> main file of the project

It helps me in building the concepts of basic devOps knowledge of 

- Developed a full-stack app (Node js, templates - ejs(Server side rendering),Database: MongoDB, Admin UI: mongo-express)
- Containerized the App
  - Created a Dockerfile for  Node.js app
  - Used official images for MongoDB and mongo-express
  - Linked them using docker-compose
- Pushed Images to AWS ECR
   - Tagged and pushed your custom Node.js app image to Amazon ECR
- Deployed on EC2
  - Launched an Ubuntu EC2 instance
  - Installed Docker + Docker Compose
  - Pulled images from ECR and used Docker Compose to start the multi-container app
