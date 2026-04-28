const problems = [
  {
    title: 'MANUAL WORK',
    body: 'Processes that should take 5 minutes. Every. Single. Day. Your team deserves better.',
  },
  {
    title: 'LOST HOURS',
    body: 'Reporting that eats entire afternoons. Email chains nobody reads. Decisions delayed.',
  },
  {
    title: 'BROKEN TOOLS',
    body: 'Systems that don\'t talk to each other. Data copied by hand. Errors that cost you clients.',
  },
  {
    title: 'SLOW GROWTH',
    body: 'You\'re growing, but your ops aren\'t. Hiring more people to do what machines should do.',
  },
]

export function ProblemStatement() {
  return (
    <section className="bg-white border-t-2 border-black" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="px-10 md:px-16 py-16">
          <h2 className="font-display text-[64px] md:text-[80px] tracking-[3px] leading-none mb-12">
            YOUR TEAM IS{' '}
            <span className="bg-yellow px-2">WASTING TIME.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-black">
            {problems.map((p) => (
              <div key={p.title} className="border-b-2 border-r-2 border-black p-8">
                <p className="font-mono text-[11px] uppercase tracking-[3px] text-mid mb-3">{p.title}</p>
                <p className="font-body text-[15px] text-mid leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
