import Image from 'next/image';
import Search from '../components/main/search';
import ExPopular from '@/public/img/img_exPopular.webp';
import Star from '@/public/icon/ic_yellowStar.svg';
import Option from '../components/main/option';

const page = () => {
  return (
    <div className="bg-[rgba(250, 251, 252, 1)]">
      <section className="tablet:h-550pxr h-240pxr relative flex w-auto flex-col bg-[url('/img/img_banner.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="pc:mb-229pxr pc:ml-328pxr tablet:mb-244pxr ml-24pxr mt-74pxr flex h-auto w-184pxr flex-col gap-8pxr text-white tablet:ml-32pxr tablet:mt-144pxr tablet:w-auto pc:mt-159pxr">
          <h3 className="text-[1.5rem]/[1.75rem] font-bold tablet:text-[3.375rem]/[4rem] pc:text-[4.25rem]/[5.072rem]">부산 광안리 드론쇼</h3>
          <h2 className="px:text-[1.5rem]/[1.75rem] text-[0.875rem]/[1.625rem] font-bold tablet:text-[1.25rem]/[1.625rem]">1월의 인기 경험 BEST</h2>
        </div>
      </section>
      <Search />
      <section className="mx-15pxr mb-40pxr mt-101pxr flex flex-col gap-16pxr tablet:mt-110pxr pc:mt-126pxr">
        <h2 className="text-[1.125rem]/[1.313rem] font-bold text-black-100 tablet:text-[2.25rem]/[2.625rem]">🔥 인기 체험</h2>
        <div className='tablet:h-384pxr tablet:w-384pxr flex h-186pxr w-186pxr items-end rounded-3xl bg-[url("/img/img_exPopular.webp")] bg-cover bg-no-repeat text-white'>
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
      </section>
      <Option />
      <section className="mx-15pxr mb-24pxr mt-24pxr flex flex-col gap-24pxr tablet:mt-35pxr tablet:gap-32pxr">
        <h2 className="text-[1.125rem]/[1.313rem] font-bold text-black-100 tablet:text-3xl">🥽 모든 체험</h2>
        <div className="grid grid-cols-2 gap-x-2 gap-y-[0.313rem] tablet:grid-cols-3 tablet:gap-x-8 tablet:gap-y-4 pc:grid-cols-4 pc:gap-x-6 pc:gap-y-12">
          {/* 카드 1 */}
          <div className="flex flex-col gap-16pxr">
            <div className="tablet:w-221pxr tablet:h-221pxr relative flex h-168pxr w-168pxr flex-col gap-16pxr">
              <Image src={ExPopular} alt="부산 광안리 드론쇼" fill className="rounded-3xl" />
            </div>
            <div className="flex flex-col gap-15pxr">
              <div className="flex flex-col gap-10pxr">
                <div className="flex gap-3pxr">
                  <Image src={Star} alt="별" width={18} height={18} />
                  <div className="flex gap-5pxr">
                    <span className="text-lg font-medium text-black-100 tablet:text-[1rem]/[1.188rem]">4.9</span>
                    <span className="text-lg font-medium text-gray-500 tablet:text-[1rem]/[1.188rem]">(293)</span>
                  </div>
                </div>
                <h3 className="text-2lg font-semibold text-black-100 tablet:text-[1.5rem]/[1.75rem]">부산 광안리 드론쇼</h3>
              </div>
              <div className="flex items-center gap-5pxr">
                <span className="text-lg font-semibold tablet:text-[1.75rem]/[2.063rem]">₩ 0</span>
                <span className="text-md font-regular text-gray-600 tablet:text-[1.25rem]/[1.438rem]">/ 인</span>
              </div>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="flex flex-col gap-16pxr">
            <div className="tablet:w-221pxr tablet:h-221pxr relative flex h-168pxr w-168pxr flex-col gap-16pxr">
              <Image src={ExPopular} alt="서울 야경 투어" fill className="rounded-3xl" />
            </div>
            <div className="flex flex-col gap-15pxr">
              <div className="flex flex-col gap-10pxr">
                <div className="flex gap-3pxr">
                  <Image src={Star} alt="별" width={18} height={18} />
                  <div className="flex gap-5pxr">
                    <span className="text-lg font-medium text-black-100 tablet:text-[1rem]/[1.188rem]">4.8</span>
                    <span className="text-lg font-medium text-gray-500 tablet:text-[1rem]/[1.188rem]">(205)</span>
                  </div>
                </div>
                <h3 className="text-2lg font-semibold text-black-100 tablet:text-[1.5rem]/[1.75rem]">서울 야경 투어</h3>
              </div>
              <div className="flex items-center gap-5pxr">
                <span className="text-lg font-semibold tablet:text-[1.75rem]/[2.063rem]">₩ 30,000</span>
                <span className="text-md font-regular text-gray-600 tablet:text-[1.25rem]/[1.438rem]">/ 인</span>
              </div>
            </div>
          </div>

          {/* 카드 3 */}
          <div className="flex flex-col gap-16pxr">
            <div className="tablet:w-221pxr tablet:h-221pxr relative flex h-168pxr w-168pxr flex-col gap-16pxr">
              <Image src={ExPopular} alt="제주 섬 투어" fill className="rounded-3xl" />
            </div>
            <div className="flex flex-col gap-15pxr">
              <div className="flex flex-col gap-10pxr">
                <div className="flex gap-3pxr">
                  <Image src={Star} alt="별" width={18} height={18} />
                  <div className="flex gap-5pxr">
                    <span className="text-lg font-medium text-black-100 tablet:text-[1rem]/[1.188rem]">4.7</span>
                    <span className="text-lg font-medium text-gray-500 tablet:text-[1rem]/[1.188rem]">(150)</span>
                  </div>
                </div>
                <h3 className="text-2lg font-semibold text-black-100 tablet:text-[1.5rem]/[1.75rem]">제주 섬 투어</h3>
              </div>
              <div className="flex items-center gap-5pxr">
                <span className="text-lg font-semibold tablet:text-[1.75rem]/[2.063rem]">₩ 50,000</span>
                <span className="text-md font-regular text-gray-600 tablet:text-[1.25rem]/[1.438rem]">/ 인</span>
              </div>
            </div>
          </div>

          {/* 카드 4 */}
          <div className="flex flex-col gap-16pxr">
            <div className="tablet:w-221pxr tablet:h-221pxr relative flex h-168pxr w-168pxr flex-col gap-16pxr">
              <Image src={ExPopular} alt="강릉 바다 여행" fill className="rounded-3xl" />
            </div>
            <div className="flex flex-col gap-15pxr">
              <div className="flex flex-col gap-10pxr">
                <div className="flex gap-3pxr">
                  <Image src={Star} alt="별" width={18} height={18} />
                  <div className="flex gap-5pxr">
                    <span className="text-lg font-medium text-black-100 tablet:text-[1rem]/[1.188rem]">4.6</span>
                    <span className="text-lg font-medium text-gray-500 tablet:text-[1rem]/[1.188rem]">(120)</span>
                  </div>
                </div>
                <h3 className="text-2lg font-semibold text-black-100 tablet:text-[1.5rem]/[1.75rem]">강릉 바다 여행</h3>
              </div>
              <div className="flex items-center gap-5pxr">
                <span className="text-lg font-semibold tablet:text-[1.75rem]/[2.063rem]">₩ 40,000</span>
                <span className="text-md font-regular text-gray-600 tablet:text-[1.25rem]/[1.438rem]">/ 인</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
