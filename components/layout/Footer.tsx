'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t-2 border-black">
      <div className="max-w-[1200px] mx-auto px-10 py-10 flex items-center justify-between flex-wrap gap-6">
        <Image
          src="/logo-white.png"
          alt="SHARPEST"
          width={160}
          height={40}
          className="h-9 w-auto object-contain"
        />
        <div className="flex items-center gap-8">
          {t.footer.links.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-gray text-[11px] tracking-[2px] hover:text-white transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-mid">
        <div className="max-w-[1200px] mx-auto px-10 py-4">
          <span className="font-mono text-[10px] tracking-[1px] text-mid">
            {t.footer.copy}
          </span>
        </div>
      </div>
    </footer>
  )
}
