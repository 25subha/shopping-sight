import React from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/products");
  const data = res.data
  // console.log(data);
return data;
};
const Shop = () => {
  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchData =await fetchProducts();

    setData(fetchData);
  };

  useEffect(() => {
    assignData();
  }, []);
  return (
      <div className='flex items-center justify-center' >
        <div className='flex justify-between flex-wrap px-12 py-8 bg-gray-200'>
        {
        data.map((product) => {
            return (
              <ProductCard
              key={product._id}
              title={product.title}
              price={product.price}
              imgUrl={product.imgUrl}
              />
            )
          })}
        </div>
      </div>
  );
}

export default Shop;