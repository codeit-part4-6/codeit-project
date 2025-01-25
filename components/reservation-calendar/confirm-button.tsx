import React from 'react';
import Button from '../common/button';

export default function ConfirmButton() {
  return (
    <div className="flex justify-end gap-6pxr">
      <Button className="h-38pxr w-82pxr rounded-md bg-nomad-black px-10pxr align-middle text-md font-bold leading-none text-white" type="button">
        승인하기
      </Button>
      <Button className="h-38pxr w-82pxr rounded-md border border-nomad-black px-10pxr text-md font-bold leading-none text-nomad-black" type="button">
        거절하기
      </Button>
    </div>
  );
}
