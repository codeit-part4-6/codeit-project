'use client';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface BannerType {
  bannerImg: string | StaticImport;
  subImages: {id: number; imageUrl: string}[];
}

const Banner = ({bannerImg, subImages}: BannerType) => {
  const initialDevice = () => {
    let device = 'mobile';
    if (window.innerWidth > 1199) {
      device = 'windows';
    } else if (window.innerWidth > 767) {
      device = 'tablet';
    }
    return device;
  };
  return (
    <>
      {initialDevice() !== 'mobile' ? (
        <div className="mb-85pxr flex flex-row tablet:h-310pxr tablet:w-696pxr pc:h-534pxr pc:w-[75rem]">
          <div className="relative rounded-l-lg tablet:h-310pxr tablet:w-346pxr pc:h-534pxr pc:w-595pxr">
            <Image src={bannerImg} fill alt="bannerImag" />
          </div>
          <div className="relative flex h-343pxr w-595pxr flex-row flex-wrap items-start gap-8pxr rounded-r-lg p-0">
            {subImages.map((dt, idx) => {
              return <Image key={`${idx}-subImages`} src={dt.imageUrl} width={293} height={263} alt="subImages" />;
            })}
          </div>
        </div>
      ) : (
        <div className="relative h-310pxr w-full">
          <Image src={bannerImg} fill alt="bannerImag" />
        </div>
      )}
    </>
  );
};

export default Banner;
