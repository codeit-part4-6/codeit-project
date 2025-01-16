import OverlayContainer from "./overlay-container";

interface ModalProps{
    message: string;
    onClose: () => void;
}

export default function BigModal({message, onClose}: ModalProps){
    return (
        <OverlayContainer>
          <div className="relative bg-white rounded-lg mx-6 w-full h-[220px] pc:w-[540px] pc:h-[250px] tablet:w-[540px] tablet:h-[250px] flex items-center justify-center">
            <p className="text-lg pc:text-2lg tablet:text-2lg font-medium">{message}</p>
            <div className="absolute bottom-7 right-7" >
            {/* 아래 button 태그는 공통 버튼으로 대체하세요 */}
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              확인
            </button>
            </div>
          </div>
        </OverlayContainer>
      );
}