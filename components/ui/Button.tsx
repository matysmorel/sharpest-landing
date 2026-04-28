type ButtonProps = {
  variant?: 'primary' | 'ghost' | 'yellow'
  children: React.ReactNode
  href?: string
  className?: string
}

export function Button({ variant = 'primary', children, href, className = '' }: ButtonProps) {
  const base = 'inline-block font-mono text-[12px] uppercase tracking-[2px] px-7 py-3.5 border-2 border-black transition-colors duration-150 cursor-pointer'
  const variants = {
    primary: 'bg-black text-white hover:bg-mid',
    ghost:   'bg-transparent text-black hover:bg-black hover:text-white',
    yellow:  'bg-yellow text-black hover:bg-black hover:text-yellow',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls}>
      {children}
    </button>
  )
}
