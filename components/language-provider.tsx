'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { dictionary, type Dict, type Lang } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle: () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru')),
    t: dictionary[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
