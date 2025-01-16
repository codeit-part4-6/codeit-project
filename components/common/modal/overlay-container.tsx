import React from "react";

export default function OverlayContainer ({children}: {children: React.ReactNode}) {
return <div className="z-50 bg-opacity-70 bg-black-50 fixed inset-0 flex items-center justify-center">{children}</div>
}