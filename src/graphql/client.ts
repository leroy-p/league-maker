import { GraphQLClient } from 'graphql-request'
import { getSdk } from './schema'

const client = new GraphQLClient("http://0.0.0.0:3000/graphql")

export const graphqlClient = getSdk(client)