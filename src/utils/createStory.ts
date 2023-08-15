import executeQuery from "./executeQuery"

const createStory = async ({ images, tag, content }: { images: Array<string>, tag: string, content: string }) => {
  const query = `mutation StoryCreate($input: StoryCreateInput!) {
        storyCreate(input: $input) {
          story {
            content
            images
            tag
            id
            updatedAt
            createdAt
          }
        }
      }`

  const data = await executeQuery(query, { input: { content, tag: tag.toUpperCase(), images } })

  return data

}

export default createStory