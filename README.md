# verinice.veo Documentation

This repository contains the end user documentation for verinice.veo, the open-source tool for managing information security.

## Installation

To install the dependencies, run:

```sh
npm install
```


## Run development server

```bash
npm run docs:dev 
```


## Build and Run with Docker

To build the Docker image, run:

```sh
./docker_build.sh
```

To run the Docker container, run:

```sh
./docker_run.sh
```

This will build the Docker image using the `Dockerfile` and run the container, exposing the documentation on port 5000.


### Dockerfile

The Dockerfile consists of two stages:

1. **Builder Stage**:
    - Uses the `alpine` image.
    - Builds the documentation using `npm run docs:build`.

2. **Release Stage**:
    - Uses the `nginx` image.
    - Adds a custom Nginx configuration to serve `index.html` as the entry point.
    - Sets the `startup.sh` script as the container's entry point used to start the Nginx server with a custom configuration file. In addition to some basic configuration and optimizations, the startup script defines location blocks to handle different types of requests, including serving the `index.html` file for all unmatched routes.
    - Exposes port 5000 to access the documentation.

## License

This project is licensed under the terms of the GNU Affero General Public License (AGPL) v3.0. For more details, see the `LICENSE.txt` file.

## Authors

For a list of contributors, see the `AUTHORS.txt` file.

## Notice

For trademark and other legal notices, see the `NOTICE.md` file.

