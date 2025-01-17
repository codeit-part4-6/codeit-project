'use client';


import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/common/navbar/navbar';
import Input from '@/components/common/Input';
import Button from '@/components/common/button';
import signLogo from '@/public/img/img_signlogo.svg';
import { useState } from 'react';

export default function Page() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center max-w-[640px] m-auto pt-[110px] gap-[24px]">
        <Link href="/">
          <Image src={signLogo} alt="로고" />
        </Link>
        <form className="flex flex-col gap-[28px] w-full items-center justify-center">
          <Input
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          labelClassName="block text-lg pb-2"
          className=""
          value={inputLogin}
          onChange={e => setInputLogin(e.target.value)}
          />

          <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          labelClassName="block text-lg pb-2"
          className=""
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          onBlur={e => {console.log(e);}}
          />

          <Button className="bg-primary text-white w-[350px] h-[54px] rounded-[6px] pt-[14px] pr-[136px] pb-[14px] pl-[136px] gap-[8px] sm:w-[300px] sm:px-4 tablet:w-[640px] tablet:h-[48px]">
            검색하기
          </Button>
        </form>
      </div>
    </main>
  );
}
