import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter category
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  console.log(data);
  return (
    <div className='max-w-[1640px] m-auto px-4 '>
      <h1 className='text-orange-600 font-bold text-4xl lg:text-5xl text-center'>Top Rated Menu Items</h1>

      {/* Filter Rows */}
      <div className='flex flex-col lg:flex-row lg:justify-around lg:items-center gap-5 lg:py-5 '>
        {/* Filter type */}
        <div className='mt-2 md:mt-5'>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex gap-3 mt-2 '>
            <button onClick={() => setFoods(data)} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              All
            </button>
            <button onClick={() => filterType('pizza')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              Pizza
            </button>
            <button onClick={() => filterType('salad')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              Salads
            </button>
            <button onClick={() => filterType('burger')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              Burgers
            </button>
            <button onClick={() => filterType('chicken')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              Chickens
            </button>
          </div>
        </div>

        {/* Filter price */}
        <div className='mt-2 md:mt-5'>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex gap-3 mt-2 items-center'>
            <button onClick={() => filterPrice('$')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              $
            </button>
            <button onClick={() => filterPrice('$$')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 rounded-xl'>
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {foods.map((item, index) => (
          <div className='border shadow-lg hover:scale-105 rounded-lg duration-300 ' key={index}>
            <img className='w-full h-[200px] object-cover rounded-t-lg ' src={item.image} alt={item.name} />
            <div className='flex justify-between px-4 py-3'>
              <p className='font-bold text-md text-gray-700'>{item.name}</p>
              <p className='text-white'>
                <span className='bg-orange-500 rounded-full px-2 py-1 '>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
