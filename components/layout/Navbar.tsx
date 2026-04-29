import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const navLinks = ['PRODUCTS', 'WORK', 'ABOUT']

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black h-[80px] flex items-center justify-between px-16">
      <a href="#" className="flex items-center">
        <Image
          src="/logo.png"
          alt="SHARPEST"
          width={140}
          height={36}
          className="h-8 w-auto object-contain"
          priority
        />
      </a>
      <div className="flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-mono text-mid text-[11px] tracking-[2px] hover:text-black transition-colors duration-150 hidden md:block"
          >
            {link}
          </a>
        ))}
        <Button variant="yellow" href="#contact">
          BOOK A CALL →
        </Button>
      </div>
    </nav>
  )
}
