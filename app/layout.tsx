import type {Metadata} from 'next';
import '@/styles/globals.css';
import Script from 'next/script';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

export const metadata: Metadata = {
  title: 'Global Nomad',
  description: '나에게 꼭 맞는 체험상품 찾기',
  metadataBase: new URL('https://codeit-global-nomad.vercel.app/main'),
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>

      <body className="max-w-full">
        <Navbar /> <main>{children} </main>
        <Footer />
      </body>
    </html>
  );
}
