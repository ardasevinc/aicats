import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-black h-screen flex justify-center items-center">
      <h1 className="text-white text-4xl">Ai Cats</h1>
    </main>
  );
}
