FROM node:13.12
WORKDIR /usr/src/app

COPY tsconfig.json package.json package-lock.json ./
COPY src ./src

RUN npm ci

ENTRYPOINT ["npm", "run", "start", "--"]