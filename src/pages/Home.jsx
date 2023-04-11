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

import HomePageFeatures from '../components/HomePageFeatures'
import HomePageProductFeatures from '../components/HomePageProductFeatures'

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
   </>
  )
}

export default Home