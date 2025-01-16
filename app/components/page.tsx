import Button from '@/components/common/button';
import React from 'react';

function page() {
  return (
    <ul>
      <li>
        <Button
          className={
            'pc:w-136pxr tablet:w-136pxr m-5 h-56pxr w-96pxr flex-row items-center justify-center gap-4pxr rounded-lg border-slate-800 bg-black px-8pxr text-center align-middle text-white'
          }
        >
          검색하기
        </Button>
      </li>
      <hr />
    </ul>
  );
}

export default page;
