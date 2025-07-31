import React, { useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import TripCard from '~/components/TripCard';
import { featuredTripsDefaultData, handpickedTripsDefaultData } from '~/utils/constants';
import { Logo } from '~/assets/export';

const Home: React.FunctionComponent = () => {
  const [featuredTripsData, setFeaturedTripsData] = useState(featuredTripsDefaultData);
  const [handpickedTripsData, setHandpickedTripsData] = useState(handpickedTripsDefaultData);

  return (
    <div className='w-full bg-[#F9FBFC] flex flex-col gap-[40px] font-figtree'>
      <div className='h-[700px] w-full px-[10%] pt-[100px] flex items-center relative'>
        <div className='absolute left-0 top-0 h-full w-full opacity-85 heroBg'></div>
        <div className='absolute left-0 top-0 h-full w-full z-[5px] heroBgOverlay'></div>

        <div className='w-[514px] flex flex-col gap-[14px] z-10'>
          <h2 className='text-[#1F1F36] text-[72px] font-bold leading-none'>Plan Your Trip with Ease</h2>
          <p className='text-[#2E2C48] text-[18px] font-normal'>Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore with confidence.</p>

          <ButtonComponent type='Button' className='mt-[10px] heroBtn'>
            <p className='text-[#FFFFFF] text-[18px] font-semibold normal-case'>Get Started</p>
          </ButtonComponent>
        </div>
      </div>

      <div className='w-full px-[10%] pt-[40px] flex flex-col gap-[40px]'>
        <div className='w-full flex flex-col gap-[14px]'>
          <h3 className='text-[#1F1F36] text-[36px] font-bold leading-none'>Featured Travel Destinations</h3>
          <p className='text-[#7F7E83] text-[18px] font-normal'>Check out some of the best places you can visit around the world.</p>
        </div>

        <div className='w-full flex gap-[30px]'>
          <div className='w-[75%] flex flex-col gap-[30px]'>
            <div className='h-[318px] w-full p-[30px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
              <img src={featuredTripsData[0].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

              <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                <div className='h-[28px] w-[65px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[18px] font-bold flex justify-center items-center'>{featuredTripsData[0].rating}</div>

                <div className='flex flex-col gap-[14px]'>
                  <h5 className='text-[#FFFFFF] text-[30px] font-bold leading-none'>{featuredTripsData[0].title}</h5>

                  <div className='flex items-center gap-[10px]'>
                    <img src={Logo} alt='Tourvisto-Logo' className='h-[29px] w-[29px] rounded-full' />
                    <p className='text-[#FFFFFF] text-[18px] font-normal'>{featuredTripsData[0].totalActivities} Activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full flex gap-[30px]'>
              <div className='h-[390px] w-[50%] px-[20px] py-[30px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
                <img src={featuredTripsData[1].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

                <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                  <div className='h-[28px] w-[65px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[18px] font-bold flex justify-center items-center'>{featuredTripsData[1].rating}</div>

                  <div className='flex flex-col gap-[14px]'>
                    <h5 className='text-[#FFFFFF] text-[30px] font-bold leading-none'>{featuredTripsData[1].title}</h5>

                    <div className='flex items-center gap-[10px]'>
                      <img src={Logo} alt='Tourvisto-Logo' className='h-[29px] w-[29px] rounded-full' />
                      <p className='text-[#FFFFFF] text-[18px] font-normal'>{featuredTripsData[1].totalActivities} Activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='h-[390px] w-[50%] px-[20px] py-[30px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
                <img src={featuredTripsData[2].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

                <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                  <div className='h-[28px] w-[65px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[18px] font-bold flex justify-center items-center'>{featuredTripsData[2].rating}</div>

                  <div className='flex flex-col gap-[14px]'>
                    <h5 className='text-[#FFFFFF] text-[30px] font-bold leading-none'>{featuredTripsData[2].title}</h5>

                    <div className='flex items-center gap-[10px]'>
                      <img src={Logo} alt='Tourvisto-Logo' className='h-[29px] w-[29px] rounded-full' />
                      <p className='text-[#FFFFFF] text-[18px] font-normal'>{featuredTripsData[2].totalActivities} Activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[25%] flex flex-col gap-[30px]'>
            <div className='h-[226px] w-full py-[14px] px-[20px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
              <img src={featuredTripsData[3].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

              <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                <div className='h-[20px] w-[49px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[14px] font-bold flex justify-center items-center'>{featuredTripsData[3].rating}</div>

                <div className='flex flex-col gap-[8px]'>
                  <h5 className='text-[#FFFFFF] text-[18px] font-semibold leading-none'>{featuredTripsData[3].title}</h5>

                  <div className='flex items-center gap-[10px]'>
                    <img src={Logo} alt='Tourvisto-Logo' className='h-[16px] w-[16px] rounded-full' />
                    <p className='text-[#FFFFFF] text-[12px] font-normal'>{featuredTripsData[3].totalActivities} Activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[226px] w-full py-[14px] px-[20px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
              <img src={featuredTripsData[4].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

              <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                <div className='h-[20px] w-[49px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[14px] font-bold flex justify-center items-center'>{featuredTripsData[4].rating}</div>

                <div className='flex flex-col gap-[8px]'>
                  <h5 className='text-[#FFFFFF] text-[18px] font-semibold leading-none'>{featuredTripsData[4].title}</h5>

                  <div className='flex items-center gap-[10px]'>
                    <img src={Logo} alt='Tourvisto-Logo' className='h-[16px] w-[16px] rounded-full' />
                    <p className='text-[#FFFFFF] text-[12px] font-normal'>{featuredTripsData[4].totalActivities} Activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[226px] w-full py-[14px] px-[20px] rounded-[14px] relative overflow-hidden cursor-pointer featuredTripBox'>
              <img src={featuredTripsData[5].banner} alt='Trip-Banner' className='absolute left-0 top-0 h-full w-full opacity-95' />

              <div className='h-full flex flex-col justify-between gap-[20px] relative z-[5px]'>
                <div className='h-[20px] w-[49px] bg-[#FFFFFF] rounded-[20px] text-[#FF543D] text-[14px] font-bold flex justify-center items-center'>{featuredTripsData[5].rating}</div>

                <div className='flex flex-col gap-[8px]'>
                  <h5 className='text-[#FFFFFF] text-[18px] font-semibold leading-none'>{featuredTripsData[5].title}</h5>

                  <div className='flex items-center gap-[10px]'>
                    <img src={Logo} alt='Tourvisto-Logo' className='h-[16px] w-[16px] rounded-full' />
                    <p className='text-[#FFFFFF] text-[12px] font-normal'>{featuredTripsData[5].totalActivities} Activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-[10%] py-[40px] flex flex-col gap-[40px]'>
        <div className='w-full flex flex-col gap-[14px]'>
          <h3 className='text-[#1F1F36] text-[36px] font-bold leading-none'>Handpicked Trips</h3>
          <p className='text-[#7F7E83] text-[18px] font-normal'>Browse well-planned trips designed for different travel styles and interests.</p>
        </div>

        <div className='w-full flex flex-wrap gap-[30px]'>
          {handpickedTripsData.map((item, index) => (
            <TripCard title={item.title} location={item.location} price={item.price} tags={item.tags} banner={item.banner} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;