import Button from '@/components/common/button';
import {useState} from 'react';

export default function MyActivities() {
  const [content, setContent] = useState<'manage' | 'register'>('manage');

  const handleRegister = () => {};

  return (
    <>
      <div className="flex justify-between">
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
    </>
  );
}
