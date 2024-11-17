import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-between align-middle px-20 py-10'>
            <div className='my-auto'>
                <p className='text-7xl font-bold px-10'>Hi, I am Naveen Yadav</p>
                <p className='text-4xl px-10 my-4'>
                    I am Full Stack Developer
                </p>
            </div>
            <div>
                <img src="/home.png" alt="logo.png" />
            </div>
        </div>
    )
}

export default Hero
