import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full'>
        <div className='h-[1px] bg-green-200 opacity-20 mx-[20%]'></div>
        <div className='text-white text-center py-5 items-center flex justify-center flex-col gap-2'>
            <span className='font-light max-[400px]:text-sm'>Copyright &copy; {year} Fuel My Art - All Rights Reserved</span>
            <span className='text-[13px] font-light max-[400px]:text-[12px]'>Designed & Developed by Naman Kumar</span>
        </div>
    </footer>
  )
}

export default Footer
