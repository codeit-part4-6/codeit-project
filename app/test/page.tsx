"use client";

import React, { useState } from 'react';
import BigModal from '@/components/common/modal/big-modal';
import SmallModal from '@/components/common/modal/small-modal';

const Page = () => {
const [isOpen, setIsOpen] = useState(false);

const handleOpenModal = () => {
  setIsOpen(true);
};

const handleCloseModal = () => {
  setIsOpen(false);
};

  return (
  <>
    <div>test page</div>
    <div className='font-bold bg-gray-700 text-2xl'>test</div>
    <div className='font-semibold text-secondary bg-primary text-xl'>test</div>
    <div className='font-medium text-accent-green bg-orange-50 text-md'>test</div>
    <button onClick={handleOpenModal}>모달 열기</button>
    {/* {isOpen && <BigModal message={"모달 테스트"} onClose={handleCloseModal}/>} */}
    {isOpen && <SmallModal message={"예약을 취소하시겠어요?"} onClose={handleCloseModal}/>}
    </>)
};

export default Page;
