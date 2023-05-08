#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails db:drop RAILS_ENV=staging
bundle exec rails db:create RAILS_ENV=staging
bundle exec rails db:migrate RAILS_ENV=staging