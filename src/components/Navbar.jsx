import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const nav = useNavigate()
    const navHome = useNavigate();
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'> 
      <div className='hidden md:flex items-center gap-2'>
        <img onClick={()=> nav(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img onClick={()=> nav(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
      </div>
      
          <div className='hidden md:flex h-[15%] rounded flex-col justify-around'>
                  <div onClick={() => navHome('/')} className='flex flex-column  items-center gap-3 pl-8 cursor-pointer'>
                      <img className='w-6' src={assets.home_icon} alt="" />
                      <p className='font-bold'>Home</p>
                  </div>
          </div>

       <div className="flex items-center gap-3 bg-[#1e1e1e] rounded-full px-4 py-2 w-full max-w-xl">
          <img className="w-5 opacity-70" src={assets.search_icon} alt="search" />
          <input
          className="flex-1 bg-transparent focus:outline-none text-gray-200 placeholder-gray-400"
          type="text"
          placeholder="What do you want to play?"
          />
        </div>
    
      
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
        <p className='hidden md:flex bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
        <img className='bg-black p-2  rounded-full w-8 h-8 object-contain cursor-pointer' src={assets.bell_icon} alt="" />
        <p className='bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>S</p>
      </div>
      
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
      </>
  )
}

export default Navbar
