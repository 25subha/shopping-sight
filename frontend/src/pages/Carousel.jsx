import React from 'react';
import { Blog } from '../components/Blog';
import TopproductCard from '../components/TopproductCard';


const Carousel = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <div className='h-[400px] w-[70%] bg-gray-100 flex-col '>
      <div className='h-[100%] w-[100%] ' >
        <div className='flex flex-wrap'> 
          {
            Blog.map((vel,i) => {
              return(<TopproductCard key={i}
                titel={vel.title} />)
            })
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Carousel;