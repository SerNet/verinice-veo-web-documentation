# syntax = docker/dockerfile:experimental@sha256:600e5c62eedff338b3f7a0850beb7c05866e0ef27b2d2e8c02aa468e78496ff5
FROM node:26-alpine@sha256:0b36e8c136b94cd4fcf02188228e76c31ad5872eef3fec8cbd2eee500cfd9e80 AS builder

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


FROM nginx:1.31@sha256:abe47724e466aeab9a345d8e46a221c2fa8953c7848bb4a3bd9976a7199f8cf2 AS release

COPY --from=builder /usr/src/app/docs/.vitepress/dist /usr/src/app/dist

RUN mkdir -p /var/cache/nginx/client_temp && chown -R 0 /var/cache/nginx && chmod -R g+rwX /var/cache/nginx

# Add custom config to serve the index.html as entrypoint if the server would otherwise return a 404
COPY  nginx.conf /etc/nginx/conf.d/custom.conf

COPY startup.sh /usr/src/app
RUN chmod +x /usr/src/app/startup.sh

EXPOSE 5000

CMD ["/usr/src/app/startup.sh"]
