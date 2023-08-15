'use client'
import React, { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import deleteStory from "@/utils/deleteStory"

export default function DeleteStoryPage({ params }: { params: { id: string } }) {

    const router = useRouter()

    useEffect(() => {
        (async () => {
            const toastId = toast.loading("Deleting the story...")
            try {
                const data = await deleteStory(params.id)
                toast.success("Successfully deleted the story.", { id: toastId })
                router.replace("/diary")
                return <></>
            } catch (error: any) {
                toast.error(error.message, { id: toastId })
            }
        })()
    }, [])



    return (
        <section className="mt-4">
            <h1 className="text-xl font-bold text-red-500">Deleting Story #{params.id}...</h1>
        </section>
    )
}
