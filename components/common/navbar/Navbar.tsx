import Image from 'next/image';
import Link from 'next/link';
import navlogo from '@/public/img/img_navlogo.svg'

export default function Navbar() {
  return (
    <>
      <nav className="sticky flex h-[70px] px-[20px] py-[20px] md:px-[10px] md:py-[10px] md:gap-[21px]">
        <div className="flex w-full items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={navlogo}
                alt="로고 아이콘"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-[14px] font-[500] leading-[24px] text-[#1B1B1B]">
            <div>
              <Link href='/signin'>로그인</Link>
            </div>
            <div>
              <Link href='/signup'>회원가입</Link>
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-b-[1px] border-#DDDDDD" />
    </>
  );
}