import React, { useEffect, useState } from 'react'
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import navLogo from '../assets/logo.png'


const Navbar = () => {
  let [show, setShow] = useState(false);
  return (
    
    <>
     <div  className={`lg:py-[15px] py-[20px] dark:bg-white dark:text-white bg-black lg:h-auto   duration-300 ${show ? 'min-h-[300px]' : ''}`}>
            <div className="container">
                <div className="flex justify-between items-center py-[30px] lg:py-0">
                    <div className={`w-[20%] lg:static cursor-pointer absolute duration-300 ${show ? 'top-[250px]' : 'top-[30px]'}`}>
                        
                        <img src={navLogo} alt="" />
                    </div>

                    <div className={`w-[85%] lg:flex justify-between items-center absolute lg:static duration-300 ${show ? 'top-0 right-0 dark:bg-white bg-black w-full' : 'top-[-300px] right-0 w-full'}`}>
                        <div className="lg:w-[70%]">
                            <ul className='lg:flex lg:gap-x-[40px] justify-center my-4 lg:my-0 text-center lg:text-start'>
                            <li className=' font-Dm-sans font-normal text-[14px] text-S-black'>Home</li>
                         <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>About</li>
                      <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Pricing</li>
                         <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Consulting</li>
                       <li  className=' font-Dm-sans font-normal text-[14px] text-S-black'>Ai Coach</li>
                                <div className=' text-center lg:text-start my-2 lg:my-0'>
                                
                                </div>
                            </ul>
                        </div>

                        
                       

                        <div className="lg:w-[20%] text-center lg:my-0 my-3 ">
                            <button className='py-[10px] px-[30px] border-[1px] border-black rounded-[20px] font-marn-sans text-[16px] text-S-black'>
                            Get started
                            </button>
                        </div>
                    </div>

                 
                    <div onClick={() => setShow(!show)} className={`lg:hidden text-white dark:text-black absolute cursor-pointer right-[10px] duration-300 ${show ? 'top-[250px]' : 'top-[40px]'}`}>
                        {show ? <HiMiniBarsArrowUp className='text-[30px]' /> : <HiMiniBarsArrowDown className='text-[30px]' />}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
