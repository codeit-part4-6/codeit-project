import React, {useState} from 'react';
import arrowDown from '@/public/icon/icon_arrow_down.svg';
import sortIcon from '@/public/icon/ic_sortIcon.svg';
import Image from 'next/image';

interface CustomSelectProps {
  orderBy: string;
  handleOrderBy: (value: string) => void;
}

export default function CustomSelect({orderBy, handleOrderBy}: CustomSelectProps) {
  const options = [
    {value: 'pending', label: '예약 신청'},
    {value: 'canceled', label: '예약 취소'},
    {value: 'confirmed', label: '예약 승인'},
    {value: 'declined', label: '예약 거절'},
    {value: 'completed', label: '체험 완료'},
  ];
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find(option => option.value === orderBy)?.label || '필터';

  const handleSelect = (value: string) => {
    handleOrderBy(value);
    setIsOpen(true);
  };

  return (
    <div
      onClick={() => setIsOpen(prev => !prev)}
      className="relative cursor-pointer rounded-2xl px-5 py-4 tablet:block tablet:h-53pxr tablet:w-40 tablet:border tablet:border-nomad-black pc:block"
    >
      <div className="flex items-center justify-between rounded-md">
        <span className="hidden text-2lg font-medium leading-none text-green-100 tablet:block">{selectedLabel}</span>
        <Image className="hidden tablet:block" src={arrowDown} alt="Arrow Down" width={16} height={16} />
        <Image className="tablet:hidden" src={sortIcon} alt="Arrow Down" width={28} height={28} />
      </div>

      {isOpen && (
        <ul className="absolute right-1pxr z-10 mt-6 w-40 rounded-md border border-gray-200 bg-white shadow-sidenavi-box">
          <li
            className="cursor-pointer px-40pxr py-18pxr text-2lg font-medium text-gray-800 hover:bg-green-50 hover:text-nomad-black"
            onClick={() => handleSelect('')}
          >
            전체
          </li>
          {options.map(option => (
            <li
              key={option.value}
              className="border-collapse cursor-pointer border-t border-gray-200 px-40pxr py-18pxr text-2lg font-medium text-gray-800 hover:bg-green-50 hover:text-nomad-black"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
