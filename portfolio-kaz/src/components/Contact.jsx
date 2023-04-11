import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Get In Touch</h1>
<form action="https://getform.io/f/5f20fbe3-6016-4ad1-9a5b-6bbe1f7d4df4" method='POST' encType='multipart/form-data'>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className=' uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="text"name='Name' />

        </div>
        <div className='flex flex-col'>
            <label className=' uppercase text-sm py-2' >PhoneNumber</label>
            <input  className='border-2 rounded-lg p-3 flex border-gray-300'  type="text"name='Phone' />

        </div> 
    </div>
    <div className='flex flex-col py-2'>
        <label className=' uppercase text-sm py-2' >Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="email" name="Email"  />
    </div>
    <div className='flex flex-col py-2'>
        <label className=' uppercase text-sm py-2' >Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Subject"  />
    </div>
    <div className='flex flex-col py-2'>
        <label  className=' uppercase text-sm py-2'>Message</label>
        <textarea  className='border-2 rounded-lg p-3 flex border-gray-300' name="message" id=""  rows="10"></textarea>
    </div>

    <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
        Send Message 
    </button>
</form>

    </div>
  )
}
