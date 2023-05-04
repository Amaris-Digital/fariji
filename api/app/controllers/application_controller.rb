# frozen_string_literal: true

# @!scope Main App controller
class ApplicationController < ActionController::API
  include ActionController::Cookies

  # test action
  def index
    render json: { message: 'Hello World!' }
  end
end
