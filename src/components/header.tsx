'use client';

import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {useState, useEffect} from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-teal-700">Крым</span>
          <span className="text-orange-500">Аренда</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#catalog" className="hover:text-teal-700 transition-colors">Каталог</a>
          <a href="#advantages" className="hover:text-teal-700 transition-colors">Преимущества</a>
          <a href="#booking" className="hover:text-teal-700 transition-colors">Бронирование</a>
          <a href="#contacts" className="hover:text-teal-700 transition-colors">Контакты</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#booking" className="hidden md:inline-flex btn-primary !py-2 !px-4 text-sm">Забронировать</a>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-black/5">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#catalog" onClick={() => setOpen(false)}>Каталог</a>
            <a href="#advantages" onClick={() => setOpen(false)}>Преимущества</a>
            <a href="#booking" onClick={() => setOpen(false)}>Бронирование</a>
            <a href="#contacts" onClick={() => setOpen(false)}>Контакты</a>
          </div>
        </div>
      )}
    </header>
  );
}
