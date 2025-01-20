import React from 'react';

const mock = {
  cursorId: 0,
  reservations: [
    {
      id: 0,
      teamId: 'string',
      userId: 0,
      activity: {
        bannerImageUrl: 'string',
        title: 'string',
        id: 0,
      },
      scheduleId: 0,
      status: 'pending',
      reviewSubmitted: true,
      totalPrice: 0,
      headCount: 0,
      date: 'string',
      startTime: 'string',
      endTime: 'string',
      createdAt: '2025-01-20T01:55:20.317Z',
      updatedAt: '2025-01-20T01:55:20.317Z',
    },
  ],
  totalCount: 0,
};

export default function ReservationList() {
  return (
    <div>
      <div>
        <p>예약 내역</p>
        <div>필터</div>
      </div>
      <div></div>
    </div>
  );
}
