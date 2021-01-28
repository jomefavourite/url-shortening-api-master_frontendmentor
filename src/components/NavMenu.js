import React from "react";
import Button from "./Button";

const NavMenu = () => {
  return (
    <div className='w-full bg-color2 text-white px-6 py-10 rounded-xl text-center mt-5 md:bg-transparent md:mt-0 md:text-color5 md:px-0 md:py-0 md:rounded-none md:flex md:justify-between md:items-center'>
      <ul className='space-y-5 font-semibold mb-8 md:mb-0 md:flex md:items-center md:space-y-0'>
        <li className='cursor-pointer md:ml-12 hover:text-color7'>Features</li>
        <li className='cursor-pointer md:ml-6 hover:text-color7'>Pricing</li>
        <li className='cursor-pointer md:ml-6 hover:text-color7'>Resources</li>
      </ul>

      <div className='space-y-5 border-t-2 border-color5 pt-8 md:border-t-0 md:flex md:items-center md:space-y-0 md:pt-0'>
        <button className='block mx-auto font-semibold hover:text-color7'>
          Login
        </button>
        <Button ext='w-full md:w-26 md:ml-6'>Sign Up</Button>
      </div>
    </div>
  );
};

export default NavMenu;
