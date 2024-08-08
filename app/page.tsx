import { FoundersGrotesk } from "@/lib/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className={` ${FoundersGrotesk.className} text-zinc-800 font-FoundersGrotesk font-bold text-[22vh] leading-[15vh] uppercase `}>together we make a difference</h1>
      </div>
    </main>
  );
}
