'use client'
import React from "react"
import { useSession } from "next-auth/react"
import Loading from "@/components/Loading"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { status } = useSession()

  if(status === 'loading'){
    return <Loading />
  }

  return children
}