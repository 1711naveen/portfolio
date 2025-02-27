import React from 'react'
import Image from 'next/image'

const LeftSideNav = () => {
  return (
    <div className=''>
      <div>
        <Image
          src="/my-avatar.png"
          width={300}
          height={300}
          alt="Picture of the Me"
        />
        <div className='text-center bold'>Naveen Yadav</div>
        <div className='text-center bold'>Full Stack Developer</div>
      </div>


      <div className='mt-8'>
        <div className='flex p-4'>
          <div><Image src="/my-avatar.png" height={50} width={50} alt="change it later"/></div>
          <div>
            <div>Email</div>
            <div>yn.naveen00@gmail.com</div>
          </div>
        </div>
        <div className='flex p-4'>
          <div><Image src="/my-avatar.png" height={50} width={50} alt="change it later"/></div>
          <div>
            <div>Email</div>
            <div>yn.naveen00@gmail.com</div>
          </div>
        </div>
        <div className='flex p-4'>
          <div><Image src="/my-avatar.png" height={50} width={50} alt="change it later"/></div>
          <div>
            <div>Email</div>
            <div>yn.naveen00@gmail.com</div>
          </div>
        </div>
        <div className='flex p-4'>
          <div><Image src="/my-avatar.png" height={50} width={50} alt="change it later"/></div>
          <div>
            <div>Email</div>
            <div>yn.naveen00@gmail.com</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftSideNav
