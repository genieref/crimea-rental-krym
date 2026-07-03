'use client';

import {House, CreditCard, Headset, CalendarDays} from 'lucide-react';

const items = [
  {Icon: House, title: 'Проверенные объекты', text: 'Лично осматриваем каждое жильё, сверяем описание с реальностью и публикуем только проверенные варианты.'},
  {Icon: CreditCard, title: 'Безопасная оплата', text: 'Безопасный предплатёж через сервис с защитой и возможностью возврата в течение 7 дней.'},
  {Icon: Headset, title: 'Поддержка 24/7', text: 'Помогаем с заселением, подбираем варианты и отвечаем на вопросы в любое время.'},
  {Icon: CalendarDays, title: 'Гибкие сроки', text: 'Сдаём от 3 дней и на весь сезон. Для длительного отдыха действуют специальные условия.'},
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Почему мы</h2>
          <p className="section-subtitle mt-4">Делаем ваш отдых в Крыму комфортным и безопасным</p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({Icon, title, text}, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5 shadow-sm">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-teal-800">{title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
