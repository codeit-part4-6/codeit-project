'use client';

import Button from '@/components/common/button';
import {useState} from 'react';

const Option = () => {
  const [optionState, setOptionState] = useState({price: '가격'});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionState({...optionState, price: event.target.value});
  };

  const categories = [
    {id: 'culture', label: '문화·예술'},
    {id: 'food', label: '식음료'},
    {id: 'sports', label: '스포츠'},
    {id: 'tour', label: '투어'},
    {id: 'sightseeing', label: '관광'},
    {id: 'wellbeing', label: '웰빙'},
  ];

  return (
    <div className="mx-24pxr flex justify-between">
      <div className="flex gap-8pxr tablet:gap-14pxr pc:gap-24pxr">
        {categories.map(category => (
          <Button
            key={category.id}
            className="h-41pxr w-80pxr items-center whitespace-nowrap rounded-[0.938rem] border border-solid border-primary tablet:h-58pxr tablet:w-120pxr pc:w-127pxr"
          >
            <span className="text-lg font-medium text-primary tablet:text-2lg">{category.label}</span>
          </Button>
        ))}
      </div>
      <select defaultValue="default" onChange={handleChange} className="rounded border px-2 py-1">
        <option value="default" disabled hidden>
          가격
        </option>
        <option value="price_desc">가격이 낮은 순</option>
        <option value="price_asc">가격이 높은 순</option>
      </select>
    </div>
  );
};

export default Option;
