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

export const mutations = {
    REGISTER
}