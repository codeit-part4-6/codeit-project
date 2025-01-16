"use client";

import React, { useState } from 'react';
import ReviewModal from '@/components/common/modal/review-modal';
import Modal from '@/components/common/modal/modal';

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
    {/* {isOpen && <ReviewModal message={"후기 작성"} onClose={handleCloseModal}/>} */}
    {/* {isOpen && <Modal type="small" 
  message="예약을 취소하시겠습니까?" 
  onClose={handleCloseModal} />} */}
    {isOpen && <Modal type="big" 
  message="모달모달모달" 
  onClose={handleCloseModal} />}
    </>)
};

export default Page;
