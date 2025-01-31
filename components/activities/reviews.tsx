'use client';
import React from 'react';
import Image from 'next/image';
import Pagenation from '@/components/common/pagenation';
import FormatDate from '@/utiles/format-date';
import Star from '@/public/icon/ic_star.svg';
import DefaultProfile from '@/public/img/img_default_profile.svg';

const ReviewsMoc = {
  averageRating: 4.5,
  totalCount: 30000,
  reviews: [
    {
      id: 0,
      user: {
        profileImageUrl: 'string',
        nickname: '김태현',
        id: 0,
      },
      activityId: 0,
      rating: 0,
      content:
        '저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말 즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게 정말 적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말 친절하게 설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새로운 스타일과 춤추기에 대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!"',
      createdAt: '2025-01-22T07:58:57.264Z',
      updatedAt: '2025-01-22T07:58:57.264Z',
    },
    {
      id: 1,
      user: {
        profileImageUrl: 'string',
        nickname: '조민선',
        id: 1,
      },
      activityId: 0,
      rating: 0,
      content:
        '저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말 즐거운 시간을 보냈습니다. 전문가가 직접 강사로 참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있었고, 강사님의 친절한 설명 덕분에 저는 새로운 스타일과 춤추기에 대한 열정이 더욱 생겼습니다.',
      createdAt: '2025-01-22T07:58:57.264Z',
      updatedAt: '2025-01-22T07:58:57.264Z',
    },
  ],
};
const Reviews = () => {
  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <div className="w-full pb-34pxr pt-40pxr text-xl font-bold text-nomad-black">후기</div>
      <div className="flex flex-row">
        <p className="mr-16pxr text-4xl font-semibold text-nomad-black">{ReviewsMoc.averageRating}</p>
        <div className="flex-col items-start gap-8pxr p-0">
          <p className="text-2lg font-normal text-nomad-black">매우 만족</p>
          <div className="flex flex-row">
            <Image src={Star} alt="별점 이미지" width={16} height={16} priority />
            <p className="ml-5pxr text-md font-normal text-black-100">{`${ReviewsMoc.totalCount}개 후기`}</p>
          </div>
        </div>
      </div>
      <div className="table:72pxr mb-40pxr pc:mb-90pxr">
        {ReviewsMoc.reviews.map((dt, idx) => {
          return (
            <div className="flex flex-row" key={dt.id}>
              <div className="mr-16pxr h-138pxr w-61pxr">
                <div className="relative h-45pxr w-45pxr">
                  <Image src={DefaultProfile} alt="기본 프로필" className="absolute" fill priority />
                </div>
              </div>
              <div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold text-nomad-black">{dt.user.nickname}</p>
                  <p className="mx-8pxr text-lg font-normal text-nomad-black">|</p>
                  <p className="text-lg font-normal text-gray-500">{FormatDate(dt.createdAt)}</p>
                </div>
                <p>{dt.content}</p>
                {idx !== ReviewsMoc.reviews.length - 1 && <hr className="my-24pxr" />}
              </div>
            </div>
          );
        })}
      </div>
      <Pagenation size={31} showItemCount={3} onChange={handlePageChange} />
    </>
  );
};

export default Reviews;
