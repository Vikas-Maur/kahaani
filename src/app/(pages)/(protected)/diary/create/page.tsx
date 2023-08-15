'use client'
import React from "react"
import CreateStoryForm from "@/components/diary/CreateStoryForm"
import { useRouter } from "next/navigation"

const CreateStoryPage: React.FC = () => {
    const router = useRouter()

    const goBack = () => {
        if(!confirm("All the changes would be lost. Confirm that you want to go back...")) return
        router.replace('/diary')
        return <></>
    }
    return (
        <section className="mt-4">
            <div className="flex items-center gap-3">
                <button onClick={goBack} className="hover:text-white" ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-circle"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg></button>
                <h1 className="text-3xl font-bold lg:text-5xl">Create New Story</h1>
            </div>
            <CreateStoryForm />
        </section>
    )
}

export default CreateStoryPage