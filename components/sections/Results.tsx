import { MonoLabel } from '@/components/ui/MonoLabel'

const results = [
  {
    sector: 'LEGAL SERVICES',
    metric: '14H',
    label: 'SAVED PER WEEK',
    description: 'Automated contract review pipeline. 0 paralegals needed for routine documents.',
  },
  {
    sector: 'E-COMMERCE',
    metric: '3×',
    label: 'FASTER ORDER PROCESSING',
    description: 'Full order-to-fulfilment automation. Customer service load cut by 60%.',
  },
  {
    sector: 'CONSULTING FIRM',
    metric: '€40K',
    label: 'SAVED IN YEAR ONE',
    description: 'Replaced 3 manual reporting processes. One agent. Runs every night.',
  },
]

export function Results() {
  return (
    <section className="bg-white border-t-2 border-black" id="results">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-16">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12">
          RESULTS.<br />
          <span className="bg-yellow px-2">NOT PROMISES.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-black">
          {results.map((r) => (
            <div key={r.sector} className="border-b-2 border-r-2 border-black p-8">
              <MonoLabel className="block mb-6">{r.sector}</MonoLabel>
              <div className="font-display text-[72px] tracking-wider leading-none mb-1">
                {r.metric}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[2px] text-mid mb-6">{r.label}</p>
              <p className="font-body text-[14px] text-mid leading-[1.7]">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
