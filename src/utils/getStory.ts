import executeQuery from "./executeQuery"

export default async function getStory(id: string) {
    const query = `
    query Story($id: ID) {
        story(by: {id: $id}) {
          content
          images
          tag
          id
          updatedAt
          createdAt
        }
      }
    `

    const data = await executeQuery(query, {id})

    return data.story
}