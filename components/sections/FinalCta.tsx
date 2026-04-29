'use client'

import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

export function FinalCta() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section className="bg-black border-t-2 border-black text-center" id="contact">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-24">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-6 text-white">
          {c.line1}<br />
          <span className="bg-yellow text-black px-2">{c.accent}</span>
        </h2>
        <p className="font-body text-[17px] text-gray leading-[1.7] max-w-[480px] mx-auto mb-10">
          {c.body}
        </p>
        <Button variant="yellow" href="mailto:hello@sharpest.agency" className="text-base px-10 py-5">
          {c.button}
        </Button>
        <p className="font-mono text-[11px] tracking-[2px] text-mid mt-6 uppercase">
          {c.sub}
        </p>
      </div>
    </section>
  )
}
