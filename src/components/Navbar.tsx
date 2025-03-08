import Link from 'next/link'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { TiDocumentText } from "react-icons/ti";
import { IoIosGitBranch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { GiSkills } from "react-icons/gi";



const Navbar = () => {
    return (
        <div className='flex justify-between border p-4'>
            <Link href='/'>
                <div className='text-xl text-purple-500'>
                    Naveen Yadav.
                </div>
            </Link>
            <div className=''>
                <ul className='flex '>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="/">
                            <div className='flex items-center'>
                                <GoHome className='mt-1 mx-2' />
                                Home
                            </div>
                        </Link>
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="/#about">
                            <div className='flex items-center'>
                                <MdPerson className='mt-1 mx-2' />
                                About
                            </div>
                        </Link>
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="/#projects">
                            <div className='flex items-center'>
                                <GoProjectRoadmap className='mt-1 mx-2' />
                                Projects
                            </div>
                        </Link>
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="/#projects">
                            <div className='flex items-center'>
                                <GiSkills className='mt-1 mx-2' />
                                Skills
                            </div>
                        </Link>
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="/resume">
                            <div className='flex items-center'>
                                <TiDocumentText className='mt-1 mx-2' />
                                Resume
                            </div>
                        </Link>
                    </li>
                    <li className='px-4 text-xl flex justify-center align-middle'>
                        <Link href="https://github.com/1711naveen/portfolio">
                            <div className='flex items-center border-1 rounded-lg bg-orange-400'>
                                <IoIosGitBranch className='my-2 mx-6' />
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar