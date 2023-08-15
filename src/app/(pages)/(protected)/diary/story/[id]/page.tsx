"use client"
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import StoryBlog from "@/components/diary/StoryBlog"

export default function StoryPage({ params }: { params: { id: string } }) {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <section className="mt-4">
            <Navbar />
            <React.Suspense fallback={"loading..."}>
                <StoryBlog id={params.id} />
            </React.Suspense>
        </section>
    )
}
