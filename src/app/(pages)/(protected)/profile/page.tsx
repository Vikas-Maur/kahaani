'use client'
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

const ProfilePage: React.FC = () => {
    const { data: session } = useSession()

    return (
        <section className="mt-4 lg:mt-4 flex justify-center items-center lg:justify-start">
            <Navbar active="profile" />
            <div className="flex flex-col lg:flex-row p-4 gap-4 lg:gap-16">
                <div className="w-full max-w-xs bg-cover rounded">
                    <img src={session?.user?.image || ""} className="max-w-full" alt="User Image" />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                        <p className="text-sm">Name</p>
                        <p className="font-bold">{session?.user?.name}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">Email</p>
                        <p className="font-bold">{session?.user?.email}</p>
                    </div>
                    <button onClick={() => signOut()} className="w-full px-8 py-3 rounded bg-mypink text-center text-white font-bold hover:bg-mypink/80">Logout</button>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage