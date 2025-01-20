import Image from 'next/image';
import actifitytest from '@/public/img/img_activities_test.png';
import iconStar from '@/public/icon/ic_star.svg';
import iconMeatball from '@/public/icon/ic_meatball.svg';

export default function ActivitiesCard() {
  return (
    <>
      <div className="flex items-center gap-2 overflow-hidden rounded-3xl bg-white tablet:gap-3 pc:h-204pxr pc:w-800pxr pc:gap-6">
        <div className="relative h-128pxr w-128pxr tablet:h-156pxr tablet:w-156pxr pc:h-204pxr pc:w-204pxr">
          <Image src={actifitytest} alt="체험관리사진" layout="fill" objectFit="cover" className="absolute" />
        </div>
        <div className="flex w-full flex-col items-start pc:w-548pxr">
          <div className="flex gap-6pxr">
            <Image src={iconStar} width={16} height={16} alt="별점" />
            <div className="text-md tablet:text-lg">4.9 (293)</div>
          </div>
          <div className="mb-28pxr text-md font-bold tablet:mb-33pxr tablet:text-2lg pc:mb-72pxr pc:text-xl">함께 배우면 즐거운 스트릿 댄스</div>
          <div className="flex w-full items-center justify-between pr-2">
            <div className="flex items-center gap-1 text-lg font-medium tablet:text-xl">
              <div>₩10,000</div>
              <span className="hidden text-lg text-gray-800 tablet:block">/인</span>
            </div>
            <Image src={iconMeatball} width={32} height={32} alt="자세히보기" />
          </div>
        </div>
      </div>
    </>
  );
}
