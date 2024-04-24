import React from 'react'

const AccountCard = ({UserName, email, mobileNumber, address}) => {
  return (
    <div className=' bg-gray-300 text-center flex justify-center items-center  p-12'>
        <div className='bg-white h-80 w-80  '>
        <div>
            <img className='h-20 w-20  border-black rounded-full bg-gray-200	' src="https://cdn.iconscout.com/icon/free/png-512/free-account-269-866236.png?f=webp&w=256" alt="" />
            <h1 className='text-[40px]	font-bold'>{UserName}</h1>
        </div>
        <div className='py-12'>
            <h2>email : {email}</h2>
            <h2>number : {mobileNumber}</h2>
            <h2>address : {address}</h2>

        </div>
        <button className='bg-blue-700 rounded text-white '>Edit profile </button>
        </div>
        
    </div>
  )
}

export default AccountCard