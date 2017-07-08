FROM node:8-alpine AS base
COPY package.json ./
RUN npm install
COPY . .
RUN pwd
RUN rm -rf /tmp/*
