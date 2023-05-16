# @API
## Install Gems
api-gem-setup:
	cd api && bundle install

## DB Create
api-db-create:
	docker compose run api rails db:create

## DB Migration
api-db-migrate:
	docker compose run api rails db:migrate

## RSpec tests
api-test:
	docker compose run api rspec spec/ --format documentation

## Rubocop linter (check)
api-lint-check:
	docker compose run api rake lint:check

## Rubocop linter (auto-fix in safe-mode)
api-lint-fix:
	docker compose run api rake lint:fix

## Start Rails server
api-start:
	cd api && rails s -p 9292

# @CLIENT
## Build
client-build:
	cd client && npm ci && npm run build

## Start
client-start:
	cd client && npm run dev

## Install npm packages
client-npm-setup:
	cd client && npm install

## ESLint check
client-lint-check:
	cd client && npm run lint

## ESLint auto-fix
client-lint-fix:
	cd client && npm run lint:fix

## NPM tests
client-test:
	cd client && npm run test


# @DOCKER
## Build Docker images
docker-build:
	docker compose up --build -d --remove-orphans

## Build test Docker images
docker-build-test:
	docker compose -f docker-compose.test.yml up --build -d --remove-orphans

##  Start Docker environment
start:
	docker compose up

## Stop Docker environment
stop:
	docker compose stop

## Display logs
show-logs:
	docker compose  logs

## Remove Docker environment
clean:
	docker compose down

## Reset docker images and volumes
reset:
	docker compose down -v --rmi all

## Prune system images
prune:
	docker system prune --all

