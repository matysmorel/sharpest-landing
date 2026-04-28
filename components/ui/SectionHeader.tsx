type SectionHeaderProps = {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="bg-black flex items-center gap-4 px-6 py-3 border-b-2 border-black">
      <span className="font-mono text-yellow text-[11px] tracking-[2px]">{number}</span>
      <span className="font-display text-white text-2xl tracking-[3px]">{title}</span>
    </div>
  )
}
