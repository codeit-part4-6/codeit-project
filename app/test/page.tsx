'use client';

import React, {useState} from 'react';
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
      <div className="bg-gray-700 text-2xl font-bold">test</div>
      <div className="bg-primary text-xl font-semibold text-secondary">test</div>
      <div className="bg-orange-50 text-md font-medium text-accent-green">test</div>
      <button onClick={handleOpenModal}>모달 열기</button>
      {/* {isOpen && <ReviewModal message={'후기 작성'} onClose={handleCloseModal} />} */}
      {isOpen && <Modal type="small" message="예약을 취소하시겠습니까?" onClose={handleCloseModal} />}
      {/* {isOpen && <Modal type="big" message="모달모달모달" onClose={handleCloseModal} />} */}
    </>
  );
};

export default Page;
