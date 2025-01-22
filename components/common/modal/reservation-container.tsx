import React from 'react';

interface ReservationContainerProps {
  onClose?: () => void;
  children: React.ReactNode;
}

export default function ReservationContainer({children, onClose}: ReservationContainerProps) {
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <div onClick={handleContainerClick} className="absolute inset-0 z-50 flex items-center justify-center">
      {children}
    </div>
  );
}
