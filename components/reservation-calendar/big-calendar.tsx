import React, {useState} from 'react';
import {Calendar} from 'antd';
import type {Dayjs} from 'dayjs';
import CalendarHeader from './calendar-header';
import ReservationContainer from '../common/modal/reservation-container';
import ReservationModal from '../common/modal/reservation-modal';

export default function BigCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDateClick = () => {
    setIsModalOpen(prev => !prev);
  };

  const DateCell = (date: Dayjs) => (
    <div>
      <div onClick={() => handleDateClick()} className="relative h-154pxr border-collapse border border-gray-900 hover:bg-green-50">
        <span className="text-black-300 absolute left-1 top-1 px-1 text-xl font-medium">{date.date()}</span>
      </div>
      {isModalOpen && (
        <ReservationContainer>
          <ReservationModal onClose={() => setIsModalOpen(false)} />
        </ReservationContainer>
      )}
    </div>
  );

  return (
    <div>
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
