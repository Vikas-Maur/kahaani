import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
    return (
        <div className="items-center justify-center w-full lg:max-w-[250px] lg:h-screen lg:flex lg:flex-col lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:flex-1 p-8 lg:bg-darkest lg:overflow-clip">
            <Link href="/diary"><div className="flex justify-center items-center"><img src="/kahaani-logo.svg" className="max-w-full lg:max-w-[200px] lg:justify-self-start inline-block mx-auto" alt="Kahaani logo" /></div></Link>
            <div className="hidden mt-16 lg:flex flex-col gap-4 flex-1 w-full">
                <div className="text-center"><Link className="block w-full py-3 px-8 text-lg rounded bg-dark hover:bg-darker" href='/diary'>📝 Diary</Link></div>
                <div className="text-left flex flex-col">
                    <Link className="block w-full py-2 text-lg rounded hover:bg-darker" href='/diary?tag=VERY_SAD'>😭 Very sad</Link>
                    <Link className="block w-full py-2 text-lg rounded hover:bg-darker" href='/diary?tag=SAD'>😥 Sad</Link>
                    <Link className="block w-full py-2 text-lg rounded hover:bg-darker" href='/diary?tag=NEUTRAL'>😶 Neutral</Link>
                    <Link className="block w-full py-2 text-lg rounded hover:bg-darker" href='/diary?tag=HAPPY'>😀 Happy</Link>
                    <Link className="block w-full py-2 text-lg rounded hover:bg-darker" href='/diary?tag=VERY_HAPPY'>🤗 Very Happy</Link>
                </div>
                <div className="text-center mt-auto"><Link className="block w-full py-3 px-8 text-lg rounded hover:bg-darker" href='/profile'>🧒 Profile</Link></div>
            </div>
        </div>
    )
}

export default Sidebar