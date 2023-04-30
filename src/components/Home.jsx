import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { RiArrowRightSFill } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home'
    className='h-screen w-full bg-gradient-to-b
    from-black via-black to-sky-950'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    As a recent graduate in web development, I am a highly motivated and passionate individual with a strong foundation in programming languages suchs as HTML, CSS, JavaScript and PHP.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-blue-500 to-sky-700 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <RiArrowRightSFill size={25}
                        className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="My Profile" 
                className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>

        </div>
    </div>
  )
};

export default Home