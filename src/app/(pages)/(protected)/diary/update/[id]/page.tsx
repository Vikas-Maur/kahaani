'use client'
import UpdateStoryForm from "@/components/diary/UpdateStoryForm"

export default function UpdatePage({ params }: { params: { id: string } }) {
    return (
        <section className="mt-4">
            <h1 className="text-3xl font-bold lg:text-5xl">Update The Story</h1>
            <UpdateStoryForm id={params.id} />
        </section>
    )
}
