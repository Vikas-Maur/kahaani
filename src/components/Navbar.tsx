import React from "react";
import Link from "next/link";

type Props = {
    active: string
}

const Navbar: React.FC<Props> = ({ active }) => {

    return (
        <nav className="z-50 lg:hidden flex fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-2 rounded-full bg-dark shadow-lg shadow-dark">
            <div className="flex-1 border-r border-gray-600"><Link className={"py-4 px-8" + (active==="diary"? " text-white" : "")} href='/diary'>Diary</Link></div>
            <div className="flex-1"><Link className={"py-4 px-8" + (active==="profile"? " text-white" : "")} href='/profile'>Profile</Link></div>
        </nav>
    )
}

export default Navbar