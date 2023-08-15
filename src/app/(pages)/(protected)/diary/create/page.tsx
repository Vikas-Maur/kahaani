'use client'
import React from "react"
import CreateStoryForm from "@/components/diary/CreateStoryForm"

const CreateStoryPage: React.FC = () => {
    return (
        <section className="mt-4">
            <h1 className="text-3xl font-bold lg:text-5xl">Create New Story</h1>
            <CreateStoryForm />
        </section>
    )
}

export default CreateStoryPage