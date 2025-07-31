import React from 'react';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import type { TripCardComponentProps } from '~/utils/types';
import { LocationIcon } from '~/assets/export';

const TripCard: React.FunctionComponent<TripCardComponentProps> = ({ title, location, price, tags, banner }) => {
  return (
    <div className='h-[306px] min-w-[270px] w-[23%] rounded-[20px] flex flex-col overflow-hidden cursor-pointer font-figtree tripBoxShadow'>
      <div className='h-[170px] w-full relative'>
        <img src={banner} alt='Trip-Banner' className='h-full w-full' />

        <div className='absolute right-[30px] top-[16px] h-[22px] w-[54px] bg-[#FFFFFF] rounded-[20px] flex justify-center items-center z-[5px]'>
          <p className='text-[#1F1F36] text-[14px] font-semibold'>${price}</p>
        </div>
      </div>

      <div className='w-full px-[18px] py-[16px] flex flex-col gap-[20px]'>
        <div className='w-full flex flex-col gap-[12px]'>
          <h5 className='text-[#1F1F36] text-[18px] font-semibold leading-none'>{title}</h5>

          <div className='flex items-center gap-[6px]'>
            <img src={LocationIcon} alt='Location-Icon' className='h-[16px] w-[16px]' />
            <p className='text-[#7F7E83] text-[14px] font-normal'>{location}</p>
          </div>
        </div>

        <ChipListComponent className='flex items-center gap-[6px]'>
          <ChipsDirective>
            {tags?.map((item, index) => (
              <ChipDirective text={item} cssClass={`chipDirective${(Math.random() * 5).toFixed(0)}`} key={index} />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>
    </div>
  )
}

export default TripCard;