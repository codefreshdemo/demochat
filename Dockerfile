FROM alpine:3.5

# install node
RUN apk add --no-cache nodejs tini

# set working directory
WORKDIR /root/demochat

# copy project file
COPY package.json .

# set NODE_ENV 
ENV NODE_ENV production

# install node packages
RUN apk add --no-cache --virtual .build-dep python make g++ krb5-dev && \
    npm set progress=false && \
    npm config set depth 0 && \
    npm install && \
    npm cache clean && \
    apk del .build-dep && \
    rm -rf /tmp/*

# copy app files
COPY . .

# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

#application server
EXPOSE 5000

CMD npm run start
