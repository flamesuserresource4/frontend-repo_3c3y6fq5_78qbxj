export default function Process() {
  const steps = [
    { step: '1', title: 'Brief', desc: 'Share your video, target audience, and references.' },
    { step: '2', title: 'Concepts', desc: 'We craft 2-3 strong directions to choose from.' },
    { step: '3', title: 'Refine', desc: 'Iterate quickly with data-backed adjustments.' },
    { step: '4', title: 'Deliver', desc: 'Final exports in all required sizes and formats.' },
  ]

  return (
    <section id="process" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold">{s.step}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
