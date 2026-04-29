'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import type { Lang } from '@/lib/translations'

export function Navbar() {
  const { lang, setLang, t } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black h-[80px] flex items-center justify-between px-16">
      <a href="#" className="flex items-center">
        <Image
          src="/logo.png"
          alt="SHARPEST"
          width={140}
          height={36}
          className="h-8 w-auto object-contain"
          priority
        />
      </a>
      <div className="flex items-center gap-8">
        {t.nav.links.map((link: string) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-mono text-mid text-[11px] tracking-[2px] hover:text-black transition-colors duration-150 hidden md:block"
          >
            {link}
          </a>
        ))}

        <div className="flex items-center gap-1 font-mono text-[11px] tracking-[2px] hidden md:flex">
          {(['en', 'cs'] as Lang[]).map((l, i) => (
            <>
              {i > 0 && <span key="sep" className="text-mid">|</span>}
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-colors duration-150 ${
                  lang === l ? 'text-black font-medium' : 'text-mid hover:text-black'
                }`}
              >
                {l.toUpperCase()}
              </button>
            </>
          ))}
        </div>

        <Button variant="yellow" href="#contact">
          {t.nav.cta}
        </Button>
      </div>
    </nav>
  )
}
