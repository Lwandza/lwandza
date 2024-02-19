import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import AboutImg from "../assets/about.JPG"
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h1 className='uppercase tracking-widest text-[#c91829]'>
            About
          </h1>
          <h2 className='py-4 text-[#119da4]'>Who I Am</h2>
          <p className='py-2 text-[#ecf0f3]'>
         Lwandza is an IT professional who specialise in Full Stack Development. He has experience in designing, developing, and testing applications and solutions using a range of technologies and programming languages. He is responsible for designing and developing platform features, analysing current product technical requirements, and creating standardised interfaces, this include Mobile Applications development. Building and working on enterprise grade software systems, as part of an Agile team.
          </p>
          <p className='py-2 text-[#ecf0f3]'>
          He has worked on projects with over 100 000 users that use the application that was built by the team he was working with. He has also worked on web3 applications. In web3 he created smart contracts such as standard ERC20 contracts as well as ERC721 contracts. He also created a DNFT token which fetches details using a chain-link node that I created to fetch from a REST API.
          </p>
          <p className='py-2 text-[#ecf0f3]'>
          He has experience in the following Technologies and Tools: Angular 6+, Ionic Angular, React.js, React Native, React Hooks, Redux.js, TypeScript, Python, Django, PHP, JSON, REST APIs, HTML, Web3, JavaScript, Angular, Ionic and Firebase, Linux, Mobile Applications, Coaching.
          <Link href='/#projects'>
            <p className='py-2 text-[#ecf0f3] underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
