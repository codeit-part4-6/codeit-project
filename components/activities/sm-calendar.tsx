import React from 'react';
import {Dayjs} from 'dayjs';
import {Calendar} from 'antd';
import {CalendarProps} from 'antd';
import locale from 'antd/es/calendar/locale/ko_KR';

interface CalendarHeaderType {
  value: Dayjs;
  onChange: (value: Dayjs) => void;
}

const SmCalendar = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const handleOnSelect = (date: Dayjs, info: {source: 'year' | 'month' | 'date' | 'customize'}) => {
    console.log(date, info);
  };

  const CalendarHeader = ({value, onChange}: CalendarHeaderType) => {
    const year = value.year();
    const month = value.month() + 1;

    const handlePrev = () => {
      onChange(value.subtract(1, 'month'));
    };

    const handleNext = () => {
      onChange(value.add(1, 'month'));
    };

    return (
      <div className="m-5 flex items-center justify-center gap-54pxr">
        <button onClick={handlePrev} className="font-[Open_Sans]] text-xs font-bold text-black-100 hover:text-gray-700">
          &lt;&lt;
        </button>
        <span className="font-[Open_Sans]] text-xs font-bold text-black-100">
          {year}년 {month}월
        </span>
        <button onClick={handleNext} className="font-[Open_Sans]] text-balck-100 text-xs font-bold hover:text-gray-700">
          &gt;&gt;
        </button>
      </div>
    );
  };

  return (
    <Calendar
      locale={locale}
      fullscreen={false}
      headerRender={(props: CalendarHeaderType) => <CalendarHeader {...props} />}
      onPanelChange={onPanelChange}
      onSelect={handleOnSelect}
    />
  );
};

export default SmCalendar;
