'use client'

import { StatBlock } from '@/components/ui/StatBlock'
import { useLanguage } from '@/context/LanguageContext'

export function ProofStrip() {
  const { t } = useLanguage()
  const stats = t.proof.stats

  return (
    <section className="border-t-2 border-b-2 border-black bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatBlock
            key={stat.label}
            number={stat.number}
            unit={stat.unit}
            label={stat.label}
            last={i === stats.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
