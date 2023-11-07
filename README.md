# Install movie-test-api

GraphQl API for gastromatic movie test

_Instructions are written for linux operating systems in mind, the Docker setup might not work properly on windows_

# Develop

## Prerequisites

- MongoDB running on localhost:27017
- NodeJS (version ~18)

## Start backend

```
npm i
npm run start
```

Test running server by accessing `http://localhost:3000/`

## Start frontend

```
cd frontend
npm i
npm run start
```

The browser will open the frontend located at1: `http://localhost:3001/`

# Start backend with docker

Not suited for development, on every change the docker image needs to be rebuild.

## Prerequisites

- Install Docker
- Install docker-compose

## Start

```
docker-compose build
docker-compose up
```

Test running server by accessing `http://localhost:3000/`
