import React, { useState } from 'react';
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";

const Frequently = () => {
  const faqs = [
    {
      number: "01",
      question: "Why should I choose Humestic?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      number: "02",
      question: "I like your works, how do we start a project?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      number: "03",
      question: "What info is required to get a quotation?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
    <div className=" container">
    <div  className="my-12 px-4 lg:px-0">
      <div className="">
        <div className=' flex justify-between gap-x-4'>
          <h2 className=" font-marn-sans font-normal text-[20px] text-[#001C4A]">
            Frequently asked questions
          </h2>
            <h3 className=' font-marn-sans font-semibold text-[40px] text-[#111111]'>Constant collaboration is how we roll. Let's see if we are a good fit.</h3>
        </div>

        <div className=" ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center px-4 py-4 cursor-pointer bg-white"
                onClick={() => toggleAccordion(index)}
              >
                <a
                  href="#"
                  className="text-[#2405F2] text-[20px] md:text-[24px] font-medium mr-4"
                >
                  {faq.number}
                </a>
                <h2 className="text-[40px] md:text-[24px] font-medium text-black m-0">
                  {faq.question}
                </h2>
              </div>
              {openIndex === index && (
                <div className="bg-white px-6 pb-4">
                  <p className="ml-10 text-[14px] md:text-[15px] lg:text-[18px] font-medium text-black opacity-90">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="">
        <div className="">
            <h6 className=' font-marn-sans font-medium text-[30px] text-[#010205]'>“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</h6>
        </div>
        <div className=" flex justify-between items-center">
            <div className="w-[50%]">
                <div className=" flex items-center gap-x-4">
                    <div className=" bg-[#878C91] rounded-[50px] w-[100px] h-[100px]">
                        <h5></h5>
                    </div>
                    <div className="">
                        <h4 className=' font-marn-sans font-semibold text-[20px] text-[#010205]'>Michael Kaizer</h4>
                        <p className=' font-marn-sans font-normal text-[20px] text-[#878C91]'>CEO of Basecamp Corp</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%]">
                <div className=" flex justify-between items-center">
                    <div className=" border-[1px] border-[#00245F] py-[8px] px-[12px] rounded-[4px] hover:bg-[#00245F] hover:text-[#FFFF] duration-200">
                        <samp><FaArrowLeft/></samp>
                    </div>
                    <div className=" font-marn-sans font-medium text-[20px] text-[#00245F]">01/05</div>
                    
                    <div className=" border-[1px] border-[#00245F] py-[8px] px-[12px] rounded-[4px] hover:bg-[#00245F] hover:text-[#FFFF] duration-200">
                        <samp><FaArrowRight/></samp>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   </>
  );
};

export default Frequently;
