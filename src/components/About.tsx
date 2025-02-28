'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Experience from './Experience';

const About = () => {
  return (
    <div>
      <p className='p-4'>About </p>
      <div className='text-5xl text-bold p-4'>Hi!, I am Naveen Yadav</div>
      <div className='flex my-8 p-4'>
        <Link href='/resume'>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
              My Resume
            </span>
          </button>
        </Link>
        <Link className='px-2 mx-2' href="https://leetcode.com/u/1711naveen">
          <Image src='leetcodeLight.svg' alt='LeetCode Image' height={35} width={35} />
        </Link>
        <Link className='px-2 mx-2' href="https://www.linkedin.com/in/naveenyadav1711">
          <Image src='linkedin.svg' alt='Linkedin Image' height={35} width={35} />
        </Link>
        <Link className='px-2 mx-2' href="https://github.com/1711naveen">
          <Image src='github.svg' alt='Github Image' height={35} width={35} />
        </Link>
        <Link className='px-2 mx-2' href="https://www.linkedin.com/in/naveenyadav1711">
          <Image src='gmail.svg' alt='Gmail Image' height={35} width={35} />
        </Link>
      </div>
      <div className='text-3xl p-4'>
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'Java Developer', 'Open Source Contributor', "LeetCoder"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <ul className='mt-2'>

        <li className='p-4'>
          Hi, I'm Naveen Yadav, a MERN Stack Developer with a passion for technology. I currently work at Neural Info Solutions Pvt. Ltd., where I develop and maintain web applications. I graduated in Mechanical Engineering from Madan Mohan Malaviya University of Technology in 2023 with a CGPA of 7.69 and secured 87% in my 12th standard. Although my degree is in Mechanical Engineering, I discovered my love for programming in my first year with a simple "Hello World" in C. After that i started learning programming
        </li>
        <li className='p-4'>
          I am fluent in languages like C, C++, Java, and Python with Java as my preferred language. I am also  skilled in frontend technologies such as HTML, CSS, JavaScript, React.js, and Next.js, as well as backend frameworks like Express.js and Spring Boot. I enjoy building robust web applications with sleek designs and continually expand my knowledge in Artificial Intelligence and Machine Learning.
        </li>
        <li className='p-4'>
          Driven by a passion for problem-solving, I have solved over 600 problems on LeetCode with more than 200 days of consistent practice, achieving a maximum rating of 1489, and I hold a 2-star rating on CodeChef after participating in over 10 contests. Currently, I am deepening my expertise in Spring Boot and Microservices to further enhance my backend skills.
        </li>
      </ul>

      <Experience/>
    </div>
  )
}

export default About
