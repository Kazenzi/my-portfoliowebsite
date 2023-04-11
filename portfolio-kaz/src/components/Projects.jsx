import React from 'react'
import crimereporter from '../assets/crimereporter.jpeg'
import myshop from '../assets/myshop.jpeg'

import yerh from '../assets/yerh.png'
 import jobsearch from '../assets/jobsearch.png'
import Projectitem from './Projectitem'



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[001b5e]'>Projects</h1>
        <p className='text-center py-8'> 
        I have experience working on various projects in software development, ranging from web applications
         to mobile apps. I have worked on projects that involved front-end development, back-end development,
          database design, and quality assurance. My projects have required me to use a range of technologies,
           including HTML, CSS, JavaScript, React, Java, and SQL. Through these projects, I have 
           gained experience working in both individual and team environments, and have developed strong 
        problem-solving and communication skills
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <Projectitem img={yerh} title="Youth Enterprise Resource Hub" language="Wordpress"/>
            <Projectitem img={jobsearch} title="Job Search" language="Reactjs"/>
            <Projectitem img={crimereporter} title="Crime Reporter" language="Android+Java"/>
            <Projectitem img={myshop} title="My shop"  language="Android+Java"/>



        </div>
    </div>
  )
}

export default Projects