import React from 'react';
import { NavLink } from 'react-router';
import { Logo } from '~/assets/export';

const Footer: React.FunctionComponent = () => {
  return (
    <div className='min-h-[110px] w-full px-[10%] bg-[#F9FBFC] flex justify-between items-center gap-[40px] font-figtree'>
      <NavLink to='/' className='flex items-center gap-[6px]'>
        <img src={Logo} alt='Tourvisto-Logo' className='h-[30px] w-[30px]' />
        <p className='text-[#1F1F36] text-[24px] font-bold font-jakarta'>Tourvisto</p>
      </NavLink>

      <div className='flex items-center gap-[24px]'>
        <p className='text-[#7F7E83] hover:brightness-90 text-[16px] font-normal transition-all duration-300 cursor-pointer'>Terms & Condition</p>
        <p className='text-[#7F7E83] hover:brightness-90 text-[16px] font-normal transition-all duration-300 cursor-pointer'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer;