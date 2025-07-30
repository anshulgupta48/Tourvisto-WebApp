import React from 'react';
import { useLocation, NavLink } from 'react-router';
import { Logo, UserProfile, LogoutIcon } from '~/assets/export';

const Header: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className={`absolute left-0 right-0 min-h-[100px] w-full px-[10%] flex justify-between items-center gap-[40px] z-20 font-figtree ${location.pathname === '/' ? 'bg-transparent' : 'bg-[#FFFFFF]'}`}>
      <NavLink to='/' className='flex items-center gap-[6px]'>
        <img src={Logo} alt='Tourvisto-Logo' className='h-[30px] w-[30px]' />
        <p className='text-[#1F1F36] text-[24px] font-bold font-jakarta'>Tourvisto</p>
      </NavLink>

      <div className='flex items-center gap-[24px]'>
        <NavLink to='/dashboard' className={`text-[16px] font-normal hover:brightness-90 transition-all duration-300 ${location.pathname === '/' ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Admin Panel</NavLink>
        <img src={UserProfile} alt='User-Profile' className='h-[40px] w-[40px]' />

        <div className='h-[40px] w-[40px] bg-[#FFFFFF4D] hover:brightness-90 rounded-full flex justify-center items-center transition-all duration-300 cursor-pointer'>
          <img src={LogoutIcon} alt='Logout-Icon' className='h-[24px] w-[24px]' />
        </div>
      </div>
    </div>
  )
}

export default Header;