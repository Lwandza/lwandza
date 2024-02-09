import Image from 'next/image';
import React from 'react';
import ecomme from '../public/assets/projects/ecomm.jpg'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function Ecomm () {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ecomme}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tecomob</h2>
          <h3>React / Firebase / Stripe</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using React and is styled with
            Material UI. The application is hosted using Firebase.
            This is a mobile responsive recreation of amozon and features
            Firebase for authentication. Users can see a products, add them to cart and checkout.
          </p>
          <a
            href='https://eco-app-b9aee.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/Lwandza/shopstrecom'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-red-400 rounded-xl py-4 bg-gradient-to-r from-[#4c0519] to-[#c91829]'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-white-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-white-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Firebase
            </p>
            <p className='text-white-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <button className='px-8 py-2 mt-4 mr-8 mb-8 underline cursor-pointer' >Back</button>

        </Link>
      </div>
    </div>
  );
};

export default Ecomm;
