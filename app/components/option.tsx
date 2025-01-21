import Button from '@/components/common/button';

const Option = () => {
  return (
    <>
      <div className="flex gap-10pxr">
        <div className="flex gap-6pxr">
          <Button className="h-41pxr w-80pxr rounded-[0.938rem] border border-solid border-primary px-20pxr py-12pxr">
            <span className="text-lg font-medium text-primary">문화·예술</span>
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
