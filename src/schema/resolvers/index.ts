export const resolvers = {
   Query: {
      beer: (): { hinta: number } => ({
         hinta: 100,
      }),
   },
}
