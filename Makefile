# @API
## Install Gems
api-gem-setup:
	cd api && bundle install

## DB Migration
api-db-migrate:
	cd api && rails db:migrate

## RSpec tests
api-test:
	cd api && rspec spec/

## Rubocop linter (check)
api-lint-check:
	cd api && rake lint:check

## Rubocop linter (auto-fix in safe-mode)
api-lint-fix:
	cd api && rake lint:fix

# @CLIENT
## Build
client-build:
	cd client && npm ci && npm run build

## Install npm packages
client-npm-setup:
	cd client && npm install

## ESLint check
client-lint-check:
	cd client && npm run lint

## NPM tests
client-test:
	cd client && npm run test


# @DOCKER
# Build Docker images
docker-build:
	docker compose up --build -d --remove-orphans

#  Start Docker environment
start:
	docker compose up

# Stop Docker environment
stop:
	docker compose stop

show-logs:
	docker compose  logs