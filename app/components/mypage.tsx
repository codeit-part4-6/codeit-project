'use client';

import Input from '@/components/common/Input';
import Button from '@/components/common/button';
// import { useForm, Controller } from 'react-hook-form';

export default function mypage() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[32px] font-[700] leading-[42px] tablet:text-[38.19px] tablet:leading-[38.19px]">
          내 정보
        </h1>
        <Button
          className="bg-primary text-white w-[120px] h-[48px] rounded-[4px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[4px]"
          type="submit"
        >
          저장하기
        </Button>
      </div>
      
    </div>
  );
}