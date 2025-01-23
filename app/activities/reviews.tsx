'use client';
import React from 'react';
import Image from 'next/image';
import Star from '@/public/icon/ic_star.svg';
import Pagenation from '@/components/common/pagenation';

interface ReviewsType {
  rating: number;
}

const Reviews = ({rating}: ReviewsType) => {
  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <div className="w-full pb-34pxr pt-40pxr text-xl font-bold text-nomad-black">후기</div>
      <div className="flex flex-row">
        <p className="mr-16pxr text-4xl font-semibold text-nomad-black">{rating}</p>
        <div className="flex-col items-start gap-8pxr p-0">
          <p className="text-2lg font-normal text-nomad-black">매우 만족</p>
          <div className="flex flex-row">
            <Image src={Star} alt="별점 이미지" width={16} height={16} />
            <p className="ml-5pxr text-md font-normal text-black-100">13,000후기</p>
          </div>
        </div>
      </div>
      <Pagenation size={31} showItemCount={3} onChange={handlePageChange} />
    </>
  );
};

export default Reviews;
