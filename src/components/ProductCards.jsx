import React from 'react'
import testimage from '../assets/testimage.png'
import testimage2 from '../assets/test-image2.png'
import testimage3 from '../assets/test-image3.png' 
import testimage4 from '../assets/test-image4.png'
import { AiFillStar} from "react-icons/ai";
import {BiRupee} from "react-icons/bi";
const ProductCards = () => {
  return (
    <>
    {/* 1st card */}
  <div>
    <img src={testimage2} alt='mainimage' />
    <p className='text-sm leading-4 text-black font-medium py-1'>Basic Colored Sweatpants With Elastic Hems</p>
   <div className='flex gap-2 items-center my-2'>
   <div className='flex bg-[#E69458] items-center w-max py-[0.15rem] rounded-sm px-2'>
        <span className=' text-white text-[13px]'>3.2 </span>
        <AiFillStar fill='#ffffff'/> 
    </div>
    <span className='text-gray-400'>(1,592)</span>
   </div>
   <div className='flex text-sm items-center gap-2'>
   <span className='text-gray-400 flex items-center'><BiRupee/> <span>1,592</span></span>
   <span className='text-gray-400 line-through flex items-center'><BiRupee/><span>1,592</span></span>
   <span className='text-gray-400'>24% off</span>
   </div>
  </div>
  {/* 2nd card */}
  <div>
    <img src={testimage3} alt='mainimage' />
    <p className='text-sm leading-4 text-black font-medium py-1'>Basic Colored Sweatpants With Elastic Hems</p>
   <div className='flex gap-2 items-center my-2'>
   <div className='flex bg-[#E69458] items-center w-max py-[0.15rem] rounded-sm px-2'>
        <span className=' text-white text-[13px]'>3.2 </span>
        <AiFillStar fill='#ffffff'/> 
    </div>
    <span className='text-gray-400'>(1,592)</span>
   </div>
   <div className='flex text-sm items-center gap-2'>
   <span className='text-gray-400 flex items-center'><BiRupee/> <span>1,592</span></span>
   <span className='text-gray-400 line-through flex items-center'><BiRupee/><span>1,592</span></span>
   <span className='text-gray-400'>24% off</span>
   </div>
  </div>
  {/* 3rd card */}
  <div>
    <img src={testimage4} alt='mainimage' />
    <p className='text-sm leading-4 text-black font-medium py-1'>Basic Colored Sweatpants With Elastic Hems</p>
   <div className='flex gap-2 items-center my-2'>
   <div className='flex bg-[#E69458] items-center w-max py-[0.15rem] rounded-sm px-2'>
        <span className=' text-white text-[13px]'>3.2 </span>
        <AiFillStar fill='#ffffff'/> 
    </div>
    <span className='text-gray-400'>(1,592)</span>
   </div>
   <div className='flex text-sm items-center gap-2'>
   <span className='text-gray-400 flex items-center'><BiRupee/> <span>1,592</span></span>
   <span className='text-gray-400 line-through flex items-center'><BiRupee/><span>1,592</span></span>
   <span className='text-gray-400'>24% off</span>
   </div>
  </div>
  {/* 4th card */}
  <div>
    <img src={testimage} alt='mainimage' />
    <p className='text-sm leading-4 text-black font-medium py-1'>Basic Colored Sweatpants With Elastic Hems</p>
   <div className='flex gap-2 items-center my-2'>
   <div className='flex bg-[#E69458] items-center w-max py-[0.15rem] rounded-sm px-2'>
        <span className=' text-white text-[13px]'>3.2 </span>
        <AiFillStar fill='#ffffff'/> 
    </div>
    <span className='text-gray-400'>(1,592)</span>
   </div>
   <div className='flex text-sm items-center gap-2'>
   <span className='text-gray-400 flex items-center'><BiRupee/> <span>1,592</span></span>
   <span className='text-gray-400 line-through flex items-center'><BiRupee/><span>1,592</span></span>
   <span className='text-gray-400'>24% off</span>
   </div>
  </div>
  {/* 4th card ends here */}
    </>
  )
}

export default ProductCards