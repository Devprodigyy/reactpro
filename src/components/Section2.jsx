import React from 'react'

const Section2 = () => {
    return (
        <section id='sec2' className='min-h-[50vh] w-full'>
            <div className='h-[8vh] w-full flex items-center justify-center'>
                <h4 className='text-[3vw] md:text-[2vw]'>How can I Help You ?</h4>
            </div>
            <div className='flex flex-col w-full mt-[2vh] items-center justify-around md:flex-row gap-10 px-6 py-6'>
                <div className='relative w-[80vw] h-[40vh] md:h-[60vh]'>
                    <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1594947538961-616edc61d63e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
                </div>
                <div className='relative w-[80vw] h-[40vh] md:h-[60vh]'>
                    <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1589242433734-bb0ee7dc16cd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
                </div>
                <div className='relative w-[80vw] h-[40vh] md:h-[60vh]'>
                    <img className='h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1589245880771-7b4cbc440635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="img3" />
                </div>
            </div>
        </section>
    )
}

export default Section2