import React from 'react'
import logo from "../assets/logo/logo - Copy.png";
import call from "../assets/Icon/phone-line.svg";

function footer() {
  return (
    <>
      <div className='bg-[#237d9e] flex flex-col justify-center items-center gap-10 pt-5 text-white'>
        <div className='flex flex-row justify-center items-center px-3'>
          <img className='w-28 h-20 rounded-lg' src={logo} />
          <div>
            <div className='flex flex-row justify-between items-center w-full'>
              <h1 className='text-white text-2xl w-full text-right	'>Suresh Amrit Multispecialty Hospital</h1>
            </div>
            <h1 className=' text-right'>Telidih Rd, Chas, <br /> Bokaro Steel City - 827013</h1>
            <div className='flex flex-row justify-end'>
              <img className='w-6' src={call} alt="" />
              <h1 className='text-right'>Call Us:- 983519023, 982735281</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <iframe className='w-[22rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.281843438919!2d86.16530597504504!3d23.63007549338554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4231f4260f791%3A0x958f828f3bea49f0!2sSURESH%20AMRIT%20MULTISPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1709927535719!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <hr className='w-[90%] text-white' />
        <div className='pb-5'>
          Copyright © 2024 | Suresh Amrit Hospital
        </div>
        </div>
      </div>
    </>
  )
}

export default footer
