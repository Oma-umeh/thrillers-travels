import Image from 'next/image'
import Link from 'next/link'
import { RiHome4Fill } from 'react-icons/ri'
import { PiDotOutlineFill } from 'react-icons/pi'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'
import { PiSquaresFourLight } from 'react-icons/pi'
import { PiHeartThin } from 'react-icons/pi'
import { CiSettings } from 'react-icons/ci'
import { IoIosArrowDropright } from 'react-icons/io'
import { TbEdit } from 'react-icons/tb'



export default function Sidebar() {
    return (
        <div className='flex flex-col py-10 pr-10 pl-7 h-screen bg-white w-[250px]'>
            <h1 className='font-extrabold text-[#2F3455] pb-10 text-2xl'>Mima<span className='text-[#696969]'>Booking</span></h1>
            <div className='absolute mt-14 flex ml-7'>
                <div className='flex flex-col'>
                    <div className='border-2 border-[#2f3455] h-24 rounded-full w-24 flex items-center justify-center'>
                        <div className='border h-[87px] rounded-full w-[87px] overflow-hidden'>
                            <Image src="/profile1.avif" alt="profile" className="rounded-full h-[85px] w-[85px]" width={60} height={40} />
                        </div>
                    </div>
                    <span className='h-7 w-7 rounded-full bg-[#2f3455] flex items-center justify-center relative top-[-15px] shadow-md left-8 cursor-pointer'>
                        <TbEdit className='text-white' />
                    </span>
                    <span className='text-[#696981] mt-5 px-6'>ilia jan</span>
                </div>
            </div>


            <div className='mt-[250px]'>
                <ul className=''>
                    <div className=''>
                        <div className='flex py-1'>
                            <div className='flex mt-1'>
                                <PiDotOutlineFill />
                                <RiHome4Fill className='rounded-b-full cursor-pointer' />
                            </div>
                            <Link href='/'>
                                <li className='text-[#696981] px-3 text-sm'>Dashboard</li>
                            </Link>
                        </div>
                        <div className='flex ml-4 py-2 text-[#696981] text-sm cursor-pointer'>
                            <PiSquaresFourLight className='mt-1' />
                            <li className='px-3'>Explore city</li>
                        </div>
                        <div className='flex  ml-4 py-2 text-[#696981] text-sm cursor-pointer'>
                            <PiEnvelopeSimpleLight className='mt-1' />
                            <li className='px-3'>Tickets</li>
                        </div>
                        <div className='flex  ml-4 py-2 text-[#696981] text-sm cursor-pointer'>
                            <PiHeartThin className='mt-1' />
                            <li className='px-3'>Favourites</li>
                        </div>
                        <div className='flex  ml-4 py-2 text-[#696981] text-sm cursor-pointer'>
                            <CiSettings className='mt-1' />
                            <li className='px-3'>Settings</li>
                        </div>
                    </div>
                </ul>
            </div>


            <div className='flex text-[#696981] text-sm mt-40'>
                <IoIosArrowDropright className='mt-1 cursor-pointer' />
                <p className='px-3 cursor-pointer'>Logout</p>
            </div>
        </div>
    )
}
