const steps = [
  {
    number: '01',
    title: 'AUDIT',
    body: '30-min call. We identify the exact process to automate first. No homework for you. Just answers.',
  },
  {
    number: '02',
    title: 'BUILD',
    body: 'We build your first agent in 2 weeks. No vague roadmaps. No surprises. You see progress daily.',
  },
  {
    number: '03',
    title: 'DEPLOY',
    body: 'Live in 30 days. You see results before month 2 begins. Then we optimise. Then we do it again.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-black border-t-2 border-black text-white">
      <div className="max-w-[1200px] mx-auto px-10 md:px-16 py-16">
        <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12 text-white">
          HOW IT WORKS.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-gray">
          {steps.map((step) => (
            <div key={step.number} className="border-b-2 border-r-2 border-gray p-8">
              <p className="font-mono text-yellow text-[11px] tracking-[3px] mb-4">{step.number}</p>
              <h3 className="font-display text-[36px] tracking-[3px] text-white mb-4">{step.title}</h3>
              <p className="font-body text-[15px] text-gray leading-[1.7]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
