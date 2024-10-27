import React from 'react'
import { TiSocialFacebook,TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbBrandInstagram } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="bg-[#677876] text-[#999AA1] ">
        <hr className='border-[#999AA1] py-2'/>
    <div className= "flex justify-center gap-16 text-[8px] font-sans leading-loose  ">
   
      <div>
     
        <h1 className='  text-white text-xs font-semibold'> QuilCoders.</h1>
        <p className='pb-2 hover:text-white'>Faisalabad, Punjab, Pakistan</p>
        <hr className='border-[#999AA1]' />
        <div className="pt-3 flex justify-center gap-3">
        <p className=' hover:text-white cursor-pointer'><TiSocialLinkedin /></p>
        <p  className=' hover:text-white cursor-pointer'><TiSocialFacebook /></p>
        <p  className=' hover:text-white cursor-pointer'><AiOutlineTwitter /></p>
        <p  className=' hover:text-white cursor-pointer'><TbBrandInstagram /></p>
       <p  className=' hover:text-white cursor-pointer'><BiLogoGmail /></p> 
       </div>
      </div>
      <div>

        <h1  className='font-bold '> Services</h1>
        <p  className=' hover:text-white cursor-pointer' >Branding</p>
        <p  className=' hover:text-white cursor-pointer'>Design</p>
        <p  className=' hover:text-white cursor-pointer'>Marketing</p>
        <p  className=' hover:text-white cursor-pointer'>Advertisement</p>
      </div>
      <div >

        <h1  className='font-bold '> Companies</h1>
        <p  className=' hover:text-white cursor-pointer'>About us</p>
        <p  className=' hover:text-white cursor-pointer'>Contact</p>
        <p  className=' hover:text-white cursor-pointer'>Blogs</p>
        <p  className=' hover:text-white cursor-pointer'>Press kit</p>
      </div>
      <div >
        
        <h1  className='font-bold'>Legal</h1>
        <p  className=' hover:text-white cursor-pointer'>Terms of use</p>
        <p  className=' hover:text-white cursor-pointer'>Privacy policy</p>
        <p  className=' hover:text-white cursor-pointer'>Cookie policy</p>
        <p  className=' hover:text-white cursor-pointer'>Jobs</p>
      </div>
      
      </div>
      <div className='items-center text-center  text-[10px] font-sans py-2'>Copyright © 2024 - All right reserved by Quilcoders Ltd</div>
    </div>
  )
}
