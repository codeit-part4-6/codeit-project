import React from 'react';
import nonData from '@/public/img/img_non_data.svg';
import Image from 'next/image';

const mock = {
  reservations: [
    // {
    //   id: 1,
    //   teamId: '11-6',
    //   userId: 0,
    //   activity: {
    //     bannerImageUrl: '/img/img_navlogo.svg',
    //     title: '테스트 예약 체험1',
    //     id: 1,
    //   },
    //   scheduleId: 1,
    //   status: 'pending',
    //   reviewSubmitted: true,
    //   totalPrice: 10000,
    //   headCount: 0,
    //   date: '날짜',
    //   startTime: '시작 시간',
    //   endTime: '종료 시간',
    //   createdAt: '2025-01-20T01:55:20.317Z',
    //   updatedAt: '2025-01-20T01:55:20.317Z',
    // },
    // {
    //   id: 2,
    //   teamId: '11-6',
    //   userId: 0,
    //   activity: {
    //     bannerImageUrl: '/img/img_navlogo.svg',
    //     title: '테스트 예약 체험2',
    //     id: 2,
    //   },
    //   scheduleId: 2,
    //   status: 'confirmed',
    //   reviewSubmitted: true,
    //   totalPrice: 20000,
    //   headCount: 0,
    //   date: '날짜',
    //   startTime: '시작 시간',
    //   endTime: '종료 시간',
    //   createdAt: '2025-01-20T01:55:20.317Z',
    //   updatedAt: '2025-01-20T01:55:20.317Z',
    // },
  ],
};

export default function ReservationList() {
  return (
    <div className="h-full w-full">
      <div className="mb-3 tablet:mb-6">
        <p className="text-3xl font-bold text-black-100">예약 내역</p>
        {/* pc일때만 <div>필터</div> */}
      </div>
      {!mock.reservations || mock.reservations.length === 0 ? (
        <div className="mt-60pxr flex flex-col items-center justify-center gap-3 tablet:mt-14 pc:mt-86pxr">
          <div className="h-200pxr w-200pxr pc:h-60 pc:w-60">
            <Image src={nonData} alt="내역이 없어요" />
          </div>
          <p className="text-xl font-medium text-gray-700">아직 등록한 체험이 없어요</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 tablet:gap-4 pc:gap-6">
          {mock.reservations.map(reservation => (
            <div key={`list_${reservation.id}`} className="shadow-sidenavi-box flex h-32 w-full items-center rounded-3xl tablet:h-156pxr pc:h-204pxr">
              <div className="relative h-32 w-32 flex-shrink tablet:h-156pxr tablet:w-156pxr pc:h-204pxr pc:w-204pxr">
                <Image className="absolute" fill src={reservation.activity.bannerImageUrl} alt="체험 배너 이미지" />
              </div>
              <div className="flex-grow py-11pxr pl-2 pr-14pxr tablet:py-3 tablet:pl-3 tablet:pr-18pxr pc:px-6 pc:py-21pxr">
                <p className="text-md font-bold tablet:text-lg pc:mb-2">{reservation.status}</p>
                <p className="text-md font-bold text-nomad-black tablet:mb-1 tablet:text-2lg pc:mb-3 pc:text-xl">{reservation.activity.title}</p>
                <div className="pc: mb-4 flex items-center gap-[0.125rem] text-xs font-regular text-nomad-black tablet:mb-10pxr tablet:text-md pc:text-lg">
                  <p>{reservation.date}</p>
                  <p>·</p>
                  <p>{reservation.startTime}</p>
                  <p>·</p>
                  <p>{reservation.endTime}</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-black-100 tablet:text-xl">￦{reservation.totalPrice}</p>
                  {/* 여기는 상태에 따른 버튼 */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
