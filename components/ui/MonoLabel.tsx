type MonoLabelProps = {
  children: React.ReactNode
  color?: 'gray' | 'yellow' | 'white' | 'black'
  className?: string
}

export function MonoLabel({ children, color = 'gray', className = '' }: MonoLabelProps) {
  const colors = {
    gray:   'text-mid',
    yellow: 'text-yellow',
    white:  'text-white',
    black:  'text-black',
  }
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[3px] ${colors[color]} ${className}`}>
      {children}
    </span>
  )
}
