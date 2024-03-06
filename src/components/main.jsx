import React from 'react'
import Card from './card'
import Appointment from '../assets/Icon/calendar-regular.svg'
import Doctor from '../assets/Icon/doctor.jpg'
import Contact from '../assets/Icon/contact.png'
import HospitalImage from '../assets/Images/Hospital.jpg'

function main() {
    return (
        <>
            <div className='flex flex-col w-[full] h-[full] gap-[20px] relative top-[-30px] justify-center items-center sm:flex-row flex-wrap sm:gap-[2rem] lg:gap-[10rem] '>
                < Card image={Appointment} imagetitle="Take Appointment" />
                < Card image={Doctor} imagetitle="Our Doctors" />
                < Card image={Contact} imagetitle="Contact Us" />
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold sm:text-3xl lg:text-4xl'>Best Hospital in Bokaro, Jharkhand: Suresh Amrit Hospital</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-1xl font-bold sm:text-2xl lg:text-3xl pt-5'>
                    Doctors, Pioneers, Life Savers
                </p>
                <div className='p-6 sm:grid grid-cols-2 gap-14'>
                    <div className='hidden sm:block border-2'>
                        <img className='w-[500px] h-full' src={HospitalImage} alt="Hospital" />
                    </div>
                    <div className='flex w-full justify-center items-center bg-[#eeedeb]'>
                        <p className='text-justify sm:w-[450px] px-14 pt-10 pb-10'>
                            <p className='text-2xl sm:text-3xl text-left'>Why Choose Suresh Amrit Hospital?</p>
                            <br />
                            Our superspecialist doctors provide the highest quality of care through a team-based, doctor-led model. Trained at some of the world's most renowned institutions, our highly experienced doctors are distinguished experts in their respective specialities. Our doctors work full-time and exclusively across Medanta hospitals. In addition to offering superspecialised care in their own field, the Medanta organisational structure enables every doctor to help create a culture of collaboration and multispecialty care integration.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default main
