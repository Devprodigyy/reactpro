import React from 'react'

const Section4 = () => {
    return (
        <section id='sec4' className='h-[60vh] w-[90vw] mx-auto mb-10 relative flex items-center justify-center flex-col'>
            <img className='absolute top-0 left-0 h-[20vh] w-[20vh] object-cover object-center' src="https://images.unsplash.com/photo-1590610831759-0fca59c21a23?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3>Get the Goods</h3>
            <h5>Downlaod our free brand voice workbook</h5>
            <div className='mt-[5vh] flex items-center justify-center gap-[25px]'>
                <input className='p-[10px] border-[1px]' type='email' placeholder='Email Address' />
                <button>Sign up</button>
            </div>
            <img className='absolute bottom-0 right-0 h-[20vh] w-[20vh] object-cover object-center' src="https://images.unsplash.com/photo-1617792412010-32c61deb22d5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section>
    )
}

export default Section4