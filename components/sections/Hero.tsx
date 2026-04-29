'use client'

import { Button } from '@/components/ui/Button'
import { MonoLabel } from '@/components/ui/MonoLabel'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="bg-white px-10 md:px-16 pt-24 pb-28 max-w-[1200px] mx-auto">
      <div className="animate-fade-in">
        <MonoLabel className="block mb-6">{h.eyebrow}</MonoLabel>
      </div>
      <h1 className="font-display text-[72px] md:text-[100px] lg:text-[120px] tracking-[4px] leading-none mb-8 animate-fade-in">
        {h.line1}<br />
        <span className="bg-yellow px-2">{h.accent}</span>{h.suffix}
      </h1>
      <p className="font-body text-[17px] text-mid leading-[1.7] max-w-[480px] mb-10 animate-fade-in-delay">
        {h.body}
      </p>
      <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
        <Button variant="primary" href="#contact">{h.cta1}</Button>
        <Button variant="ghost" href="#results">{h.cta2}</Button>
      </div>
    </section>
  )
}
