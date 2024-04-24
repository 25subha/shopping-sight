import React from 'react';
import { TbWorldWww  } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";




const Contact = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center'>
       <div className='flex flex-col bg-white mt-40 h-80 w-auto mb-10 rounded-lg	items-center'>
       <h1 className='  text-3xl font-bold	'>contact us</h1>
       <div className='h-[6px] w-20  bg-violet-800 rounded-lg'></div>
       
    <form action="submit">
     <div className=' flex flex-col pt-8 gap-4 p-4'>
     <div className='flex justify-center bg-gray-200 '>
      <label className='mx-4 font-[500] ' htmlFor="name">your name:</label>
      <input type="text" placeholder=' enter your name' className='border h-auto w-[200px] bg-transparent'/>
      </div>
     <div className='flex justify-center bg-gray-200 '>
     <label className='mx-4 font-[500]' htmlFor="email">your email:</label>
      <input type="email" placeholder=' enter your email 'className='border h-auto w-[200px] bg-transparent' />
     </div>
     <div className='flex justify-center bg-gray-200 '>
      <label className='mx-4 font-[500]' htmlFor="massage">massage:</label>
      <input type="massage" placeholder=' enter your massage'
      className='borde  r h-[100px] w-[200px] bg-transparent '/>
     </div>
     <div className=''>
      <button className='p-[2px]  bg-violet-800 rounded-[10px] text-white' type='submit' >submit</button>
     </div>
     </div>
    </form>
       </div>
     <div className='flex flex-col mb-6   text-white p-2'>
     <div className='flex  m-2'>
       <div className='w-[400px] h-[140px] p-4 bg-violet-800 rounded-md'>
        <h1 className='text'> <FaPhoneVolume /> contact  </h1>
        <p>894561556245</p>
       </div>
       <div className='w-[400px] h-[140px]  p-4 ml-4 bg-violet-800 rounded-md'>
        <h1> <IoLocation />Location</h1>
       <p>panskura, purba medinipur, 721149</p>
       </div>
       </div>
       <div className='flex m-2'>
       <div className='w-[400px] h-[140px] p-4 bg-violet-800 rounded-md'>
        <h1><HiOutlineMail />  email</h1>
        <p>smartmobile.@gmail.com</p>
       </div>
       <div className='w-[400px] h-[140px] p-4 ml-4 bg-violet-800 rounded-md'>
        <h1> <TbWorldWww />web site</h1>
        <p>www.smartmobileServices.com</p>
       </div>
       </div>
     </div>
    </div>

  )
}

export default Contact;