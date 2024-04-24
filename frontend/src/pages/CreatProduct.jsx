import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios" ;
const CreatProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submitHandler = async ({title,description,price,imgUrl}) => {
        const res = await axios.post("http://localhost:4000/products", {
          title,
          description,
          price,
          imgUrl,
        });
        if (res.status === 201){
          alert("product created sucessfully")
      }
   
    }
  return (
    <div className='bg-gray-300 h-[100vh] flex flex-col justify-center items-center '>
      <div className='bg-white flex flex-col justify-center items-center p-[20px] rounded-lg'>
<form onSubmit={handleSubmit (submitHandler)}>
        <div className='bg-gray-200 rounded-[8px] py-2 my-4'>
            <label htmlFor="title" className='px-4 font-bold '>Title</label>
            <input type="text" 
            id='title'
            className=' bg-transparent '
            {...register("title", {required: "please enter product titel"}) }
            />
            {errors.title && (<div className='text-red-600'>{errors.title.message}</div>)}
        </div>
        <div className='bg-gray-200 rounded-[8px] py-2 my-4'>
            <label htmlFor="description"className='px-4 font-bold '>description</label>
            <input type="text" 
            id='description'
            className='bg-transparent'
            {...register("description", {required: "please enter product description"}) }
            />
            {errors.description && (<div className='text-red-600'>{errors.description.message}</div>)}
        </div>
        <div className='bg-gray-200 rounded-[8px] py-2 my-4'>
            <label htmlFor="price" className='px-4 font-bold '>price</label>
            <input type="number" 
            id='price'
            className='bg-transparent'
            {...register("price", {required: "please enter product price"}) }
            />
            {errors.price && (<div className='text-red-600'>{errors.price.message}</div>)}
        </div>
        <div className='bg-gray-200 rounded-[8px] py-2 my-4'>
            <label htmlFor="imgUrl" className='px-4 font-bold '>imgUrl</label>
            <input type="text" 
            id='imgUrl'
            className='bg-transparent'
            {...register("imgUrl", {required: "please enter product imgUrl"}) }
            />
            {errors.imgUrl && (<div className='text-red-600'>{errors.imgUrl.message}</div>)}
        </div>
        <div className='flex justify-end mb-12 my-8'>
            <button type='submit' className='p-[4px] rounded-lg bg-violet-600 text-white'>submit</button>
        </div>
    </form>

</div>
    </div>
  );
};

export default CreatProduct;