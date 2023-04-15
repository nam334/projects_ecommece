import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/home/FreeShipping.png'
import img2 from '../assets/home/MoneyGuarantee.png'
import img3 from '../assets/home/OnlineSupport.png'
import img4 from '../assets/home/FlexiblePayment.png'
import img5 from '../assets/home/banner-11.jpg.png'
import img6 from '../assets/home/banner-12.jpg.png'
import img7 from '../assets/home/banner-13.jpg.png'
import img8 from '../assets/home/banner-14.jpg.png'
import p1 from '../assets/home/img1.png'
import p2 from '../assets/home/img2.png'
import p3 from '../assets/home/img3.png'
import p4 from '../assets/home/banner-22.jpg.png'
import p5 from '../assets/home/banner-23.jpg.png'
import HomePageFeatures from '../components/HomePageFeatures'
import HomePageProductFeatures from '../components/HomePageProductFeatures'
import ProductCard from '../components/ProductCard'
import Banner from '../components/Banner'

const Home = () => {
  return (
   <>
   <Navbar/>
   <div class="grid grid-cols-4 gap-4 px-10">
  <div>
   <HomePageFeatures title='Free Shipping' imgsrc={img1} subtitle='Free Shipping for orders over £130.' />
  </div>
  <div>
  <HomePageFeatures title='Money Guarantee' imgsrc={img2} subtitle='Within 30 days for an exchange.' />
  </div>
  <div>
  <HomePageFeatures title='Online Support' imgsrc={img3} subtitle='Within 30 days for an exchange.' />
  </div>
  <div>
  <HomePageFeatures title='Flexible Payment' imgsrc={img4} subtitle='Pay with Multiple Credit Cards.' />
  </div>
</div>


<div class="grid grid-rows-2 h-auto">
<div>
<div class="grid grid-cols-4 gap-4 px-10 my-4">
 <div class="col-span-2 ...">
   <HomePageProductFeatures imgsrc={img5} 
   numOfProducts='53'
   title='Women'
   subtitle='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
   productLists={["Blazers","Blouses & shirts","Dresses","Jackets & coats","Jeans","Knit","Pants"]}/>
  </div>
  <div class="col-span-2 ...">
    <div className="">
    <HomePageProductFeatures imgsrc={img6}
      numOfProducts='23'
      title='Men'
      subtitle=''
     productLists={["Pants","Shirts","Shorts","Sweatshirts & Hoodies"]}/>
    </div>
    <div class="grid grid-cols-4 ">
    <div class="col-span-2">
    <HomePageProductFeatures imgsrc={img7}
      numOfProducts='2'
      title='Shoes'
      subtitle=''
    />
    </div>
  <div class="col-span-2">
  <HomePageProductFeatures imgsrc={img8}
      numOfProducts='3'
      title='Accessories'
      subtitle=''
     />
  </div>
    </div>
  </div>
</div>
</div>

<div class=" mt-[150px] flex items-center justify-center px-5">
<div class="grid grid-cols-4 gap-4 px-10 ">
  <p className='text-[#294850] text-xl my-8 col-span-1 font-medium'>Featured Products</p>
  <p className='font-light text-[17px] my-8 col-span-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
</div>
</div>
<div class="grid grid-cols-3 gap-4 px-5">
<div>
  <div>
   <ProductCard imgsrc={p3} title="Basic Colored Sweatpants With Elastic Hems" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
  </div>
</div>
<div>
<ProductCard imgsrc={p1} title="Basic High-Neck Puff Jacket" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
</div>
<div> 
<ProductCard imgsrc={p2} title="Basic Relax Fit Leggings" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
</div>
</div>
<div className='banners'>
<div class="grid grid-cols-4 grid-flow-col gap-4">
  <div className='col-span-2'>
    <Banner imgsrc={p4} title='NEW SEASON' subtitle='Show your best jewellery of your life' 
    tagline='Dont miss the opportunity.' cta='Shop Now' />
  </div>
  <div className='col-span-2'>
    
  </div>
</div>
</div>
<div className='px-5'>
<p className='text-[#294850] text-xl my-8 col-span-1 font-medium px-5'>Our Top Seller Brands</p>
<div className='grid grid-cols-4 gap-4 px-5'>
<div>
  <div>
   <ProductCard imgsrc={p3} title="Basic Colored Sweatpants With Elastic Hems" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
  </div>
</div>
<div>
<ProductCard imgsrc={p1} title="Basic High-Neck Puff Jacket" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
</div>
<div>
<ProductCard imgsrc={p2} title="Basic Relax Fit Leggings" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
</div>
<div>
<ProductCard imgsrc={p2} title="Basic Relax Fit Leggings" rating="3.7" 
   numOfReviews="1,592" discountedPrice="19.90" totalPrice="25.90" discount="24" />
</div>
</div>

</div>
</div>

   </>
  )
}

export default Home