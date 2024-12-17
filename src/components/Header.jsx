import React from 'react'

const Header = () => {
  return (
   <header className='flex w-full items-center justify-between h-[6vh] px-8'>
    <h1 className='text-[3vw] sm:text-[4vw] xl:text-[1.6vw]'>Parisian</h1>
    <div className='flex items-center justify-center gap-[2vw] '>
        <h4 className='text-[2.8vw] sm:text-[1.8vw] xl:text-[1.2vw]' >About</h4>
        <h4 className='text-[2.8vw] sm:text-[1.8vw] xl:text-[1.2vw]' >Services</h4>
        <h4 className='text-[2.8vw] sm:text-[1.8vw] xl:text-[1.2vw]' >Podcast</h4>
        <h4 className='text-[2.8vw] sm:text-[1.8vw] xl:text-[1.2vw]' >Portfolio</h4>
    </div>
   </header>
  )
}

export default Header