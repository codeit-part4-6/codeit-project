import Image from 'next/image';
import React, {useState} from 'react';
import selectDown from '@/public/icon/ic_chevron_down.svg';
import BigCalendar from '@/components/reservation-calendar/big-calendar';

const mock = {
  activities: [
    {
      id: 1,
      userId: 1,
      title: '체험 1',
      description: '체험 1 내용이야',
      category: '스포츠',
      price: 10000,
      address: '주소1',
      bannerImageUrl: '/img/img_navlogo.svg',
      rating: 2,
      reviewCount: 1,
      createdAt: '2025-01-21T03:29:00.553Z',
      updatedAt: '2025-01-21T03:29:00.553Z',
    },
    {
      id: 2,
      userId: 1,
      title: '체험 2',
      description: '체험 2 내용이야',
      category: '영화',
      price: 20000,
      address: '주소2',
      bannerImageUrl: '/img/img_navlogo.svg',
      rating: 3,
      reviewCount: 1,
      createdAt: '2025-01-21T03:29:00.553Z',
      updatedAt: '2025-01-21T03:29:00.553Z',
    },
  ],
};

export default function ReservationCalendar() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(mock.activities[0].title);

  const handleSelect = (title: string) => {
    setSelectedTitle(title);
    setIsOptionOpen(prev => !prev);
  };

  return (
    <div className="mb-16 h-full w-full">
      <p className="mb-8 text-3xl font-bold text-black-50">예약 현황</p>
      <div
        onClick={() => setIsOptionOpen(prev => !prev)}
        className="relative mb-8 h-14 min-h-14 w-full cursor-pointer rounded border border-gray-700 px-5"
      >
        <p className="absolute -top-3 left-4 bg-white px-1 text-md font-regular text-nomad-black">체험명</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-balck-200 text-lg font-regular">{selectedTitle}</span>
          <div className="relative h-6 w-6">
            <Image className="absolute" fill src={selectDown} alt="메뉴 선택 토글" />
          </div>
        </div>
        {isOptionOpen && (
          <ul className="absolute left-0 z-10 mt-5 w-full rounded border border-gray-300 bg-white shadow-sidenavi-box">
            {mock.activities.map(activity => (
              <li
                key={activity.title}
                onClick={e => {
                  e.stopPropagation();
                  handleSelect(activity.title);
                }}
                className="cursor-pointer px-5 py-18pxr text-lg font-regular text-gray-800 hover:bg-green-50 hover:text-nomad-black"
              >
                {activity.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <BigCalendar />
      </div>
    </div>
  );
}
