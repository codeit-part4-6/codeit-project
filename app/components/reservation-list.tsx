import React, {useState, useEffect} from 'react';
import nonData from '@/public/img/img_non_data.svg';
import Image from 'next/image';
import Button from '@/components/common/button';
import Modal from '@/components/common/modal/modal';
import ReviewModal from '@/components/common/modal/review-modal';
import CustomSelect from '@/components/reservation-list/custom-select';
import {statusLabels, buttonByStatus} from '@/constant/reservation-list-constant';

const mock = {
  reservations: [
    {
      id: 1,
      teamId: '11-6',
      userId: 0,
      activity: {
        bannerImageUrl: '/img/img_navlogo.svg',
        title: '테스트 예약 체험1',
        id: 1,
      },
      scheduleId: 1,
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 10000,
      headCount: 0,
      date: '날짜',
      startTime: '시작 시간',
      endTime: '종료 시간',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
    {
      id: 2,
      teamId: '11-6',
      userId: 0,
      activity: {
        bannerImageUrl: '/img/img_navlogo.svg',
        title: '테스트 예약 체험2',
        id: 2,
      },
      scheduleId: 2,
      status: 'confirmed',
      reviewSubmitted: true,
      totalPrice: 20000,
      headCount: 0,
      date: '날짜',
      startTime: '시작 시간',
      endTime: '종료 시간',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
    {
      id: 3,
      teamId: '11-6',
      userId: 0,
      activity: {
        bannerImageUrl: '/img/img_navlogo.svg',
        title: '테스트 예약 체험3',
        id: 3,
      },
      scheduleId: 3,
      status: 'completed',
      reviewSubmitted: true,
      totalPrice: 30000,
      headCount: 0,
      date: '날짜',
      startTime: '시작 시간',
      endTime: '종료 시간',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
    {
      id: 4,
      teamId: '11-6',
      userId: 0,
      activity: {
        bannerImageUrl: '/img/img_navlogo.svg',
        title: '테스트 예약 체험4',
        id: 4,
      },
      scheduleId: 4,
      status: 'declined',
      reviewSubmitted: true,
      totalPrice: 40000,
      headCount: 0,
      date: '날짜',
      startTime: '시작 시간',
      endTime: '종료 시간',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
    {
      id: 5,
      teamId: '11-6',
      userId: 0,
      activity: {
        bannerImageUrl: '/img/img_navlogo.svg',
        title: '테스트 예약 체험3',
        id: 5,
      },
      scheduleId: 5,
      status: 'canceled',
      reviewSubmitted: true,
      totalPrice: 50000,
      headCount: 0,
      date: '날짜',
      startTime: '시작 시간',
      endTime: '종료 시간',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
  ],
};

export const statusLabelsColor: Record<string, string> = {
  pending: 'text-blue-100',
  confirmed: 'text-orange-100',
  declined: 'text-red-200',
  canceled: 'text-gray-700',
  completed: 'text-gray-700',
};

export const buttonStyleByStatus: Record<string, string> = {
  pending:
    'w-80pxr h-8 py-1 px-2 font-bold text-md text-nomad-black tablet:text-lg tablet:w-112pxr tablet:h-40pxr tablet:px-3 tablet:py-2 bg-white border border-nomad-black rounded-md',
  completed:
    'w-80pxr h-8 py-1 px-2 font-bold text-md text-white tablet:text-lg tablet:w-112pxr tablet:h-40pxr tablet:px-3 tablet:py-2 bg-nomad-black rounded-md',
};

export default function ReservationList() {
  const [orderBy, setOrderBy] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleButtonClick = (status: string, id: number) => {
    setIsOpen(true);
    setModalType(status);
    setSelectedId(id);
  };

  const getModalContent = () => {
    switch (modalType) {
      case 'pending':
        return <Modal type="small" message="예약을 취소하시겠습니까?" onClose={() => setIsOpen(false)} />;
      case 'completed':
        const selectedData = mock.reservations.find(reservation => reservation.status === 'completed' && reservation.id === selectedId);
        return <ReviewModal data={selectedData} message={'후기 작성'} onClose={() => setIsOpen(false)} />;
      default:
        return null;
    }
  };

  const filteredReservation = mock.reservations.filter(reservation => !orderBy || reservation.status === orderBy);

  useEffect(() => {
    // 모달 dim 부분 스크롤 막기
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = ''; // 기본 스크롤 상태로 복구
    }
    return () => {
      document.body.style.overflow = ''; // 컴포넌트가 unmount 될 때도 스크롤 상태 복구
    };
  }, [isOpen]);

  return (
    <div className="mb-16 h-full w-full">
      <div className="mb-3 flex w-full items-start justify-between tablet:mb-6">
        <p className="text-3xl font-bold text-black-100">예약 내역</p>
        <div className="m-0">
          <CustomSelect orderBy={orderBy} handleOrderBy={(value: string) => setOrderBy(value)} />
        </div>
      </div>

      {!filteredReservation || filteredReservation.length === 0 ? (
        <div className="mt-60pxr flex flex-col items-center justify-center gap-3 tablet:mt-14 pc:mt-86pxr">
          <div className="h-200pxr w-200pxr pc:h-60 pc:w-60">
            <Image src={nonData} alt="내역이 없어요" />
          </div>
          <p className="text-xl font-medium text-gray-700">아직 등록한 체험이 없어요</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 tablet:gap-4 pc:gap-6">
          {filteredReservation.map(reservation => (
            <div key={`list_${reservation.id}`} className="flex h-32 w-full items-center rounded-3xl shadow-sidenavi-box tablet:h-156pxr pc:h-204pxr">
              <div className="relative h-32 w-32 flex-shrink tablet:h-156pxr tablet:w-156pxr pc:h-204pxr pc:w-204pxr">
                <Image className="absolute" fill src={reservation.activity.bannerImageUrl} alt="체험 배너 이미지" />
              </div>
              <div className="flex-grow py-11pxr pl-2 pr-14pxr tablet:py-3 tablet:pl-3 tablet:pr-18pxr pc:px-6 pc:py-21pxr">
                <p className={`${statusLabelsColor[reservation.status]} text-md font-bold tablet:text-lg pc:mb-2`}>
                  {statusLabels[reservation.status]}
                </p>
                <p className="text-md font-bold text-nomad-black tablet:mb-1 tablet:text-2lg pc:mb-3 pc:text-xl">{reservation.activity.title}</p>
                <div className="mb-0 flex items-center gap-[0.125rem] text-xs font-regular text-nomad-black tablet:mb-10pxr tablet:text-md pc:mb-4 pc:text-lg">
                  <p>{reservation.date}</p>
                  <p>·</p>
                  <p>{reservation.startTime}</p>
                  <p>·</p>
                  <p>{reservation.endTime}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-black-100 tablet:text-xl">￦{reservation.totalPrice}</p>
                  <Button
                    onClick={() => handleButtonClick(`${reservation.status}`, reservation.id)}
                    className={`${buttonStyleByStatus[reservation.status]}`}
                  >
                    {buttonByStatus[reservation.status]}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isOpen && <>{getModalContent()}</>}
    </div>
  );
}
