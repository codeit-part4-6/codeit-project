'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import KakaoMap from '@/components/activities/kakomap';
import Reviews from '@/components/activities/reviews';
import Dropbox from '@/components/common/dropbox';
import {ReservationMobileType, ReservationTabletType, ReservationWindowsType} from '@/components/activities/side-reservation';
import InitialDevice from '@/utiles/initial-device';
import Star from '@/public/icon/ic_star.svg';
import IconMeatball from '@/public/icon/ic_meatball.svg';
import LocationIcon from '@/public/icon/icon_location.svg';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';

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
interface BannerType {
  device: string;
  bannerImg: string | StaticImport;
  subImages: {id: number; imageUrl: string}[];
}

const DropboxItems = [
  {id: 1, label: '수정하기', type: 'modify'},
  {id: 2, label: '삭제하기', type: 'delete'},
];

const BannerFromDivceType = ({device, bannerImg, subImages}: BannerType) => {
  switch (device) {
    case 'mobile':
      return (
        <div className="relative h-310pxr w-full">
          <Image src={bannerImg} fill alt="bannerImag" />
        </div>
      );
    default:
      return (
        <div className="my-32pxr mb-85pxr flex min-h-310pxr min-w-375pxr flex-row tablet:min-h-310pxr tablet:min-w-696pxr pc:min-h-534pxr pc:min-w-[75rem]">
          <div className="relative min-h-310pxr min-w-375pxr rounded-l-lg tablet:min-h-310pxr tablet:min-w-346pxr pc:min-h-534pxr pc:min-w-595pxr">
            <Image src={bannerImg} fill alt="bannerImag" />
          </div>
          <div className="flex min-h-310pxr w-full min-w-375pxr flex-row flex-wrap items-start rounded-r-lg p-0 tablet:h-310pxr tablet:w-346pxr tablet:gap-4pxr pc:h-534pxr pc:w-595pxr pc:gap-8pxr">
            {subImages.map((dt, idx) => {
              return (
                <div key={`${idx}-subImages`} className="relative min-h-152pxr min-w-170pxr tablet:h-152pxr tablet:w-160pxr pc:h-263pxr pc:w-280pxr">
                  <Image src={dt.imageUrl} fill alt="subImages" />
                </div>
              );
            })}
          </div>
        </div>
      );
  }
};

const Reservation = () => {
  const [device, setDevice] = useState<string>('mobile');
  const [isOpenDropbox, setIsOpenDropbox] = useState<boolean>(false);

  const ReservationFromDivceType = () => {
    switch (device) {
      case 'windows':
        return <ReservationWindowsType />;
      case 'tablet':
        return <ReservationTabletType />;
      default:
        return <ReservationMobileType />;
    }
  };

  const handleActivitiesUpdate = (type: string) => {
    setIsOpenDropbox(false);
    console.log(type);
  };

  useEffect(() => {
    const getDeviceType = InitialDevice();
    setDevice(getDeviceType);
  }, []);

  return (
    <div className="mx-auto w-full px-24pxr pb-133pxr pt-16pxr tablet:min-w-696pxr tablet:pb-145pxr tablet:pt-24pxr pc:px-0 pc:pb-128pxr pc:pt-78pxr">
      <h4 className="mb-10pxr text-md font-normal text-nomad-black">{MocData.category}</h4>
      <div className="relative mb-16pxr flex flex-row justify-between">
        <div className="flex-row items-center gap-16pxr p-0 text-xl font-bold text-nomad-black tablet:text-3xl pc:text-3xl">{MocData.title}</div>
        <Image src={IconMeatball} onClick={() => setIsOpenDropbox(true)} width={40} height={40} alt="자세히보기" priority />
        {isOpenDropbox && (
          <Dropbox
            onClick={handleActivitiesUpdate}
            onClose={() => setIsOpenDropbox(false)}
            className="right-0 top-10 z-10 mb-4 mr-4 h-115pxr w-160pxr"
            items={DropboxItems}
          />
        )}
      </div>
      <div className="flex flex-row gap-6pxr tablet:mb-25pxr pc:mb-25pxr">
        <Image src={Star} alt="별점 이미지" width={16} height={16} priority />
        {`${MocData.rating} (${MocData.reviewCount})`}
        <div className="flex">
          <Image className="m-0 mr-1" src={LocationIcon} alt="Location" width={18} height={18} />
          <p className="text-sm font-normal text-nomad-black opacity-75">{MocData.address}</p>
        </div>
      </div>
      <BannerFromDivceType device={device} bannerImg={MocData.bannerImageUrl} subImages={MocData.subImages} />
      <div className={`relative flex ${device === 'mobile' ? 'flex-col' : 'flex-row'}`}>
        <div className="mb-16pxr mr-24pxr min-w-327pxr tablet:min-w-428pxr pc:min-w-790pxr">
          <hr />
          <div>
            <div className="w-full pb-16pxr pt-15pxr text-xl font-bold text-nomad-black tablet:pb-16pxr tablet:pt-41pxr pc:pb-34pxr pc:pt-40pxr">
              체험 설명
            </div>
            <div className="text-nomad mb-16pxr h-auto min-w-327pxr text-xl font-normal opacity-75 tablet:mb-57pxr tablet:min-w-428pxr pc:mb-34pxr pc:min-w-790pxr">
              안녕하세요! 저희 스트릿 댄스 체험을 소개합니다. 저희는 신나고 재미있는 스트릿 댄스 스타일을 가르칩니다. 크럼프는 세계적으로 인기 있는
              댄스 스타일로, 어디서든 춤출 수 있습니다. 저희 체험에서는 새로운 스타일을 접할 수 있고, 즐거운 시간을 보낼 수 있습니다. 저희는
              초보자부터 전문가까지 어떤 수준의 춤추는 사람도 가르칠 수 있도록 준비해놓았습니다. 저희와 함께 즐길 수 있는 시간을 기대해주세요! 각종
              음악에 적합한 스타일로, 저희는 크럼프 외에도 전통적인 스트릿 댄스 스타일과 최신 스트릿 댄스 스타일까지 가르칠 수 있습니다. 저희
              체험에서는 전문가가 직접 강사로 참여하기 때문에, 저희가 제공하는 코스는 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있도록
              준비해놓았습니다. 저희 체험을 참가하게 된다면, 즐거운 시간 뿐만 아니라 새로운 스타일을 접할 수 있을 것입니다.
            </div>
          </div>
          <hr />
          <div className="w-full pb-40pxr pt-16pxr text-xl font-bold text-nomad-black tablet:pb-42pxr tablet:pt-40pxr pc:pb-34pxr">
            <KakaoMap address={MocData.address} houseName={MocData.address} />
          </div>
          <hr />
          <Reviews />
        </div>
        <ReservationFromDivceType />
      </div>
    </div>
  );
};
export default Reservation;
