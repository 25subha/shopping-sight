import React from 'react';
import { FaCircleUser} from "react-icons/fa6";
import { IoIosUnlock } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';




const LoginSingup = () => {
    const [action, setAction] = useState("log in");
    const [pstatus, setPstatus] = useState(false);

  return (
    <div className=' flex h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
        <div className='flex flex-col m-auto mt-auto w-[550px] bg-white pb-8 rounded-[20px]'>
        <div className='flex flex-col items-center	gap-2.5	 w-full	mt-[30px]'>
            <h1 className='text-violet-700	text-4xl font-bold font-s'>{action}</h1> 
            <div className='w-16 h-1.5 bg-violet-800 rounded-[18px]'></div>
        </div>
        <div className='flex flex-col mt-10 gap-[25px]'>
            {action === "login"?<div></div>:<div className='flex items-center m-auto w-[480px] h-[50px] bg-gray-300 rounded-[6px]'>
                <FaCircleUser className='mx-8 my-0' />
                <input className='h-8 w-[400px] text-white bg-transparent border-none text-xl	' placeholder='username' type="text"  />
            </div>}
            
            <div className='flex items-center m-auto w-[480px] h-[50px] bg-gray-300 rounded-[6px]'>
            <MdOutlineEmail className='mx-8 my-0'/>

                <input className='h-8 w-[400px] text-white bg-transparent border-none text-xl	' placeholder='email' type="email"  />
            </div>
            <div className='flex items-center m-auto w-[480px] h-[50px] p-2 bg-gray-300 rounded-[6px]'>
                <IoIosUnlock className='mx-8 my-0' />
                <input className='h-8 w-[400px] bg-transparent border-none text-xl	text-white' placeholder='password' type={pstatus ? "text" : "password"}  /> <button className='text-white' onClick={() => {setPstatus(!pstatus)}}>{pstatus ? "hide" : "show"}</button>
            </div>
            {action === "sing up"?<></>:  <p className=' pl-16 mt-7 text-black '>forgot password <span className='text-blue-800 cursor-pointer '>click here</span></p>}
           
            <div className='flex justify-center items-center gap-8 '>
            <div  className={action === "login" ? 'p-2.5 bg-violet-600 text-sm cursor-pointer text-white rounded-[15px]' : 'bg-gray-500 p-2.5 ext-sm cursor-pointer text-white rounded-[15px]'}  onClick={() => {setAction("sing up")}} >sing up</div>
                <div className = {action === "sing up" ? 'p-2.5 bg-violet-600 text-sm cursor-pointer text-white rounded-[15px]' : 'bg-gray-500 p-2.5 ext-sm cursor-pointer text-white rounded-[15px]'} onClick={() => {setAction("login") }}  >login</div>
            </div>
        </div>

    </div>
    </div>
  );
};

export default LoginSingup;