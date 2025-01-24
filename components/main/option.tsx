'use client';

import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '@/components/common/button';

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
    <div className="mx-24pxr flex gap-10pxr tablet:flex-row tablet:justify-between tablet:gap-20pxr">
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
          }}
          // breakpoints={{
          //   344: {
          //     slidesPerView: 3, // 모바일: 3개
          //   },
          //   768: {
          //     slidesPerView: 4, // 태블릿: 4개
          //   },
          //   1200: {
          //     slidesPerView: 6, // PC: 6개
          //   },
          // }}
          modules={[Navigation]}
          pagination={{
            clickable: true, // 페이지네이션 클릭 가능하게 설정
            type: 'bullets',
          }}
          className="swiper-wrapper"
        >
          {categories.map(category => (
            <SwiperSlide key={category.id} className="swiper-wrapper">
              <Button
                type="button"
                className="h-41pxr whitespace-nowrap rounded-[0.938rem] border border-solid border-primary tablet:h-58pxr tablet:px-4"
              >
                <span className="text-lg font-medium text-primary tablet:text-2lg">{category.label}</span>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 화살표 버튼: tablet에서만 보이도록 수정해야함 */}
        <div className="swiper-button-next hidden pc:block" />
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
