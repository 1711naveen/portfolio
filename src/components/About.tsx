'use client'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='px-20' id='about'>
      <p className='p-10 text-purple-600 text-5xl font-bold'>Introduction - About Me </p>

      <ol className='px-10'>

        <li className='py-5 text-2xl'>
          Hi, I&apos;m <span className='text-purple-600'> Naveen Yadav</span>, a <span className='text-purple-600'>MERN Stack Developer</span> with a passion for technology. I currently work at Neural Info Solutions Pvt. Ltd., where I develop and maintain web applications. I graduated in Mechanical Engineering from Madan Mohan Malaviya University of Technology in 2023 with a CGPA of 7.69 and secured 87% in my 12th standard. Although my degree is in Mechanical Engineering, I discovered my love for programming in my first year with a simple &quot;Hello World&quot; in C. After that i started learning programming
        </li>
        <li className='py-5 text-2xl'>
          I am fluent in languages like <span className='text-purple-600'>C, C++, Java, and Python</span> with Java as my preferred language. I am also  skilled in frontend technologies such as <span className='text-purple-600'>HTML</span>, <span className='text-purple-600'>CSS</span>, <span className='text-purple-600'>JavaScript</span>, <span className='text-purple-600'>React.js</span>, and <span className='text-purple-600'>Next.js</span>, as well as backend frameworks like <span className='text-purple-600'>Express.js</span> and <span className='text-purple-600'>Spring Boot</span>. I enjoy building robust web applications with sleek designs and continually expand my knowledge in Artificial Intelligence and Machine Learning.
        </li>
        <li className='py-5 text-2xl'>
          Driven by a passion for problem-solving, I have solved over 600 problems on&nbsp;
          <span className='text-purple-600'>
            <Link href='https://leetcode.com/u/1711naveen' target='_blank'>
              LeetCode
            </Link>
          </span> with more than 200 days of consistent practice, achieving a maximum rating of 1558, and I hold a 2-star rating on CodeChef after participating in over 10 contests. Currently, I am deepening my expertise in Spring Boot and Microservices to further enhance my backend skills.
        </li>
      </ol>

    </div>
  )
}

export default About