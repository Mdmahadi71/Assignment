import React from 'react'
import imageOne from '../assets/imageOne.png'
import imageTwo from '../assets/imageTwo.png'

const Courses = () => {
  return (
    <div className=' py-[50px]'>
      <div className=" container">
        <h2 className=' font-semibold font-marn-sans text-[48px] text-[#262626] '>Our Courses</h2>
        <div className=" flex justify-between items-center">
           <div className=" w-[70%]">
           <h4>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</h4>
           </div>
            <button className=' py-[13px] px-[17px] border-[1px] border-[#002868] rounded-[10px] bg-[#002868] text-[18px] font-marn-sans font-normal text-[#FFFF] '>View All</button>
        </div>
        <div className=" flex justify-between items-center gap-x-3 my-3">
            <div className="w-[50%]">
                <div className=" bg-[#F0F0F0] p-[40px] rounded-[10px]">
                    <img src={imageTwo} alt="" />
                    <div className=" flex justify-between items-center my-3" >
                        <div className=" flex items-center gap-x-4">
                            <h2 className=' border-[1px] border-[#FFFF] bg-white p-[8px] rounded-[4px] font-marn-sans font-light text-[18px] text-[#4C4C4D] '>4 Weeks</h2>
                            <h2 className=' border-[1px] border-[#FFFF] bg-white p-[8px] rounded-[4px] font-marn-sans font-light text-[18px] text-[#4C4C4D] '>4 Weeks</h2>
                        </div>
                        <div className="">
                            <p className=' font-marn-sans font-medium text-[20px] text-[#262626]'>By John Smith</p>
                        </div>
                    </div>
                    <h2 className=' font-marn-sans font-medium text-[24px] text-[#262626] py-[15px]'>Web Design Fundamentals</h2>
                    <p className=' w-[80%] font-marn-sans font-light text-[16px] text-[#4C4C4D]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <div className="border-[1px] border-[#002868] w-full text-center py-[10px] bg-[#002868] my-3 rounded-[7px]">
                        <a href="" className=' font-marn-sans font-normal text-[18px] text-[#FFFFFF]'>Get it Now</a>
                        
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <div className=" bg-[#F0F0F0] p-[40px] rounded-[10px]">
                    <img src={imageOne} alt="" />
                    <div className=" flex justify-between items-center my-3" >
                        <div className=" flex items-center gap-x-4">
                            <h2 className=' border-[1px] border-[#FFFF] bg-white p-[8px] rounded-[4px] font-marn-sans font-light text-[18px] text-[#4C4C4D] '>4 Weeks</h2>
                            <h2 className=' border-[1px] border-[#FFFF] bg-white p-[8px] rounded-[4px] font-marn-sans font-light text-[18px] text-[#4C4C4D] '>4 Weeks</h2>
                        </div>
                        <div className="">
                            <p className=' font-marn-sans font-medium text-[20px] text-[#262626]'>By John Smith</p>
                        </div>
                    </div>
                    <h2 className=' font-marn-sans font-medium text-[24px] text-[#262626] py-[15px]'>Web Design Fundamentals</h2>
                    <p className=' w-[80%] font-marn-sans font-light text-[16px] text-[#4C4C4D]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                    <div className="border-[1px] border-[#002868] w-full text-center py-[10px] bg-[#002868] my-3 rounded-[7px]">
                        <a href="" className=' font-marn-sans font-normal text-[18px] text-[#FFFFFF]'>Get it Now</a>
                        
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Courses
