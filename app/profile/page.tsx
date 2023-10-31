'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            // Redirect to login page
            return { redirectTo: '/api/auth/signin?callbackUrl=/profile' }
        }
    })


    return (
        <div>
                {/* {session?.user?.name} {session?.user?.email} {session?.user?.image} */}
                <div className="card lg:card-side bg-base-100 shadow-xl border-base-200 m-5">
                    <div className="avatar w-80 h-auto flex">
                        <div className="w-full rounded">
                            <img src={session?.user?.image as string} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{session?.user?.name}</h2>
                        <p>{session?.user?.email}</p>
                        <div className="card-actions justify-end">
                            <div className='my-5'>
                                <Link href='/api/auth/signout?callbackUrl=/profile' passHref><button className='btn btn-primary'>Sign Out</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfilePage