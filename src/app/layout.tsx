'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Kahaani',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/kahaani-short-logo.png" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} bg-darker text-gray-400`}>
        <SessionProvider>
          {children}
          <Toaster 
            toastOptions={{
              style: {
                background: "#181818",
                color: "white"
              }
            }}
          />
        </SessionProvider>
      </body>
    </html>
  )
}
