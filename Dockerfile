FROM node:latest

RUN mkdir -p /src

WORKDIR /src

COPY package.json /src/

RUN npm install
RUN npm install -g mocha
RUN npm install -g istanbul
RUN npm install -g gulp

COPY . /src

#ENV DEBUG=*

CMD ["npm", "start"]
