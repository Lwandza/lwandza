import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full  text-center'>
      <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#c91829]'>
            Welcome
          </p>
          <h1 className='py-4 text-[#ecf0f3]'>
            Hi, I&#39;m <span className='text-[#119da4]'> Lwandza</span>
          </h1>
          <h1 className='py-2 text-[#ecf0f3]'>A Full Stack Developer</h1>
          <p className='py-4 text-[#c91829] sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end applications
            as well as building back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[500px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/lwandza-nzalo-aaa68a1b0/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={30}/>
              </div>
            </a>
            <a
              href='https://github.com/Lwandza'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={30}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={30}/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill size={30}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
