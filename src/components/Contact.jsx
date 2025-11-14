import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start a project</h2>
        <p className="text-white/70 mb-8">Tell us about your channel and goals. We’ll reply with ideas and a quote.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none" />
          </div>
          <textarea name="message" rows="5" required placeholder="What do you need?" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none" />
          <button className="inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">Send inquiry</button>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
