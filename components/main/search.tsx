import Image from 'next/image';
import Button from '@/components/common/button';
import SearchIcon from '@/public/icon/ic_search.svg';

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute flex h-auto w-11/12 flex-col gap-12pxr rounded-2xl bg-white px-18pxr py-16pxr shadow-lg tablet:gap-8 tablet:px-6 tablet:py-8">
        <h2 className="text-lg font-bold text-nomad-black tablet:text-xl">무엇을 체험하고 싶으신가요?</h2>
        <div className="flex justify-between gap-10pxr">
          <div className="relative flex w-full items-center rounded border border-solid border-gray-700 pl-2.5">
            <Image src={SearchIcon} alt="검색" width={24} height={24} className="absolute" />
            <label htmlFor="search">
              <input
                type="search"
                placeholder="내가 원하는 체험은"
                className="pl-30pxr text-[0.875rem]/[1.625rem] font-regular text-gray-500 tablet:text-lg"
              />
            </label>
          </div>
          <Button className="h-56pxr w-auto whitespace-nowrap rounded bg-nomad-black px-5pxr text-lg font-bold text-white tablet:px-10 tablet:py-2">
            검색하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
