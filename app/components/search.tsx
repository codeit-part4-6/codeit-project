import Image from 'next/image';
import Button from '@/components/common/button';
import SearchIcon from '@/public/icon/ic_search.svg';

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-14pxr">
      <div className="absolute flex h-auto w-auto flex-col gap-15pxr rounded-2xl bg-white px-24pxr py-16pxr shadow-lg">
        <h2 className="text-lg font-bold text-nomad-black">무엇을 체험하고 싶으신가요?</h2>
        <div className="flex justify-between gap-10pxr">
          <div className="relative flex items-center rounded border border-solid border-gray-700">
            <Image src={SearchIcon} alt="검색" width={24} height={24} className="absolute" />
            <label htmlFor="search">
              <input type="search" placeholder="내가 원하는 체험은" className="pl-27pxr text-[0.875rem]/[1.625rem] font-regular text-gray-500" />
            </label>
          </div>
          <Button className="h-56pxr w-auto rounded bg-nomad-black px-20pxr py-8pxr text-lg font-bold text-white">검색하기</Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
