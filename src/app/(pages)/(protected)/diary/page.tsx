'use client'
import React, { useEffect, useState, ChangeEvent } from "react";
import Navbar from "@/components/Navbar";
import DiaryCard from "@/components/diary/DiaryCard";
import Link from "next/link";
import getAllStories from "@/utils/getAllStories";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams, useRouter } from "next/navigation";
import { TAGS } from "@/utils/variables";

const Diary: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const filter = searchParams?.get('tag') ||  null
    const tagBinding: any = {
        "VERY_SAD": '😭',
        "SAD": "😥",
        "NEUTRAL": "😶",
        "HAPPY": "😀",
        "VERY_HAPPY": "🤗"
    }
    const [cursor, setCursor] = useState<string | null>()
    const [stories, setStories] = useState<Array<any>>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    const fetchStories = async (cursor: string | null = null) => {
        const { edges, pageInfo } = await getAllStories(cursor)
        if (cursor) setStories((prev) => ([...prev, ...edges.reverse()]))
        else setStories(edges.reverse())
        setHasMore(pageInfo.hasPreviousPage)
        setCursor(pageInfo.startCursor)
    }

    useEffect(() => {
        fetchStories()
    }, [])

    const filterStories = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        if(e.target.value!=="ALL") router.replace(`/diary?tag=${e.target.value}`)
        else router.replace('/diary')
        return <></>
    }


    return (
        <section className="lg:mt-4 flex flex-col">
            <Navbar active="diary" />
            <div className="flex flex-col gap-4 justify-between items-center">
                <div className="flex gap-8 justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Your diary {filter != null && `(${tagBinding[filter]} moments)`}</h1>
                    <Link href="/diary/create" className="bg-mypink hover:bg-mypink/80 text-white font-bold p-3 rounded">Create New Story</Link>
                </div>
                <form className="flex flex-col lg:hidden w-full gap-2 justify-between mx-auto">
                    <label className="block w-full" htmlFor="filter">Filter Stories</label>
                    <select onChange={filterStories} className="block w-full bg-dark" name="filter" id="filter" value={filter || "ALL"}>
                        <option value="ALL">All</option>
                        {TAGS.map((value, index) => {
                            return <option key={index} value={value[0]}>{value[1]}</option>
                        })}
                    </select>
                </form>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap my-8 gap-4 lg:gap-10 relative">
                {stories.length===0 && <div className="absolute top-0 left-0 max-w-full max-h-[500px]"><img className="flex max-h-[500px] opacity-20" src="/empty.svg" alt="Empty Diary"/></div>}
                <InfiniteScroll
                    dataLength={stories.length}
                    next={() => fetchStories(cursor)}
                    hasMore={hasMore}
                    loader={<h4 className="flex-1 w-full text-center">Loading...</h4>}
                    className="flex flex-col md:flex-row flex-wrap my-8 gap-4 lg:gap-10"
                >
                    {stories.map((story: any, index: number) => {
                        return <DiaryCard key={index} id={story.node.id} date={story.node.createdAt} tag={story.node.tag} content={story.node.content} filter={filter} />
                    })}
                </InfiniteScroll>
            </div>
        </section>
    )
}

export default Diary