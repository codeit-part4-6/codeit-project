import React from 'react';
import {Calendar} from 'antd';
import type {Dayjs} from 'dayjs';
import CalendarHeader from './calendar-header';

export default function BigCalendar() {
  const DateCell = (date: Dayjs) => (
    <div className="relative h-154pxr border-collapse border border-gray-900 hover:bg-green-50">
      <span className="text-black-300 absolute left-1 top-1 px-1 text-xl font-medium">{date.date()}</span>
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
        dateFullCellRender={DateCell}
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
