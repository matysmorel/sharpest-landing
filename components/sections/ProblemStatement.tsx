'use client'

import { useLanguage } from '@/context/LanguageContext'

export function ProblemStatement() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="bg-white border-t-2 border-black" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="px-10 md:px-16 py-16">
          <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12">
            {p.prefix}{' '}
            <span className="bg-yellow px-2">{p.accent}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-black">
            {p.items.map((item) => (
              <div key={item.title} className="border-b-2 border-r-2 border-black p-8">
                <p className="font-mono text-[11px] uppercase tracking-[3px] text-mid mb-3">{item.title}</p>
                <p className="font-body text-[15px] text-mid leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
