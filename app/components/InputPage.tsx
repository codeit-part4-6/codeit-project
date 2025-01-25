'use client';
import React, {useState} from 'react';
import Input from '@/components/common/Input';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import Button from '@/components/common/button';
interface IFormInput {
  username: string;
  email: string;
  time: string;
  birthdate: string;
}

const InputPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setError,
  } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      time: '',
      birthdate: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Form Data:', data);
  };

  const [inputMoney, setInputMoney] = useState('');
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: '필수값입니다',
            minLength: {value: 5, message: '최소5 글자이상 입력해주세요'},
          }}
          render={({field: {value, onBlur, onChange}}) => (
            <Input
              required={true}
              value={value}
              onBlur={() => {
                // 빈 값 체크
                if (!value.trim()) {
                  setError('username', {type: 'manual', message: '필수값입니다.'});
                } else {
                  onBlur();
                }
              }}
              onChange={onChange}
              label="Username"
              error={errors.username?.message}
              placeholder="* react hook form 적용"
              className="w-[21rem]"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: '필수값입니다',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '올바른이메일형식입력해주세요',
            },
          }}
          render={({field: {value, onBlur, onChange}}) => (
            <Input
              label="Email"
              placeholder="이메일을 입력해 주세요"
              required={true}
              value={value}
              onBlur={() => {
                if (!value.trim()) {
                  setError('email', {type: 'manual', message: '필수값입니다.'});
                } else {
                  onBlur();
                }
              }}
              onChange={onChange}
              error={errors.email?.message}
            />
          )}
        />
        <div className="flex">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            labelClassName="block text-lg pb-2"
            className="w-[400px]"
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
            onBlur={e => {
              console.log(e);
            }}
            isPassword={true}
            type="password"
          />
        </div>
        <Input label="가격" className="" isMoney={true} value={inputMoney} onChange={e => setInputMoney(e.target.value)}></Input>
        <Input label="주소" className="" isMoney={true} value={inputMoney} onChange={e => setInputMoney(e.target.value)} error="에러입니다."></Input>
        <Input
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          labelClassName="block text-lg pb-2"
          className=""
          value={inputLogin}
          onChange={e => setInputLogin(e.target.value)}
        ></Input>
        <div className="mt-4">
          <Button
            className="bg-black m-5 h-56pxr w-96pxr flex-row items-center justify-center gap-4pxr rounded-lg border-slate-800 px-8pxr text-center align-middle text-white tablet:w-136pxr pc:w-136pxr"
            type="submit"
            disabled={!isValid}
          >
            클릭
          </Button>
        </div>
      </form>
    </>
  );
};

export default InputPage;
