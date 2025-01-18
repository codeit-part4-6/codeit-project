import {ReactNode} from 'react';
import Navbar from '@/components/common/navbar/Navbar';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
