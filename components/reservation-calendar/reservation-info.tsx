import React from 'react';
import arrowDown from '@/public/icon/icon_arrow_down.svg';
import Image from 'next/image';
import Button from '../common/button';
import {ReservationInfoProps} from '@/types/reservation-info-props';

const mockReservations = {
  cursorId: 0,
  totalCount: 0,
  reservations: [
    {
      id: 1,
      nickname: '홍길동',
      userId: 1,
      teamId: '11-6',
      activityId: 1,
      scheduleId: 1,
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 10000,
      headCount: 3,
      date: '체험 일자1',
      startTime: '시작 시간1',
      endTime: '종료 시간1',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 2,
      nickname: '홍길동',
      userId: 1,
      teamId: '11-6',
      activityId: 2,
      scheduleId: 2,
      status: 'confirmed',
      reviewSubmitted: true,
      totalPrice: 20000,
      headCount: 6,
      date: '체험 일자2',
      startTime: '시작 시간2',
      endTime: '종료 시간2',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 3,
      nickname: '홍길동',
      userId: 1,
      teamId: '11-6',
      activityId: 3,
      scheduleId: 3,
      status: 'declined',
      reviewSubmitted: true,
      totalPrice: 30000,
      headCount: 9,
      date: '체험 일자3',
      startTime: '시작 시간3',
      endTime: '종료 시간3',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 4,
      nickname: '이길동',
      userId: 1,
      teamId: '11-6',
      activityId: 4,
      scheduleId: 4,
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 10000,
      headCount: 4,
      date: '체험 일자1',
      startTime: '시작 시간1',
      endTime: '종료 시간1',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
  ],
};

export default function ReservationInfo({reservationStatus}: ReservationInfoProps) {
  const reservation = mockReservations.reservations.find(reservation => reservation.status === reservationStatus);
  const filteredReservations = mockReservations.reservations.filter(reservation => reservation.status === reservationStatus);
  console.log(reservation);
  return (
    <div className="mt-27pxr px-3">
      {reservation && (
        <div className="flex flex-col text-start">
          <div>
            <p className="mb-4 text-xl font-semibold leading-none text-black-100">예약 날짜</p>
            <p className="mb-3 text-xl font-regular leading-none text-black-100">{reservation.date}</p>
            <div className="mb-30pxr min-h-53pxr w-full rounded-2xl border border-gray-700 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-2lg font-regular leading-none text-black-100">
                  {reservation.startTime} ~ {reservation.endTime}
                </span>
                <div className="relative h-6 w-6">
                  <Image className="absolute" fill src={arrowDown} alt="메뉴 선택 토글" />
                </div>
              </div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xl font-semibold text-black-100">예약 내역</p>
            {filteredReservations.length > 0
              ? filteredReservations.map(reservation => (
                  <div className="mb-4 flex min-h-116pxr w-full flex-col rounded-xl border border-gray-200 px-4 pb-3 pt-4" key={reservation.id}>
                    <div className="mb-6pxr text-lg font-semibold text-gray-700">
                      닉네임 <span className="ml-10pxr font-medium text-black-100">{reservation.nickname}</span>
                    </div>
                    <div className="mb-6pxr text-lg font-semibold text-gray-700">
                      인원 <span className="ml-10pxr font-medium text-black-100">{reservation.headCount}명</span>
                    </div>
                    <div className="flex justify-end gap-6pxr">
                      <Button
                        className="h-38pxr w-82pxr rounded-md bg-nomad-black px-10pxr align-middle text-md font-bold leading-none text-white"
                        type="button"
                      >
                        승인하기
                      </Button>
                      <Button
                        className="h-38pxr w-82pxr rounded-md border border-nomad-black px-10pxr text-md font-bold leading-none text-nomad-black"
                        type="button"
                      >
                        거절하기
                      </Button>
                    </div>
                  </div>
                ))
              : '없음'}
          </div>
        </div>
      )}
    </div>
  );
}
