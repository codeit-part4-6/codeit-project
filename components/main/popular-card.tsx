import Image from 'next/image';
import Star from '@/public/icon/ic_yellowStar.svg';

export default function PopularCard() {
  return (
    <>
      <div className="flex">
        <div className='flex h-186pxr w-186pxr items-end rounded-3xl bg-[url("/img/img_exPopular.webp")] bg-cover bg-no-repeat text-white tablet:h-384pxr tablet:w-384pxr'>
          <div className="flex flex-col gap-6pxr pb-24pxr pl-20pxr pt-42pxr">
            <div className="flex gap-5pxr">
              <Image src={Star} alt="별" width={18} height={18} />
              <span className="text-md font-semibold">4.9 (293)</span>
            </div>
            <h3 className="text-2lg font-bold tablet:text-3xl">부산 광안리 드론쇼</h3>
            <div className="flex items-center gap-5pxr">
              <span className="text-lg font-semibold tablet:text-xl">₩ 0</span>
              <span className="text-md font-regular text-gray-600">/ 인</span>
            </div>
          </div>
        </div>
        <div className='flex h-186pxr w-186pxr items-end rounded-3xl bg-[url("/img/img_exPopular.webp")] bg-cover bg-no-repeat text-white tablet:h-384pxr tablet:w-384pxr'>
          <div className="flex flex-col gap-6pxr pb-24pxr pl-20pxr pt-42pxr">
            <div className="flex gap-5pxr">
              <Image src={Star} alt="별" width={18} height={18} />
              <span className="text-md font-semibold">4.9 (293)</span>
            </div>
            <h3 className="text-2lg font-bold tablet:text-3xl">부산 광안리 드론쇼</h3>
            <div className="flex items-center gap-5pxr">
              <span className="text-lg font-semibold tablet:text-xl">₩ 0</span>
              <span className="text-md font-regular text-gray-600">/ 인</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
