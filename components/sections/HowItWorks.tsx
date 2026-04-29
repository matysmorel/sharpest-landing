'use client'

import { useLanguage } from '@/context/LanguageContext'

export function HowItWorks() {
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section className="bg-black border-t-2 border-black text-white">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-16">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12 text-white">
          {h.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-gray">
          {h.steps.map((step) => (
            <div key={step.number} className="border-b-2 border-r-2 border-gray p-8">
              <p className="font-mono text-yellow text-[11px] tracking-[3px] mb-4">{step.number}</p>
              <h3 className="font-display text-[36px] tracking-[3px] text-white mb-4">{step.title}</h3>
              <p className="font-body text-[15px] text-gray leading-[1.7]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
