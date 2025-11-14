import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide mb-4">Thumbnail Specialists</span>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Thumbnails that stop the scroll
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            We design high-converting thumbnails for YouTube and social platforms. Clean, modern, and engineered to perform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
              Get a Free Concept
            </a>
            <a href="#work" className="inline-flex items-center rounded-md border border-white/30 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
              See Our Work
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-left">
            <div>
              <p className="text-3xl font-bold">1,200+</p>
              <p className="text-white/70 text-sm">Thumbnails shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold">35%</p>
              <p className="text-white/70 text-sm">Avg. CTR uplift</p>
            </div>
            <div>
              <p className="text-3xl font-bold">48h</p>
              <p className="text-white/70 text-sm">Turnaround time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
