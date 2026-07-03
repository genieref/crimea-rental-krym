'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 sm:grid-cols-3">
        <div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-teal-400">Крым</span>
            <span className="text-orange-400">Аренда</span>
          </div>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">Аренда жилья в Крыму на лето 2026. Надёжно, комфортно, по лучшим ценам.</p>
        </div>
        <div>
          <h4 className="font-semibold text-teal-300">Города</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {['Ялта', 'Севастополь', 'Керчь', 'Феодосия', 'Судак'].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-teal-300">Услуги</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            {['Долгосрочная аренда', 'Трансфер из аэропорта', 'Экскурсии', 'Кейтеринг'].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-gray-400">
          © 2026 КрымАренда. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
