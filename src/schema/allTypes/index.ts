import { decorateType } from '@nexus/schema'
import { GraphQLDate } from 'graphql-scalars'

export const GQLDate = decorateType(GraphQLDate, {
   rootTyping: 'Date',
   asNexusMethod: 'date',
})

export * from './Price'
export * from './Juoma'
export * from './Query'
export * from './Mutation'
