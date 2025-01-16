import Image from "next/image";
import checkConfirm from "@/public/icon/icon_confirm.svg";
import OverlayContainer from "./overlay-container";

interface ModalProps {
  type: "small" | "big";
  message: string;
  onClose: () => void;
}

export default function Modal({ type, message, onClose }: ModalProps) {
  // 각 모달 타입별 설정
  const modalConfig = {
    small: {
      containerClass:
        "bg-white rounded-xl w-full h-[184px] mx-[38px] p-6 pc:w-[298px] tablet:w-[298px] flex flex-col items-center justify-center gap-8",
      content: (
        <>
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
        </>
      ),
    },
    big: {
      containerClass:
        "relative bg-white rounded-lg mx-6 w-full h-[220px] pc:w-[540px] pc:h-[250px] tablet:w-[540px] tablet:h-[250px] flex items-center justify-center",
      content: (
        <>
          <p className="text-lg pc:text-2lg tablet:text-2lg font-medium">
            {message}
          </p>
          <div className="absolute bottom-7 right-7">
            {/* 아래 button 태그는 공통 버튼으로 대체하세요 */}
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              확인
            </button>
          </div>
        </>
      ),
    },
  };

  const config = modalConfig[type];

  return (
    <OverlayContainer>
      <div className={config.containerClass}>{config.content}</div>
    </OverlayContainer>
  );
}
