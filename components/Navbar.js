"use client"
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { createContext, useContext } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { ReloadContext } from '@/context/ReloadContext';


const Navbar = () => {
    const { data: session } = useSession()
    const value = useContext(ReloadContext)
    const [re, setRe] = useState(false)
    useEffect(() => {
        setRe(!re)
    }, [value.reload])
    return (
        <nav className='text-white flex justify-around h-20 items-center'>
            <Link href={'/'} className='text-xl font-bold flex items-center gap-2'>
                <img src="/can.svg" width={32} alt="" />
                <span>Fuel My Art</span>
            </Link>
            {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Feedback</li>
        </ul> */}
            {!session && 
                <Link href={'/login'} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Login
                </span>
            </Link>}
            {session && <div className="flex justify-center items-center dark:bg-slate-900">
                <div className="dropdown inline-block relative">
                    <button className="bg-slate-300 dark:bg-violet-950 text-slate-700 dark:text-slate-300 font-semibold py-2 px-4 rounded inline-flex items-center max-[400px]:w-32 max-[400px]:justify-center">
                        <img src={session.user.profilePicUrl ? session.user.profilePicUrl : session.user.image} width={24} className='rounded-full mr-2' alt="" />
                        <span className="mr-1 w-24 overflow-hidden text-ellipsis text-nowrap max-[400px]:hidden">{session.user.name}</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-slate-700 dark:text-slate-300 pt-1 right-0 w-full z-10">
                        <li className=""><Link href={'/dashboard'} className="text-center w-full rounded-t bg-slate-200 dark:bg-violet-900 hover:bg-slate-400 dark:hover:bg-violet-950 py-2 px-4 block whitespace-no-wrap" >Dashboard</Link></li>
                        <li className=""><Link className="text-center w-full bg-slate-200 dark:bg-violet-900 hover:bg-slate-400 dark:hover:bg-violet-950 py-2 px-4 block whitespace-no-wrap" href={`/profile/${session.user.username}`}>Your Page</Link></li>
                        <li className=""><button onClick={()=>{signOut()}} className="rounded-b w-full cursor-pointer bg-slate-200 dark:bg-violet-900 hover:bg-slate-400 dark:hover:bg-violet-950 py-2 px-4 block whitespace-no-wrap">Sign Out</button></li>
                    </ul>
                </div>

            </div>}
        </nav>
    )
}

export default Navbar
