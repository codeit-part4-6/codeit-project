import Image from 'next/image';
import Button from '../button';
import OverlayContainer from './overlay-container';
import {ReviewModalProps} from '@/types/review-modal-props';
import closeButton from '@/public/icon/ic_close_button.svg';
import star from '@/public/icon/ic_star.svg';
import unStar from '@/public/icon/ic_unstar.svg';

export default function ReviewModal({data, message, onClose}: ReviewModalProps) {
  if (!data) {
    return null;
  }
  return (
    <OverlayContainer onClose={onClose}>
      <div onClick={e => e.stopPropagation()} className="review-modal">
        <div className="mb-35pxr flex items-center justify-between tablet:mb-41pxr">
          <p className="text-[1.75rem] font-bold text-black-100 tablet:text-2xl">{message}</p>
          <div className="relative h-12 w-12 tablet:h-10 tablet:w-10" onClick={onClose}>
            <Image src={closeButton} alt="모달 닫기 버튼" className="absolute cursor-pointer" fill />
          </div>
        </div>
        <div className="mb-3 flex items-center gap-6pxr tablet:mb-6 tablet:gap-6">
          <div className="relative h-100pxr w-100pxr rounded-xl tablet:h-126pxr tablet:w-126pxr">
            <Image src={data?.activity.bannerImageUrl} alt="체험 배너 이미지" className="absolute" fill />
          </div>
          <div className="flex flex-grow flex-col tablet:gap-3">
            <p className="text-lg font-bold text-nomad-black tablet:text-xl">{data?.activity.title}</p>
            <div className="border-nomad-black/10 mb-6pxr flex items-center border-b pb-6pxr text-md font-regular text-nomad-black tablet:mb-3 tablet:pb-3 tablet:text-2lg">
              <p>{data?.date}</p>
              <p>·</p>
              <p>
                {data?.startTime} - {data?.endTime}
              </p>
              <p>·</p>
              <p>{data?.headCount}명</p>
            </div>
            <p className="text-xl font-bold leading-none text-nomad-black tablet:text-3xl">￦{data?.totalPrice}</p>
          </div>
        </div>
        <div className="mb-3 flex items-center justify-center gap-2 px-4 py-22pxr tablet:mb-6">
          <div className="relative h-14 w-14">
            <Image src={star} alt="별점 이미지" className="absolute" fill />
          </div>
          <div className="relative h-14 w-14">
            <Image src={star} alt="별점 이미지" className="absolute" fill />
          </div>
          <div className="relative h-14 w-14">
            <Image src={star} alt="별점 이미지" className="absolute" fill />
          </div>
          <div className="relative h-14 w-14">
            <Image src={star} alt="별점 이미지" className="absolute" fill />
          </div>
          <div className="relative h-14 w-14">
            <Image src={unStar} alt="별점 이미지" className="absolute" fill />
          </div>
        </div>
        <textarea
          placeholder="후기를 작성해주세요"
          className="mb-6 h-346pxr min-h-346pxr w-full resize-none rounded border border-gray-700 px-4 py-2 placeholder-gray-700 placeholder:text-lg placeholder:font-regular tablet:h-60 tablet:min-h-60"
        />

        <Button
          className={
            'h-54pxr min-h-54pxr w-full rounded-md bg-nomad-black px-8pxr text-center text-lg font-bold text-white tablet:h-56pxr tablet:min-h-56pxr tablet:rounded'
          }
          onClick={onClose}
        >
          작성하기
        </Button>
      </div>
    </OverlayContainer>
  );
}
