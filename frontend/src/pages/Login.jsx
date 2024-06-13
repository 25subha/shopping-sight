// import React, { useState } from 'react';
// import { BiShow,BiHide  } from "react-icons/bi";


// const Login = ({model,setModel}) => {
//     let [model, setModel] = useState(false);
//     let [action, setAction] = useState("Login")
//     let [showpassword, setShowpassword] = useState(false)
//     const submitHeandler = (event) => {
//       event.preventDefault()
//     }
//   return (
//     // <div>
//     //     <button className='rounded bg-gray-500 text-white px-2 py-1 fixed right-11 top-6' onClick={() => {setModel(true)}} >log in </button>
//     //     <div  className={`h-full w-full bg-[rgba(0,0,0,0.5)] fixed  ${model ? 'block': 'hidden' }`}>
//     //     <div className={`h-[420px] w-[480px] bg-white fixed left-[50%]  transform -translate-x-1/2 rounded-md   -translate-y-1/2 transition-all duration-500 ease-in p-8 ${model ? 'top-[50%]  ': 'top-[-500px]  '}`}>
//     //         <div>
//     //             <span className='fixed right-2 top-2 cursor-pointer' onClick={() => {setModel(false)}}>&times;</span>
//     //               <div className='mb-4'>
//     //                 <h1 className='text-center text-[28px] font-[700] '>{action}</h1>
//     //               </div>
//     //             <form onSubmit={submitHeandler}>
//     //               <input type="text" id='username' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
//     //               placeholder='enter your user name'
//     //               />
//     //               {action === "Login" ? <></> : <input type="email" id='email' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
//     //               placeholder='enter your email id'
//     //               />}
                  
//     //             <div className='flex relative'>
//     //             <input type={showpassword ? "text" : "password"} id='password' required className=' p-[12px] my-2  border-b border-black text-black w-full font-[500]'
//     //               placeholder='enter your password' /> <button className='absolute right-4 top-6 ' onClick={() => {setShowpassword(!showpassword)}}> {showpassword ?  <BiHide size={20}/> : <BiShow size={20}/> } </button>
//     //             </div>

//     //               {action === "Login" ?  <div className='flex gap-32 mt-2 p-4'>forget password <span className='text-blue-700'><a href="">click here</a></span></div> : <></> }
                 
//     //              <div className='flex items-center justify-center my-12 gap-4'>
//     //              <button  type='submit' className={` text-center py-0.5 px-1.5 rounded-md text-white ${action === "Signup" ? "bg-[#bb4bdd]" : "bg-gray-400" }`} onClick={() => {setAction("Login") }}> Login </button>
//     //               <button type='submit' className={` text-center py-0.5 px-1.5 rounded-md text-white ${action === "Login" ? "bg-[#bb4bdd]" : "bg-gray-400" }`} onClick={() => {setAction("Signup") }}>Singup</button>
//     //              </div>
//     //             </form>
//     //         </div>
           
//     //     </div>
//     // </div>
//     // </div>
//   )
// }

// export default Login