'use client';
import {initialDevice} from '@/utile/initialDevice';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface BannerType {
  bannerImg: string | StaticImport;
  subImages: {id: number; imageUrl: string}[];
}

const Banner = ({bannerImg, subImages}: BannerType) => {
  const getDeviceType = initialDevice();

  const RenderFromDivceType = () => {
    switch (getDeviceType) {
      case 'mobile':
        return (
          <div className="relative h-310pxr w-full">
            <Image src={bannerImg} fill alt="bannerImag" />
          </div>
        );
      default:
        return (
          <div className="my-32pxr mb-85pxr flex min-h-310pxr min-w-375pxr flex-row tablet:min-h-310pxr tablet:min-w-696pxr pc:min-h-534pxr pc:min-w-[75rem]">
            <div className="relative min-h-310pxr min-w-375pxr rounded-l-lg tablet:min-h-310pxr tablet:min-w-346pxr pc:min-h-534pxr pc:min-w-595pxr">
              <Image src={bannerImg} fill alt="bannerImag" />
            </div>
            <div className="flex min-h-310pxr w-full min-w-375pxr flex-row flex-wrap items-start rounded-r-lg p-0 tablet:h-310pxr tablet:w-346pxr tablet:gap-4pxr pc:h-534pxr pc:w-595pxr pc:gap-8pxr">
              {subImages.map((dt, idx) => {
                return (
                  <div
                    key={`${idx}-subImages`}
                    className="relative min-h-152pxr min-w-170pxr tablet:h-152pxr tablet:w-160pxr pc:h-263pxr pc:w-280pxr"
                  >
                    <Image src={dt.imageUrl} fill alt="subImages" />
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
  };
  return <RenderFromDivceType />;
};

export default Banner;
