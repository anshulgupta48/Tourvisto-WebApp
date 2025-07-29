import React from 'react';
import { useNavigate } from 'react-router';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Logo, GoogleIcon } from '~/assets/export';

const SignIn: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <div className='h-screen w-full flex justify-center items-center relative font-figtree'>
      <div className='absolute left-0 top-0 h-full w-full signInBg'></div>
      <div className='absolute left-0 top-0 h-full w-full bg-[#F9FBFC] opacity-40'></div>

      <div className='h-[330px] w-[495px] px-[25px] py-[40px] bg-[#FFFFFF] border border-solid border-[#ECF2EF] rounded-[20px] flex flex-col justify-center items-center gap-[30px] z-10 signInBoxShadow'>
        <div className='flex items-center gap-[6px]'>
          <img src={Logo} alt='Tourvisto-Logo' className='h-[30px] w-[30px]' />
          <p className='text-[#1F1F36] text-[28px] font-bold font-jakarta'>Tourvisto</p>
        </div>

        <div className='mt-[6px] flex flex-col items-center gap-[12px]'>
          <h3 className='text-[#1F1F36] text-[28px] font-semibold leading-none'>Admin Dashboard Login</h3>
          <p className='w-[423px] text-[#7F7E83] text-[18px] font-normal text-center'>Sign in with Google to manage destinations, itineraries, and user activity with ease.</p>
        </div>

        <ButtonComponent type='Button' className='signInBtn' onClick={handleSignIn}>
          <img src={GoogleIcon} alt='Google-Icon' className='h-[20px] w-[20px]' />
          <p className='text-[#FFFFFF] text-[18px] font-semibold normal-case'>Sign in with Google</p>
        </ButtonComponent>
      </div>
    </div>
  )
}

export default SignIn;