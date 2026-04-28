import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProofStrip } from '@/components/sections/ProofStrip'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { Products } from '@/components/sections/Products'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Results } from '@/components/sections/Results'
import { FinalCta } from '@/components/sections/FinalCta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemStatement />
        <Products />
        <HowItWorks />
        <Results />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
