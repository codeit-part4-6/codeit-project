
import OverlayContainer from "./overlay-container";

interface ModalProps{
    message: string;
    onClose: () => void;
}

export default function ReviewModal({message, onClose}: ModalProps){
    return (
        <OverlayContainer>
          <div className="bg-white rounded-3xl w-full h-full pc:w-[480px] pc:h-[70%] pc:max-w-[750px] tablet:w-[480px] tablet:h-[70%] tablet:max-w-[750px] flex flex-col items-center justify-center gap-8">
            {/* 후기 작성 모달 내용 구성하세요 */}
            <p>{message}</p>
            <button onClick={onClose}>작성하기</button>
          </div>
        </OverlayContainer>
      );
}