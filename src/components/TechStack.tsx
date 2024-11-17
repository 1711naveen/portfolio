import React from 'react'
import Card from './Card'

const TechStack = () => {
    return (
        <div>
            <h1 className='text-7xl text-center'>Tech Stack</h1>
            <div className='grid grid-cols-4 gap-4 px-32 p-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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
