import Image from 'next/image';
import Button from '@/components/common/button';
import SearchIcon from '@/public/icon/ic_search.svg';

const Search = () => {
  return (
    <div>
      <h2>무엇을 체험하고 싶으신가요?</h2>
      <div>
        <div>
          <Image src={SearchIcon} alt="검색" width={48} height={48} />
          <input type="text" placeholder="내가 원하는 체험은" />
        </div>
        <Button>검색하기</Button>
      </div>
    </div>
  );
};

export default Search;
