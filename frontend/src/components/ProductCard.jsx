import React from 'react';

const productCard = ({title, price, imgUrl, alt}) => {
  return (
    <div className=''>
        <div className='  bg-white p-4 m-4 rounded h-[280px] w-[250px] cursor-pointer hover:bg-slate-600 '>
          <div><img src={imgUrl} alt={alt} className='rounded h-40 w-40 items-center hover:bg-slate-600	' />
          <h2 className='font-bold	'>{title }</h2></div>
          <div className='flex justify-between items-center pb-[10px]'>
          <p className='font-medium	'>price:{price}</p>
          <button className='bg-blue-500 text-sm p-1 text-white rounded-[10px] hover:bg-blue-700'>add to cart</button>
          </div>
        </div>
      </div>
  );
}   

export default productCard;