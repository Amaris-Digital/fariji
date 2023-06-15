import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

const serverURL = import.meta.env.VITE_GRAPHQL_SERVER_URL
console.log('serverURL', serverURL)
const link = from([new HttpLink({ uri: serverURL })])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

const storeToken = (token: string): void => {
  localStorage.setItem('token', token)
}

const getToken = (): string | null => {
  return localStorage.getItem('token')
}

export { client, storeToken, getToken }
