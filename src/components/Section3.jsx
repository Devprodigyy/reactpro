import React from 'react'

const Section3 = () => {
    return (
        <section id='sec3' className='min-h-[60vh] w-full mx-auto flex flex-col justify-between sm:flex-row'>
            <div className='px-6 py-6 min-h-[60vh] w-[100%] sm:w-[40%]'>
                <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1587337558167-f88e206639b6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='relative px-6 py-6 min-h-[60vh] w-[100%] sm:w-[60%]flex items-center justify-center flex-col'>
                <h1 className='text-[4vw] text-left w-[80%] sm:text-[3vw] md:text-[2vw]'>PARIS BASED COPYWRITER READY TO BEING <span>YOUR</span> IDEAS TO LIFE.</h1>
                <p className='mt-[2vw] text-[2vw] text-left w-[80%] md:text-[1vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore perferendis, quod quidem nemo laboriosam ad quo distinctio. Iusto itaque natus dicta repellendus ipsum quos aperiam expedita, eligendi unde quibusdam.</p>

                <button className='absolute bottom-16 border px-10 border-black py-3 border-l-0 border-r-0 w-full md:w-fit'>LEARN MORE ABOUT ME </button>
            </div>
        </section>
    )
}

export default Section3