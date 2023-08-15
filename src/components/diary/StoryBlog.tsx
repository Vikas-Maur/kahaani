'use client'
import React, { useState, useEffect, useRef } from "react"
import getStory from "@/utils/getStory"
import Link from "next/link"
import { useRouter } from 'next/navigation'

type Props = {
    id: string
}

const StoryBlog: React.FC<Props> = ({ id }) => {
    const articleRef: any = useRef()
    const router = useRouter()
    const [story, setStory] = useState<any>({
        createdAt: null,
        content: "",
        tag: "",
        images: [],
    })

    const deletePost = () => {
        if (!confirm("Confirm to delete the story?")) return
        router.replace(`/diary/delete/${id}`)
    }

    useEffect(() => {
        (async () => {
            const story = await getStory(id)
            console.log('storyBlog: ', story);

            setStory({
                ...story,
                createdAt: new Date(story.createdAt).toLocaleString(),
                tag: story.tag.toLowerCase()
            })
        })()
    }, [id])

    useEffect(() => {
        articleRef.current.innerText = story.content
    }, [story])

    return (
        <>
            <div className="flex items-center gap-3">
                <Link className="hover:text-white" href="/diary"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-circle"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg></Link>
                <h1 className="text-4xl font-bold">Your Story</h1>
            </div>
            <div className="flex justify-between items-center max-w-xl text-sm my-5">
                <p>Created on <span className="text-gray-300">{story.createdAt}</span></p>
                <p className="px-3 py-1 rounded-full bg-darkest">#{story.tag}</p>
            </div>
            <article ref={articleRef} id="story" className="prose prose-invert text-gray-400 my-3">
            </article>
            {story.images.length === 0 ? "" : <div className="mt-16">
                <h2 className="text-2xl font-bold">Your Moments</h2>
                <div className="flex flex-wrap mt-3 gap-10">
                    {story.images.map((image: string, index: number) => {
                        return <div key={index} className="max-w-lg max-h-full"><img src={image} alt={image} /></div>

                    })}
                </div>
            </div>}

            <div className="flex flex-col gap-5 mt-16 mb-16">
                <Link className="py-3 rounded max-w-xl text-center font-bold border border-myyellow hover:bg-myyellow hover:text-white transition" href={`/diary/update/${id}`}>Edit Story</Link>
                <button onClick={deletePost} className="py-3 rounded max-w-xl text-center font-bold border border-red-500 hover:bg-red-500 hover:text-white transition">Delete Story</button>
            </div>
        </>
    )
}

export default StoryBlog