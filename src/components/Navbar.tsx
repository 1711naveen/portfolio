import React from 'react'
import { GoHome } from 'react-icons/go'

const Navbar = () => {
    return (
        <div className='flex justify-between border p-4'>
            <div className='text-xl'>
                Naveen Yadav.
            </div>
            <div className=''>
                <ul className='flex '>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <GoHome className='mt-1 mx-2' />Home
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <GoHome className='mt-1 mx-2' />Skills
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <GoHome className='mt-1 mx-2' />Skills
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <GoHome className='mt-1 mx-2' />Projects
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
