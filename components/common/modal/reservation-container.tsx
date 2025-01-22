import React from 'react';

interface ReservationContainerProps {
  onClose?: () => void;
  children: React.ReactNode;
}

export default function ReservationContainer({children, onClose}: ReservationContainerProps) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {children}
    </div>
  );
}
