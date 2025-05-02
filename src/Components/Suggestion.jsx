import React from 'react'
import { BsArrowUpSquareFill } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";
import logiss from '../assets/frames.png'
import logissTwo from '../assets/frameOne.png'
import { CiRepeat } from "react-icons/ci";
import { AiFillDislike ,AiFillLike } from "react-icons/ai";
import { GiSpeaker } from "react-icons/gi";
import { IoMdListBox } from "react-icons/io";

const Suggestion = () => {
  return (
    <div className=' bg-[#002868]'>
      <div className=" container">
        <div className="">
            <h4 className=' font-marn-sans font-normal text-[24px] text-[#FCE38A]'>Live Ai Coach</h4>
            <h2 className=' font-marn-sans font-normal text-[40px] text-[#FFFF]'>Take a Suggestion Coaching </h2>
        </div>
        <div className=" flex justify-between items-center gap-x-4">
            <div className="w-[55%]">
                <div className=" bg-[#CDCDCD]">
                    <div className=" bg-white py-3 pl-[20px]  rounded-[10px]">
                    <h4 className=' font-marn-sans font-medium text-[18px] text-[#1B1B1B]'>AI Sales Coach</h4>
                    </div>
                    <div className=" flex items-center gap-2 pt-2 pb-[200px]">
                        <div className="bg-[#878C91] rounded-[50px] w-[50px] h-[50px]"></div>
                        <div className="">
                            <h3 className=' text-[16px] text-[#181818] font-marn-sans font-normal bg-white rounded-[10px] p-[10px]'>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</h3>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center gap-x-3">
                        <div className="  ">
                            <h5 className=' font-marn-sans font-light text-[14px] text-[#002868] bg-[#00286814] p-[5px] rounded-[4px] text-center'>How do I handle objections?</h5>
                        </div>
                        <div className="  ">
                            <h5 className=' font-marn-sans font-light text-[14px] text-[#002868] bg-[#00286814] p-[5px] rounded-[4px] text-center'>How do I handle objections?</h5>
                        </div>
                        <div className="  ">
                            <h5 className=' font-marn-sans font-light text-[14px] text-[#002868] bg-[#00286814] p-[5px] rounded-[4px] text-center'>How do I handle objections?</h5>
                        </div>
                        <div className="  ">
                            <h5 className=' font-marn-sans font-light text-[14px] text-[#002868] bg-[#00286814] p-[5px] rounded-[4px] text-center'>How do I handle objections?</h5>
                        </div>
  
                        
                    </div>
                    <div className=" flex gap-x-4 items-center">
                        <input type="text" name="Ask anything you need" className=' w-[70%] text-black h-[50px]' id="" />
                        <button className=' flex gap-x-1 items-center border-[2px] border-black p-[8px] text-white rounded-[10px] bg-black'>sent <span><BsArrowUpSquareFill/></span></button>
                    </div>
                </div>
            </div>
            <div className="w-[15%]">
                <div className=" bg-white p-[30px] rounded-[10px]">
                    <CiRepeat className=' flex justify-center text-[25px]  my-[10px]'/>
                    <AiFillLike className=' flex justify-center text-[25px]  my-[10px]' />
                    <AiFillDislike className=' flex justify-center text-[25px]  my-[10px]'/>
                    <IoMdListBox className=' flex justify-center text-[25px]  my-[10px]'/>
                    <GiSpeaker className=' flex justify-center text-[25px]  my-[10px]'/>
                </div>
            </div>
            <div className="w-[40%]">
                      <div className="">

                          <div className="">
                              <h3 className=' font-marn-sans font-medium text-[32px] text-[#323232]'>Real-time Analysis</h3>
                          </div>
                          <div class="w-full bg-gray-200 rounded-[10px] my-[30px]">
                            <h2 className=' font-marn-sans font-medium text-[18px] text-[] flex gap-x-3 items-center '> <FaCheckSquare className=' text-green-500'/> Confidence Level</h2>
                              <div class="bg-[#44D618] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-[10px]" > 45%</div>
                          </div>


                      </div>
                <div className="">
                    <div className=" bg-white rounded-[10px] my-[30px]">
                        <h2 className=' font-marn-sans font-medium text-[19px] text-[#323232]'>Confidence Level</h2>
                        <p className=' font-marn-sans font-normal text-[15px] text-[#323232]'>85% improvement in objection handling</p>
                    </div>
                </div>
                <div className=" bg-[#EFEFEF] rounded-[10px] p-[20px]">
                    <h3 className=' font-marn-sans font-medium text-[24px] text-[#323232] '>Quick Actions</h3>
                    <div className=" flex gap-x-3">
                        <div className=" bg-white rounded-[10px] p-3">
                            <img src={logiss} alt="" />
                            <h4 className=' text-[18px] text-[#171D25] font-marn-sans font-normal'>Generate Script</h4>
                        </div>
                        <div className=" bg-white rounded-[10px] p-3">
                            <img src={logiss} alt="" />
                            <h4 className=' text-[18px] text-[#171D25] font-marn-sans font-normal'>Generate Script</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
