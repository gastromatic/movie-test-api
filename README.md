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