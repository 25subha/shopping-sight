import React from 'react';

const TopproductCard = ({imgUrl,titel,alt,price}) => {
  return (
    <div className='h-[300px] w-[190px]'>
        <div className="">
        <img className="h-44 w-40 rounded	cursor-pointer border-solid border-2 black hover:bg-black " src={imgUrl} alt={alt} />
          <h4 className="text-wrap ">{titel} </h4>
          <p className="text-left  ">₹{price}</p>
        <div>
        <button className="bg-blue-700 h-8 w-28 hover:bg-sky-700 border rounded-2xl	items-center text-white">add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default TopproductCard;