# Install movie-test-api

GraphQl API for gastromatic movie test

## Setup Without Docker

Have a mongodb running at the usual `localhost:27017`. Then:

```
npm ci
npm run start
```

Test running server by accessing `http://localhost:3000/`

## Setup with Docker

Docker and docker-compose need to be installed. To start the services run

```
docker-compose build
docker-compose up
```

Test running server by accessing `http://localhost:3000/`

# Task Description

Your main task is to develop an online movie library on which users can share their favorite movies. The design of the web app should be simple but responsive so users can view the website on devices with different screen sizes.

## Main features:
* Sign up/ login page for user management
* Add, delete and edit movies
* Users should be able to rate movies with comments (1-5 stars). A user should only be able rate a movie once.
* Main Dashboard to show all movies which are stored in the database with following information:
  *  Name
  *  Release date
  *  Duration
  *  Actors
  *  Average user rating (x/5 stars)

  All columns should be sortable and the latest sortation of a user should be stored in a cookie so that it persists over log in sessions 
* Logged in users should get live feedback if another user performs an action regarding a movie.

## Tech Stack
Use this repo as a teamplate for the API of the movie application which you can extend based on the task described above. Your main task will be to develop a client application which uses this API.

* MongoDb
* Node.js (ExpressJs)
* Apollo Server (GraphQL)
* ReactJs (Appollo client or other GraphQL client)

## Important To-Dos:
* Please share the code via github (other repository hosting service) or zip file. You can copy or fork this repo to extend the server functionality.
* The project should be easy to build and execute. The steps to run the projects should be explained in a read me file.
* All needed libraries should be installed over package managers (npm or yarn).
* Please write unit tests for two functions of your choice. Use Jest as a testing framework.

## Nice-to-have:
* Docker setup for client project
* Webpack for bundling your modules and building the project

If you are not able to implement a feature named in the task description, please explain it in a short text so we can understand why. In case you need further information about the task or you have any question about the technologies you should use feel free to ask.



