'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

type Props = {
    content: string,
    date: string,
    tag: string,
    id: string,
    filter: string | null
}

const DiaryCard: React.FC<Props> = ({ content, date, tag, id, filter }) => {
    const router = useRouter()
    const d = new Date(date).toDateString()
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const hideMenu = () => setMenuOpen(false)
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const deleteStory = () => {
        if (!confirm("Confirm that you want to delete the story!")) return
        router.replace(`/diary/delete/${id}`)
        return <></>
    }

    if (!!filter && filter != "ALL" && filter.toLowerCase() != tag.toLowerCase()) {
        return <></>
    }

    return (
        <div className="relative" onMouseLeave={hideMenu}>
            <Link href={`/diary/story/${id}`}>
                <div className="bg-dark flex flex-col justify-between gap-8 w-full lg:w-[400px] max-w-[450px] h-[200px] max-h-[200px] hover:shadow-xl transition-all cursor-pointer rounded-lg overflow-clip">
                    <p className="p-3 text-start h-full">{content.slice(0, 100)}</p>
                    <div className="p-3 w-full bg-darkest flex justify-between items-center gap-8">
                        <p>Created on {d}</p>
                        <p className="text-sm bg-dark px-3 py-2 rounded-full">#{tag.toLowerCase()}</p>
                    </div>
                </div>
            </Link>
            <div className="absolute top-0 right-0 -translate-x-3 lg:-translate-x-2 translate-y-2 z-10">
                <button onClick={toggleMenu} className="rounded px-2 py-1 bg-darkest hover:bg-darkest/50 block ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </button>
                {menuOpen && <ul className="bg-darker flex flex-col rounded shadow mt-1">
                    <Link className="hover:bg-darkest px-8 py-1.5" href={`/diary/update/${id}`}><li>Update</li></Link>
                    <button onClick={deleteStory} className="hover:bg-darkest px-8 py-1.5"><li>Delete</li></button>
                </ul>}
            </div>
        </div>
    )
}

export default DiaryCard