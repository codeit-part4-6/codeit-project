import Skeleton from '@/components/common/skeleton';
import {Suspense} from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="container">
      <main>
        <Suspense
          fallback={
            <ul>
              
              <li>
                <Skeleton className="m-5 h-56pxr w-96pxr flex-row items-center justify-center gap-4pxr rounded-lg border-slate-800 bg-black px-8pxr text-center align-middle text-white tablet:w-136pxr pc:w-136pxr" />
              </li>
              <li>
                <Skeleton className="m-5 h-24pxr w-150pxr" />
              </li>
              <hr />
            </ul>
          }
        >
          {children}
        </Suspense>
      </main>
    </div>
  );
}
