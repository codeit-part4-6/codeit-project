import Image from 'next/image';
import Link from 'next/link';
import defaultProfile from '@/public/img/img_default_profile.svg';
import profileButton from '@/public/icon/icon_profile-button.svg';
import accountCheck from '@/public/icon/icon_accoutn_check.svg';
import reserveListCheck from '@/public/icon/icon_textbox_check.svg';
import treatReservation from '@/public/icon/icon_cog.svg';
import reserveCalendar from '@/public/icon/icon_calendar_check.svg';

export default function SideNavi() {
  return (
    <div className="shadow-sidenavi-box h-[27rem] w-full rounded-xl border border-gray-200 p-6 tablet:w-[15.6875rem] pc:w-[26rem] pc:p-6">
      <div className="relative mb-2 h-40 w-40">
        <Image src={defaultProfile} alt="기본 프로필" className="absolute" fill />
        <div className="absolute bottom-4 right-4 h-11 w-11">
          <Image src={profileButton} alt="프로필 수정 버튼" fill />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/" className="w-full">
          <div className="flex items-center gap-[0.875rem] rounded-xl px-4 py-[0.625rem] hover:bg-green-50">
            <div className="relative h-6 w-6">
              <Image src={accountCheck} alt="내 정보 이미지" className="absolute" fill />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-nomad-black">내 정보</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="w-full">
          <div className="flex items-center gap-[0.875rem] rounded-xl px-4 py-[0.625rem] hover:bg-green-50">
            <div className="relative h-6 w-6">
              <Image src={reserveListCheck} alt="예약 내역 이미지" className="absolute" fill />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-nomad-black">예약 내역</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="w-full">
          <div className="flex items-center gap-[0.875rem] rounded-xl px-4 py-[0.625rem] hover:bg-green-50">
            <div className="relative h-6 w-6">
              <Image src={treatReservation} alt="내 체험 관리 이미지" className="absolute" fill />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-nomad-black">내 체험 관리</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="w-full">
          <div className="flex items-center gap-[0.875rem] rounded-xl px-4 py-[0.625rem] hover:bg-green-50">
            <div className="relative h-6 w-6">
              <Image src={reserveCalendar} alt="예약 현황 이미지" className="absolute" fill />
            </div>
            <div className="flex-grow">
              <p className="text-lg font-bold text-nomad-black">예약 현황</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
