import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mb-16 text-center">
                <p className="text-3xl font-semibold mb-2">Find me on</p>
                <p className="text-3xl font-semibold mb-4">My presence on</p>
                <div className="flex space-x-6 mt-2">
                    <Link href='https://www.google.com'><div className="text-5xl"><FaXTwitter /></div></Link>
                    <Link href='https://www.google.com'><div className="text-5xl"><FaInstagram /></div></Link>
                    <Link href='https://www.google.com'><div className="text-5xl"><SiLeetcode /></div></Link>
                    <Link href='https://www.google.com'><div className="text-5xl"><FaGithub /></div></Link>
                    <Link href='https://www.google.com'><div className="text-5xl"><SiCodeforces /></div></Link>
                    <Link href='https://www.google.com'><div className="text-5xl"><SiGmail /></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
