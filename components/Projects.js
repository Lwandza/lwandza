import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import oldwebsite from '../public/assets/projects/oldwebsite.jpg';
import cryptoImg from '../public/assets/projects/hardhat.png'
import ecomm from '../public/assets/projects/ecomm.jpg'
import ethereum from '../public/assets/skills/ethereum.png';
import social from '../public/assets/projects/social.png'
import etherjs from '../public/assets/skills/ethersjs.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className='uppercase text-[#c91829]'>
          Projects
        </h1>
        <h2 className='py-4 mt-6 text-[#119da4]'>UI/UX</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Designs'
            backgroundImg={social}
            projectUrl='/design'
            tech='Figma'

          />
     
        </div>
        <h2 className='py-4 mt-6 text-[#119da4]'>Websites</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Resume'
            backgroundImg={oldwebsite}
            projectUrl='/resume'
            tech='React JS'
          />
          <ProjectItem
            title='Ecommerce App'
            backgroundImg={ecomm}
            projectUrl='/ecomm'
            tech='React JS'

          />

     
        </div>
        <h2 className='py-4 mt-6 text-[#119da4]'>Web3</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Staking pool and buy coffee'
            backgroundImg={cryptoImg}
            projectUrl='/hardhat'
            tech='Hardhat & React'

          />
           <ProjectItem
            title='Crypto App'
            backgroundImg={ethereum}
            projectUrl='/crypto'
            tech='React JS'

          />
     
        </div>

      </div>
    </div>
  );
};

export default Projects;
