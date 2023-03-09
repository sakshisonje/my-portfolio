import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Sakshi Ravindra Sonje</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/sakshi-sonje-8941591b7/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-[#0A66C2] text-white shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={25}/>
              </div>
            </a>
            <a
              href='https://github.com/sakshisonje'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-[#51585f] text-white shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25}/>
              </div>
            </a>
            <a
              href='https://www.instagram.com/innerglow_art_sakshi/?next=%2F'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-gradient-to-b from-indigo-500 via-[#f13e9b] to-[#fd681d] text-white shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram size={25}/>
              </div>
            </a>
            <Link href='/resume'>
              <div className='rounded-full bg-[#fc5078] text-white shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill size={25}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
