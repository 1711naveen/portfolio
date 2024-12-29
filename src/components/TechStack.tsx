import React from 'react'
import Card from './Card'
import { TbBrandCpp } from 'react-icons/tb'
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const TechStack = () => {
    return (
        <div>
            <h1 className='text-7xl text-center'>Tech Stack</h1>
            <div className='grid grid-cols-4 gap-4 px-32 p-8'>
                <div className='flex justify-center align-middle border'>
                    <TbBrandCpp className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <FaJava  className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <FaPython className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <TbBrandCpp className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <TbBrandCpp className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <TbBrandCpp className='text-7xl' />
                </div>
                <div className='flex justify-center align-middle border'>
                    <TbBrandCpp className='text-7xl' />
                </div>
            </div>
            <h1 className='text-7xl text-center'>Tool Stack</h1>
            <div className='grid grid-cols-4 gap-4 px-32 p-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default TechStack
