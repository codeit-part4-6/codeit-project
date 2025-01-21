import Image from 'next/image';
import Link from 'next/link';
import navlogo from '@/public/img/img_navlogo.svg';

export default function Navbar() {
  return (
    <header>
      <nav className="sticky flex h-[4.375rem] px-[1.25rem] py-[1.25rem] md:gap-[1.3125rem] md:px-[0.625rem] md:py-[0.625rem]">
        <div className="flex w-full items-center justify-between">
          <div>
            <Link href="/">
              <Image src={navlogo} alt="로고 아이콘" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-[1.5rem] text-md font-medium text-black-100">
            <div>
              <Link href="/signin">로그인</Link>
            </div>
            <div>
              <Link href="/signup">회원가입</Link>
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-b-[0.0625rem] border-gray-200" />
    </header>
  );
}
