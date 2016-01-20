FROM node:0.10-slim


COPY ./package.json /src/package.json
RUN cd /src && npm install
COPY  ./ /src
RUN npm install -g mocha
RUN npm install -g istanbul
RUN npm install -g gulp

WORKDIR /src
#ENV DEBUG=*

EXPOSE 8080 5222

CMD ["npm", "start"]
