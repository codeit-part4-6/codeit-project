import Button from '@/components/common/button';

const Option = () => {
  return (
    <>
      <div>
        <div>
          <Button>
            <span>문화·예술</span>
          </Button>
          <Button>
            <span>식음료</span>
          </Button>
          <Button>
            <span>스포츠</span>
          </Button>
          <Button>
            <span>투어</span>
          </Button>
          <Button>
            <span>관광</span>
          </Button>
          <Button>
            <span>웰빙</span>
          </Button>
        </div>
        <select>
          <option disabled hidden selected>
            가격
          </option>
          <option value="price_desc">가격이 낮은 순</option>
          <option value="price_asc">가격이 높은 순</option>
        </select>
      </div>
    </>
  );
};

export default Option;
