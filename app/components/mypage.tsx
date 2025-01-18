'use client';

import Input from '@/components/common/Input';
import Button from '@/components/common/button';
import {useForm, Controller} from 'react-hook-form';

interface IFormInput {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export default function mypage() {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
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

  const onSubmit = (data: IFormInput) => {
    console.log('Form Data:', data);
  };

  const passwordValue = watch('password');

  return (
    <div className="w-[792px] h-[472px] gap-[32px]">
      <div className="flex justify-between">
        <p className="text-[32px] font-[700] leading-[42px] tablet:text-[38.19px] tablet:leading-[38.19px]">내 정보</p>
        <Button className="h-[48px] w-[120px] gap-[4px] rounded-[4px] bg-primary pb-[8px] pl-[16px] pr-[16px] pt-[8px] text-white" type="submit">
          저장하기
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* Nickname Input */}
        <Controller
          name="nickname"
          control={control}
          rules={{
            required: '필수값입니다.',
          }}
          render={({field}) => (
            <Input
              label="닉네임"
              placeholder="닉네임을 입력해 주세요"
              labelClassName="block text-lg pb-2"
              className="h-[3.625rem] w-[21.875rem] tablet:h-[3.625rem] tablet:w-[40rem]"
              value={field.value}
              onChange={field.onChange}
              error={errors.nickname?.message}
            />
          )}
        />
        {/* Email Input */}
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
          render={({field}) => (
            <Input
              label="이메일"
              placeholder="이메일을 입력해 주세요"
              labelClassName="block text-lg pb-2"
              className="h-[3.625rem] w-[31.875rem] tablet:h-[3.625rem] tablet:w-[40rem]"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
            />
          )}
        />
        {/* Password Input */}
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
          render={({field}) => (
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              labelClassName="block text-lg pb-2"
              className="h-[3.625rem] w-[21.875rem] tablet:h-[3.625rem] tablet:w-[40rem]"
              value={field.value}
              onChange={field.onChange}
              isPassword={true}
              type="password"
              error={errors.password?.message}
            />
          )}
        />
        {/* Confirm Password Input */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: '필수값입니다.',
            validate: value => value === passwordValue || '비밀번호가 일치하지 않습니다.',
          }}
          render={({field}) => (
            <div>
              <Input
                label="비밀번호 확인"
                placeholder="비밀번호를 한번 더 입력해 주세요"
                labelClassName="block text-lg pb-2"
                className="h-[3.625rem] w-[21.875rem] tablet:h-[3.625rem] tablet:w-[40rem]"
                value={field.value}
                onChange={field.onChange}
                isPassword={true}
                type="password"
                error={errors.confirmPassword?.message}
              />
            </div>
          )}
        />
      </form>
    </div>
  );
}