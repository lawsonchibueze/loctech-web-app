import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-pink-700 text-5xl text-center pt-5">
        Welcome Emeka to the Loctech Website Project
      </h1>
    </main>
  );
}
