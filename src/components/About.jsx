import React from 'react'

const About = () => {
  return (
  <div name="about" 
  className='w-full h-screen bg-gradient-to-b
  from-sky-950 via-black to-black text-white'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full'> 
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-sky-700'>
                About
            </p>
        </div>
        <p className='text-xl mt-20'>I have expertise in a wide range of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. I am also familiar with databases such as MySQL and MongoDB and have experience working with Git and other version control systems.</p>
        <br />
        <p className='text-xl'>
            A self-motivated learner, I constantly exploring new technologies and techniques to enhance my skills and knowledge. Additionally, I possess excellent problem solving skills and am able to work both independently and in a team environment. 
        </p>
        <br />
        <p className='text-xl'>
        During my studies, I have worked on several web development projects, including creating responsive websites, developing e-commerce platforms, and building web applications using various technologies.
        </p>
    </div>
  </div>
  )
}

export default About