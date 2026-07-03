'use client';

import {formatPrice} from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';

export default function Catalog() {
  const items = [
    {slug: 'villa-sea-breeze', name: 'Вилла «Морской бриз»', location: 'Ялта, Набережная', spec: '4 спальни · 6 мест', price: 15000, image: '/images/villa-sea-breeze.jpg', popular: true},
    {slug: 'apts-sunny', name: 'Апартаменты «Солнечные»', location: 'Севастополь, Приморский бульвар', spec: '2 спальни · 4 места · 50 м²', price: 8500, image: '/images/apts-sunny.jpg', popular: false},
    {slug: 'studio-breeze', name: 'Студия «Бриз»', location: 'Керчь, Приморская ул.', spec: '1 комната · 2 места · Балкон', price: 4000, image: '/images/studio-breeze.jpg', popular: false},
    {slug: 'house-lavender', name: 'Дом «Лавандовый»', location: 'Гурзуф, Ай-Петри', spec: '3 спальни · 5 мест · Терраса', price: 12000, image: '/images/house-lavender.jpg', popular: false},
    {slug: 'penthouse-height', name: 'Пентхаус «Высота»', location: 'Феодосия, центр', spec: '2 спальни · 4 места · Панорама', price: 10000, image: '/images/penthouse-height.jpg', popular: false},
    {slug: 'cottage-crimean', name: 'Коттедж «Крымский»', location: 'Судак, у моря', spec: '3 спальни · 6 мест · Мангал', price: 11000, image: '/images/cottage-crimean.jpg', popular: false},
  ];

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="section-title">Каталог жилья</h2>
        <p className="section-subtitle mt-4">Варианты для семейного отдыха, романтических поездок и большой компании</p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.slug} className="card lift bg-white">
            <div className="relative h-60 w-full">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(min-width: 1024px) 380px,(min-width: 640px) 50vw,100vw" />
              {item.popular && <span className="absolute left-4 top-4 rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white">Популярное</span>}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.location}</p>
              <p className="mt-3 text-sm text-gray-600">{item.spec}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-teal-800">
                  <span className="text-xl font-bold">{formatPrice(item.price, 'RUB')}</span>
                  <span className="text-sm text-gray-500"> /ночь</span>
                </div>
                <Link href="#booking" className="btn-primary !px-5 !py-2.5 text-sm">Забронировать</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
