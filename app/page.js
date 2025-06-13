"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState('')
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <div className="py-28 flex items-center justify-center flex-col text-white gap-6 px-4">
        <h1 className="text-5xl max-[400px]:text-4xl font-bold flex items-center gap-2">
          <span>Fuel My Art</span>
          <img src="/can.svg" width={50} alt="" />
        </h1>
        <p className="text-center">A platform for creators and artists to get support from fans and followers. Start Now!</p>
        <div>
          <Link href={'/login'} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Now!
            </span>
          </Link>
          <Link href={'/about'} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
            </span>
          </Link>
        </div>
      </div>
      <div className='h-0.5 bg-white opacity-20'></div>
      <div className="py-20 w-full text-white px-4">
        <h1 className="text-center text-3xl font-bold max-[400px]:text-2xl">Your fans can support you</h1>
        <div className="max-w-[1000px] mx-auto flex justify-around items-center mt-16 gap-2  max-[580px]:flex-col max-[580px]:mt-12 max-[580px]:gap-12">
          <div className="flex flex-col items-center gap-1">
            <img src="/coin.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1"/>
            <h2 className="font-bold">Support via Fuel</h2>
            <p className="text-sm text-center">It is not just money, but fuel for your journey</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src="/man.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1"/>
            <h2 className="font-bold">Fans can help</h2>
            <p className="text-sm text-center">Your fans can available for you to help</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src="/group.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1"/>
            <h2 className="font-bold">Fans can collaborate</h2>
            <p className="text-sm text-center">Your fans collaborate with you in your projects</p>
          </div>
        </div>
      </div>
      <div className='h-0.5 bg-white opacity-20'></div>
      <div className="py-20 px-4">
        {/* search your creator here */}
        <h1 className="text-center text-3xl font-bold text-white max-[400px]:text-2xl">Search your creator</h1>
        <div className="mx-auto flex justify-center items-center mt-8">
          <div className="flex items-center gap-2">
            <input type="text" value={username} onChange={(e)=>handleChange(e)} placeholder="Enter username" className="p-2 mb-2 rounded-md bg-gray-800 text-white" />
            <Link href={`/profile/${username}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Search
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-0.5 bg-white opacity-20'></div>
      <div className="py-20 w-full text-white px-4">
        <h1 className="text-center text-3xl font-bold max-[400px]:text-2xl">Learn more about us</h1>
        <div className="max-w-[1000px] mx-auto flex justify-around items-center mt-16">
          <iframe className="w-[480px] h-[280px] max-[540px]:w-[300px] max-[540px]:h-[180px] max-[400px]:w-[240px] max-[400px]:h-[140px]" src="https://www.youtube.com/embed/Khck8VHlOm0?si=9os5KaDARRhwtduY" title="YouTube video player" style={{ border: "none" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
