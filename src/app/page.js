import Banner from "@/Components/Ui/Banner/Banner";
import Image from "next/image";

export const metadata = {
    title: 'Home',
    description: '...',
}
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Banner></Banner>
      </main>
    </div>
  );
}
