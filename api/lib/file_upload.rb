module UploadImage
  def self.call(input, user)
    file = input[:avatar]

    blob = ActiveStorage::Blob.create_and_upload!(
      io: file,
      filename: file.original_filename,
      content_type: file.content_type
    )

    if blob.persisted?
      user.avatar.attach(blob)
      return { success: true }
    else
      return { success: false }
    end
  end
end
