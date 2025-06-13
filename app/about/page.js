import React from 'react'

const Page = () => {
  return (
    <div className='text-white mx-auto max-w-[1000px] px-5 py-12'>
      <h1 className='text-3xl font-bold mb-4'>About Fuel My Art</h1>
        <p className='my-2'>Fuel My Art is a platform designed to empower creators and artists by connecting them with their fans and followers. Our mission is to provide a space where artists can receive support, encouragement, and financial backing from their community.</p>
        <p className='my-2'>Whether you&apos;re a musician, painter, writer, or any other type of creator, Fuel My Art is here to help you fuel your passion and turn your dreams into reality. Join us in building a supportive community where artists can flourish and fans can play an active role in their success.</p>
        <h2 className='text-xl font-bold my-4 mt-8'>What we offer</h2>
        <div className='flex gap-4 items-center'>
            <img src="/coins.gif" width={80} alt="" />
            <span className='flex flex-col'>
                <span className='text-lg font-bold'>Support Through Fuel</span>
                <span>Your fans can buy you fuel to support your work</span>
            </span>
        </div>
        <div className='flex gap-4 items-center'>
            <img src="/group.gif" width={80} alt="" />
            <span className='flex flex-col'>
                <span className='text-lg font-bold'>Fans Can Collaborate</span>
                <span>Your fans can collaborate with you on your projects</span>
            </span>
        </div>
        <h2 className='text-xl font-bold my-4 mt-8'>Why Fuel My Art?</h2>
        <ul className='list-disc ml-5 space-y-2'>
        <li>💡 Creator First: We believe creators deserve a platform that works for them — simple, transparent, and customizable.</li>

        <li>🌱 Support Without Barriers: Whether you&apos;re looking for one-time encouragement or ongoing backing, Fuel My Art makes it effortless for fans to contribute.</li>

        <li>🎨 Your Space, Your Style: Personalize your page, connect with your audience, and share updates on your creative journey — all under your own voice.</li>

        <li>🔒 Respect and Transparency: We value your trust. Contributions go directly to you, with minimal friction and no clutter.</li>
        </ul>

        <h2 className='text-xl font-bold my-4 mt-8'>Our Mission</h2>
        <p className='my-2'>We believe that every artist deserves the opportunity to thrive and share their passion with the world. By facilitating direct support from fans, we aim to help artists focus on their craft without the financial burdens that often come with pursuing a creative career.</p>

        <p className='text-2xl mt-8 italic font-serif'>Because every masterpiece starts with a little fuel.</p>
        <p className='italic text-end'>-Naman</p>
    </div>
  )
}

export default Page

export const metadata = {
    title: 'About - Fuel My Art',
    description: 'Learn more about Fuel My Art, a platform empowering creators and artists by connecting them with their fans for support, collaboration, and growth.',
}