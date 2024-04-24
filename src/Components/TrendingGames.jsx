import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log(gameList)
    },[])

  return (
    <div className='px-5 mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className='md:grid md:grid-cols-3 gap-4 lg:grid-cols-4'>
            {gameList.map((item,index)=>index<4 && (
                <div className='bg-[#2c40615e] rounded-lg group hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
                    <img src={ item.background_image } 
                    className='h-[270px] rounded-t-lg object-cover'/>
                    <h2 className='dark:text-white text-[20px] font-bold px-5 pb-5'>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingGames