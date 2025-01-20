'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Input from '@/components/common/Input';
import Button from '@/components/common/button';
import signLogo from '@/public/img/img_signlogo.svg';
import GoogleIcon from '@/public/icon/ic_google.svg';
import KakaoIcon from '@/public/icon/ic_kakao.svg';
import { apiSignup } from '@/service/api/users/users.api';
import { SignupBody } from '@/service/api/users/users.types';

interface IFormInput {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const signupMutation = useMutation({
    mutationFn: (signupData: SignupBody) => apiSignup(signupData),
  });

  const onSubmit = (data: IFormInput) => {
    alert('회원가입완료!');
    signupMutation.mutate(data);
  };

  const passwordValue = watch('password');

  return (
    <>
      <div className="flex flex-col items-center max-w-[40rem] m-auto pt-[6.875rem] gap-[1.5rem] tablet:pt-[7.875rem] tablet:gap-[2.5rem] desktop:pt-[7.375rem] desktop:gap-[3.5rem]">
        <Link href="/">
          <Image src={signLogo} alt="로고" />
        </Link>
        <form
          className="flex flex-col gap-[2.5rem] w-full items-center justify-center tablet:gap-[3rem]"
          onSubmit={handleSubmit(onSubmit)} // 폼 제출 시 onSubmit 호출
        >
          <div className="flex flex-col gap-[1.625rem] tablet:gap-[2rem]">
            <div className="flex flex-col gap-[1.75rem]">
              {/* 이메일 입력란 */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: '필수값입니다.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: '잘못된 이메일입니다.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="이메일"
                    placeholder="이메일을 입력해 주세요"
                    labelClassName="block text-lg pb-2"
                    className="w-[21.875rem] h-[3.625rem] tablet:w-[40rem] tablet:h-[3.625rem]"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.email?.message}
                  />
                )}
              />
              {/* 닉네임 입력란 */}
              <Controller
                name="nickname"
                control={control}
                rules={{
                  required: '필수값입니다.',
                }}
                render={({ field }) => (
                  <Input
                    label="닉네임"
                    placeholder="닉네임을 입력해 주세요"
                    labelClassName="block text-lg pb-2"
                    className="w-[21.875rem] h-[3.625rem] tablet:w-[40rem] tablet:h-[3.625rem]"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.nickname?.message}
                  />
                )}
              />
              {/* 비밀번호 입력란 */}
              <Controller
                name="password"
                control={control}
                rules={{
                  required: '필수값입니다.',
                  minLength: {
                    value: 8,
                    message: '8자리 이상으로 작성해 주세요.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="비밀번호"
                    placeholder="비밀번호를 입력해 주세요"
                    labelClassName="block text-lg pb-2"
                    className="w-[21.875rem] h-[3.625rem] tablet:w-[40rem] tablet:h-[3.625rem]"
                    value={field.value}
                    onChange={field.onChange}
                    isPassword={true}
                    type="password"
                    error={errors.password?.message}
                  />
                )}
              />
              {/* 비밀번호 확인 입력란 */}
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: '필수값입니다.',
                  validate: (value) =>
                    value === passwordValue || '비밀번호가 일치하지 않습니다.',
                }}
                render={({ field }) => (
                  <div>
                    <Input
                      label="비밀번호 확인"
                      placeholder="비밀번호를 한번 더 입력해 주세요"
                      labelClassName="block text-lg pb-2"
                      className="w-[21.875rem] h-[3.625rem] tablet:w-[40rem] tablet:h-[3.625rem]"
                      value={field.value}
                      onChange={field.onChange}
                      isPassword={true}
                      type="password"
                      error={errors.confirmPassword?.message}
                    />
                  </div>
                )}
              />
              {/* 회원가입 버튼 */}
              <Button
                className="bg-primary text-white w-[21.875rem] h-[3.375rem] rounded-[0.375rem] gap-[0.5rem] sm:px-4 tablet:w-[40rem] tablet:h-[3rem]"
                type="submit"
                disabled={!isValid} // 유효하지 않으면 버튼 비활성화
              >
                회원가입 하기
              </Button>
            </div>
            {/* 로그인 링크 */}
            <span className="text-gray-800 text-[1rem] font-regular leading-[1.19rem] text-center">
              회원이신가요?
              <Link href="/signup" className="underline ml-[0.3125rem]">
                로그인하기
              </Link>
            </span>
            <div className="flex flex-col gap-[1.5rem] tablet:gap-[2.5rem]">
              {/* SNS 로그인 섹션 */}
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
    </>
  );
}
