import React from 'react'

const HomePageFeatures = ({title,imgsrc, subtitle}) => {
  return (
    <>
     <div className="flex items-center">
    <img src={imgsrc} alt="free shipping" className='h-10'/>
    <div className='w-40 p-3'>
        <p className='text-[13px] font-medium leading-5'>{title}</p>
        <p className='text-[#75767C] text-xs font-light my-1'>{subtitle}</p>
    </div>
    </div> 
    </>
  )
}

export default HomePageFeatures