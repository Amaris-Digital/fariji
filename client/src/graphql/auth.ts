import { gql } from '@apollo/client'

const REGISTER = gql`
  mutation registerMutation($phone: String!, $dateOfBirth: ISO8601DateTime!, $password: String!) {
    register(phone: $phone, dateOfBirth: $dateOfBirth, password: $password) {
      status
      message
      body
    }
  }
`

const LOGIN = gql`
  mutation signIn($phone: String!, $password: String!) {
    signIn(input: { phone: $phone, password: $password }) {
      token
    }
  }
`

const UPLOAD_PROFILE_PHOTO = gql`
  mutation UploadProfilePhotoMutation($avatar: Upload!, $phone: String!) {
    uploadProfilePhoto(avatar: $avatar, phone: $phone) {
      status
      message
    }
  }
`

export const mutations = {
  REGISTER,
  LOGIN,
  UPLOAD_PROFILE_PHOTO,
}
