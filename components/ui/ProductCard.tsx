type ProductCardProps = {
  name: string
  tag: string
  description: string
  oneliner: string
}

export function ProductCard({ name, tag, description, oneliner }: ProductCardProps) {
  return (
    <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-150 group">
      <div className="flex items-start justify-between mb-4">
        <span className="font-display text-[28px] tracking-[2px] group-hover:text-white">{name}</span>
        <span className="font-mono text-[10px] bg-yellow border border-black px-2 py-0.5 uppercase tracking-[2px] text-black shrink-0 ml-3 mt-1">
          {tag}
        </span>
      </div>
      <p className="text-sm text-mid leading-relaxed mb-3 group-hover:text-gray">{description}</p>
      <p className="text-sm italic text-mid group-hover:text-gray">"{oneliner}"</p>
    </div>
  )
}
