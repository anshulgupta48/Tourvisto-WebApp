import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router';
import { ChipListComponent, ChipsDirective, ChipDirective, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import TripCard from '~/components/TripCard';
import { handpickedTripsDefaultData } from '~/utils/constants';
import { worldMapData, countriesData } from '~/utils/map';
import type { MapDataType, TripDetailsDataType } from '~/utils/types';
import { ArrowLeftIcon, CalendarIcon, LocationIcon, StarIcon, TripDetailsBanner1, TripDetailsBanner2, TripDetailsBanner3 } from '~/assets/export';

const TripDetails: React.FunctionComponent = () => {
  const [popularTripsData, setPopularTripsData] = useState(handpickedTripsDefaultData);
  const [tripDetailsData, setTripDetailsData] = useState<TripDetailsDataType | null>(null);
  const [mapData, setMapData] = useState<MapDataType[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedTripData = handpickedTripsDefaultData.filter((item) => item.tripId === Number(params?.tripId));
    setTripDetailsData(selectedTripData[0]?.tripDetails);

    const selectedTripMapData = [
      {
        country: selectedTripData[0]?.country,
        color: '#EA382E',
        coordinates: countriesData.find((item) => item.name.common === selectedTripData[0]?.country)?.latlng?.map((n: number) => n.toString()) || [],
      },
    ];
    setMapData(selectedTripMapData);
  }, [params?.tripId]);

  const handlePay = async () => {
    const response = await fetch('/api/create-trip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tripId: params?.tripId,
        title: tripDetailsData?.title,
        description: tripDetailsData?.description,
        price: tripDetailsData?.price,
      })
    });
    const result = await response.json();
    window.location.href = result?.url;
  };

  return (
    <div className='w-full px-[10%] pt-[150px] pb-[50px] bg-[#F9FBFC] flex flex-col gap-[60px] font-figtree'>
      <div className='flex gap-[60px]'>
        <NavLink to='/' className='h-[50px] w-[147px] bg-[#FFFFFF] hover:brightness-95 border border-solid border-[#EAECF0] rounded-[8px] flex justify-center items-center gap-[10px] transition-all duration-300 cursor-pointer tripDetailsBackBtnShadow'>
          <img src={ArrowLeftIcon} alt='ArrowLeft-Icon' className='h-[17px] w-[17px]' />
          <p className='text-[#1F1F36] text-[16px] font-semibold'>Go back</p>
        </NavLink>

        <div className='w-[745px] flex flex-col gap-[36px]'>
          <div className='flex flex-col gap-[24px]'>
            <h3 className='text-[#1F1F36] text-[40px] font-semibold leading-[50px]'>{tripDetailsData?.title}</h3>

            <div className='flex items-center gap-[25px]'>
              <div className='flex items-center gap-[6px]'>
                <img src={CalendarIcon} alt='Calendar-Icon' className='h-[20px] w-[20px]' />
                <p className='text-[#7F7E83] text-[18px] font-normal'>{tripDetailsData?.days} {tripDetailsData?.days! > 1 ? 'Days' : 'Day'} plan</p>
              </div>

              <div className='flex items-center gap-[6px]'>
                <img src={LocationIcon} alt='Location-Icon' className='h-[20px] w-[20px]' />
                <p className='text-[#7F7E83] text-[18px] font-normal'>{tripDetailsData?.location}</p>
              </div>
            </div>
          </div>

          <div className='mt-[4px] flex gap-[20px]'>
            <img src={TripDetailsBanner1} alt='Trip-Banner' className='h-[308px] w-[462px] rounded-[16px]' />

            <div className='flex flex-col gap-[14px]'>
              <img src={TripDetailsBanner2} alt='Trip-Banner' className='h-[147px] w-[220px] rounded-[14px]' />
              <img src={TripDetailsBanner3} alt='Trip-Banner' className='h-[147px] w-[220px] rounded-[14px]' />
            </div>
          </div>

          <div className='flex items-center gap-[20px]'>
            <ChipListComponent className='flex items-center gap-[6px]'>
              <ChipsDirective>
                {tripDetailsData?.tags?.map((item, index) => (
                  <ChipDirective text={item} cssClass='!h-[33px] !text-[14px] chipDirective2' key={index} />
                ))}
              </ChipsDirective>
            </ChipListComponent>

            <div className='flex items-center gap-[10px]'>
              <div className='flex items-center gap-[6px]'>
                <img src={StarIcon} alt='Star-Icon' className='h-[18px] w-[18px]' />
                <img src={StarIcon} alt='Star-Icon' className='h-[18px] w-[18px]' />
                <img src={StarIcon} alt='Star-Icon' className='h-[18px] w-[18px]' />
                <img src={StarIcon} alt='Star-Icon' className='h-[18px] w-[18px]' />
                <img src={StarIcon} alt='Star-Icon' className='h-[18px] w-[18px]' />
              </div>

              <ChipListComponent>
                <ChipsDirective>
                  {tripDetailsData?.rating !== undefined && (
                    <ChipDirective text={`${tripDetailsData.rating} / 5.0`} cssClass='chipDirective4' />
                  )}
                </ChipsDirective>
              </ChipListComponent>
            </div>
          </div>

          <div className='flex flex-col gap-[16px]'>
            <div className='flex justify-between items-center gap-[40px]'>
              <h4 className='text-[#1F1F36] text-[30px] font-semibold leading-none'>{tripDetailsData?.heading}</h4>
              <p className='text-[#1F1F36] text-[20px] font-semibold'>${tripDetailsData?.price}</p>
            </div>

            <p className='text-[#7F7E83] text-[24px] font-normal'>{tripDetailsData?.subHeading}</p>
          </div>

          <div className='flex flex-col gap-[18px]'>
            <p className='text-[#2E2C48] text-[18px] font-normal'>{tripDetailsData?.description}</p>
            <p className='text-[#2E2C48] text-[18px] font-normal'>{tripDetailsData?.subDescription}</p>
          </div>

          <div className='flex flex-col gap-[20px]'>
            {tripDetailsData?.activities?.map((item, index) => (
              <div className='flex flex-col gap-[20px]' key={index}>
                <div className='flex flex-col gap-[16px]'>
                  <h5 className='text-[#2E2C48] text-[20px] font-semibold leading-none'>Day {index + 1}: {item?.title}</h5>

                  <ul className='pl-[30px] flex flex-col gap-[10px] list-disc'>
                    {item?.description?.map((subItem, subIndex) => (
                      <li className='text-[#2E2C48] text-[18px] font-normal' key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </div>

                {(index !== (tripDetailsData.activities.length - 1)) && <div className='h-[1px] w-full bg-[#E3F1FF]'></div>}
              </div>
            ))}
          </div>

          <div className='h-[1px] w-full bg-[#E3F1FF]'></div>

          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[16px]'>
              <h5 className='text-[#2E2C48] text-[20px] font-semibold leading-none'>Best Time to Visit:</h5>

              <ul className='pl-[30px] flex flex-col gap-[10px] list-disc'>
                {tripDetailsData?.bestTimeToVisit?.map((item, index) => (
                  <li className='text-[#2E2C48] text-[18px] font-normal' key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='h-[1px] w-full bg-[#E3F1FF]'></div>

            <div className='flex flex-col gap-[16px]'>
              <h5 className='text-[#2E2C48] text-[20px] font-semibold leading-none'>Weather Info:</h5>

              <ul className='pl-[30px] flex flex-col gap-[10px] list-disc'>
                {tripDetailsData?.weatherInfo?.map((item, index) => (
                  <li className='text-[#2E2C48] text-[18px] font-normal' key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <MapsComponent className='h-[303px] w-full rounded-[10px] overflow-hidden'>
            <LayersDirective>
              <LayerDirective shapeData={worldMapData} dataSource={mapData} shapePropertyPath='name' shapeDataPath='country' shapeSettings={{ colorValuePath: 'color', fill: '#E5E5E5' }} />
            </LayersDirective>
          </MapsComponent>

          <ButtonComponent type='Button' className='tripDetailsPaymentBtn' onClick={handlePay}>
            <p className='text-[#FFFFFF] text-[16px] font-semibold'>Pay and join trip</p>

            <div className='h-[22px] w-max px-[10px] bg-[#FFFFFF] rounded-[20px] flex justify-center items-center'>
              <p className='text-[#1F1F36] text-[14px] font-semibold'>${tripDetailsData?.price}</p>
            </div>
          </ButtonComponent>
        </div>
      </div>

      <div className='w-full flex flex-col gap-[24px]'>
        <h3 className='text-[#1F1F36] text-[24px] font-semibold'>Popular Trips</h3>

        <div className='w-full flex flex-wrap gap-[30px]'>
          {popularTripsData.map((item, index) => (
            (index < 4) && <TripCard tripId={item.tripId} title={item.title} location={item.location} price={item.price} tags={item.tags} banner={item.banner} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TripDetails;