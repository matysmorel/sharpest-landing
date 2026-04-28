import { StatBlock } from '@/components/ui/StatBlock'

const stats = [
  { number: '30', unit: 'DAYS', label: 'TO FIRST RESULTS' },
  { number: '100%', label: 'PROCESSES AUTOMATED' },
  { number: '0', label: 'FLUFF INCLUDED' },
  { number: '5+', label: 'INDUSTRIES SERVED' },
]

export function ProofStrip() {
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
