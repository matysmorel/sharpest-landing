import { Button } from '@/components/ui/Button'

export function FinalCta() {
  return (
    <section className="bg-black border-t-2 border-black text-center" id="contact">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-24">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-6 text-white">
          READY TO STOP<br />
          <span className="bg-yellow text-black px-2">WASTING TIME?</span>
        </h2>
        <p className="font-body text-[17px] text-gray leading-[1.7] max-w-[480px] mx-auto mb-10">
          One call. 30 minutes. We tell you exactly what we&apos;d automate
          and what it would cost you not to.
        </p>
        <Button variant="yellow" href="mailto:hello@sharpest.agency" className="text-base px-10 py-5">
          BOOK A FREE AUDIT →
        </Button>
        <p className="font-mono text-[11px] tracking-[2px] text-mid mt-6 uppercase">
          No commitment. No sales pitch. Just the answer.
        </p>
      </div>
    </section>
  )
}
