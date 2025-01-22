import React, {useState, useEffect, useRef} from 'react';
import {Calendar} from 'antd';
import type {Dayjs} from 'dayjs';
import CalendarHeader from './calendar-header';
import ReservationContainer from '../common/modal/reservation-container';
import ReservationModal from '../common/modal/reservation-modal';

export default function BigCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isTablet, setIsTablet] = useState<boolean | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false); // 모달 외부 클릭 시 모달 닫기
    }
  };

  const handleDateClick = () => {
    setIsModalOpen(prev => !prev);
  };

  function getPageSize(width: number): boolean {
    return width >= 745 && width < 1200;
  }

  useEffect(() => {
    const initialIsTablet = getPageSize(document.documentElement.clientWidth);
    setIsTablet(initialIsTablet); // 브라우저에서만 실행
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = getPageSize(document.documentElement.clientWidth);
      setIsTablet(mobile);
    };
    if (isTablet !== null) {
      // isMobile이 null이 아니면 resize 이벤트 처리
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isTablet]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside); // 외부 클릭 감지
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isModalOpen]);

  const DateCell = (date: Dayjs) => (
    <div>
      <div
        onClick={() => {
          handleDateClick();
        }}
        className="relative h-154pxr border-collapse border border-gray-900 hover:bg-green-50"
      >
        <span className="absolute left-1 top-1 px-1 text-xl font-medium text-black-300">{date.date()}</span>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {isModalOpen && !isTablet && (
        <ReservationContainer onClose={() => setIsModalOpen(false)}>
          <ReservationModal onClose={() => setIsModalOpen(false)} />
        </ReservationContainer>
      )}
      {isModalOpen && isTablet && (
        <div ref={modalRef}>
          <ReservationModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      <Calendar
        headerRender={(props: {value: Dayjs; onChange: (value: Dayjs) => void}) => (
          <>
            <CalendarHeader {...props} />
          </>
        )}
        fullCellRender={DateCell}
      />
      <style>
        {`
          .ant-picker-content th {
            font-size: 1rem;
            font-weight: 500 !important;
            color: #969696 !important;
            padding: 0rem 0.25rem !important;
            border: 1px solid #E8E8E8;
            border-collapse: collapse;
          }
          .ant-picker-content thead {
            text-align: left;
            height: 43px;
          }
        `}
      </style>
    </div>
  );
}
