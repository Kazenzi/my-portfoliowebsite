import React from 'react'
import kaz from '../assets/back.jpg'
import{TypeAnimation} from 'react-type-animation'
import{FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={kaz} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>

            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start
            items-center'>
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm  Kazenzi Jacinta</h1> 
                <h2  className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a 
                    <TypeAnimation
      sequence={[
        'Software Developer', // Types 'One'
        2000, // Waits 1s
        'Android Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Cyber Security Enthusiast',
        2000
       
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:'5 px' }}
    />

                </h2>

                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                   <a href="#"> <FaTwitter className='cursor-pointer' size={20}/> </a>
                    <a href="https://github.com/Kazenzi"><FaGithub className='cursor-pointer' size={20}/> </a>
                    <a href="https://www.linkedin.com/in/jacinta-kazenzi-3a090219b/"><FaLinkedin className='cursor-pointer' size={20}/></a>



                </div>
            </div>

        </div>


    </div>
  )
}

export default Main