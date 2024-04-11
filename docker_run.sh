#!/bin/bash

docker run -d \
-p 5000:5000 \
--name veowebdocs \
--add-host=host.docker.internal:host-gateway \
--network=host \
sernet/veowebdocs