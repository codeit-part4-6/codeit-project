'use client';
import SideNavi from '@/components/common/side-navigation/side-navi';
import React, {useState, useEffect} from 'react';

export default function Page() {
  const [selectedMenu, setSelectedMenu] = useState('myinfo');
  const [isMobile, setIsMobile] = useState<boolean>(getPageSize(window.innerWidth));

  function getPageSize(width: number): boolean {
    return width < 745;
  }

  useEffect(() => {
    const handleResize = () => {
      const mobile = getPageSize(window.innerWidth);
      setIsMobile(mobile);

      if (!mobile) {
        setSelectedMenu('myinfo');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSelectedMenu('');
    }
  }, [isMobile]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'myinfo':
        return (
          <div>
            {' '}
            {/*여기 컴포넌트 갈아끼워야해요*/}내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보
            컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내 정보 컴포넌트내
            정보 컴포넌트내 정보 컴포넌트
          </div>
        );
      case 'reserveList':
        return <div>예약 내역 컴포넌트</div>;
        {
          /*여기 컴포넌트 갈아끼워야해요*/
        }
      case 'treatReservation':
        return <div>내 체험 관리 컴포넌트</div>;
        {
          /*여기 컴포넌트 갈아끼워야해요*/
        }
      case 'reserveCalendar':
        return <div>예약 현황 컴포넌트</div>;
        {
          /*여기 컴포넌트 갈아끼워야해요*/
        }
      default:
        return <div>선택된 메뉴가 없습니다.</div>;
        {
          /*여기 컴포넌트 갈아끼워야해요*/
        }
    }
  };

  return (
    <div className="px-4 pt-6 tablet:p-6 pc:mt-[4.5rem] pc:w-full pc:max-w-[75rem] pc:p-0">
      {isMobile ? (
        // **모바일 환경**
        <div>
          <SideNavi selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} isMobile={isMobile} />
        </div>
      ) : (
        // **PC/태블릿 환경**
        <div className="flex tablet:gap-4 pc:gap-6">
          <SideNavi selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} />
          <div className="flex-grow">{renderContent()}</div>
        </div>
      )}
    </div>
  );
}
