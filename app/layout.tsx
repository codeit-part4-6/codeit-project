import type {Metadata} from 'next';
import '@/styles/globals.css';

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
      <body className="max-w-full">{children}</body>
    </html>
  );
}
