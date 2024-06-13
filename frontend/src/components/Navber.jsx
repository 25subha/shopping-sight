import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BiShow,BiHide  } from "react-icons/bi";


const Navber = () => {
  let [model, setModel] = useState(false);
  let [action, setAction] = useState("Login")
  let [showpassword, setShowpassword] = useState(false)
  const submitHeandler = (event) => {
    event.preventDefault() }
  return (
    <>
      <header className="flex justify-between px-12 font-medium bg-black text-white py-4">
   
        <Link to="/"><img src="/image/logofull.png" className='h-[50px] w-[50px]  rounded-full  cursor-pointer hover:bg-gray-800' alt="" /></Link>      <div className='flex items-center '>      
          <input type="scearch"placeholder='scearch' className='text-black ' />
          <button  className='   hover:bg-sky-700 bg-gray-400'>scearch</button>
        </div>
          <nav>
              <ul className="flex justify-between cursor-pointer">
                <li className="mx-2 hover:bg-[#2f2f3d] p-2 rounded-md"><Link to="/shop">Shop</Link></li>
                <li className="mx-2 hover:bg-gray-700 p-2 rounded-md "><Link to="/contact">Contact</Link></li>
                <li className="mx-2 hover:bg-gray-700 p-2 rounded-md "><Link to="/about">About</Link></li>
                <li className="mx-2 hover:bg-gray-700 p-2 rounded-md "><Link to="/cart">Cart</Link></li>
                <li className="mx-2 hover:bg-gray-700 p-2 rounded-md "><Link to="/profile">Profile</Link></li>
                <button className='rounded bg-gray-500 text-white px-2 py-1 ' onClick={() => {setModel(true)}} >log in </button>

              </ul>
            </nav>
      </header>
      <div>
        <div  className={`h-full w-full bg-[rgba(0,0,0,0.5)] fixed  ${model ? 'block': 'hidden' }`}>
        <div className={`h-[420px] w-[480px] bg-white fixed left-[50%]  transform -translate-x-1/2 rounded-md   -translate-y-1/2 transition-all duration-500 ease-in p-8 ${model ? 'top-[50%]  ': 'top-[-500px]  '}`}>
            <div>
                <span className='fixed right-2 top-2 cursor-pointer' onClick={() => {setModel(false)}}>&times;</span>
                  <div className='mb-4'>
                    <h1 className='text-center text-[28px] font-[700] '>{action}</h1>
                  </div>
                <form onSubmit={submitHeandler}>
                  <input type="text" id='username' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
                  placeholder='enter your user name'
                  />
                  {action === "Login" ? <></> : <input type="email" id='email' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
                  placeholder='enter your email id'
                  />}
                  
                <div className='flex relative'>
                <input type={showpassword ? "text" : "password"} id='password' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
                  placeholder='enter your password' /> <button className='absolute right-4 top-6 ' onClick={() => {setShowpassword(!showpassword)}}> {showpassword ?  <BiHide size={20}/> : <BiShow size={20}/> } </button>
                </div>

                  {action === "Login" ?  <div className='flex gap-32 mt-2 p-4'>forget password <span className='text-blue-700'><a href="">click here</a></span></div> : <></> }
                 
                 <div className='flex items-center justify-center my-12 gap-4'>
                 <button  type='submit' className={` text-center py-0.5 px-1.5 rounded-md text-white ${action === "Signup" ? "bg-[#bb4bdd]" : "bg-gray-400" }`} onClick={() => {setAction("Login") }}> Login </button>
                  <button type='submit' className={` text-center py-0.5 px-1.5 rounded-md text-white ${action === "Login" ? "bg-[#bb4bdd]" : "bg-gray-400" }`} onClick={() => {setAction("Signup") }}>Singup</button>
                 </div>
                </form>
            </div>
           
        </div>
    </div>
    </div>

    </>
  )
}

export default Navber;