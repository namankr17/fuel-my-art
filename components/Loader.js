import React from 'react'

const Loader = () => {
  return (
      <div className='flex flex-col items-center justify-center absolute top-[calc(50%-100px)] left-[calc(50%-80px)] gap-4'>
        <img src="/loading.gif" width={160} alt="" />
        <div className='text-xl text-purple-600 font-bold'>Loading</div>
      </div>
  )
}

export default Loader
