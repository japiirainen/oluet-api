import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
   definition(t) {
      t.crud.createOneJuoma(), t.crud.updateOneJuoma()
   },
})
