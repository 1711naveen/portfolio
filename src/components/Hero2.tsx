import Image from 'next/image'
import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiGmail } from "react-icons/si";


const Hero2 = () => {
  return (
    <>
      <div className='px-20 py-20 flex'>
        <div className='w-3/4'>
          <p className='text-6xl text-center'>LET ME INTRODUCE MYSELF</p>
          <div>
            <ul className='text-2xl mt-4 pl-8'>
              <li className='my-4'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</li>
              <li className='my-4'>I am fluent in classics like C++, Javascript and Java. </li>
              <li className='my-4'>My field of Interest are building new  Web Technologies and Products and also in areas related to App Development. </li>
              <li className='my-4'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js </li>
            </ul>
          </div>
        </div>
        <div className='w-1/4'>
          <Image src='/introduction.jpg' alt='Introduction image' height={400} width={400} />
        </div>
      </div>

      <div className='px-20 py-20 flex'>
        <div className='w-3/4'>
          <p className='text-6xl text-center'>About Me</p>
          <div>
            <ul className='text-2xl mt-4 pl-8'>
              <li className='my-4'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</li>
              <li className='my-4'>I am fluent in classics like C++, Javascript and Java. </li>
              <li className='my-4'>My field of Interest are building new  Web Technologies and Products and also in areas related to App Development. </li>
              <li className='my-4'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js </li>
            </ul>
          </div>
        </div>
        <div className='w-1/4'>
          <Image src='/introduction.jpg' alt='Introduction image' height={400} width={400} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <p className="text-3xl font-semibold mb-2">Find me on</p>
        <p className="text-3xl font-semibold mb-4">My presence on</p>
        <div className="flex space-x-6 mt-2">
          <div className="text-5xl"><FaXTwitter /></div>
          <div className="text-5xl"><FaInstagram /></div>
          <div className="text-5xl"><SiLeetcode /></div>
          <div className="text-5xl"><FaGithub /></div>
          <div className="text-5xl"><SiCodeforces /></div>
          <div className="text-5xl"><SiGmail /></div>
        </div>
      </div>
    </>

  )
}

export default Hero2
