import React from 'react';
import Image from 'next/image';
import Star from '@/public/icon/ic_star.svg';
import LocationIcon from '@/public/icon/icon_location.svg';
import Banner from './banner';
import KakaoMap from './kakomap';
import Reviews from './reviews';
import Reservation from './reservation';

const moc = {
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
    <div className="mx-auto px-16pxr pb-133pxr pt-16pxr tablet:px-24pxr tablet:pb-145pxr tablet:pt-24pxr pc:w-full pc:max-w-[75rem] pc:p-0 pc:pb-128pxr pc:pt-78pxr">
      <h4 className="mb-10pxr text-md font-normal leading-6 text-nomad-black">{moc.category}</h4>
      <div className="mb-16pxr flex flex-row justify-between">
        <div className="flex-row items-center gap-16pxr p-0 text-3xl font-bold text-nomad-black">{moc.title}</div>
        <Image src={Star} width={40} height={40} alt="자세히보기" />
      </div>
      <div className="flex flex-row gap-6pxr tablet:mb-25pxr pc:mb-25pxr">
        <Image src={Star} alt="별점 이미지" width={16} height={16} />
        {`${moc.rating} (${moc.reviewCount})`}
        <div className="flex">
          <Image className="m-0 mr-1" src={LocationIcon} alt="Location" width={18} height={18} />
          {moc.address}
        </div>
      </div>
      <Banner bannerImg={moc.bannerImageUrl} subImages={moc.subImages} />
      <div className="flex flex-row">
        <div className="mb-16pxr w-790pxr">
          <hr />
          <div>
            <div className="w-full pb-34pxr pt-40pxr text-xl font-bold text-nomad-black">체험 설명</div>
            <div className="text-nomad h-416pxr w-327pxr text-xl font-normal opacity-75 tablet:h-312pxr tablet:w-428pxr pc:h-182pxr pc:w-790pxr">
              안녕하세요! 저희 스트릿 댄스 체험을 소개합니다. 저희는 신나고 재미있는 스트릿 댄스 스타일을 가르칩니다. 크럼프는 세계적으로 인기 있는
              댄스 스타일로, 어디서든 춤출 수 있습니다. 저희 체험에서는 새로운 스타일을 접할 수 있고, 즐거운 시간을 보낼 수 있습니다. 저희는
              초보자부터 전문가까지 어떤 수준의 춤추는 사람도 가르칠 수 있도록 준비해놓았습니다. 저희와 함께 즐길 수 있는 시간을 기대해주세요! 각종
              음악에 적합한 스타일로, 저희는 크럼프 외에도 전통적인 스트릿 댄스 스타일과 최신 스트릿 댄스 스타일까지 가르칠 수 있습니다. 저희
              체험에서는 전문가가 직접 강사로 참여하기 때문에, 저희가 제공하는 코스는 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있도록
              준비해놓았습니다. 저희 체험을 참가하게 된다면, 즐거운 시간 뿐만 아니라 새로운 스타일을 접할 수 있을 것입니다.
            </div>
          </div>
          <hr />
          <div className="w-full pb-34pxr pt-40pxr text-xl font-bold text-nomad-black">
            <KakaoMap address={moc.address} houseName={moc.address} />
          </div>
          <hr />
          <Reviews rating={moc.rating} />
        </div>
        <Reservation />
        
      </div>
    </div>
  );
};

export default page;
