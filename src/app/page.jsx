import Image from "next/image"
import { AiFillStar } from 'react-icons/ai'
import { CiSearch, CiLocationOn } from 'react-icons/ci'
import { PiNumberCircleThreeFill, PiHeartThin } from 'react-icons/pi'
import { IoMdNotificationsOutline, IoIosArrowDown, IoIosArrowDroprightCircle, IoIosArrowDropleft } from 'react-icons/io'
import { RxDotFilled } from 'react-icons/rx'
import { CgMenuRound } from 'react-icons/cg'
import { BsPerson } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'

export const destinations = [
  {
    "id": 1,
    "location": "Montmartre, France",
    "description": "Visiting the best tourist areas chosen by the audience",
    "cost": "$450,000.00",
    "image": "/montmartre-image.avif"
  },
  {
    "id": 2,
    "location": "Istanbul, Turkey",
    "description": "Visiting the best tourist areas chosen by the audience",
    "cost": "$600,000.00",
    "image": "/istanbul-image.avif"
  },
  {
    "id": 3,
    "location": "London, UK",
    "description": "Visiting the best tourist areas chosen by the audience",
    "cost": "$360,000.00",
    "image": "/london-image.avif"
  }
]

export const offers = [
  {
    "id": 1,
    "name": "7 Seasons Apartments",
    "location": "Kensington, London",
    "price_per_night": "$65.00",
    "image": "/7-seasons-apartments.avif"
  },
  {
    "id": 2,
    "name": "Along With The Villa",
    "location": "Hungary, Budapest",
    "price_per_night": "$65.00",
    "image": "/along-with-the-villa.avif"
  },
  {
    "id": 3,
    "name": "Resort and Recreation",
    "location": "Williamstreet, Boxon",
    "price_per_night": "$65.00",
    "image": "/resort-and-recreation.avif"
  },
  {
    "id": 4,
    "name": "Beautiful and Classy",
    "location": "Citadines Opera, Paris, France",
    "price_per_night": "$65.00",
    "image": "/beautiful-and-classy.avif"
  },
  {
    "id": 5,
    "name": "Permanent Peace",
    "location": "Sugar Apartments, Brazil",
    "price_per_night": "$65.00",
    "image": "/permanent-peace.avif"
  }
]


const destination = destinations.map(trending => (
  <section key={trending.id}>
    <div className=" ">
      <div className="flex items-center bg-white rounded-2xl gap-2 px-2 py-3">
        <div className="">
          <Image src={trending.image} alt={trending.name} width={150} height={250} className="rounded-2xl w-[100px] cursor-pointer" />
        </div>
        <div>
          <div className="flex justify-between font">
            <p className="font-extrabold">{trending.location}</p>
            <div className="flex">
              <AiFillStar className="text-yellow-400 cursor-pointer" />
              <p className="text-xs">4/5</p>
            </div>
          </div>
          <p className="text-xs text-[#bdc2d3]">{trending.description}</p>
          <p className="font-bold text-sm">{trending.cost}</p>
        </div>
      </div>
    </div>
  </section>
))

const offer = offers.map(best => (
  <section key={best.id}>
    <div className="flex items-center bg-white rounded-2xl">
      <div>
        <div className="px-1 pt-1">
          <Image src={best.image} alt={best.name} width={200} height={200} className="rounded-2xl w-[226px] h-[100px] cursor-pointer" />
        </div>
        <div className="px-4 py-4">
          <p className="font-extrabold">{best.name}</p>
          <p className="flex text-[#bdc2d3] text-xs gap-1"><CiLocationOn /> {best.location}</p>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <p className="font-bold text-sm">{best.price_per_night}</p>
              <p className="text-xs mt-1 text-[#bdc2d3]">/night</p>
            </div>
            <div>
              <PiHeartThin className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
))

export default function page() {
  return (
    <>

      <div className="flex flex-col bg-gray-100 px-10">
        <div className="flex justify-between bg-white py-4 px-7 rounded-2xl">
          <div className="flex gap-1 border p-2 rounded-md text-[#bdc2d3]">
            <CiSearch className="mt-1" />
            <input type="text" placeholder='search anything...' className="text-xs border-none outline-none" />
          </div>
          <div className="flex gap-2">
            <p className="font-extrabold">
              Monday, Oct 16, 2023
            </p>
            <PiNumberCircleThreeFill className="text-red-500 -m-1 cursor-pointer" />
            <IoMdNotificationsOutline className="cursor-pointer" />
          </div>
        </div>


        <div className="pt-6 pb-8">
          <div className="z-0 w-full h-[180px] rounded-2xl bg-hero bg-cover cursor-pointer"></div>


          <div className="flex items-center rounded-2xl bg-white w-[980px] pl-7 py-2 -mt-5 z-50 ml-[120px]">
            <ul className="flex text-[#bdc2d3] gap-14 text-sm">
              <div className="border-r-2 px-5">
                <li className="flex">
                  <CiLocationOn className="mr-2 mt-1" />
                  Where are you going
                  <IoIosArrowDown className="cursor-pointer ml-10 mt-1" />
                </li>
              </div>
              <div className="border-r-2 px-5">
                <li className="flex">
                  <CgMenuRound className="mr-2 mt-1" />
                  Check-in Dates
                  <IoIosArrowDown className="cursor-pointer ml-10 mt-1" />
                </li>
              </div>
              <div className="px-5 font-medium text-black">
                <li className="flex">
                  <BsPerson className="mr-2 mt-1" />
                  3 adults
                  <IoIosArrowDown className="cursor-pointer ml-10 mt-1" />
                </li>
              </div>
            </ul>
            <div className="pl-20 pr-3 text-xs font-thin">
              <button className="bg-[#4A4E73] text-white rounded-xl py-3 px-6 text-xs">
                Search
              </button>
            </div>
          </div>
        </div>


        <div className="pb-4 flex justify-between">
          <div>
            <h2 className="font-bold">
              Trending Destinations
            </h2>
          </div>
          <div className="flex gap-1 ml-[1000px] mt-3">
            <IoIosArrowDropleft className="cursor-pointer" />
            <IoIosArrowDroprightCircle className="text-[#4A4E73] text-lg cursor-pointer" />
          </div>
          <div>
          </div>
        </div>


        <section className="grid grid-cols-3 gap-3">
          {destination}
        </section>
        <div className="flex items-center justify-center mt-3">
          <RxDotFilled className="text-[#696981]" /> <GoDotFill /> <RxDotFilled className="text-[#696981]" />
        </div>
        <div className="flex justify-between mb-3">
          <h2 className="font-bold">
            Best Offers
          </h2>
          <p className="text-xs mt-1 cursor-pointer">
            view all
          </p>
        </div>
        <section className="grid grid-cols-5 gap-3">
          {offer}
        </section>
      </div>
    </>
  )
}
