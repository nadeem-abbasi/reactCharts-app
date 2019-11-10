# Running the app

The data.json file lies in the public directory.

App can be run using development environment using the following steps:

1. In the reactCharts-app directory run
   `npm install`
2. When the installation is complete app can be started using
   `npm start`
3. Go to browser on url `http://localhost:3000/`

App can also be run using docker using the following commands.

1. In the reactCharts-app directory, to build the image run
   `docker build . -t <application Image Name>`
2. When the build is complete, to run the docker image
   `docker run -d -p <external port number>:5000 <reactCharts docker image name>
3. Go to browser on url `http://localhost: <external port number> /
