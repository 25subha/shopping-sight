import React from 'react';
import CategoryCard from '../components/CategoryCard';
import TopproductCard from '../components/TopproductCard';

const Home = () => {
  return (
    
    <main className="px-12 py-8 p">

  <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[400px]  w-auto p-8'>
       <div className='flex'>
       <div className=''>
       <img className='pt-[39px]' src="/image/girlimg.png"  alt="girl image" />
       </div>
        <div>
        <h1 className='text-[48px] font-bold text-white text-wrap'>Welcome to smart mobile zone </h1>
        <h2 className='text-[20px] text-lg text-wrap pt-4 text-yellow-100'>Get 20% off on all mobile. Limited time offer.</h2>
        </div>
       </div>
      </div>
      <img src="" alt="" /> 
    <div>
      <h1 className="camelcase text-4xl	 font-medium pb-6">categoryes</h1>
    </div>
    <div className=" flex justify-between flex-wrap">
  
    <CategoryCard 
    imgUrl={"https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1695965611540/d204716bbd1a5de9a3c5883ea3bc1f2f.png.webp"} 
    titel={"vivo"}
    alt={"vivo phon img"}/>
     <CategoryCard 
    imgUrl={"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a057flghins/gallery/in-galaxy-a-sm-a057flghins-front-light-green-538631122?$650_519_PNG$"} 
    titel={"samsung"}
    alt={"samsung mobile"}/>
     <CategoryCard 
    imgUrl={"https://m.media-amazon.com/images/I/41X9jpHxKGL._SX300_SY300_QL70_FMwebp_.jpg"} 
    titel={"oppo"}
    alt={"oppo mobile "}/>
     <CategoryCard 
    imgUrl={"https://5.imimg.com/data5/SELLER/Default/2024/4/406868924/OG/NU/GK/9446786/motorola-g24-power-4g-8gb-ram-128gb-storage-500x500.jpg"} 
    titel={"motorola"}
    alt={"motorola phone"}/>
    <CategoryCard 
    imgUrl={"https://images.tv9hindi.com/wp-content/uploads/2023/12/poco-m6-5g.jpeg?w=1280"} 
    titel={"poco"}
    alt={"poco "}/>
    <CategoryCard 
    imgUrl={"https://image01.realme.net/general/20240129/1706510758447623d48e411ec4caa8bab0ba962194150.png.webp?width=1440&height=1440&size=558178"} 
    titel={"realme"}
    alt={"realme phone"}/>
    </div>
    <div className='flex items-center justify-between mt-[50px] p-4 bg-gray-200 rounded-[10px]'>
      <div>
        <h1 className='uppercase text-[30px]'>new arriverl moto G64 <br />flat 30% discount</h1>
        <p className=''>FULL-ON SPEED.FULL-ON DETAIL.</p>
        <button  className='bg-black p-[2px] rounded-[20px] text-white text-center  hover:bg-gray-700'>shop now</button>
      </div>
      <div className='shadow-black	'>
        <img src="https://www.91-cdn.com/hub/wp-content/uploads/2024/04/moto-g64.jpg"  className='rounded-[12px] shadow-xl

cursor-pointer h-64 w-72 rounded' alt="moto g64 image" />
      </div>
    </div>
    <div className="py-16 flex justify-between  ">  
      
        <TopproductCard 
        imgUrl={"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/l/z/-original-imaggvfzzt7qhhax.jpeg?q=70&crop=false"} 
        titel={"Motorola G32 (Mineral Gray, 64 GB)  (4 GB RAM)"}
        price={"10,999"}
        alt={"Motorola "}
        />
         <TopproductCard 
        imgUrl={"https://www.triveniworld.com/cdn/shop/products/redmi-note-13-5g-6gb-ram-128gb-storage-refurbished-triveni-world-1_1024x1024.png?v=1706414856"} 
        titel={"Redmi Note 13 5G 6GB Ram, 128GB Storage "}
        price={"7,999.00"}
        alt={"readmi "}
        />
         <TopproductCard 
        imgUrl={"https://vlebazaar.in/image/cache/catalog//B0C78GR61T/realme-11-Pro-5G-Sunrise-Beige-8GB-RAM-256GB-Storage--120-Hz-Curved-Display--100-550x550h.jpg.webp"} 
        titel={"Realme 11 Pro 5G Dual Sim 256GB (8GB RAM)"}
        price={"14,999.00"}
        alt={"realmi "}
        />
         <TopproductCard 
        imgUrl={"https://www.fliptwirls.com/wp-content/uploads/2023/10/123-28.png"} 
        titel={"vivo V29 Pro 5G (Blue, 256 GB) (8 GB RAM)"}
        price={"39,499.00"}
        alt={"vivo "}
        />
      </div>
      
      
    </main>
  )
}

export default Home;