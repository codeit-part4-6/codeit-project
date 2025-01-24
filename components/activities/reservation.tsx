'use client';
import React, {useEffect, useState} from 'react';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import KakaoMap from '@/components/activities/kakomap';
import Reviews from '@/components/activities/reviews';
import SmCalendar from '@/components/activities/sm-calendar';
import Button from '@/components/common/button';
import OverlayContainer from '@/components/common/modal/overlay-container';
import Plus from '@/public/icon/icon_plus.png';
import Minus from '@/public/icon/icon_minus.png';
import Cancle from '@/public/icon/icon_cancle.png';

interface ImageType {
  bannerImg: string | StaticImport;
  subImages: {id: number; imageUrl: string}[];
}

interface BannerType extends ImageType {
  device: string;
}

interface ReservationType extends ImageType {
  address: string;
}

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

const ReservationWindowsType = () => {
  return (
    <div className="pc:min-h-748rem rounded-xl border border-solid border-gray-200 bg-white px-24pxr pb-18pxr pt-24pxr shadow-sidenavi-box tablet:h-full pc:min-w-384pxr">
      <div className="mb-16pxr">
        <p className="mb-16pxr text-3xl font-bold text-black-100">₩ 1,000</p>
        <hr />
      </div>
      <div className="my-16pxr">
        <p className="mb-16pxr text-xl font-bold text-nomad-black">날짜</p>
        <div className="mx-auto w-305pxr items-center justify-center rounded-lg border border-solid border-gray-100 p-0">
          <SmCalendar />
        </div>
        <div className="flex-col pc:w-336pxr">
          <p className="mt-16pxr w-full text-xl font-bold text-nomad-black">예약 가능한 시간</p>
          <div className="mb-16pxr mt-14pxr flex flex-row flex-wrap gap-12pxr">
            <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg bg-nomad-black px-10pxr py-12pxr">
              <p className="text-lg font-medium text-white">14:00 ~ 15:00</p>
            </Button>
            <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
              <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
            </Button>
            <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
              <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
            </Button>
            <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
              <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-24pxr mt-12pxr">
        <p className="mt-16pxr w-full text-xl font-bold text-nomad-black">참여 인원수</p>
        <div className="shadow-[0px_2px_4px_rgba(5, 16, 55, 0.06)] inset-shadow-[0px_0px_0px_1px_#CDD0DC] flex h-42pxr w-120pxr flex-row items-start gap-10pxr rounded-md border bg-white p-0">
          <Button className="relative h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">
            <Image src={Minus} width={20} height={20} alt="minus" />
          </Button>
          <p className="h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">10</p>
          <Button className="relative h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">
            <Image src={Plus} width={20} height={20} alt="plus" />
          </Button>
        </div>
        <Button className="my-24pxr flex h-56pxr w-full flex-row items-center justify-center gap-4pxr rounded-s bg-nomad-black px-8pxr py-40pxr">
          <p className="text-lg font-bold text-white">예약하기기</p>
        </Button>
      </div>
      <hr />
      <div className="mt-16pxr flex flex-row items-center justify-between">
        <p className="text-xl font-bold text-nomad-black">총 합계</p>
        <p className="text-xl font-bold text-nomad-black">₩ 10,000</p>
      </div>
    </div>
  );
};

const ReservationTabletType = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalStatus(true);
  };

  const handleModalClose = () => {
    setModalStatus(false);
  };
  return (
    <div className="tablet:min-h-423rem rounded-xl border border-solid border-gray-200 bg-white px-24pxr pb-18pxr pt-24pxr shadow-sidenavi-box tablet:h-full tablet:min-w-251pxr">
      <div className="mb-16pxr">
        <p className="mb-16pxr text-2xl font-bold text-black-100">₩ 1,000</p>
        <hr />
      </div>
      <div className="my-13pxr">
        <p className="mb-16pxr text-xl font-bold text-nomad-black">날짜</p>
        <Button className="rounded-md border border-gray-100 bg-white px-10pxr text-lg font-semibold text-nomad-black" onClick={handleOpenModal}>
          날짜 선택하기
        </Button>
        <p className="text-lg font-semibold text-nomad-black">22/11/14 14:00 ~ 15:00</p>
        <p className="text-lg font-semibold text-nomad-black">22/11/15 14:00 ~ 15:00</p>
        <p className="text-lg font-semibold text-nomad-black">22/11/16 14:00 ~ 15:00</p>
      </div>
      <hr />
      <div className="mb-24pxr mt-12pxr">
        <p className="mt-16pxr w-full text-xl font-bold text-nomad-black">참여 인원수</p>
        <div className="shadow-[0px_2px_4px_rgba(5, 16, 55, 0.06)] inset-shadow-[0px_0px_0px_1px_#CDD0DC] flex h-42pxr w-120pxr flex-row items-start gap-10pxr rounded-md border bg-white p-0">
          <Button className="relative h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">
            <Image src={Minus} width={20} height={20} alt="minus" />
          </Button>
          <p className="h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">10</p>
          <Button className="relative h-40pxr w-40pxr flex-row items-start justify-center rounded-s-md bg-white p-10pxr">
            <Image src={Plus} width={20} height={20} alt="plus" />
          </Button>
        </div>
        <Button className="my-24pxr flex h-56pxr w-full flex-row items-center justify-center gap-4pxr rounded-md bg-nomad-black px-8pxr py-40pxr">
          <p className="text-lg font-bold text-white">예약하기기</p>
        </Button>
      </div>
      <hr />
      <div className="mt-16pxr flex flex-row items-center justify-between">
        <p className="text-xl font-bold text-nomad-black">총 합계</p>
        <p className="text-xl font-bold text-nomad-black">₩ 10,000</p>
      </div>
      {modalStatus && (
        <OverlayContainer onClose={handleModalClose}>
          <div onClick={e => e.stopPropagation()} className="w-480pxr rounded-3xl bg-white px-24pxr pb-32pxr pt-28pxr">
            <p className="mb-16pxr text-xl font-bold text-nomad-black">날짜</p>
            <div className="mx-auto w-305pxr items-center justify-center rounded-lg border border-solid border-gray-100 p-0">
              <SmCalendar />
            </div>
            <div className="h-300pxr min-w-336pxr flex-col overflow-y-auto">
              <p className="mt-16pxr w-full text-2lg font-bold text-nomad-black">예약 가능한 시간</p>
              <div className="mb-16pxr mt-14pxr flex flex-row flex-wrap gap-12pxr">
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg bg-nomad-black px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-white">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
              </div>
            </div>
            <Button
              className="min-w-432px flex h-56pxr w-full flex-row items-center justify-center gap-4pxr rounded-md bg-nomad-black px-8pxr py-40pxr"
              onClick={handleModalClose}
            >
              <p className="text-lg font-bold text-white">확인</p>
            </Button>
          </div>
        </OverlayContainer>
      )}
    </div>
  );
};

