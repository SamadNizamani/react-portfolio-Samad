import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" className="text-white text-2xl font-bold">
          AS Portfolio
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
    </div>
  
  </nav>
}

export default Navbar