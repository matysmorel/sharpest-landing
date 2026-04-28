import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const navLinks = ['PRODUCTS', 'WORK', 'ABOUT']

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-black h-[60px] flex items-center justify-between px-10">
      <a href="#" className="flex items-center">
        <Image
          src="/logo.jpeg"
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
            className="font-mono text-gray text-[11px] tracking-[2px] hover:text-white transition-colors duration-150 hidden md:block"
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
