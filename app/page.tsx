import Image from 'next/image';
import Search from './components/search';
import ExPopular from '@/public/img/img_exPopular.webp';
import Star from '@/public/icon/ic_yellowStar.svg';
import Option from './components/option';

const page = () => {
  return (
    <div className="bg-[rgba(250, 251, 252, 1)]">
      <section className="h-240pxr relative flex w-auto flex-col bg-[url('/img/img_banner.jpg')] bg-cover bg-no-repeat">
        <div className="ml-24pxr mt-74pxr flex h-auto w-184pxr flex-col gap-8pxr text-white">
          <h3 className="text-[1.5rem]/[1.75rem] font-bold">부산 광안리 드론쇼</h3>
          <h2 className="text-[0.875rem]/[1.625rem] font-bold">1월의 인기 경험 BEST</h2>
        </div>
      </section>
      <Search />
      <section className="mx-24pxr mb-40pxr mt-101pxr flex flex-col gap-16pxr">
        <h2 className="text-[1.125rem]/[1.313rem] font-bold text-black-100">🔥 인기 체험</h2>
        <div className='flex h-186pxr w-186pxr rounded-3xl bg-[url("/img/img_exPopular.webp")] bg-cover bg-no-repeat text-white'>
          <div className="flex flex-col gap-6pxr pb-24pxr pl-20pxr pt-42pxr">
            <div className="flex gap-5pxr">
              <Image src={Star} alt="별" width={18} height={18} />
              <span className="text-md font-semibold">4.9 (293)</span>
            </div>
            <h3 className="text-2lg font-bold">부산 광안리 드론쇼</h3>
            <div className="flex gap-5pxr">
              <span className="text-lg font-semibold">₩ 0</span>
              <span className="text-md font-regular text-gray-600">/ 인</span>
            </div>
          </div>
        </div>
      </section>
      <Option />
      <section className="mx-24pxr mb-24pxr mt-24pxr flex flex-col gap-24pxr">
        <h2 className="text-[1.125rem]/[1.313rem] font-bold text-black-100">🥽 모든 체험</h2>
        <div className="flex flex-col gap-16pxr">
          <Image src={ExPopular} alt="부산 광안리 드론쇼" width={168} height={168} className="rounded-3xl" />
          <div className="flex flex-col gap-15pxr">
            <div className="flex flex-col gap-10pxr">
              <div className="flex gap-3pxr">
                <Image src={Star} alt="별" width={18} height={18} />
                <div className="flex gap-5pxr">
                  <span className="text-lg font-medium text-black-100">4.9</span>
                  <span className="text-lg font-medium text-gray-500">(293)</span>
                </div>
              </div>
              <h3 className="text-2lg font-semibold text-black-100">부산 광안리 드론쇼</h3>
            </div>
            <div className="flex gap-5pxr">
              <span className="text-lg font-semibold">₩ 0</span>
              <span className="text-md font-regular text-gray-600">/ 인</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
