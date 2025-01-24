import Button from '@/components/common/button';
import {useState, useRef, useEffect} from 'react';
import ActivitiesCard from './activities-card';
import ActivitiesRegister, {IFormInput} from './activities-register';
import Modal from '@/components/common/modal/modal';
import Image from 'next/image';
import closeButton from '@/public/icon/ic_close_button.svg';

export default function MyActivities({onclose}: {onclose: () => void}) {
  const [content, setContent] = useState<'manage' | 'register'>('manage');
  const formRef = useRef<{submitForm: () => void; isValid: boolean} | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (data: IFormInput) => {
    console.log('Form Data from Parent:', data);
    setIsOpen(true);
  };

  const triggerSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onclose();
  };

  useEffect(() => {
    if (formRef.current?.isValid) {
      setIsValid(true);
    }
  }, [formRef.current?.isValid]);

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2 flex justify-end tablet:hidden">
          <Image onClick={onclose} src={closeButton} alt="모달 닫기 버튼" className="cursor-pointer" width={48} height={48} />
        </div>
        <div className="mb-16 h-full w-full">
          <div className="item-center mb-4 flex justify-between tablet:mb-6 tablet:mt-0">
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
                onClick={triggerSubmit} // 버튼 클릭 시 자식 컴포넌트의 폼 제출 트리거
                className={`h-[48px] w-[120px] gap-[4px] rounded-[4px] pb-[8px] pl-[16px] pr-[16px] pt-[8px] text-white ${
                  isValid ? 'bg-primary' : 'bg-gray-500'
                }`}
              >
                등록하기
              </Button>
            )}
          </div>

          {content === 'manage' && (
            <div className="flex flex-col gap-6">
              <ActivitiesCard />
              <ActivitiesCard />
              <ActivitiesCard />
            </div>
          )}

          {content === 'register' && (
            <>
              <ActivitiesRegister ref={formRef} onSubmitParent={handleSubmit} />
            </>
          )}
        </div>
      </div>
      {isOpen && <Modal type="big" message="체험 등록이 완료되었습니다" onClose={handleClose} />}
    </>
  );
}
