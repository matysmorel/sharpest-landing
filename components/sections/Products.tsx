'use client'

import { ProductCard } from '@/components/ui/ProductCard'
import { MonoLabel } from '@/components/ui/MonoLabel'
import { useLanguage } from '@/context/LanguageContext'

export function Products() {
  const { t } = useLanguage()
  const p = t.products

  return (
    <section className="bg-white border-t-2 border-black" id="products">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-16">
        <MonoLabel className="block mb-4">{p.eyebrow}</MonoLabel>
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12">
          {p.headline1}<br />{p.headline2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-l-2 border-black">
          {p.items.map((product, i) => (
            <div
              key={product.name}
              className={`border-b-2 border-r-2 border-black ${
                p.items.length % 2 !== 0 && i === p.items.length - 1
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
