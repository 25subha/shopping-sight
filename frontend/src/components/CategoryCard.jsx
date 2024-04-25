import React from 'react';

const CategoryCard = ({imgUrl,titel,alt}) => {
  return (
    <div>
        <div>
            <img className="h-32 w-32 p-[3px] rounded-full border-[2px] border-black hover:bg-gray-200" src={imgUrl} alt={alt} />
            <h4 className="text-center text-wrap	font-bold">{titel}</h4>
        </div>
    </div>
  );
};

export default CategoryCard;