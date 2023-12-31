'use client'
import getStory from "@/utils/getStory"
import updateStory from "@/utils/updateStory"
import React, { FormEvent, useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { TAGS } from "@/utils/variables"
import { CldUploadButton  } from 'next-cloudinary';


type Props = {
    id: string
}

const UpdateStoryForm: React.FC<Props> = ({ id }) => {
    const router = useRouter()
    const [formData, setFormData] = useState<{ content: string, tag: string, images: Array<string> }>({
        content: "",
        tag: "NEUTRAL",
        images: []
    })

    const imageUploaded = (result: any, widget: any) => {
        setFormData({ ...formData, images: [...formData.images, result.info.secure_url] })
        widget.close()
    }

    const removeImage = (index: number) => {
        setFormData({ ...formData, images: [...formData.images.slice(0, index), ...formData.images.slice(index + 1)] })
    }

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const toastId = toast.loading("Updating the story...")
        try {
            const resp = await updateStory({ ...formData, id })
            toast.success("Successfully updated the story!", { id: toastId })
            router.replace(`/diary/story/${id}`)
            return <></>
        } catch (error: any) {
            toast.error(error.message, { id: toastId })
        }
    }

    useEffect(() => {
        (async () => {
            const story = await getStory(id)
            setFormData({
                content: story.content,
                tag: story.tag,
                images: story.images
            })
        })()
    }, [id])


    return (
        <form action="#" method="POST" onSubmit={submitForm} className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col gap-2">
                <label className="block" htmlFor="story">Edit your story</label>
                <textarea required name="content" id="story" className="rounded bg-dark block min-h-[500px]" value={formData.content} onChange={(e) => { setFormData((prev) => ({ ...prev, content: e.target.value })) }} placeholder="Write the story..." />
            </div>
            <div className="flex flex-col gap-2 ">
                <label className="block" htmlFor="tag">How was your day?</label>
                <select className="bg-dark" required name="tag" id="tag" value={formData.tag} onChange={(e) => { setFormData((prev) => ({ ...prev, tag: e.target.value })) }} >
                    {TAGS.map((value, i) => {
                        return <option key={i} value={value[0]}>{value[1]}</option>
                    })}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="image" className="block">Store memory</label>
                <CldUploadButton onUpload={imageUploaded} uploadPreset="xhwzkgqc" className="px-5 py-4 rounded-full bg-dark">Choose file</CldUploadButton>
                <div className="flex gap-6 flex-wrap mt-3">
                    {formData.images.map((image, i) => {
                        return <div key={i} className="w-full max-w-xs max-h-[20rem] rounded bg-cover bg-dark relative"><img src={image} alt={image} /><button onClick={() => removeImage(i)} className="px-5 py-2 rounded bg-dark hover:bg-darkest z-10 absolute top-0 right-0">X</button></div>
                    })}
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <button type="submit" className="px-5 py-4 rounded-full text-xl bg-mypink hover:bg-mypink/80 text-white font-bold">Update the story</button>
            </div>
        </form>
    )
}


export default UpdateStoryForm