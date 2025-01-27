/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {useState, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules'; // Navigation, Pagination 모듈 추가
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '@/components/common/button';

const Option = () => {
  const [optionState, setOptionState] = useState({price: '가격'});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionState({...optionState, price: event.target.value});
  };

  // Swiper 인스턴스 참조
  const swiperRef = useRef<any>(null);

  const categories = [
    {id: 'culture', label: '문화·예술'},
    {id: 'food', label: '식음료'},
    {id: 'sports', label: '스포츠'},
    {id: 'tour', label: '투어'},
    {id: 'sightseeing', label: '관광'},
    {id: 'wellbeing', label: '웰빙'},
  ];

  // 오른쪽으로 이동하는 함수
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // 클릭 시 오른쪽으로 이동
    }
  };

  return (
    <>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef} // Swiper 인스턴스를 참조
          slidesPerView={6}
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            344: {
              slidesPerView: 3, // 모바일: 3개
            },
            768: {
              slidesPerView: 4, // 태블릿: 4개
            },
            1200: {
              slidesPerView: 6, // PC: 6개
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map(category => (
            <SwiperSlide key={category.id} className="flex items-center justify-center text-xl font-semibold text-gray-800">
              <Button type="button" className="rounded border border-primary px-4 py-2">
                {category.label}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 오른쪽 화살표 버튼 클릭 시 이동 */}
        <button
          onClick={handleNextClick} // 버튼 클릭 시 오른쪽으로 이동
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 transform"
        >
          클릭
        </button>

        {/* 페이지네이션 버튼 */}
        <div className="swiper-pagination" />
      </div>
      <select defaultValue="default" onChange={handleChange} className="rounded border px-2 py-1">
        <option value="default" disabled hidden>
          가격
        </option>
        <option value="price_desc">가격이 낮은 순</option>
        <option value="price_asc">가격이 높은 순</option>
      </select>
    </>
  );
};

export default Option;
