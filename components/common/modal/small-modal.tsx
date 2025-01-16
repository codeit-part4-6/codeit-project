import Image from "next/image";
import checkConfirm from "@/public/icon/icon_confirm.svg"
import OverlayContainer from "./overlay-container";

interface ModalProps{
    message: string;
    onClose: () => void;
}

export default function SmallModal({message, onClose}: ModalProps){
    return (
        <OverlayContainer>
          <div className="bg-white rounded-xl w-full h-[184px] mx-[38px] pc:w-[298px] tablet:w-[298px] flex flex-col items-center justify-center gap-8">
            <div>
                <div className="w-[24px] h-[24px] relative mb-4">
                    <Image
                    src={checkConfirm}
                    alt="예약 취소 확인 체크"
                    fill
                    className="absolute"
                    />
                </div>
                <p className="text-lg font-regular">{message}</p>
            </div>
            <div className="flex gap-2">
            {/* 아래 button 태그는 공통 버튼으로 대체하세요 */}
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              아니오
            </button>
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              취소하기
            </button>
            </div>
          </div>
        </OverlayContainer>
      );
}