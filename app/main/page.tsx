'use client';
import Input from '@/components/common/Input';
import React, { useState } from 'react';

const TestPage = () => {

  const [inputData, setInputData] = useState("");
  const [moneyData, setMoneyData] = useState("");

  return (
    <>
      <div>test page</div>
      <div className='font-bold bg-gray-700 text-2xl '>test</div>
      <div className='font-semibold text-secondary bg-primary text-xl'>test</div>
      <div className='font-medium text-accent-green bg-orange-50 text-md'>test</div>
      <div>input 공통컴포넌트</div>
      {/* text */}
      <Input value={inputData} name="value" onChange={(e) => setInputData(e.target.value)} placeholder="이메일" type='email' />
      {/* 가격 */}
      <Input value={moneyData} name="value" placeholder="카테고리" className='w-[200px]' isMoney={true} onChange={(e) => setMoneyData(e.target.value)} />
      {/* 비밀번호 */}
      <Input value={inputData} name="value" onChange={(e) => setInputData(e.target.value)} placeholder="이메일" type='password' />
    </>)
};

export default TestPage;
