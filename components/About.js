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
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Full Stack Developer with experience designing, developing and testing applications and solutions using a range of technologies and programming languages. Responsible for designing and developing platform features, analyzing current product technical requirements and creating standardized interfaces. Building and working on enterprise grade software systems, as part of an Agile team.
          </p>
          <p className='py-2 text-gray-600'>
          My first exposure to programming was in 2015 when I started teaching myself basic html/css, by mid 2016 I had started getting interested in application development. In 2017 I got hired as a Front-End Developer by a company that dealt with application development. They used Python, React, Angular, Ionic and Firebase as their main coding languages. From starting as a Front-End Developer, I have grown my skills in both Front-End and Back-End.
          </p>
          <p className='py-2 text-gray-600'>
          In the previous company, I have worked on projects with over 100 000 users that use the application that was built by the team I was working with. I have also worked on web3 applications. In web3 I have created smart contracts such as standard ERC20 contracts as well as ERC721 contracts. I have created an ERC721 token which fetches details using a chainlink node that I created to fetch from a REST API.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
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
