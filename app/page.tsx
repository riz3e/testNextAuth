'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect to login page
      return { redirectTo: '/api/auth/signin?callbackUrl=/profile' }
    }
  })
  return (
    <>
      Hello, {session?.user?.name ?? 'friend'}!
    </>
  )
}
