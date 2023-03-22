import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import oldwebsite from '../public/assets/projects/oldwebsite.jpg';
import cryptoImg from '../public/assets/projects/hardhat.png'
import ecomm from '../public/assets/projects/ecomm.jpg'
import ethereum from '../public/assets/skills/ethereum.png';
import etherjs from '../public/assets/skills/ethersjs.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Resume'
            backgroundImg={oldwebsite}
            projectUrl='/resume'
            tech='React JS'
          />
          <ProjectItem
            title='Staking pool and buy coffee'
            backgroundImg={cryptoImg}
            projectUrl='/hardhat'
            tech='Hardhat & React'

          />
          <ProjectItem
            title='Ecommerce App'
            backgroundImg={ecomm}
            projectUrl='/ecomm'
            tech='React JS'

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
