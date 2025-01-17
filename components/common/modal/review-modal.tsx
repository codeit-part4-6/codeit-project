import Button from '../button';
import OverlayContainer from './overlay-container';

interface ModalProps {
  message: string;
  onClose: () => void;
}

export default function ReviewModal({message, onClose}: ModalProps) {
  return (
    <OverlayContainer onClose={onClose}>
      <div onClick={e => e.stopPropagation()} className="review-modal">
        {/* 후기 작성 모달 내용 구성하세요 */}
        <p>{message}</p>
        <Button
          className={
            'sticky bottom-0 h-54pxr w-full rounded-md bg-nomad-black px-8pxr text-center align-middle text-lg font-bold text-white tablet:h-56pxr tablet:rounded pc:h-56pxr pc:rounded'
          }
          onClick={onClose}
        >
          작성하기
        </Button>
      </div>
    </OverlayContainer>
  );
}
