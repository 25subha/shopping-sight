import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const CreatProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submitHandler = async ({UserName, email, mobileNumber, password, imgUrl, adderss}) => {
    const res = await axios.post("http://localhost:4000/users", {
      UserName,
      email,
      mobileNumber,
      password, 
      imgUrl, 
      adderss,
    });
    if (res.status === 201) {
      alert("account created sucessfully")
    }
  };

    return (
      <form onSubmit={handleSubmit(submitHandler) } className='px-12     '>
      <div className='py-2'>
          <label htmlFor="UserName" className='p-4'>UserName</label>
          <input type="UserName" 
          id='UserName'
          className='border'
          {...register("UserName", { required: "please enter your UserName"})}
          />
          {errors.UserName && <div className='text-red-800'>{errors.UserName.message}</div> }
     </div>
     <div className='py-2'>
          <label htmlFor="email" className='p-4' >email</label>
          <input type="email" 
          id='email'
          className='border'
          {...register("email", { required: "please enter your email"})}
          />
          {errors.email && <div className='text-red-800'>{errors.email.message}</div> }
     </div>
     <div className='py-2'>
          <label htmlFor="mobileNumber" className='p-4' >mobileNumber</label>
          <input type="number" 
          id='mobileNumber'
          className='border'
          {...register("mobileNumber", { required: "please enter your mobileNumber "})}
          />
          {errors.mobileNumber && <div className='text-red-800'>{errors.mobileNumber.message}</div> }
     </div>
     <div className='py-2'>
          <label htmlFor="imgUrl" className='p-4 '>ImageUrl</label>
          <input type="text" 
          id='imgUrl'
          className='border'
          {...register("imgUrl", { required: "please enter product imgUrl "})}
          />
          {errors.imgUrl && <div className='text-red-800'>{errors.imgUrl.message}</div> }
     </div>
     <div className='py-2'>
          <label htmlFor="address" className='p-4 '>address</label>
          <input type="text" 
          id='address'
          className='border'
          {...register("address", { required: "please enter your address "})}
          />
          {errors.address && <div className='text-red-800'>{errors.address  .message}</div> }
     </div>

     <div className='flex justify-end '>
      <button type='submit' className='bg-green-600 text-white rounded-[8px] p-[2px] border-green-900 text-center'>creat account</button>
     </div>
  </form>

    );
  };




export default CreatProfile;