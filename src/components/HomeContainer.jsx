import React from 'react'
import Delivery from '../img/delivery.png'
import Cover from '../img/cover-img.png'
import { foodData } from '../utils/data'


const HomeContainer = () => {
  
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-blue-200 px-4 py-1 rounded-full'>
          <p className='text-base text-blue-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt='delivery'/>
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.0rem] font-bold tracking-wide text-headingColor'>Food, groceries and everything in between at<span className='text-blue-500 text-[3rem] lg:text-[4.2rem]'> Your Convinience</span></p>
        <div className='ml-40 w-full h-full flex top-0 left-0 justify-center items-center px-32 py-4 gap-2'>
        {foodData && foodData.map(n=>(
          <div key={n.id} className='mt-20 w-195 min-w-[200px] p-2 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center space-x-{30}'>
          <img src={n.imgSrc} className='w-40' alt='burgerchips'/>
          <p className='text-base font-semibold text-textColor my-1'>{n.name}</p>
        </div>
        ))}
        </div>
        <button type='button' className='mt-20 bg-blue-500 w-full md:w-auto px-4 py-2 rounded-lg md:rounded-full hover:shadow-lg transition-all ease-in-out duration-100 font-semibold text-white'>Find restaurants</button>
      </div>
      <div className='py-2 flex-1 mt-20 flex-col flex items-center'>
      <img src={Cover} className='' alt='coverimg' />
      <div className='w-full h-full absolute flex items-center justify-center'></div>
      </div>
    </section>
  )
}

export default HomeContainer