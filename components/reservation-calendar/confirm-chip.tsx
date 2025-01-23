import React from 'react';

export default function ConfirmChip({method}: {method: string}) {
  const confirm = method === 'confirm';
  const declined = method === 'declined';

  return (
    <div className="flex justify-end">
      {confirm && (
        <div className="px-15 flex h-11 w-82pxr items-center justify-center rounded-[1.625rem] bg-orange-50 align-middle text-md font-bold leading-none text-orange-100">
          예약 승인
        </div>
      )}
      {declined && (
        <div className="px-15 flex h-11 w-82pxr items-center justify-center rounded-[1.625rem] bg-red-50 align-middle text-md font-bold leading-none text-red-200">
          예약 거절
        </div>
      )}
    </div>
  );
}
