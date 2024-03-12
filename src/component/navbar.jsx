import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
      <header className={` z-50 font-sans size-28 fixed navbar w-full bg-navbar shadow-xl drop-shadow-xl font-bold`}>
  <div className="flex-1 ">
    <Link to="/" className='btn btn-ghost text-5xl  w-1/2 h-16 bg-buttonmainbgcolr ml-20 rounded-index'>smth  </Link>
  </div> 
  <div className=" justify-end flex-none w-3/5 ">
    <ul className=" text-xl menu menu-horizontal px-10 bg-red-1 gap-16 text-white mr-40 ">
      <div className='text-white top-5 relative'><Link to="/score">Score</Link></div>
      <div className='text-white top-5 relative'><Link to="/myvote">My vote</Link></div>
      <div className='text-white top-5 relative'><Link to="/register">Sign In</Link></div> 
      <div className='text-white'>
      <label class="flex ">
        <span class="sr-only  text-black ">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-buttonmainbgcolr" viewBox="0 0 20 20"></svg>
        </span>
        <input class="placeholder:italic placeholder:text-white block bg-buttonmainbgcolr h-16  w-full border border-buttonmainbgcolr rounded-index py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:white focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative top-5 right-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </label>
      </div>  
      
    </ul>
  </div>

</header>
  );
};

export default Navbar;