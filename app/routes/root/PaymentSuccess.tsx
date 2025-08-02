import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router';
import confetti from 'canvas-confetti';
import { leftConfetti, rightConfetti } from '~/utils/constants';
import { ArrowLeftIcon, PaymentSuccessIcon } from '~/assets/export';

const PaymentSuccess: React.FunctionComponent = () => {
  const params = useParams();

  useEffect(() => {
    confetti(leftConfetti);
    confetti(rightConfetti);
  }, []);

  return (
    <div className='h-screen w-full bg-[#F9FBFC] pt-[50px] flex justify-center items-center font-figtree'>
      <div className='h-[358px] w-[488px] flex flex-col justify-center items-center gap-[20px]'>
        <img src={PaymentSuccessIcon} alt='PaymentSuccess-Icon' className='h-[100px] w-[100px]' />

        <div className='flex flex-col items-center gap-[14px]'>
          <h4 className='text-[#1F1F36] text-[30px] font-semibold leading-none'>Thank You & Welcome Aboard!</h4>
          <p className='text-[#2E2C48] text-[18px] font-normal text-center'>Your trip’s booked — can’t wait to have you on this adventure! 🌍️ Get ready to explore & make memories.✨</p>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <NavLink to={`/trip/${params.tripId}`} className='h-[50px] w-[448px] bg-[#256FF1] hover:brightness-90 border border-solid border-[#ECF2EF] rounded-[8px] text-[#FFFFFF] text-[16px] font-semibold flex justify-center items-center transition-all duration-300 paymentSuccessBtnShadow'>View trip details</NavLink>

          <NavLink to='/' className='h-[50px] w-[448px] bg-[#FFFFFF] hover:brightness-90 border border-solid border-[#EAECF0] rounded-[8px] text-[#FFFFFF] text-[16px] font-semibold flex justify-center items-center gap-[10px] transition-all duration-300 paymentSuccessBtnShadow'>
            <img src={ArrowLeftIcon} alt='ArrowLeft-Icon' className='h-[17px] w-[17px]' />
            <p className='text-[#1F1F36] text-[16px] font-semibold'>Return to Homepage</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;