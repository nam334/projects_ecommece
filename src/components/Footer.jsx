import React from 'react'
import btn1 from '../assets/btn1.png'
import btn2 from '../assets/btn2.png'
import logo from '../assets/logo.png'
import fb from '../assets/fb.png'
const Footer = () => {
  return (
    <>
    <div className='bg-[#E69458] mt-10'>
    <div class="grid grid-cols-2 gap-4">
  <div class="py-10 px-[7rem]">
    <p className='text-[#294850] font-medium text-xl'>Get our emails for info on <br/>new items, sales and more.</p>
    <p className='text-white text-xs py-4'>We'll email you a voucher worth £10 off your first order over £50.</p>
    <form className='flex py-4'>
        <input type='email' className='py-2 w-80 px-4 text-sm' placeholder='Enter your email address'/>
        <button className='bg-[#294850] text-sm py-1 px-4 text-white'>Subscribe</button>
    </form>
    <p className='text-[#294850] text-xs font-medium'>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
  </div>
  <div class="py-10 px-[7rem]">
    <p className='text-[#294850] font-medium text-xl'>Need help? <br/> (+800) 1234 5678 90</p>
    <p className='text-white text-xs py-4'>We are available 8:00am – 7:00pm</p>
    <form className='flex py-4'>
        <img src={btn1} alt="app store"/>

        <img src={btn2} alt='google play button'/>
    </form>
    <p className='text-[#294850] text-xs font-medium'>Shopping App: Try our View in Your Room feature, manage registries and save payment info.</p>
  </div>
 
 
</div>
    </div>

    <div class="grid grid-cols-7 gap-4">
    <div className='col-span-2 flex flex-col py-10 pl-[7rem]'>
    <img src={logo} alt='logo'/>
    <p className='text-[10px] leading-5 text-[#294850]'>Adderss: Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.</p>
    <p  className='text-[10px] leading-5 text-[#294850] my-4'>(+800) 1234 5678 90 – info@example.com</p>
    </div>
    <div className='col-span-3 py-20 mt-7 px-2'>
    <div class="grid grid-cols-4 gap-3 text-[10px] text-[#294850]">
    <div>Contact Us</div>
    <div>About Us</div>
    <div>Shipping</div>
    <div>Cancellation & Refund</div>
    <div>FAQs</div>
    <div>Terms & Conditions</div>
    <div>Privacy Policy</div>
    <div>Site-map</div>
    </div>
    </div>
    <div className='col-span-2 py-20 mt-5 flex flex-col items-center'>
      <p className='text-[#E69458] text-sm'>SOCIAL</p>
      <img src={fb} alt="app store" className='py-2'/>
    </div>
    </div>
    </>
  )
}
 
export default Footer