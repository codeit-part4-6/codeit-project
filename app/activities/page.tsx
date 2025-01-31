import React from 'react';
import Image from 'next/image';
import Star from '@/public/icon/ic_star.svg';
import LocationIcon from '@/public/icon/icon_location.svg';
import Reservation from '@/components/activities/reservation';

const MocData = {
  id: 7,
  userId: 21,
  title: '함께 배우면 즐거운 스트릿댄스',
  description: '둠칫 둠칫 두둠칫',
  category: '투어',
  price: 10000,
  address: '서울특별시 강남구 테헤란로 427',
  bannerImageUrl: Star,
  subImages: [
    {
      id: 1,
      imageUrl: Star,
    },
    {
      id: 2,
      imageUrl: Star,
    },
    {
      id: 3,
      imageUrl: Star,
    },
    {
      id: 4,
      imageUrl: Star,
    },
  ],
  schedules: [
    {
      id: 1,
      date: '2023-12-01',
      startTime: '12:00',
      endTime: '13:00',
    },
    {
      id: 2,
      date: '2023-12-05',
      startTime: '12:00',
      endTime: '13:00',
    },
  ],
  reviewCount: 5,
  rating: 4.74,
  createdAt: '2023-12-31T21:28:50.589Z',
  updatedAt: '2023-12-31T21:28:50.589Z',
};

const page = () => {
  return (
    <div className="table:w-696pxr mx-auto px-24pxr pb-133pxr pt-16pxr tablet:px-24pxr tablet:pb-145pxr tablet:pt-24pxr pc:w-full pc:max-w-[75rem] pc:p-0 pc:pb-128pxr pc:pt-78pxr">
      <h4 className="mb-10pxr text-md font-normal text-nomad-black">{MocData.category}</h4>
      <div className="mb-16pxr flex flex-row justify-between">
        <div className="flex-row items-center gap-16pxr p-0 text-xl font-bold text-nomad-black tablet:text-3xl pc:text-3xl">{MocData.title}</div>
        <Image src={Star} width={40} height={40} alt="자세히보기" priority />
      </div>
      <div className="flex flex-row gap-6pxr tablet:mb-25pxr pc:mb-25pxr">
        <Image src={Star} alt="별점 이미지" width={16} height={16} priority />
        {`${MocData.rating} (${MocData.reviewCount})`}
        <div className="flex">
          <Image className="m-0 mr-1" src={LocationIcon} alt="Location" width={18} height={18} />
          <p className="text-sm font-normal text-nomad-black opacity-75">{MocData.address}</p>
        </div>
      </div>
      <Reservation bannerImg={MocData.bannerImageUrl} subImages={MocData.subImages} address={MocData.address} />
    </div>
  );
};

export default page;
