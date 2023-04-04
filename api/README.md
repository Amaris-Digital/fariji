# Fariji API
This API provides powers our application, [Fariji](). The API is built using Ruby on Rails.

## Technologies Used
This application has been built with the following tools:

![ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)



- **Ruby `v3.0.2`**
- **rails `v7.0.4`**
- **activeRecord `v7.0.4`**
- **rake `v13.0.6`**
- **rerun `v0.14`**
- **pg `v1.4.6`**
- **ERB `v4.0`**
- **require_all ` 3.0`**
- **faker`v3.0`**
- **rspec `v3.12`**
- **sqlite3 `v3.0`**


## Project Setup
You can set up this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/Amaris-Digital/fariji.git
   ```
2. Navigate to the `api` folder
    ```{shell}
   cd api
   ```
3. Ensure the ruby gems are set up in your machine
    ```{shell}
   bundle install
   ```
4. Perform any pending database migrations
   ```{shell}
   rails db:migrate
   ```
5. Run the application
    ```{shell}
    rails server
    ```
6. Open the application from your browser
    ```
   http://localhost:3000
   ```





## Database Setup
Our application uses two main types of databases:

- **PostgreSQL** - Used in all our `development` and `production` environments.
- **SQLite3** - Used when running our tests.

The following section illustrates how to set up PostgreSQL on Debian based Linux distros `Ubuntu, Parrot, Kali Linux etc.`<br/>
You can find alternate installation instructions for a different operating system [here](https://www.postgresql.org/download/).

### Step 1 :- Installing PostgreSQL

Postgres is available from the default repositories of all Debian distributions. You can use `apt` for installation.

- Install Postgres
```
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```

- Ensure that the server is running using the systemctl start command:
```{shell}
$ sudo systemctl start postgresql.service
```

### Step 2 :- Using PostgreSQL Roles and Databases

- Switch over to the postgres account on your server by typing:
```{shell}
$ sudo -i -u postgres
```
- Access the Postgres prompt immediately by typing:
```{shell}
$ psql
```
- Exit out of the PostgreSQL prompt by typing:
```{shell}
$ \q
```

### Step 3 (`optional`) :- Setting up a custom user role on Postgres
Since the `postgres` user is the default user upon installation, you can set up a new user to access the db with the application.

- Create a new user, make sure you replace `$USER` with the name of the user you want:
```{shell}
$ sudo -u postgres createuser --superuser $USER
```


## Application

### Folder Structure


    .
    ├── ...
    ├── api                   
    │   ├── app              
    │   ├── config            
    │   ├── db            
    │   ├── spec          
    │   └── ...                 
    └── ...



### MODELS
This section will describe the schema definitions for our database.


### ROUTES

- This section describes all the API endpoints including their expected request and response objects.


1. `/test` - sample endpoint.
