import Image from 'next/image';
import React from 'react';
import music from '../public/assets/projects/music.png'
import deal from '../public/assets/projects/deal.png'
import social from '../public/assets/projects/social.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function design () {
  return (
    <div id='designs' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='uppercase  my-2.5 text-[#c91829]'>
          Designs
        </h1>
        <h2 className='py-4 my-6'>Music</h2>
        <div className='grid md:grid-cols-1 gap-8 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5d001e] to-[#8f0b3d]'>
            <div className="max-w-3xlrounded overflow-hidden shadow-lg">
                <Image className="w-full" src={music} alt=""/>
                <div className="px-6 py-4">
                    <h2>Overview</h2>
                    <p>
                        The concept behind the design was to create a design for a music application where users could follow their favourite artist
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">

                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#music</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#feeds</button>
                </div>
            </div>
     
        </div>
        <h2 className='py-4 my-6'>Deals</h2>
        <div className='grid md:grid-cols-1 gap-8 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5d001e] to-[#8f0b3d]'>
            <div className="max-w-3xlrounded overflow-hidden shadow-lg">
                <Image className="w-full" src={deal} alt=""/>
                <div className="px-6 py-4">
                    <h2>Overview</h2>
                    <p>
                        The concept behind the design was to create a design for an deals application where users can not only view the deals, but can also leave a review about the deal
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">

                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#deals</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#ratings</button>
                </div>
            </div>
     
        </div>
        <h2 className='py-4 my-6'>Social</h2>
        <div className='grid md:grid-cols-1 gap-8 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5d001e] to-[#8f0b3d]'>
            <div className="max-w-3xlrounded overflow-hidden shadow-lg">
                <Image className="w-full" src={social} alt=""/>
                <div className="px-6 py-4">
                    <h2>Overview</h2>
                    <p>
                        The concept behind the design was to create a design for a social media platform that simplified the proces from swithcing between timelines, channels, events, and stores 
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">

                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#timelines</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#channels</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#events</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#stores</button>
                    <button className='px-8 py-2 mt-4 mr-8 mb-8'>#chats</button>

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

export default design;
