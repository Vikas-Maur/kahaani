import executeQuery from "./executeQuery"

const updateStory = async ({ images, tag, content, id }: { images: Array<string>, tag: string, content: string, id: string }) => {
  const query = `mutation StoryUpdate($by: StoryByInput!, $input: StoryUpdateInput!) {
    storyUpdate(by: $by, input: $input) {
      story {
        content
        images
        tag
        id
        updatedAt
        createdAt
      }
    }
  
  }
  
  `

  const data = await executeQuery(query, { by: { id }, input: { images, tag: tag.toUpperCase(), content } })

  return data

}

export default updateStory