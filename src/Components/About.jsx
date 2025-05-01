import React from 'react'
import aboutOne from '../assets/aboutome.png'
import aboutTwo from '../assets/aboutTwo.png'
import aboutThree from '../assets/aboutThree.png'
import aboutFure from '../assets/aboutFure.png'

const About = () => {
  return (
    <div className=' container'>
      <div className=" flex justify-between items-center">
        <div className="w-[50%]">
            <div className="">
                <div className="">
                    <h3 className=' font-marn-sans text-[60px] text-[#111111] font-normal '>Your AI-Powered Sales Coach</h3>
                    <div className=" flex justify-between items-center">
                        <div className="w-[50%]">
                            <img src={aboutOne} alt="" />
                        </div>
                        <div className="w-[50%]">
                            <p className=' font-marn-sans text-[20px] font-light text-S-black'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center gap-x-7">
                        <div className="w-[50%]">
                            <div className=" flex justify-between items-center">
                                <img src={aboutTwo} alt="" />
                                <div className="">
                                    <h6 className=' font-marn-sans font-medium text-[40px] text-[#05131D]'>2000+</h6>
                                    <p className='font-marn-sans text-[#05131DB2] font-light text-[20px]'>Your protection</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                        <div className=" flex justify-between items-center">
                                <img src={aboutThree} alt="" />
                                <div className="">
                                    <h6 className=' font-marn-sans font-medium text-[40px] text-[#05131D]'>7001+</h6>
                                    <p className=' font-marn-sans text-[#05131DB2] font-light text-[20px]'>Provide tailored</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[50%]">
            <div className="">
                <div className=" flex justify-end relative">
                    <div className=" w-[380px] h-[428px] flex justify-end ">
                        <img src={aboutFure} className=' w-full h-full' alt="" />
                    </div>
                    <div className=" absolute bottom-[-60px] left-[20px]">
                        <div className=" bg-white h-[250px] w-[300px] rounded-[10px] p-[20px]">
                          <div className=" flex justify-between items-center">
                            <h2 className=' font-marn-sans  font-semibold text-[50px] text-[#00245F]'>721+</h2>
                            <h2 className=' font-marn-sans  font-semibold text-[50px] text-[#00245F]'>1000+</h2>
                        </div>
                        <h5 className=' font-marn-sans font-medium text-[23px] text-[#05131D]'>Growth is our priority.</h5>
                        <p className=' font-Dm-sans font-light text-[16px] text-[#05131DB2]'>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
