exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type googleSheetEventsRow implements Node @dontInfer {
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
      timestamp: String
      whatisthenameofyourevent: String
      whatisthedateofyourevent: String
      linktotheevent: String
      whereareyoulocated: String
    }
  `
  createTypes(typeDefs)
}
