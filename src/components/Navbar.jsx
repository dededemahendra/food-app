import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite } from 'react-icons/md';
import { BsWallet2, BsSave } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { IoPricetagOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Leftside */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg: text:4xl px-3'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex bg-gray-200 p-1 rounded-full text-[14px]'>
          <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* Search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full' type='text' name='' id='' placeholder='Search Food' />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white px-3 py-2 rounded-full hidden md:flex gap-2 items-center'>
        <AiOutlineShoppingCart size={20} /> Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 -left-[100%] w-[300px] h-screen bg-white z-10 duration-300 '}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 duration-300' />
        <h2 className='font-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' />
              Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <BsWallet2 size={25} className='mr-4' />
              Wallets
            </li>
            <li className='text-xl py-4 flex'>
              <BiHelpCircle size={25} className='mr-4' />
              Help
            </li>
            <li className='text-xl py-4 flex'>
              <IoPricetagOutline size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsSave size={24} className='mr-4' />
              Best Ones
            </li>
            <li className='text-xl py-4 flex'>
              <HiOutlineUsers size={25} className='mr-4' />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
