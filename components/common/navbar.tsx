'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; 
import { useAuthStore } from '@/service/store/authStore';
import navlogo from '@/public/img/img_navlogo.svg';
import notification from '@/public/icon/ic_notification.svg';
import defaultProfileImage from '@/public/icon/ic_defaultProfileImage.svg';

export default function Navbar() {
  const { user, setLogout } = useAuthStore();
  const [ isDropdown, setIsDropdown ] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleLogout = () => {
    setLogout();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[1px] border:bg-gray-100">
      <nav className='sticky flex h-[4.375rem] px-[1.25rem] py-[1.25rem] md:gap-[1.3125rem] md:px-[0.625rem] md:py-[0.625rem]  max-w-[1200px] mx-auto'>
        <div className='flex w-full items-center justify-between'>
          <div>
            <Link href='/'>
              <Image src={navlogo} alt='로고 아이콘' />
            </Link>
          </div>
          <div
            className={`flex items-center justify-center ${
              user ? 'gap-12pxr' : 'gap-25pxr'
            } text-md font-medium text-black-100`}
          >
            {user ? (
              <>
                <div className='flex'>
                  <Image src={notification} alt='알림 아이콘' />
                </div>
                <hr className='h-[22px] border-[1px] border:bg-gray-100 w-0' />
                <div className='relative flex justify-center items-center gap-10pxr'>
                  <div 
                    onClick={toggleDropdown}
                    className='cursor-pointer flex items-center gap-2'
                  >
                    <Image
                      src={user.profileImageUrl ? user.profileImageUrl : defaultProfileImage}
                      alt='프로필 이미지'
                      width={42.29}
                      height={32}
                    />
                    <div>{user.nickname}</div>
                  </div>
                  {isDropdown && (
                    <div className='absolute top-[100%] right-0 mt-2 w-[150px] bg-white border border-gray-300 rounded-lg shadow-md'>
                      <Link href='/mypage' className='block px-4 py-2 text-black hover:bg-gray-100'>
                        마이페이지
                      </Link>
                      <div
                        onClick={handleLogout}
                        className='block px-4 py-2 text-black cursor-pointer hover:bg-gray-100'
                      >
                        로그아웃
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link href='/signin'>로그인</Link>
                </div>
                <div>
                  <Link href='/signup'>회원가입</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
