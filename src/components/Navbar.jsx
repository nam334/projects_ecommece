import React from 'react'
import logo from '../assets/logo.png'
import notification from '../assets/Notification.png'
import { AiOutlineSearch ,AiOutlineShoppingCart} from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
        <div className='bg-[#E69458] p-2'>
            <h5 className='text-[#294850] text-xs font-normal leading-4 text-center'>
                SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <span className='font-bold'>SHOP NOW</span></h5>
        </div>
        
        <nav className="bg-[#ffffff]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div> */}
      <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="" src={logo} alt="Logo"/>
         
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <a href="#" className="text-[#294850] uppercase rounded-md px-3 py-2 text-sm font-medium" 
            aria-current="page">Home</a>

            <a href="#" className="text-[#294850]  rounded-md px-3 uppercase
             py-2 text-sm font-medium">About</a>

            <a href="#" className="text-[#294850] uppercase hover:bg-gray-700 hover:text-white rounded-md px-3 
            py-2 text-sm font-medium">Shop</a>

            <a href="#" className="text-[#294850] uppercase hover:bg-gray-700 hover:text-white rounded-md
             px-3 py-2 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="rounded-md text-sm py-2 px-4 font-semibold bg-[#E69458]  text-white
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
         focus:ring-offset-gray-800">
         Login
        </button>
        <button type="button" className="rounded-md text-sm py-2 px-4 font-semibold  text-[#294850] 
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
         focus:ring-offset-gray-800">
         Sign up
        </button>
        <AiOutlineSearch fill='#E69458' className='mx-2'/>
        <img src={notification} alt="notification"  className='mx-2'/>
        <AiOutlineShoppingCart fill='#E69458'  className='mx-2'/>
        
        {/* <div className="relative ml-3">
          <div>
            <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  </div>

  
  {/* <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
    
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div> */}
</nav>


    </div>
  )
}

export default Navbar