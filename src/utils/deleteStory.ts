import executeQuery from "./executeQuery";

const deleteStory = async (id: string) => {
    const query = `mutation StoryDelete($id: ID) {
        storyDelete(by: {id: $id}) {
          deletedId
        }
      }
    `
    const data = await executeQuery(query, { id })

    return data
}

export default deleteStory