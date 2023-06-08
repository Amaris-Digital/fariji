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

export const mutations = {
    REGISTER, LOGIN
}