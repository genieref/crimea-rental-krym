'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/hero-crimea.jpg" alt="" width={1920} height={1080} className="h-full w-full object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/75" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] drop-shadow-lg">Отдых в Крыму на лето 2026</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">Уютное жильё у моря — дни, недели, всё лето. Дома, апартаменты, виллы с видом на набережную.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#catalog" className="btn-primary">
              Выбрать жильё
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="#booking" className="btn-ghost">Забронировать</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