const ReservationMobileType = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalStatus(true);
  };

  const handleModalClose = () => {
    setModalStatus(false);
  };
  return (
    <>
      <div className="sticky bottom-0 left-0 z-10 h-85pxr w-full min-w-375pxr border border-t border-solid border-gray-600 bg-white">
        <div className="flex flex-row flex-wrap justify-between px-18pxr py-18pxr">
          <div className="flex flex-col items-start">
            <p className="text-xl font-bold text-nomad-black">₩ 1,000</p>
            <Button className="border-0 bg-white text-lg font-semibold text-primary" onClick={handleOpenModal}>
              <ins>날짜 선택하기</ins>
            </Button>
          </div>
          <Button
            className="h-48pxr min-w-106pxr items-center justify-center rounded-md bg-gray-500 text-lg font-bold text-white"
            onClick={handleOpenModal}
          >
            예약하기
          </Button>
        </div>
      </div>

      {modalStatus && (
        <OverlayContainer onClose={handleModalClose}>
          <div onClick={e => e.stopPropagation()} className="h-full min-w-373pxr bg-white px-24pxr pb-40pxr pt-24pxr">
            <div className="mb-30pxr flex flex-row justify-between">
              <p className="text-xl font-bold text-nomad-black">날짜</p>
              <Button onClick={handleModalClose}>
                <Image src={Cancle} width={40} height={40} alt="cancle" />
              </Button>
            </div>
            <div className="mx-auto mb-24pxr min-w-305pxr items-center justify-center rounded-lg border border-solid border-gray-100 p-0">
              <SmCalendar />
            </div>
            <div className="h-300pxr min-w-327pxr flex-col overflow-y-auto">
              <p className="mb-14pxr w-full text-2lg font-bold text-nomad-black">예약 가능한 시간</p>
              <div className="mb-16pxr flex flex-row flex-wrap gap-12pxr">
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg bg-nomad-black px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-white">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
                <Button className="h-46pxr w-125pxr items-center justify-center rounded-lg border border-solid bg-white px-10pxr py-12pxr">
                  <p className="text-lg font-medium text-nomad-black">14:00 ~ 15:00</p>
                </Button>
              </div>
            </div>
            <Button
              className="min-w-432px flex h-56pxr w-full flex-row items-center justify-center gap-4pxr rounded-md bg-nomad-black"
              onClick={handleModalClose}
            >
              <p className="text-lg font-bold text-white">확인</p>
            </Button>
          </div>
        </OverlayContainer>
      )}
    </>
  );
};

const Reservation = ({bannerImg, subImages, address}: ReservationType) => {
  const [device, setDevice] = useState<string>('mobile');

  const initialDevice = () => {
    let device = 'mobile';
    if (window.innerWidth > 1199) {
      device = 'windows';
    } else if (window.innerWidth > 767) {
      device = 'tablet';
    }
    return device;
  };

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

  useEffect(() => {
    const getDeviceType = initialDevice();
    setDevice(getDeviceType);
  }, []);

  return (
    <>
      <BannerFromDivceType device={device} bannerImg={bannerImg} subImages={subImages} />
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
            <KakaoMap address={address} houseName={address} />
          </div>
          <hr />
          <Reviews />
        </div>
        <ReservationFromDivceType />
      </div>
    </>
  );
};
export default Reservation;
