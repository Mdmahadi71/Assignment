import React from 'react'
import foterLogo from '../assets/foter.png'
import { FaFacebookSquare ,FaTwitter ,FaLinkedin ,FaInstagramSquare ,FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Foter = () => {
  return (
    <div>
      <div className=" container">
         <div className=" lg:flex justify-between items-center gap-x-7">
            <div className="lg:w-[40%]">
                <div className="">
                    <img src={foterLogo} className=' flex lg:justify-start justify-center my-5' alt="" />
                    <div className="">
                        <p className=' font-marn-sans font-light text-[14px] text-[#335386] lg:text-start text-center'>SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>
                        <div className=" flex lg:gap-x-5 justify-between items-center lg:my-3 my-5">
                            <FaFacebookSquare/>
                            <FaTwitter />
                            <FaLinkedin/>
                            <FaInstagramSquare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <div className=" flex justify-between lg:gap-x-7 gap-3 ">
                    <div className="">
                        <ul>
                            <li><a href="" className=' font-marn-sans font-medium text-[18px] text-[#001C4A] my-[15px] gap-x-2'>Navigation</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Service</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Agency</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Case Study</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Resource</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li><a href="" className=' font-marn-sans font-medium text-[18px] text-[#001C4A] my-[15px] gap-x-2'>Licence</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Privacy Policy</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Copyright</a></li>
                            <li><a href="" className=' font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'>Email Address</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li><a href="" className=' font-marn-sans font-medium text-[18px] text-[#001C4A] my-[15px] gap-x-2'>Contact</a></li>
                            <li><a href="" className=' flex gap-x-2 items-center font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'><FaPhoneAlt /> (406) 555-0120</a></li>
                            <li><a href="" className=' flex gap-x-2 items-center font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'><MdEmail /> Hey@boostim.com</a></li>
                            <li><a href="" className=' flex gap-x-2 items-center font-marn-sans font-light text-[14px] text-[#335386] my-[10px]'><FaLocationDot /> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Foter
