import React from 'react';

interface OverlayContainerProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function OverlayContainer({children, onClose}: OverlayContainerProps) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black-50 bg-opacity-70">
      {children}
    </div>
  );
}
