'use client';
import Button from '@/components/common/button';
import React from 'react';
import InputPage from './InputPage';

function page() {
  return (
    <ul>
      <li>
        <Button
          className={
            'm-5 h-56pxr w-96pxr flex-row items-center justify-center gap-4pxr rounded-lg border-slate-800 bg-black px-8pxr text-center align-middle text-white tablet:w-136pxr pc:w-136pxr'
          }
        >
          검색하기
        </Button>
      </li>
      <hr />
      <br />
      <li>
        <InputPage />
      </li>
    </ul>
  );
}

export default page;
