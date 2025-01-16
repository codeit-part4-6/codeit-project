import Image from 'next/image';
import Link from 'next/link';
import navlogo from '@/public/img/img_navlogo.svg'

export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-[70px] justify-center items-center z-50 px-[24px] t:px-[24px] m:px-[24px] border-b border-solid border-var-gray3 bg-var-gray1 dark:bg-var-dark1 dark:border-var-dark1">
      <div className="w-[1200px] flex justify-between items-center">
      <div className="flex items-center">
          <Link href="/">
            <Image
              src={navlogo}
              alt="로고 아이콘"
              className="m:w-[120px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}