# frozen_string_literal: true

# Main mailing controller
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
