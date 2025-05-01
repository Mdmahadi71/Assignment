import React from 'react'
import navLogo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=" container py-6">
      <div className=" flex justify-between items-center">
        <div className=" w-[60%]">
            <div className=" flex justify-between items-center ">
            <div className="w-[25%]">
                <img src={navLogo} alt="" />
            </div>
            <div className="w-[70%]">
                <div className="">
                    <ul className=' flex justify-between gap-2'>
                        <li className=' font-Dm-sans font-normal text-[14px] text-S-black'>Home</li>
                        <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>About</li>
                        <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Pricing</li>
                        <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Consulting</li>
                        <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Ai Coach</li>
                    </ul>
                </div>
            </div>
            </div>
            
        </div>
        <div className=" w-[40%]">
            <div className=" text-end">
                <button className=' py-[10px] px-[30px] border-[1px] border-black rounded-[20px] font-marn-sans text-[16px] text-S-black'>Get started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
