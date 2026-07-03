'use client';

import {useState, type FormEvent} from 'react';

export default function Booking() {
  const [sent, setSent] = useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="booking" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Забронировать жильё</h2>
          <p className="section-subtitle mt-4">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="grid gap-6 p-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Имя</label>
              <input name="name" required placeholder="Иван" className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Телефон</label>
              <input name="phone" required placeholder="+7 (___) ___-__-__" className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Заезд</label>
              <input name="checkin" required placeholder="ДД.ММ.ГГГГ" className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Выезд</label>
              <input name="checkout" required placeholder="ДД.ММ.ГГГГ" className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Выберите жильё</label>
              <select name="housing" required className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20">
                <option value="">— Выберите —</option>
                {['villa-sea-breeze', 'apts-sunny', 'studio-breeze', 'house-lavender', 'penthouse-height', 'cottage-crimean'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Гости</label>
              <select name="guests" required className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20">
                <option value="">— Выберите —</option>
                {Array.from({length: 5}).map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">Комментарий</label>
              <textarea name="comment" placeholder="Особые пожелания, вопросы..." rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20" />
            </div>
            <div className="md:col-span-2 flex flex-col items-center gap-3">
              <button type="submit" className="btn-primary w-full justify-center md:w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Отправить заявку
              </button>
              {sent && (
                <p className="text-sm text-teal-700">
                  Заявка отправлена. Мы свяжемся с вами в течение 15 минут.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
