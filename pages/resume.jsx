import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sakshi Sonje | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/public/assets/sakshilogo.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sakshi Ravindra Sonje</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sakshi-sonje-8941591b7/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/sakshisonje'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Creative Thinking <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Creative Thinking</p>
            <p className='py-2'>Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
       
        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Programming and development Skills</span>
            <span className='px-2'>|</span> C++
            <span className='px-2'>|</span> Java
            <span className='px-2'>|</span> Python
            
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Core Concepts</span>
            <span className='px-2'>|</span>Data Structures and Algorithms
            <span className='px-2'>|</span> Object Oriented Programming
            <span className='px-2'>|</span> Database management System
          </p>
          <p className='py-2'>
            <span className='font-bold'>Tools</span>
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span> Adobe XD
            <span className='px-2'>|</span> Adobe Illustrator
            <span className='px-2'>|</span> Adobe Photoshop
            <span className='px-2'>|</span> Latex
            <span className='px-2'>|</span> Github

          </p>
        </div>

        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Hobbies and Interests</h5>
          <p className='py-2'>
            
            <span className='px-2'></span> Charcoal Sketching
            <span className='px-2'>|</span> Clay Art
            <span className='px-2'>|</span> Dance
            <span className='px-2'>|</span> Exploring UI Designs
            <span className='px-2'>|</span> Logo Creation
            <span className='px-2'>|</span> Trekking
          </p>
      
        </div>


        <h5 className='text-center underline text-[18px] py-4'>
         Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Codellion Solutions
            </span>
            <span className='px-2'>|</span>Mumbai, India
          </p>
          <p className='py-1 italic'>Web developement Intern (Oct 2022 - Dec 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Developed the website by using technologies like React-js, Node js, MongoDB and Material-UI.
            </li>
          </ul>
        </div>


       

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Volunteering
        </h5>
      
      
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>PICT Art Circle</span>
            <span className='px-2'>|</span>Pune, India
          </p>
          <p className='py-1 italic'>Core Team Member (2019 – Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Event Organiser- Art Exhibition, was one of the flagship managerial events
              of Abhivyaktee’22 which is Annual cultural festival of PICT.
            </li>
            <li>
             Set Designer - Competition Purushottam Karandak 2022 (Winning Play: Kaligaman)
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
