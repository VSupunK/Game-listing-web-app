import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        //console.log("gameBanner",gameBanner)
    },[])

  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-950 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold p-2'>{gameBanner.name}</h2>
            <button className='bg-amber-600 text-white px-2 p-1 rounded-lg'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt="Games" className='md:h-auto w-full object-cover rounded-xl'/>
    </div>
  )
}

export default Banner