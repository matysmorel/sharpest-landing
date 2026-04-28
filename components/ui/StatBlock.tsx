type StatBlockProps = {
  number: string
  unit?: string
  label: string
  last?: boolean
}

export function StatBlock({ number, unit, label, last = false }: StatBlockProps) {
  return (
    <div className={`p-8 text-center ${!last ? 'border-r-2 border-black' : ''}`}>
      <div className="font-display leading-none mb-2">
        <span className="text-7xl tracking-wider">{number}</span>
        {unit && <span className="text-4xl ml-1 tracking-wide">{unit}</span>}
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[3px] text-mid">{label}</span>
    </div>
  )
}
