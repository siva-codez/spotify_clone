import React from 'react'

const Footer = () => {
  return (
    <>
    <div><hr /></div>
    <div className='hidden md:flex p-8 gap-20 '>
        <div>
            <b className='text-white'>Company</b>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>About</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Jobs</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>For the Record</p></a>
        </div>

        <div>
            <b className='text-white'>Communities</b>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>For Artists</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Developers</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Advertising</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Investors</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Vendors</p></a>
        </div>

         <div>
            <b className='text-white'>Useful links</b>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Support</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Free Mobile App</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Popular by Country</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Import your music</p></a>
        </div>

        <div>
            <b className='text-white'>Spotify Plans</b>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Premium Lite</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Premium Standard</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Preminum platinum</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Preminum Student</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Spotify Free</p></a>
        </div>

    </div> 

    <div><hr /></div>
    <div className='hidden md:flex w-100 h-25 '>
        <div className='flex gap-24 p-8 items-center justify-between '>
           <a href=""><p className='text-gray-600 font-semibold hover:text-white'>legal </p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Safety&Privacy_Center</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Privacy_Policy</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Cookies</p></a>
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>About_Ads</p></a> 
            <a href=""><p className='text-gray-600 font-semibold hover:text-white'>Accessibility</p></a> 
        </div>

        <div className='flex px-32 p-8 items-center justify-between'>
            <b className='text-gray-600 font-semibold'>@2025_Spotify_AB</b>
        </div>
    </div>
      
    </>
  )
}

export default Footer
