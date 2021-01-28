import React from "react";
import Button from "./Button";
import Shorten from "./Shorten";
import {stats} from "./stats";

const Main = () => {
  const stat = stats.map((stat, i) => (
    <div
      key={i}
      className={`stat relative text-center pt-16 bg-white rounded-lg px-5 pb-8 lg:text-left h-auto ${
        i === 0 ? "lg:mt-0" : ""
      } ${i === 1 ? "mt-24 lg:mt-10 lg:-mb-8" : ""} ${
        i === 2 ? "mt-24 lg:mt-20 lg:-mb-20" : ""
      }`}
    >
      <div
        className='statIcon left-2/4 bg-color2 p-6 w-20 h-20 lg:left-20'
        style={br}
      >
        <img src={stat.image} alt='logo' />
      </div>
      <h3 className='font-bold text-2xl mb-3'>{stat.title}</h3>
      <p>{stat.content}</p>
    </div>
  ));

  return (
    <main className='bg-color5 bg-opacity-20'>
      <div className='w-11/12 mx-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className=' relative'>
            <Shorten />
          </div>
          <section className='mx-auto text-center mb-36 pt-28 lg:mb-52'>
            <h2 className='text-3xl font-bold mb-5'>Advanced Statistics</h2>
            <p className='max-w-lg mx-auto'>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>

            <div className='relative mx-auto mt-24 md:gap-7 flex flex-col lg:flex lg:flex-row lg:grid-cols-3 lg:h-72'>
              <span className='absolute left-1/2 transform -translate-x-2/4 w-3 h-4/5 bg-color1 line lg:top-1/2 lg:-translate-y-2/4 lg:h-3 lg:w-4/5 lg:rotate-180'></span>
              {stat}
            </div>
          </section>
        </div>
      </div>
      <section className='bg-color2 bg-boostMobile bg-right bg-no-repeat text-white py-24 text-center md:bg-boostDesktop md:bg-top md:bg-cover'>
        <h3 className='text-3xl font-semibold lg:text-4xl'>
          Boost your links today
        </h3>
        <Button ext='mt-6'>Get Started</Button>
      </section>
    </main>
  );
};

const br = {
  borderRadius: "50%",
};

export default Main;
