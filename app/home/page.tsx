import Link from "next/link";
import Nav from "../../components/navbar";
import Hero from "../../components/hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-8">
        <Nav />
        <Hero />
      </main>
    </div>
  );
}
