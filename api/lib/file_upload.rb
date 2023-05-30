# frozen_string_literal: true

# This is a reusable module that handles file uploads
module UploadImage
  def self.call(input, user)
    file = input[:avatar]

    blob = ActiveStorage::Blob.create_and_upload!(
      io: file,
      filename: file.original_filename,
      content_type: file.content_type
    )

    return { success: false } unless blob.persisted?

    user.avatar.attach(blob)
    { success: true }
  end
end
