import { Button } from '@/components/ui/Button'
import { MonoLabel } from '@/components/ui/MonoLabel'

export function Hero() {
  return (
    <section className="bg-white px-10 md:px-16 pt-24 pb-28 max-w-[1200px] mx-auto">
      <div className="animate-fade-in">
        <MonoLabel className="block mb-6">AI AUTOMATION AGENCY — PRAGUE</MonoLabel>
      </div>
      <h1 className="font-display text-[72px] md:text-[100px] lg:text-[120px] tracking-[4px] leading-none mb-8 animate-fade-in">
        AI AGENTS THAT<br />
        <span className="bg-yellow px-2">ACTUALLY</span> WORK.
      </h1>
      <p className="font-body text-[17px] text-mid leading-[1.7] max-w-[480px] mb-10 animate-fade-in-delay">
        We automate the work your team hates doing. No long onboarding.
        No vague deliverables. Results in 30 days.
      </p>
      <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
        <Button variant="primary" href="#contact">BOOK A FREE AUDIT →</Button>
        <Button variant="ghost" href="#results">SEE RESULTS</Button>
      </div>
    </section>
  )
}
