import Button from '@/components/common/button';
import {useState} from 'react';
import ActivitiesCard from './activities-card';

export default function MyActivities() {
  const [content, setContent] = useState<'manage' | 'register'>('manage');
  const handleRegister = () => {};

  return (
    <>
      <div className="item-center mb-4 mt-4 flex justify-between tablet:mb-6 tablet:mt-0">
        <h1 className="text-3xl font-bold">{content === 'manage' ? '내 체험 관리' : '내 체험 등록'}</h1>
        {content === 'manage' ? (
          <>
            <Button
              onClick={() => setContent('register')}
              className="h-[48px] w-[120px] gap-[4px] rounded-[4px] bg-primary pb-[8px] pl-[16px] pr-[16px] pt-[8px] text-white"
            >
              체험 등록하기
            </Button>
          </>
        ) : (
          <Button
            onClick={() => handleRegister}
            className="h-[48px] w-[120px] gap-[4px] rounded-[4px] bg-primary pb-[8px] pl-[16px] pr-[16px] pt-[8px] text-white"
          >
            등록하기
          </Button>
        )}
      </div>
      {content === 'manage' && (
        <>
          <div className="flex flex-col gap-6">
            <ActivitiesCard />
            <ActivitiesCard />
            <ActivitiesCard />
          </div>
        </>
      )}
      {/* <div className="mt-60pxr flex flex-col items-center">
        <Image src={emptyImg} alt="데이터없습니다"></Image>
        <div className="text-2xl font-medium text-gray-700">아직 등록한 체험이 없어요</div>
      </div> */}
    </>
  );
}
