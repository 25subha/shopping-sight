import React from 'react';
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <header className="flex justify-between px-12 font-medium bg-black text-white py-4">
      {/* <p className="cursor-pointer  hover:bg-gray-700 p-2 rounded-md"><Link to="/">logo</Link></p> */}
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
          <li className="mx-2 hover:bg-gray-700 p-2 rounded-md"><Link to="/newlogin">login</Link></li>

        </ul>
      </nav>
    </header>
  )
}

export default Navber;