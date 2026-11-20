# syntax = docker/dockerfile:experimental@sha256:600e5c62eedff338b3f7a0850beb7c05866e0ef27b2d2e8c02aa468e78496ff5
FROM node:26.13.1-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS builder

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


FROM nginx:1.31.9@sha256:84f7876d21d154885f99554d7ae325d8c2213f9169726ea7ab60642f2573a787 AS release

COPY --from=builder /usr/src/app/docs/.vitepress/dist /usr/src/app/dist

RUN mkdir -p /var/cache/nginx/client_temp && chown -R 0 /var/cache/nginx && chmod -R g+rwX /var/cache/nginx

# Add custom config to serve the index.html as entrypoint if the server would otherwise return a 404
COPY  nginx.conf /etc/nginx/conf.d/custom.conf

COPY startup.sh /usr/src/app
RUN chmod +x /usr/src/app/startup.sh

EXPOSE 5000

CMD ["/usr/src/app/startup.sh"]
