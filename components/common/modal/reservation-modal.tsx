import Image from 'next/image';
import React, {useState} from 'react';
import closeButton from '@/public/icon/ic_close_button.svg';
import ReservationInfo from '@/components/reservation-calendar/reservation-info';

interface ReservationModalProps {
  onClose: () => void;
}

const mockReservedSchedule = [
  {
    scheduleId: 0,
    startTime: 'string',
    endTime: 'string',
    count: {
      declined: 1,
      confirmed: 1,
      pending: 1,
    },
  },
];

export default function ReservationModal({onClose}: ReservationModalProps) {
  const [reservationStatus, setReservationStatus] = useState('pending');

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="pt-3">
        <div className="mb-19pxr flex items-center justify-between px-3">
          <p className="tablet: text-2xl text-[1.75rem] font-bold text-black-100">예약 정보</p>
          <div className="relative h-12 w-12 tablet:h-10 tablet:w-10" onClick={onClose}>
            <Image src={closeButton} alt="모달 닫기 버튼" className="absolute cursor-pointer" fill />
          </div>
        </div>
        <div className="border-b border-gray-200">
          <div className="flex items-center gap-3 px-3">
            <div
              onClick={() => setReservationStatus('pending')}
              className={`relative pb-15pxr text-xl ${reservationStatus === 'pending' ? 'z-10 -mb-1pxr border-b-2 border-green-100 font-semibold text-green-100' : 'font-regular text-gray-800'} `}
            >
              신청 {mockReservedSchedule[0].count.pending}
            </div>
            <div
              onClick={() => setReservationStatus('confirmed')}
              className={`relative pb-15pxr text-xl ${reservationStatus === 'confirmed' ? 'z-10 -mb-1pxr border-b-2 border-green-100 font-semibold text-green-100' : 'font-regular text-gray-800'}`}
            >
              승인 {mockReservedSchedule[0].count.confirmed}
            </div>
            <div
              onClick={() => setReservationStatus('declined')}
              className={`relative pb-15pxr text-xl ${reservationStatus === 'declined' ? 'z-10 -mb-1pxr border-b-2 border-green-100 font-semibold text-green-100' : 'font-regular text-gray-800'}`}
            >
              거절 {mockReservedSchedule[0].count.declined}
            </div>
          </div>
        </div>
        <ReservationInfo reservationStatus={reservationStatus} />;
      </div>
    </div>
  );
}
