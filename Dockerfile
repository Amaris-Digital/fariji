FROM ruby:slim

LABEL Name=fariji Version=0.0.1

EXPOSE 3000

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . /app

CMD ["ruby", "fariji.rb"]
