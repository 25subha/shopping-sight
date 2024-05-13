import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home';

const Newlogin = () => {
  const [password,setPassword] = useState("hide");
  const [action, setAction] = useState("login");
 
  return (
  
    <div className='   h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
      <div className='  h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)] fixed px-12 top-0 '>
  
  <div className='shadow rounded-lg p-4 h-[auto] w-[500px] bg-white fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'  >
  <span className='bg-red-800 text-white font-bold rounded-full border  ml-[450px] px-[4px] cursor-pointer 'onClick={() =>{false} } > &#x2715;</span>

     <div className='flex flex-col items-center mb-6'>
      <h1 className='text-[30px] font-bold text-violet-500'>{action}</h1>
      <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl h-2 w-24'></span>
     </div>
      
      <div>
        
          <div className='gap-4 flex flex-col'>
            {action === "login" ? <></> : <><div className='flex p-2 bg-gray-400 rounded-[10px] '>
              <label htmlFor="name" className='mx-2 font-bold'>Name :</label>
              <input type="text" 
              id='name'
              className='h-8 w-[300px] p-2  bg-transparent text-white border-none text-left'
             />
           </div>
            <div className='flex p-2 bg-gray-400 rounded-[10px] '>
            <label htmlFor="mobilenumber" className='mx-2 font-bold'>Mobile Number :</label>
            <input type="tel" 
            id='mobilenumber'
            className='h-8 w-[300px] p-2  bg-transparent text-white border-none text-left'
            />
          </div> </>
          }
            <div className='flex p-2 bg-gray-400 rounded-[10px] '>
              <label htmlFor="email" className='mx-2 font-bold'>Email :</label>
              <input type="email" 
              id='email'
              className='h-8 w-[300px] p-2  bg-transparent text-white border-none text-left'
              />
            </div>
           
            <div className='flex p-2 bg-gray-400 rounded-[10px] '>
              <label htmlFor="password" className='mx-2 font-bold'>Password :</label>
              <input type={password? "password":"text"} 
              id='password'
             className='h-8 w-[300px] p-2  bg-transparent text-white border-none text-left'
             /> <span onClick={() => {setPassword(!password )}} className='cursor-pointer text-[12px]'>{password  ? "show":"hide"} </span>
            </div>  
            
              
            {action === "singup" ? <></> : <p className='text-sm pl-20'>forget password <span className='text-blue-800 ml-4'>click here</span></p>}
            <div className=' flex  justify-center items-center gap-8'>
              <button className={action ==="login" ?'p-2 rounded-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'bg-gray-500 p-2  cursor-pointer text-white rounded-[16px]'} onClick={() => {setAction("singup")}}>singup</button>
              <button className={action ==="singup" ?'p-2 rounded-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'bg-gray-500 p-2  cursor-pointer text-white rounded-[16px]'} onClick={() => {setAction("login")}}>login</button>

          </div>
          </div>
        
      </div>
  </div>

</div>
    </div>
    
  )
}

export default Newlogin