'use client';

const items = [
  {icon: 'phone', label: '+7 (978) 123-45-67'},
  {icon: 'mail', label: 'info@crimea-arenda.ru'},
  {icon: 'clock', label: 'Ежедневно с 9:00 до 22:00 по МСК'},
];

export default function Contacts() {
  return (
    <section id="contacts" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Контакты</h2>
          <p className="section-subtitle mt-4">Свяжитесь с нами любым удобным способом</p>
        </div>
        <div className="mx-auto mt-10 grid gap-4 max-w-2xl">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <IconSvg type={item.icon} />
              </div>
              <span className="text-sm font-medium text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconSvg({type}: {type: string}) {
  if (type === 'phone') {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.11a2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 20 16.92z"/></svg>;
  }
  if (type === 'mail') {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>;
  }
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
