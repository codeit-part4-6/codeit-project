'use client';
import React, {useState} from 'react';
import Input from '@/components/common/Input';

const InputPage = () => {
  const [input, setInput] = useState('');
  const [inputMoney, setInputMoney] = useState('');
  const [inputLogin, setInputLogin] = useState('');

  return (
    <>
      <Input placeholder="제목" className="w-[21rem]" value={input} onChange={e => setInput(e.target.value)} />
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
    </>
  );
};

export default InputPage;
