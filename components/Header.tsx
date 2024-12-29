import React from 'react'
import { Button } from '@nextui-org/button'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  )
}


const Desktop = () => {
  return (
    <>
      <div className="header h-screen w-full hidden sm:flex">
        <div className="flex flex-col justify-center items-start h-full capatilize pl-40 gap-5">
          <div>
            <h1 className='text-[#0064d7] font-bold text-6xl pb-5'>
              Amrit Hospital
            </h1>
            <div className='text-[#071836] text-4xl w-[35vw] font-RobotoCondensed'>
              The hospital you trust to care for those you love.
            </div>
          </div>
          <ul className='text-[#071836] grid grid-cols-2 gap-4'>
            <li>
              <Image className='inline' src='/icons/check.svg' width={30} height={30} alt='check' /> 100% Expert Doctor
            </li>
            <li>
              <Image className='inline' src='/icons/check.svg' width={30} height={30} alt='check' /> Instant Operation and Apointment
            </li>
            <li>
              <Image className='inline' src='/icons/check.svg' width={30} height={30} alt='check' /> Medicine and Instrument
            </li>
            <li></li>
          </ul>
          <Button className='text-white bg-blue-500 rounded-lg' >
            Discover More
          </Button>
        </div>
      </div>
    </>
  )
}

const Mobile = () => {
  return (
    <>
      <div className="w-full flex sm:hidden flex-col justify-center items-start h-full capatilize gap-5 pt-16">
        <Image src="/images/hospitalimage.jpg" width={1000} height={1000} alt='Hospital Image' />

        <div className='text-center content-center px-2'>
          <h1 className='text-[#0064d7] font-bold text-5xl pb-5'>
            Amrit Hospital
          </h1>
          <div className='text-[#071836] text-2xl font-RobotoCondensed'>
            The hospital you trust to care for those you love.
          </div>
        </div>

        <ul className='text-[#071836] grid grid-cols-2 gap-1 px-5 place-content-center place-items-center'>
          <li className='flex items-start gap-1'>
            <Image src='/icons/check.svg' width={30} height={30} alt='check' /> 100% Expert Doctor
          </li>
          <li className='flex items-start gap-1'>
            <Image src='/icons/check.svg' width={30} height={30} alt='check' /> Instant Operation and Apointment
          </li>
          <li className='flex items-start gap-1'>
            <Image src='/icons/check.svg' width={30} height={30} alt='check' /> Medicine and Instrument
          </li>
          <li></li>
        </ul>
      </div>
    </>
  )
}