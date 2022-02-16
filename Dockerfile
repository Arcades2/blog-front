FROM node:16

WORKDIR /cache

COPY package.json yarn.lock* ./
RUN yarn install

WORKDIR /app