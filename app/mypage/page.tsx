'use client';
import OverlayContainer from '@/components/common/modal/overlay-container';
import SideNavi from '@/components/common/side-navigation/side-navi';
import Mypage from '@/components/common/side-navigation/mypage';
import React, {useState, useEffect} from 'react';

export default function Page() {
  const [selectedMenu, setSelectedMenu] = useState('myinfo');
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function getPageSize(width: number): boolean {
    return width < 745;
  }

  useEffect(() => {
    const initialIsMobil = getPageSize(window.innerWidth);
    setIsMobile(initialIsMobil); // 브라우저에서만 실행
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = getPageSize(window.innerWidth);
      setIsMobile(mobile);
      setIsOpen(false);
      if (!mobile && selectedMenu === '') {
        setSelectedMenu('myinfo');
      }
    };
    if (isMobile !== null) {
      // isMobile이 null이 아니면 resize 이벤트 처리
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [selectedMenu, isMobile]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'myinfo':
        return (
          <div>
            {/*여기 컴포넌트 갈아끼워야해요*/}
            <Mypage />
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

  if (isMobile === null) {
    return null; // 클라이언트에서 isMobile 값을 정할 때까지 아무것도 렌더링하지 않음
  }

  return (
    <div className="px-4 pt-6 tablet:p-6 pc:mt-[4.5rem] pc:w-full pc:max-w-[75rem] pc:p-0">
      {isMobile ? (
        // **모바일 환경**
        <div>
          <SideNavi selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} isMobile={isMobile} onOpenModal={() => setIsOpen(true)} />
          {isOpen && (
            <OverlayContainer>
              <div className="h-full w-full bg-white">{renderContent()}</div>
            </OverlayContainer>
          )}
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
