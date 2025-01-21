'use client';
import React from 'react';
import {Calendar} from 'antd';
import {CalendarProps} from 'antd';
import {Dayjs} from 'dayjs';
import locale from 'antd/es/calendar/locale/ko_KR';

const Reservation = ({}) => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const handleOnSelect = (date: Dayjs, info: {source: 'year' | 'month' | 'date' | 'customize'}) => {
    console.log(date, info);
  };

  return (
    <div className="ml-14pxr h-746pxr w-384pxr rounded-xl border border-solid border-gray-200 bg-white p-24pxr shadow-sidenavi-box">
      <p className="text-3xl font-bold text-black-100">₩ 1,000</p>
      <hr className="my-16pxr" />
      <div className="w-300pxr rounded-lg border border-solid">
        <Calendar locale={locale} fullscreen={false} mode="month" showWeek={false} onPanelChange={onPanelChange} onSelect={handleOnSelect} />
      </div>
    </div>
  );
};

export default Reservation;
