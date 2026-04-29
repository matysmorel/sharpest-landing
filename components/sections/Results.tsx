'use client'

import { MonoLabel } from '@/components/ui/MonoLabel'
import { useLanguage } from '@/context/LanguageContext'

export function Results() {
  const { t } = useLanguage()
  const r = t.results

  return (
    <section className="bg-white border-t-2 border-black" id="results">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-16">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12">
          {r.line1}<br />
          <span className="bg-yellow px-2">{r.accent}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-black">
          {r.items.map((item) => (
            <div key={item.sector} className="border-b-2 border-r-2 border-black p-8">
              <MonoLabel className="block mb-6">{item.sector}</MonoLabel>
              <div className="font-display text-[72px] tracking-wider leading-none mb-1">
                {item.metric}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[2px] text-mid mb-6">{item.label}</p>
              <p className="font-body text-[14px] text-mid leading-[1.7]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
