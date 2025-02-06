import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Page = () => {

    const projects = [
        {
            "title": "Portfolio Website",
            "description": "A personal portfolio website built using Next.js and Tailwind CSS. It showcases my projects, skills, and resume in a clean and responsive design.",
            "image": "/home.png",
            "link":"https://github.com/1711naveen/portfolio"
        },
        {
            "title": "Algorithm Visualizer",
            "description": "An interactive algorithm visualization tool developed with Next.js, Tailwind CSS, and Chart.js. It helps users understand sorting, searching, and graph algorithms through dynamic animations and real-time data representation.",
            "image": "/home.png",
            "link":"https://github.com/1711naveen/algorithms-visualiser"
        },
        {
            "title": "To-Do App",
            "description": "A full-stack task management application featuring a Spring Boot Java backend and a Next.js frontend. It allows users to create, update, and manage their daily tasks efficiently.",
            "image": "/home.png",
            "link":"https://github.com/1711naveen/Task_Management_App_Frontend"
        }
    ];


    return (
        <div>
            <h1 className='text-7xl text-center'>My recent projectjs</h1>
            <div className='grid grid-cols-3 gap-8 px-32 p-8'>

                {projects.map((project, index) => (<ProjectCard key={index} title={project.title} description={project.description} link={project.link} />))}
                {/* <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
            </div>
        </div>
    )
}

export default Page
