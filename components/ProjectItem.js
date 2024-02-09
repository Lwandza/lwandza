import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full h-[600px] shadow-xl shadow-gray-400 rounded-xl group bg-gradient-to-r from-[#4c0519] to-[#c91829] hover:bg-gradient-to-r from-[#5d001e] to-[#8f0b3d]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={550} height={550} style={{objectFit: 'cover'}}/> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-red-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem