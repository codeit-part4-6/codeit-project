'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import SmCalendar from '@/components/activities/sm-calendar';
import Button from '@/components/common/button';
import OverlayContainer from '@/components/common/modal/overlay-container';
import Plus from '@/public/icon/icon_plus.png';
import Minus from '@/public/icon/icon_minus.png';
import Cancle from '@/public/icon/icon_cancle.png';

const ReservationWindowsType = () => {
  return (
    <div className="rounded-xl border border-solid border-gray-200 bg-white px-24pxr pb-18pxr pt-24pxr shadow-sidenavi-box tablet:h-full pc:min-h-748pxr pc:min-w-384pxr">
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
    <div className="rounded-xl border border-solid border-gray-200 bg-white px-24pxr pb-18pxr pt-24pxr shadow-sidenavi-box tablet:h-full tablet:min-h-423pxr tablet:min-w-251pxr">
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
          <div onClick={e => e.stopPropagation()} className="max-h-700pxr w-480pxr rounded-3xl bg-white px-24pxr pb-32pxr pt-28pxr">
            <div className="mb-30pxr flex flex-row justify-between">
              <p className="mb-16pxr text-xl font-bold text-nomad-black">날짜</p>
              <Button onClick={handleModalClose}>
                <Image src={Cancle} width={40} height={40} alt="cancle" />
              </Button>
            </div>
            <div className="mx-auto w-305pxr items-center justify-center rounded-lg border border-solid border-gray-100 p-0">
              <SmCalendar />
            </div>
            <div className="min-w-336pxr flex-col">
              <p className="mt-16pxr w-full text-2lg font-bold text-nomad-black">예약 가능한 시간</p>
              <div className="mb-16pxr mt-14pxr flex h-110pxr flex-row flex-wrap gap-12pxr overflow-y-scroll">
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
            <Button className="mb-10pxr flex h-56pxr w-full items-center justify-center rounded-md bg-nomad-black px-8pxr" onClick={handleModalClose}>
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

export {ReservationWindowsType, ReservationTabletType, ReservationMobileType};
