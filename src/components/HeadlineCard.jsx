import React from 'react';

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-2 md:grid-cols-3 gap-4'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/* Overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO's out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white rounded-xl px-2 bg-white text-black ml-2 mt-2'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl  ' src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' />
      </div>
      <div className='rounded-xl relative '>
        {/* Overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO's out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white rounded-xl px-2 bg-white text-black ml-2 mt-2'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl  ' src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' />
      </div>
      <div className='rounded-xl relative '>
        {/* Overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO's out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white rounded-xl px-2 bg-white text-black ml-2 mt-2'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl  ' src='https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' />
      </div>
    </div>
  );
};

export default HeadlineCard;
