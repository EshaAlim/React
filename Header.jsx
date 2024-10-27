
import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="h-14 bg-[#677876] text-[#fff] flex justify-center items-center">
  
    <ul className='flex  gap-5 h-9  text-[8px] font-sans h-14 bg-[#19534e]  py-2  px-8  my-5 rounded-full  border  border-[#2B2D3B]  '>
      <li><NavLink to='/' className={({ isActive }) => (` ${isActive ? 'bg-[#19534e] rounded-full px-2 py-1 text-xs  hover:text-black' : 'text-xs '} `)}>Home</NavLink></li>
      <li><NavLink to='/blog' className={({ isActive }) => (` ${isActive ? 'bg-[#19534e] rounded-full px-2 py-1 text-xs   hover:text-black' : 'text-xs '} `)}>Blog</NavLink></li>
      <li><NavLink to='/contact' className={({ isActive }) => (` ${isActive ? 'bg-[#19534e] rounded-full px-2 py-1 text-xs  hover:text-black' : 'text-xs '} `)}>Contact Us</NavLink></li>
      <li><NavLink to='/about' className={({ isActive }) => (` ${isActive ? 'bg-[#19534e] rounded-full px-2 py-1 text-xs   hover:text-black' : 'text-xs'} `)}>About Us</NavLink></li>
      <li><NavLink to='/github/:username' className={({ isActive }) => (` ${isActive ? 'bg-[#19534e] rounded-full px-2 py-1 text-xs  hover:text-black' : 'text-xs'} `)}>GitHub</NavLink></li>
    </ul>

  </div>
  )
}
