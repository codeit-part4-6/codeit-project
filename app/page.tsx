import Image from 'next/image';
import Search from './components/Search';
import ExPopular from '@/public/img/img_exPopular.webp';
import Star from '@/public/icon/ic_yellowStar.svg';
import Option from './components/Option';

const page = () => {
  return (
    <>
      <section className="flex w-auto bg-[url('/img/img_banner.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <div className="ml-24pxr mt-74pxr flex h-auto w-184pxr flex-col gap-8pxr">
          <h3>부산 광안리 드론쇼</h3>
          <h2>1월의 인기 경험 BEST</h2>
        </div>
        <Search />
      </section>
      <section>
        <h2>🔥인기 체험</h2>
        <div className='flex h-186pxr w-186pxr bg-[url("/img/img_exPopular.webp")] bg-cover bg-center bg-no-repeat text-white'>
          <div>
            <div>
              <Image src={Star} alt="별" width={18} height={18} />
              <span>4.9 (293)</span>
            </div>
            <h3>부산 광안리 드론쇼</h3>
            <span>₩ 0 / 인</span>
          </div>
        </div>
      </section>
      <Option />
      <section>
        <h2>🥽 모든 체험</h2>
        <div>
          <Image src={ExPopular} alt="부산 광안리 드론쇼" width={168} height={168} />
          <div>
            <div>
              <div>
                <Image src={Star} alt="별" width={18} height={18} />
                <span>4.9 (293)</span>
              </div>
              <h3>부산 광안리 드론쇼</h3>
            </div>
            <span>₩ 0 / 인</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
