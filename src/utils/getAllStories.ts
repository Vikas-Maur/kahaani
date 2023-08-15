import executeQuery from "./executeQuery"

const getAllStories = async (cursor: string | null | undefined) => {
  let query = `query StoryCollection {
    storyCollection(last: 26) {
      edges {
        node {
          content
          images
          tag
          id
          updatedAt
          createdAt
        }
        cursor
      }
      pageInfo {
        startCursor
        hasPreviousPage
      }
    }
  }`
  if (cursor) {
    query = `query StoryCollection($cursor: String) {
      storyCollection(last: 26, before: $cursor) {
        edges {
          node {
            content
            images
            tag
            id
            updatedAt
            createdAt
          }
          cursor
        }
        pageInfo {
          startCursor
          hasPreviousPage
        }
      }
    }`
  }

  let data;
  if (cursor) data = await executeQuery(query, { cursor })
  else data = await executeQuery(query)

  return { edges: data.storyCollection.edges, pageInfo: data.storyCollection.pageInfo }
}

export default getAllStories