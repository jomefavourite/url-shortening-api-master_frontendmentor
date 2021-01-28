import React from "react";
import Button from "./Button";
import illustration from "../images/illustration-working.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='w-11/12 mx-auto max-w-7xl'>
      <Nav />

      <div className='md:grid md:grid-cols-2 md:gap-4 mt-12 mb-44'>
        <div className='mb-10 md:mb-0 md:order-2'>
          <img
            src={illustration}
            alt='Illustration working'
            className='w-full max-w-xl mx-auto md:max-w-auto'
          />
        </div>

        <div className='text-center md:text-left md:max-w-lg md:my-auto'>
          <h1 className='text-5xl font-bold mb-2 text-color7 max-w-sm mx-auto md:mx-0 md:leading-tight lg:max-w-none lg:text-6xl lg:leading-tight'>
            More than just shorter links
          </h1>
          <p className='max-w-md mx-auto md:mx-0'>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button ext='mt-6'>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
