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
        <div className="flex flex-col items-center max-w-[640px] m-auto pt-[110px] gap-[24px] tablet:pt-[126px] tablet:gap-[40px] desktop:pt-[118px] destop:gap-[56px]">
          <Link href="/">
            <Image src={signLogo} alt="로고" />
          </Link>
          <form className="flex flex-col gap-[40px] w-full items-center justify-center tablet:gap-[48px]">
            <div className='flex flex-col gap-[26px] tablet:gap-[32px]'>
              <div className='flex flex-col gap-[28px]'>
                <Input
                label="이메일"
                placeholder="이메일을 입력해 주세요"
                labelClassName="block text-lg pb-2"
                className="w-[350px] h-[58px] sm:w-[640px] sm:h-[58px]" 
                value={inputLogin}
                onChange={e => setInputLogin(e.target.value)}
                />

                <Input
                label="비밀번호"
                placeholder="비밀번호를 입력해 주세요"
                labelClassName="block text-lg pb-2"
                className="w-[350px] h-[58px] sm:w-[640px] sm:h-[58px]" 
                value={inputPassword}
                onChange={e => setInputPassword(e.target.value)}
                onBlur={e => {console.log(e);}}
                />

                <Button className="bg-primary text-white w-[350px] h-[54px] rounded-[6px] pt-[14px] pr-[136px] pb-[14px] pl-[136px] gap-[8px] sm:w-[300px] sm:px-4 tablet:w-[640px] tablet:h-[48px]">
                  로그인 하기
                </Button>
              </div>
              <span className="text-[#4B4B4B] text-[16px] font-[400] leading-[19.09px] text-center">
                회원이 아니신가요?
                <Link href="/signup" className="underline ml-[5px]">
                  회원가입하기
                </Link>
              </span>
              <div className="flex flex-col gap-[24px] tablet:gap-[40px]">
                <div className="flex items-center">
                  <hr className="w-20 border border-gray-300" />
                  <span className="text-[#79747E] text-[14px] leading-[24px] font-[400] text-center">
                    SNS 계정으로 로그인하기
                  </span>
                  <hr className="w-20 border border-gray-300" />
                </div>
                <div className="flex gap-[16px]">
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
