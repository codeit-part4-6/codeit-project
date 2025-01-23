import React from 'react';
import type {Dayjs} from 'dayjs';

interface CalendarHeaderProps {
  value: Dayjs;
  onChange: (value: Dayjs) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({value, onChange}) => {
  const year = value.year();
  const month = value.month() + 1;

  const handlePrev = () => {
    onChange(value.subtract(1, 'month'));
  };

  const handleNext = () => {
    onChange(value.add(1, 'month'));
  };

  return (
    <div className="mb-4 flex items-center justify-center gap-24">
      <button onClick={handlePrev} className="text-balck-100 text-xl font-bold hover:text-gray-700">
        &lt;&lt;
      </button>
      <span className="text-xl font-bold text-black-100">
        {year}년 {month}월
      </span>
      <button onClick={handleNext} className="text-balck-100 text-xl font-bold hover:text-gray-700">
        &gt;&gt;
      </button>
    </div>
  );
};

export default CalendarHeader;
