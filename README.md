# Fariji

![GitHub issues](https://img.shields.io/github/issues/Amaris-Digital/fariji?color=blue)
![GitHub contributors](https://img.shields.io/github/contributors/Amaris-Digital/fariji?color=green)
![GitHub repo size](https://img.shields.io/github/repo-size/Amaris-Digital/fariji?color=purple)

## Prerequisites

In order to use this repository, you will need to have the following setup in your computer.

![node:v0.9.0](https://img.shields.io/badge/node-v0.9.0-blue.svg)
![npm:v8.15.0](https://img.shields.io/badge/npm-v8.15.0-blueviolet.svg)
![ruby:3.0.2](https://img.shields.io/badge/ruby-3.0.2-yellow.svg)

- `node v0.9.0+`
- `npm 8.15.0+`
- `ruby 3.0.2`

## Setup Instructions

This section will guide you through setting up and running this repository on your local machine.

### Project

- Clone the repository
  ```
  git clone git@github.com:Amaris-Digital/fariji.git
  ```
- Navigate to the project folder
  ```
  cd fariji
  ```
- To interact with the front-end part of the application, navigate to the `client` folder
  ```
  cd client
  ```
- To interact with the back-end part of the application, navigate to the `api` folder
  ```
  cd api
  ```

### Environment Variables

To use the environment variables, create three environment files: `.env`, `.env.development` and `.env.production`.

Use the following criteria to set your environment variables:

- `.env` - Common variables that are not specific to any environment.
- `.env.test` - Variables that are only specific to `test` environments.
- `.env.production` - Variables that are only specific to production environment.

```{shell}
# DOCKER POSTRESQL DATABASE
DB_USER='your database username'
DB_PASSWORD='your database password'
DB_NAME='database_name'



# SENTRY
SENTRY_DNS=8.8.8.8


NB:

- Ensure you use the prefix `REACT_APP_` to store all the variables that are needed in the React Application. Example: `REACT_APP_NAME=janedoe`
- **DO NOT** commit any of the environment files to version control.

### Docker

This application is built with Docker, you will need to have the following installed in order to use it:

- `Makefile` - Use the link below to install https://makefiletutorial.com/.
- `Docker` - https://www.docker.com/.

make sure you are in the root directory when running make commands

### General

- Build Docker container and start services.
   ```
   make docker-build
   ```
- Build Docker and start services  in test environment
   ```
   make docker-build-test
   ```
- Show logs from container processes.
   ```
   make show-logs
   ```
- Start container.
   ```
   make start
   ```
- reset containers
   ```
   make reset
   ```
- Pruning system images
   ```
   make prune
   ```

### Server commands

- Build Docker container and start service.
   ```
   make api-gem-setup
   ```
- creating the database
   ```
   make api-db-create
   ```
- Making database migration
   ```
   make api-db-migrate
   ```
- Running backend linters tests
   ```
   make api-lint-fix
   ```
- Running api tests
   ```
   make api-test
   ```
- Starting the server
    ```
    make api-start
    ```

### Client

- Installing frontend dependancies
    ```
    make client-build
    ```
- Installing npm packages in the client
    ```
    make client-npm-setup
    ```
- Starting the client
    ```
    make client-start
    ```
- Client eslint checks
    ```
    make client-lint-check
    ```
- Client eslint autofix
    ```
    make client-lint-fix
    ```
- Client tests
    ```
    make client-test
    ```

- If you are using the Docker environment, you do not need to perform the following tasks:
     -Gem setup
     -NPM setup
     -Starting the backend server
     -Starting the frontend server
   These tasks are automatically done when the container is built using the 'make docker-build' command.

- Please note that all tests must be run in the test Docker environment to avoid corrupting your local development database.
- All client sided routes are rendered from root, `/`. Example `http://localhost:5173/admin` - Admin React Page
- All API endpoints are rendered from `/api/`. Example `http://localhost:3000/api/admin` - Admin endpoint
    
    **NB: All requests are listening from port `5173`.**

## Technologies Used

This application has been built with these technologies:

- Ruby `v3.0.2`
- Ruby on Rails `v7.0.4`
- RSpec `v3.1.2`
- React `v18.0`
- Typescript `v4.9.5`
- Jest `v29.5.0`
- Firebase `v9.17.0`
- nginx
- Docker
- GitHub Actions
- GitHub Projects

## Authors

- [Ian Okumu](https://github.com/otsembo)
- [Naomi Rono](https://github.com/naomirono)
- [Kimutai Kiprotich](https://github.com/kimutai01)
- [Michael Munavu](https://github.com/MICHAELMUNAVU83)
- [Awino Mackrine](https://github.com/mackrineawino)
- [Timothy Kipngetich Kiyeng](https://github.com/timothykiyeng)
- [Enid](https://github.com/MissDine)
- [Cynthia Chelangat](https://github.com/chelahcynthia)
- [Tosh](https://github.com/Muriithi-Gitonga)
- [Emmanuel Kariithi](https://github.com/emmanuelkaringi)

## Contribution Guide

In order to contribute to this repository, you need to follow these steps:

- Create a new branch with your name and the feature you are working on. Example: `janedoe/reset-password`

```git
git branch name/feature
```

- Checkout to your branch in order to work on a feature.

```git
git checkout name/feature
```

- Once you have completed your work on the feature, create a commit with a comprehensive message. Example:

```git
git commit -m "Login: added JWT token in header"
```

- Push the changes to the remote repository

```git
git push -u origin name/feature
```

- Ensure you create three environment files: `.env`, `.env.production` and `.env.test`.
  **Ensure you add any necessary variables in the appropriate file**. Example:

```
MONGO_DB_URI='random env here'
## DO NOT commit your .env files to version control
```

- Once your code is in the remote branch, create a pull request to the `development` branch.
- Each pull request will require at least 1 peer code review approval for the merge to be completed.
- Hurray, you have successfully contributed.

## License

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
MIT License

Copyright (c) 2023 Amaris Solutions Group

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Copyright (c) 2023 **Amaris Solutions Group**
