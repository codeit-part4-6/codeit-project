'use client';
import React from 'react';
import Pagenation from '@/components/common/pagenation';

const PagenationComponent = () => {
  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return <Pagenation size={31} showItemCount={3} onChange={handlePageChange} />;
};

export default PagenationComponent;
