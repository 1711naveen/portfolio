import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Page = () => {
    return (
        <div>
            <h1 className='text-7xl text-center'>My recent projectjs</h1>
            <div className='grid grid-cols-3 gap-8 px-32 p-8'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Page
