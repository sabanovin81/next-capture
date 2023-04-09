import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image src='/photo1.png' alt='/' width='677' height='451' />
        </div>
        <div className='w-full h-full'>
          <Image src='/photo2.png' alt='/' width='300' height='217' style={{ objectFit: 'cover' }} />
        </div>
        <div className='w-full h-full'>
          <Image src='/photo3.png' alt='/' width='217' height='217' style={{ objectFit: 'cover' }} />
        </div>
        <div className='w-full h-full'>
          <Image src='/photo4.png' alt='/' width='205' height='217' style={{ objectFit: 'cover' }} />
        </div>
        <div className='w-full h-full'>
          <Image src='/photo5.png' alt='/' width='350' height='230' style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
