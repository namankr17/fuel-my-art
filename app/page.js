"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState('')
  const [showAcc, setshowAcc] = useState([false, false, false, false, false, false, false, false]);
  const toggleAccordion = (index) => {
    //Toggle accordion state as well as close others
    let newAcc = [false,false,false,false,false,false,false,false];
    newAcc[index] = !showAcc[index];
    setshowAcc(newAcc);
  }
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
            <img src="/coin.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1" />
            <h2 className="font-bold">Support via Fuel</h2>
            <p className="text-sm text-center">It is not just money, but fuel for your journey</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src="/man.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1" />
            <h2 className="font-bold">Fans can help</h2>
            <p className="text-sm text-center">Your fans can available for you to help</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src="/group.gif" width={80} alt="" className="bg-blue-400 rounded-full p-1" />
            <h2 className="font-bold">Fans can collaborate</h2>
            <p className="text-sm text-center">Your fans collaborate with you in your projects</p>
          </div>
        </div>
      </div>
      <div className='h-0.5 bg-white opacity-20'></div>
      <div className="py-20 px-4">
        {/* search your creator here */}
        <h1 className="text-center text-3xl font-bold text-white max-[400px]:text-2xl">Find your creator</h1>
        <div className="mx-auto flex justify-center items-center my-8">
          <div className="flex items-center gap-2">
            <input type="text" value={username} onChange={(e) => handleChange(e)} placeholder="Enter username" className="p-2 mb-2 rounded-md bg-gray-800 text-white" />
            <Link href={`/profile/${username}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Find
              </span>
            </Link>
          </div>
        </div>
        <div className="text-white text-center text-lg font-medium">And start supporting now...</div>
      </div>
      <div className='h-0.5 bg-white opacity-20'></div>
      <div className="py-20 md:text-lg w-full text-white px-4">
        <h1 className="text-center text-3xl font-bold max-[400px]:text-2xl">Frequently Asked Questions</h1>

        <div id="accordion-flush" className="max-w-[700px] mx-auto mt-12" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
          <h2 id="accordion-flush-heading-1">
            <button onClick={()=>{toggleAccordion(0)}} type="button" className={showAcc[0]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span className="text-start">What is Fuel My Art?</span>
              <svg data-accordion-icon className={showAcc[0]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-1" className={showAcc[0]?"":"hidden"} aria-labelledby="accordion-flush-heading-1">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Fuel My Art is a platform where creators can receive financial support from their audience through one-time or recurring contributions. It's a simple way to turn appreciation into action.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button onClick={()=>{toggleAccordion(1)}} type="button" className={showAcc[1]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
              <span className="text-start">Who can use Fuel My Art?</span>
              <svg data-accordion-icon className={showAcc[1]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-2" className={showAcc[1]?"":"hidden"}  aria-labelledby="accordion-flush-heading-2">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Any creator! Whether you’re a digital artist, writer, musician, podcaster, developer, educator, or just someone building cool stuff—Fuel My Art is for you.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button onClick={()=>{toggleAccordion(2)}} type="button" className={showAcc[2]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
              <span className="text-start">How do I get paid?</span>
              <svg data-accordion-icon className={showAcc[2]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-3" className={showAcc[2]?"":"hidden"}  aria-labelledby="accordion-flush-heading-3">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">You link your preferred payment method (like UPI, PayPal, or bank transfer depending on your region), and funds from your supporters go directly to you. We never hold your money.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-4">
            <button onClick={()=>{toggleAccordion(3)}} type="button" className={showAcc[3]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
              <span className="text-start">Do I need to offer rewards or exclusive content?</span>
              <svg data-accordion-icon className={showAcc[3]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-4" className={showAcc[3]?"":"hidden"}  aria-labelledby="accordion-flush-heading-4">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Nope. Fuel My Art is about support without pressure. You can choose to offer rewards, updates, or behind-the-scenes content—but it’s entirely optional.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-5">
            <button onClick={()=>{toggleAccordion(4)}} type="button" className={showAcc[4]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
              <span className="text-start">Is Fuel My Art free to use?</span>
              <svg data-accordion-icon className={showAcc[4]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-5" className={showAcc[4]?"":"hidden"}  aria-labelledby="accordion-flush-heading-5">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Yes! Setting up your creator page is completely free. We only take a small percentage from each transaction to cover processing and platform costs. No monthly fees, no surprises.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-6">
            <button onClick={()=>{toggleAccordion(5)}} type="button" className={showAcc[5]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-6" aria-expanded="false" aria-controls="accordion-flush-body-6">
              <span className="text-start">How can my audience pay?</span>
              <svg data-accordion-icon className={showAcc[5]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-6" className={showAcc[5]?"":"hidden"}  aria-labelledby="accordion-flush-heading-6">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">We support all major credit and debit cards, Apple Pay, Google Pay, Cash App and other global payment methods.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-7">
            <button onClick={()=>{toggleAccordion(6)}} type="button" className={showAcc[6]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-7" aria-expanded="false" aria-controls="accordion-flush-body-7">
              <span className="text-start">Is Fuel My Art safe?</span>
              <svg data-accordion-icon className={showAcc[6]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-7" className={showAcc[6]?"":"hidden"}  aria-labelledby="accordion-flush-heading-7">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Absolutely. We follow modern security standards and never sell or misuse your personal data. Your privacy and trust are a top priority.</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-8">
            <button onClick={()=>{toggleAccordion(7)}} type="button" className={showAcc[7]?"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 cursor-pointer":"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 cursor-pointer"} data-accordion-target="#accordion-flush-body-8" aria-expanded="false" aria-controls="accordion-flush-body-8">
              <span className="text-start">How do I get started?</span>
              <svg data-accordion-icon className={showAcc[7]?"w-3 h-3 shrink-0":"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-flush-body-8" className={showAcc[7]?"":"hidden"}  aria-labelledby="accordion-flush-heading-8">
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Click the "Start Now" button, sign up as a creator, and set up your page in a few minutes. No coding or complicated steps required.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
