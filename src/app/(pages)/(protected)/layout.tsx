'use client'
import React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/Sidebar"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { status } = useSession()
  const router = useRouter()

  if(status !== 'authenticated' && status !=='loading'){
    router.replace('/')
    return <></>
  }

  return (
    <section className="lg:flex lg:gap-8">
      <Sidebar />
      <div className="p-8 flex-1">{children}</div>
    </section>
  )
}