'use client';
import SideNavi from '@/components/common/side-navigation/side-navi';
import React, {useState} from 'react';

export default function Page() {
  const [selectedMenu, setSelectedMenu] = useState('myinfo');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'myinfo':
        return (
          <div>
            내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보
            컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트
          </div>
        );
      case 'reserveList':
        return <div>예약 내역 컴포넌트</div>;
      case 'treatReservation':
        return <div>내 체험 관리 컴포넌트</div>;
      case 'reserveCalendar':
        return <div>예약 현황 컴포넌트</div>;
      default:
        return <div>선택된 메뉴가 없습니다.</div>;
    }
  };

  return (
    <div className="px-4 pt-6 tablet:p-6 pc:mt-[4.5rem] pc:w-full pc:max-w-[75rem] pc:p-0">
      <div className="flex tablet:gap-4 pc:gap-6">
        <SideNavi selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} />
        <div className="flex-grow">{renderContent()}</div>
      </div>
    </div>
  );
}
