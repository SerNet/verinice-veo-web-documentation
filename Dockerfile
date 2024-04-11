# syntax = docker/dockerfile:experimental
FROM node:21-alpine AS builder

# Install Git & Install Python for node-14
RUN apk update
RUN apk --no-cache add git python3 make g++

# Create app directory
WORKDIR /usr/src/app
# Copy package.json and lock file
COPY package.json package-lock.json ./
# Install packages
RUN npm -d ci
# Bundle app source
COPY . .

ARG CI_COMMIT_REF_NAME=master
ARG CI_COMMIT_SHORT_SHA=latest
ARG CI_JOB_ID=-1

RUN npm run docs:build


FROM nginx:1.25 AS release

COPY --from=builder /usr/src/app/.vitepress/dist /usr/src/app/dist

# Add custom config to serve the index.html as entrypoint if the server would otherwise return a 404
COPY  nginx.conf /etc/nginx/conf.d/custom.conf

COPY startup.sh /usr/src/app
RUN chmod +x /usr/src/app/startup.sh

EXPOSE 5000

CMD ["/usr/src/app/startup.sh"]
