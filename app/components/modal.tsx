'use client';

import React, {useState} from 'react';
import Modal from '@/components/common/modal/modal';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      {/* {isOpen && <ReviewModal message={'후기 작성'} onClose={handleCloseModal} />} */}
      {isOpen && <Modal type="small" message="예약을 취소하시겠습니까?" onClose={handleCloseModal} />}
      {/* {isOpen && <Modal type="big" message="모달모달모달" onClose={handleCloseModal} />} */}
    </>
  );
};

export default ModalComponent;
