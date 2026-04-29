'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import translations, { type Lang, type Translations } from '@/lib/translations'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('sharpest-lang') as Lang | null
    if (saved === 'en' || saved === 'cs') setLangState(saved)
  }, [])

  const setLang = (next: Lang) => {
    localStorage.setItem('sharpest-lang', next)
    setLangState(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
