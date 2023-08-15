import React from "react";

const Loading: React.FC = ()=>{

    return (
        <div className="bg-darker fixed top-0 left-0 w-screen h-screen z-50 flex flex-col justify-center items-center gap-4 p-8">
            <div className="w-full flex items-center justify-center"><img src="/kahaani-logo.svg" alt="Loading..." className="max-w-full" /></div>
            <div>Loading...</div>
        </div>
    )
}

export default Loading