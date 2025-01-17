import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/common/navbar/navbar';
import signLogo from '@/public/img/img_signlogo.svg';

export default function Page() {
  return (
    <main>
      <Navbar />
      <form>
        <div>
          <Link href="/">
            <Image src={signLogo} alt="로고" />
          </Link>
        </div>
      </form>
    </main>
  )
}
