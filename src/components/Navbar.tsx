'use client'
import React, { useState } from 'react'
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Navbar = () => {
  const [state, setState] = useState('about');

  return (
    <div>
      <nav className='border-2 border-black'>
        <ul className='flex justify-end'>
          <li className='p-4' onClick={()=>setState('about')}>About</li>
          <li className='p-4' onClick={()=>setState('resume')}>Resume</li>
          <li className='p-4' onClick={()=>setState('portfolio')}>Portfolio</li>
          <li className='p-4' onClick={()=>setState('blog')}>Blog</li>
          <li className='p-4' onClick={()=>setState('contact')}>Contact</li>
        </ul>
      </nav>
      <div>
        {state=='about' && <About />}
        {state=='resume' && <Resume />}
        {state=='portfolio' && <Portfolio />}
        {state=='blog' && <Blog />}
        {state=='contact' && <Contact />}
      </div>
    </div>
  )
}

export default Navbar
