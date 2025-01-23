import React, {useEffect, useState} from 'react';
import arrowDown from '@/public/icon/icon_arrow_down.svg';
import Image from 'next/image';
import {ReservationInfoProps} from '@/types/reservation-info-props';
import ConfirmButton from './confirm-button';
import ConfirmChip from './confirm-chip';

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
      startTime: '09:00',
      endTime: '10:00',
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
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 20000,
      headCount: 6,
      date: '체험 일자2',
      startTime: '10:00',
      endTime: '11:00',
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
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 30000,
      headCount: 7,
      date: '체험 일자3',
      startTime: '10:00',
      endTime: '11:00',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 4,
      nickname: '김철수',
      userId: 1,
      teamId: '11-6',
      activityId: 4,
      scheduleId: 4,
      status: 'confirmed',
      reviewSubmitted: true,
      totalPrice: 30000,
      headCount: 8,
      date: '체험 일자4',
      startTime: '10:00',
      endTime: '11:00',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 5,
      nickname: '김영희',
      userId: 1,
      teamId: '11-6',
      activityId: 5,
      scheduleId: 5,
      status: 'declined',
      reviewSubmitted: true,
      totalPrice: 40000,
      headCount: 11,
      date: '체험 일자5',
      startTime: '10:00',
      endTime: '11:00',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
    {
      id: 6,
      nickname: '이진수수',
      userId: 1,
      teamId: '11-6',
      activityId: 6,
      scheduleId: 6,
      status: 'declined',
      reviewSubmitted: true,
      totalPrice: 40000,
      headCount: 21,
      date: '체험 일자6',
      startTime: '11:00',
      endTime: '12:00',
      createdAt: '2025-01-21T15:23:32.245Z',
      updatedAt: '2025-01-21T15:23:32.245Z',
    },
  ],
};

export default function ReservationInfo({reservationStatus}: ReservationInfoProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const reservations = mockReservations.reservations.filter(reservation => reservation.status === reservationStatus);

  const times = Array.from(new Set(reservations.map(reservation => `${reservation.startTime} ~ ${reservation.endTime}`)));

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    setSelectedTime(null);
  }, [reservationStatus]);

  const filteredReservations = selectedTime
    ? reservations.filter(reservation => `${reservation.startTime} ~ ${reservation.endTime}` === selectedTime)
    : reservations;

  const renderChip = () => {
    switch (reservationStatus) {
      case 'pending':
        return <ConfirmButton />;
      case 'confirmed':
        return <ConfirmChip method={`confirm`} />;
      case 'declined':
        return <ConfirmChip method={`declined`} />;
      default:
        return '';
    }
  };

  return (
    <div className="mt-27pxr px-6">
      <div className="flex flex-col text-start">
        <div>
          <p className="mb-4 text-xl font-semibold leading-none text-black-100">예약 날짜</p>
          <p className="mb-3 text-xl font-regular leading-none text-black-100 tablet:mb-1">{reservations[0]?.date || '체험 일자가 없습니다.'}</p>
          <div className="relative mb-30pxr min-h-53pxr w-full rounded-2xl border border-gray-700 px-5 py-4 tablet:rounded-md">
            <div className="flex cursor-pointer items-center justify-between" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="text-2lg font-regular leading-none text-black-100">{selectedTime || '체험 시간을 선택하세요'}</span>
              <div className="relative h-6 w-6">
                <Image className="absolute" fill src={arrowDown} alt="메뉴 선택 토글" />
              </div>
            </div>
            {isDropdownOpen && (
              <ul className="absolute -left-2pxr z-10 mt-5 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                {times.map((time, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-5 py-18pxr text-lg font-regular text-gray-800 hover:bg-green-50 hover:text-nomad-black"
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </li>
                ))}
              </ul>
            )}
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
                  <div>{renderChip()}</div>
                </div>
              ))
            : '선택한 시간에 대한 예약 내역이 없습니다.'}
        </div>
      </div>
    </div>
  );
}
