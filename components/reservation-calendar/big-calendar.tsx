import React from 'react';
import {Calendar} from 'antd';
import CalendarHeader from './calendar-header';

export default function BigCalendar() {
  return (
    <div>
      <Calendar headerRender={props => <CalendarHeader {...props} />} />
    </div>
  );
}
