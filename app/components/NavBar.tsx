'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RxAvatar } from 'react-icons/rx'



const NavBar = () => {
    const AuthLinks = [
        { href: '/profile', label: 'Profile' },
        { href: '/api/auth/signout?callbackUrl=/', label: 'Sign Out' }

    ]

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            // Redirect to login page
            return { redirectTo: '/api/auth/signin?callbackUrl=/profile' }
        }
    })
    const CurrentPath = usePathname()


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">TestGoogleAuth</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    {session ? <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={session?.user?.image as string} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {AuthLinks.map((link) => (
                                <li key={link.href}>
                                    <Link className={`menu-link ${CurrentPath === link.href ? 'bg-base-200' : ''}`} href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </>
                        :
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <RxAvatar size="auto" color="gray" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li key="SignIn">
                                    <Link href="/api/auth/signin?callbackUrl=/">Sign in</Link>
                                </li>
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar