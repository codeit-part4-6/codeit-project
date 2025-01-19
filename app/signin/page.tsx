'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/common/navbar/navbar';
import Input from '@/components/common/Input';
import Button from '@/components/common/button';
import signLogo from '@/public/img/img_signlogo.svg';
import GoogleIcon from '@/public/icon/ic_google.svg';
import KakaoIcon from '@/public/icon/ic_kakao.svg';
import { useState } from 'react';

export default function Page() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col items-center max-w-[40rem] m-auto pt-[6.875rem] gap-[1.5rem] tablet:pt-[7.875rem] tablet:gap-[2.5rem] desktop:pt-[7.375rem] desktop:gap-[3.5rem]">
          <Link href="/">
            <Image src={signLogo} alt="로고" />
          </Link>
          <form className="flex flex-col gap-[2.5rem] w-full items-center justify-center tablet:gap-[3rem]">
            <div className="flex flex-col gap-[1.625rem] tablet:gap-[2rem]">
              <div className="flex flex-col gap-[1.75rem]">
                <Input
                  label="이메일"
                  placeholder="이메일을 입력해 주세요"
                  labelClassName="block text-lg pb-2"
                  className="w-[21.875rem] h-[3.625rem] sm:w-[40rem] sm:h-[3.625rem]"
                  value={inputLogin}
                  onChange={e => setInputLogin(e.target.value)}
                />
                <Input
                  label="비밀번호"
                  placeholder="비밀번호를 입력해 주세요"
                  labelClassName="block text-lg pb-2"
                  className="w-[21.875rem] h-[3.625rem] sm:w-[40rem] sm:h-[3.625rem]"
                  value={inputPassword}
                  onChange={e => setInputPassword(e.target.value)}
                  onBlur={e => {
                    console.log(e);
                  }}
                  isPassword={true}
                  type="password"
                />
                <Button className="bg-primary text-white w-[21.875rem] h-[3.375rem] rounded-[0.375rem] pt-[0.875rem] pr-[8.5rem] pb-[0.875rem] pl-[8.5rem] gap-[0.5rem] sm:w-[18.75rem] sm:px-4 tablet:w-[40rem] tablet:h-[3rem]">
                  로그인 하기
                </Button>
              </div>
              <span className="text-gray-800 text-[1rem] font-regular leading-[1.19rem] text-center">
                회원이 아니신가요?
                <Link href="/signup" className="underline ml-[0.3125rem]">
                  회원가입하기
                </Link>
              </span>
              <div className="flex flex-col gap-[1.5rem] tablet:gap-[2.5rem]">
                <div className="flex items-center">
                  <hr className="w-[5rem] border border-gray-300" />
                  <span className="text-gray-700 text-[0.875rem] leading-[1.5rem] font-regular text-center">
                    SNS 계정으로 로그인하기
                  </span>
                  <hr className="w-[5rem] border border-gray-300" />
                </div>
                <div className="flex gap-[1rem]">
                  <Image src={GoogleIcon} alt="google icon" />
                  <Image src={KakaoIcon} alt="kakao icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
