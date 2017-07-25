
#
# ---- Base Node ----
#
FROM alpine:3.5 AS base

# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/demochat
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# install yarn
RUN npm config set depth 0 && npm install --global yarn && npm cache clean
# copy project file and yarn lock
COPY package.json .
COPY yarn.lock .

#
# ---- Dependencies ----
#
FROM base AS dependencies

# install compilers for node_gyp
RUN apk add --no-cache python make g++ krb5-dev

# install node packages
RUN yarn config set depth 0
RUN yarn install --ignore-engines --production
# copy production node_modules aside
RUN cp -R node_modules /prod_node_modules
# install ALL node_modules
RUN yarn install --ignore-engines

#
# ---- Test ----
#
FROM dependencies AS test
COPY . .
# run eslinter
RUN yarn lint
# scan code for security violations
RUN yarn scan
# run mocha tests
RUN yarn test

#
# ---- Release ----
#
FROM base AS release

# copy production node_modules
COPY --from=dependencies /prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 5000
CMD yarn start

