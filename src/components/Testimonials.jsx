export default function Testimonials() {
  const items = [
    { name: 'Ava – Tech Creator', quote: 'Our CTR jumped from 4.2% to 6.0% in a month. They just get what works.' },
    { name: 'Noah – Finance Channel', quote: 'Fast, consistent, and on-brand. Our uploads finally look cohesive.' },
    { name: 'Mia – Gaming Creator', quote: 'They turned rough ideas into thumbnails that pop. Huge difference.' },
  ]

  return (
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">What creators say</h2>
        <div className="space-y-6">
          {items.map((t, i) => (
            <blockquote key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg">“{t.quote}”</p>
              <footer className="mt-3 text-white/70 text-sm">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
