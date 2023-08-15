"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const Home: React.FC = () => {
  const router = useRouter()
  const { status } = useSession()

  if (status === 'authenticated') {
    router.replace("/diary")
    return <></>
  }

  return (
    <main className="flex flex-col-reverse lg:flex-row max-h-screen min-h-screen">
      <div className="flex-1 max-h-full overflow-hidden hidden lg:block">
        <img
          src="/story-illustration.svg"
          className="object-cover"
          alt="Story Illustration SVG"
        />
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen flex lg:hidden z-10 opacity-30">
        <img
          src="/story-illustration.svg"
          className="max-w-full max-h-full"
          alt="Story Illustration SVG"
        />
      </div>
      <div className="flex flex-col gap-10 mx-auto flex-1 p-8 justify-center items-center z-20">
        <div>
          <img src="/kahaani-logo.svg" alt="Kahani Logo" />
        </div>
        <p className="text-xl text-gray-400">
          Capture your{" "}
          <span className="text-starry-silver font-bold">Moments</span> <br />
          Write your <span className="text-starry-silver font-bold">Story</span>
        </p>
        <button
          onClick={() => signIn()}
          className="block p-4 w-full lg:w-3/4 text-xl text-white font-bold text-center rounded bg-mypink hover:bg-mypink/80"
        >
          Open Your Diary &rarr;
        </button>
        <div
          className="fixed top-0 left-full -translate-x-1/2 -translate-y-1/2 w-[718px] h-[718px] rounded-full"
          style={{
            background:
              "radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 171, 76, 0.72) 0%, rgba(217, 217, 217, 0.00) 100%)",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Home;
