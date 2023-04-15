import React from 'react'

const HomePageProductFeatures = ({imgsrc,numOfProducts, productLists, title, subtitle}) => {
  return (
    <div class="relative ">
    <img src={imgsrc} alt="free shipping" className=' absolute'/>
    <div className='relative z-50 p-10'>
      <p className='text-[#000000] text-xs font-normal'>{numOfProducts} products</p>
      <p className='text-[#E69458] text-[28px] font-normal'>{title}</p>
      <p className='text-xs font-normal text-gray-700 w-[313px] leading-6'>{subtitle}</p>
      <ul className='mt-5'>
      { productLists?.map((product) => <li className='text-sm leading-5 font-normal my-4'>{product}</li>)}
      </ul>
      
    </div> 
     </div>
  )
}

export default HomePageProductFeatures