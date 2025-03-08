'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className='flex justify-between px-20 h-screen'>
            <div className='my-auto  px-10'>
                <p className='text-7xl font-bold'>Hi, I am <span className='text-purple-500'> Naveen Yadav</span></p>
                <div className='flex my-8'>
                    <Link href='/resume'>
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                                My Resume
                            </span>
                        </button>
                    </Link>
                    <Link className='px-2 mx-2' href="https://leetcode.com/u/1711naveen" target='_blank'>
                        <Image src='leetcodeLight.svg' alt='LeetCode Image' height={35} width={35} />
                    </Link>
                    <Link className='px-2 mx-2' href="https://www.linkedin.com/in/naveenyadav1711" target='_blank'>
                        <Image src='linkedin.svg' alt='Linkedin Image' height={35} width={35} />
                    </Link>
                    <Link className='px-2 mx-2' href="https://github.com/1711naveen" target='_blank'>
                        <Image src='github.svg' alt='Github Image' height={35} width={35} />
                    </Link>
                    <Link className='px-2 mx-2' href="https://www.linkedin.com/in/naveenyadav1711" target='_blank'>
                        <Image src='gmail.svg' alt='Gmail Image' height={35} width={35} />
                    </Link>
                </div>
                <div className='flex text-4xl'>
                    I am&nbsp;
                    <span className='text-purple-600'>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Leetcoder', ''],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/home.png" alt="logo.png" height={400} width={400} />
            </div>
        </div>
    )
}

export default Hero