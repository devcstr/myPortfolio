import React from 'react'
import react from '../assets/portfolio/react.png'
import reactLaravel from '../assets/portfolio/reactlaravel.png'
import bootstrap from '../assets/portfolio/bootstrap.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: reactLaravel,
            href: 'https://capstone-9svm.vercel.app/'
        },
        {
            id: 2,
            src: react,
            href: 'https://qcprovince.vercel.app/'
        },
        {
            id: 3,
            src: bootstrap,
            href:  'https://devcstr.github.io/mini-project1/'
        },
       
    ]

  return (
  <div 
  name="portfolio" 
  className='bg-gradient-to-b
  from-black via-black to-sky-950 w-full text-white md:h-screen sm:mx-auto'
  > 
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-sky-700'>Portfolio</p>
            <p className='py-6'>Check Out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id, src, href}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img
                  src={src}
                  alt="" 
                  className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a href={href} target="_blank" rel="noreferrer" className='px-6 py-1 m-4 duration-200 hover:scale-105 items-baseline'>Demo</a>
                </div>
            </div>
            ))
        }
        </div>
    </div>
  </div>
  );
  
};

export default Portfolio