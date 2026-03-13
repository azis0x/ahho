import { TopNav } from "#/components/top-nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
      <TopNav />
      <section
        id="header"
        className="max-w-4xl h-screen items-center justify-center mx-auto w-full flex flex-col gap-6"
      >
        <div className="md:flex-row flex flex-col gap-3 p-4">
          <h1 className="text-4xl/6 font-bold tracking-tight scroll-m-20">
            Ahho!
          </h1>
          <p className="text-2xl/6 tracking-tight font-mono">
            The fun way to connected to people&apos;s thoughts!
          </p>
        </div>
        <div className="flex items-center gap-3 p-6">
          <Link
            href="/signup"
            className="underline underline-offset-2 text-2xl/6 tracking-tight font-medium"
          >
            Getting Started
          </Link>
          <Link
            href="/signup"
            className="text-2xl/6 tracking-tight font-medium font-mono"
          >
            FAQs
          </Link>
        </div>
      </section>
    </div>
  );
}
