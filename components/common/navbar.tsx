'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/service/store/authStore';
import navlogo from '@/public/img/img_navlogo.svg';
import notification from '@/public/icon/ic_notification.svg';
import defaultProfileImage from '@/public/icon/ic_defaultProfileImage.svg';

export default function Navbar() {
  const { user } = useAuthStore();

  return (
    <header>
      <nav className="sticky flex h-[4.375rem] px-[1.25rem] py-[1.25rem] md:gap-[1.3125rem] md:px-[0.625rem] md:py-[0.625rem]">
        <div className="flex w-full items-center justify-between">
          <div>
            <Link href="/">
              <Image src={navlogo} alt="로고 아이콘" />
            </Link>
          </div>
          <div className={`flex items-center justify-center ${user ? 'gap-12pxr' : 'gap-25pxr'} text-md font-medium text-black-100`}>
            {user ? (
              <>
                <div className='flex'>
                  <Image src={notification} alt="알림 아이콘" />
                </div>
                <hr className="h-[22px] border-[1px] border-[#DDDDDD] w-0" />
                <div className="flex justify-center items-center gap-10pxr">
                  <Image 
                    src={user.profileImageUrl ? user.profileImageUrl : defaultProfileImage} 
                    alt="프로필 이미지" 
                    width={42.29} 
                    height={32} 
                  />
                  <div>{user.nickname}</div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link href="/signin">로그인</Link>
                </div>
                <div>
                  <Link href="/signup">회원가입</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      <hr className="border-b-[0.0625rem] border-gray-200" />
    </header>
  );
}
