import React from 'react'
import { AiFillStar} from "react-icons/ai";
import {BiRupee} from "react-icons/bi";
const ProductCard = ({imgsrc, title, rating, numOfReviews,discountedPrice,totalPrice, discount}) => {
  return (
    <div>
    <img src={imgsrc} alt='mainimage' className='w-[400px] h-[600px]' />
    <div className='flex justify-center items-center'>
    <div className='bg-white relative z-40 w-[380px] -mt-10 px-10 py-2'>
    <p className='text-xs leading-4 text-black font-medium py-1'>
        {title}</p>
   <div className='flex gap-2 items-center my-2'>
   <div className='flex bg-[#E69458] items-center w-max py-[0.15rem] rounded-sm px-2'>
        <span className=' text-white text-[13px]'>{rating}</span>
        <AiFillStar fill='#ffffff'/> 
    </div>
    <span className='text-gray-400'>({numOfReviews})</span>
   </div>
   <div className='flex text-sm items-center gap-2'>
    <span className='text-gray-400 flex items-center'><BiRupee/> <span>{discountedPrice}</span></span>
    <span className='text-gray-400 line-through flex items-center'><BiRupee/><span>{totalPrice}</span></span>
   <span className='text-gray-400'>{discount}% off</span>
   </div>
  </div>
    </div>
</div>
  )
}

export default ProductCard