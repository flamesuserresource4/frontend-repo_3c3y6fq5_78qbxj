export default function WorkGrid() {
  const items = [
    { title: 'Tech Review Channel', metric: '+42% CTR', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Gaming Highlights', metric: '+31% CTR', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Personal Brand', metric: '+28% CTR', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Finance Explainers', metric: '+36% CTR', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Podcast Channel', metric: '+22% CTR', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Shorts/TikTok', metric: '+19% CTR', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Recent Work</h2>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Start a project →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={item.img} alt="thumbnail work" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-white/70 text-sm">{item.metric}</p>
                </div>
                <span className="text-xs border border-white/20 rounded-md px-2 py-1 bg-white/10">Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
