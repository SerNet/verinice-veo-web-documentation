# syntax = docker/dockerfile:experimental@sha256:600e5c62eedff338b3f7a0850beb7c05866e0ef27b2d2e8c02aa468e78496ff5
FROM node:26-alpine@sha256:6f08a523443ddedf52941874c203475b0ad503e859ad70cb26ab8be9a517dbd5 AS builder

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


FROM nginx:1.31@sha256:600f7cd45e27aa13e9304c834ab7c1b0ff39df85ee1dcc5087955455d77bc83b AS release

COPY --from=builder /usr/src/app/docs/.vitepress/dist /usr/src/app/dist

RUN mkdir -p /var/cache/nginx/client_temp && chown -R 0 /var/cache/nginx && chmod -R g+rwX /var/cache/nginx

# Add custom config to serve the index.html as entrypoint if the server would otherwise return a 404
COPY  nginx.conf /etc/nginx/conf.d/custom.conf

COPY startup.sh /usr/src/app
RUN chmod +x /usr/src/app/startup.sh

EXPOSE 5000

CMD ["/usr/src/app/startup.sh"]
