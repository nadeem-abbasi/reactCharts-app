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
3. Go to browser on url `http://localhost:<external port number>/

# Definition of Done

I have used mocked REST api by reading from a json file using axios library. For the state management, I have used redux/redux-thunk. For the UI, I have used material-ui to setup the structure of the app UI. I've used jest and enzyme to write a few tests for the app and moxios for integration test. I've also dockerized the app using docker.

I've tried to build a complete app in a short time following the standard industy practices. My `defition of done` is that the app can read from the API properly and shows the information on the UI in a simple manner with an engaging user experience. Based on the assumtion that app needs to be used by scientist I've tried to keep the UI very simple and informative. There are many ways/standards to complete a task and everyone has their own approach to solve a problem. I hope it meets your standards.
