export default function Services() {
  const services = [
    {
      title: 'YouTube Thumbnails',
      desc: 'High-CTR designs optimized for click-through and brand consistency.',
      points: ['Research & concepts', 'Brand kit alignment', 'A/B test variants'],
    },
    {
      title: 'Short-form Covers',
      desc: 'Scroll-stopping covers for Shorts, Reels, and TikTok.',
      points: ['Platform-specific crops', 'Bold typography', 'Face-enhancement ready'],
    },
    {
      title: 'Channel Revamp',
      desc: 'Complete visual refresh across thumbnails and banners.',
      points: ['Style guide creation', 'Template system', 'Batch production'],
    },
  ]

  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-white/70 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc pl-5">
                {s.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
