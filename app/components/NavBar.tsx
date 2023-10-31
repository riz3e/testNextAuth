'use client'
import { useSession } from 'next-auth/react'
import React from 'react'



const NavBar = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            // Redirect to login page
            return { redirectTo: '/api/auth/signin?callbackUrl=/profile' }
        }
    })

    return (
        <div className="navbar bg-base-100 z-[1]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">TestGoogleAuth</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={session?.user?.image as string} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar