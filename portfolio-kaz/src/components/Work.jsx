import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2023,
        title: "UI UX Designer and content Creator",
        Duration: "present",
        details: "I  collaborate with cross-functional teams to design user-centered products using design thinking methodologies, as well as developing and executing content strategies, creating visual content, and analyzing performance metrics for various digital platforms."

    },
    {
        year: 2023,
        title: "UI UX Designer",
        Duration: "6 months",
        details: "I  create digital user interfaces and experiences for websites, mobile applications, and other digital products. They design visually appealing and user-friendly interfaces while ensuring the product meets the user's needs. UI design focuses on the visual aspects, while UX design focuses on the overall user experience. A UI/UX designer plays a critical role in creating successful digital products that meet the needs of the users."

    },
    {
        year: 2022,
        title: "IT Assistant",
        Duration: "6 months",
        details: "Install and configure hardware and software systems, maintain computer networks, troubleshoot technical issues, and provide technical support to employees. I also design, develop, test, and deploy custom business applications using Power Apps, utilizing my strong analytical and problem-solving skills to translate business requirements into technical solutions. I contribute to the development of IT policies and procedures and conduct training sessions to increase productivity and efficiency."

    }
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <Workitem key={idx} year={item.year} title={item.title} Duration={item.Duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work