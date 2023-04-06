# frozen_string_literal: true

class ApplicationController < ActionController::API
    # test action
    def index
        render json: { message: 'Hello World!' }
    end
end
