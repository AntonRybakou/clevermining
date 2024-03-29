import React from 'react';

export const VideoBgBlock: React.FC = () => {
  return (
    <div className='h-[500px]'>
      <div className='absolute w-full h-[500px] left-0 z-0 bg-black/[0.3]'></div>
      <video
        className='absolute w-full h-[500px] left-0 z-[-1] object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/videoBg.m4v' type='video/mp4' />
      </video>
      <div
        className='relative h-full flex flex-col gap-5 items-center justify-center text-white z-1'>
        <h1 className='text-7xl font-medium'>Clevermining</h1>
        <h2 className='text-xl'>Умная и эффективная горная добыча</h2>
      </div>
    </div>
  );
};
