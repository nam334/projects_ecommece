import React, { useState } from 'react'


import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductCards from '../components/ProductCards'
import Footer from '../components/Footer'

const HomePage = () => {
    const [sortdropdown, setSortDropdown] =  useState(false)
  return (
   <>
   <Navbar/> 


   {/* <div class="grid grid-cols-6 gap-4"> */}
   <div class="col-start-2 col-span-4 mt-10 ...">
   <div className="grid grid-cols-4 ">
   <div className="...">
    <Sidebar/>
   </div>
   <div className="col-span-3">
    <div className='bg-[#E69458] p-16 mx-6'>
    <h1 className='text-[#294850] text-[34px] w-72  leading-10 font-normal'>Plus-Size Styles for Every Season</h1>
    <p className='my-4 text-gray-300 w-72 font-normal'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
    </div>
    <div className='flex justify-around items-center'>
     <p className='text-xs font-normal'>Showing 1–16 of 72 results</p>
     <div>
     <div class="relative inline-block text-left py-5">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5  
    text-[#E69458] rounded-md bg-white px-3
     py-2 text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300 mx-6
      hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" 
      onClick={()=>setSortDropdown(prev => !prev)}>
      Options
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {
    sortdropdown &&  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md mx-3
   bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" class="text-[#E69458] block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-[#E69458] block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-[#E69458] block px-4 py-2 text-xs" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
    </div>
  </div>
  }
</div>

     </div>
    </div>
  {/* </div> */}
  <div class="grid grid-cols-4 gap-4 p-5">
    <ProductCards/>
    <ProductCards/>
    <ProductCards/>
    <ProductCards/>
</div>
   </div>
   </div>
   <Footer/>
   </div>
   </>
  )
}

export default HomePage