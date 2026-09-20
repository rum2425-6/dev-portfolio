import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from 'react-icons/fa'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { profile } from '../data/portfolio'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    // EmailJS handles delivery while the local status controls button feedback.
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        {
          publicKey: 'YOUR_PUBLIC_KEY',
        },
      )

      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3500)
  }

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-lg focus:shadow-cyan-400/10'

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Contact"
          title="Let’s Build Something"
          highlight="Together"
          description="Have an opportunity, project, internship, or collaboration idea? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <GlassCard className="gsap-reveal p-6 md:p-8 lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="user_name"
                  required
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className={inputClass}
                />

                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className={inputClass}
                />
              </div>

              <input
                name="subject"
                required
                placeholder="Subject"
                aria-label="Subject"
                className={inputClass}
              />

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Your Message"
                aria-label="Your Message"
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-cyan-400/30 disabled:opacity-60"
              >
                <FaPaperPlane />

                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                    ? 'Message Sent Successfully'
                    : status === 'error'
                      ? 'Failed. Try Again'
                      : 'Send Message'}
              </button>
            </form>
          </GlassCard>

          <div className="space-y-6 lg:col-span-5">
            <GlassCard className="gsap-reveal p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-white">Contact Info</h3>

              <div className="mt-6 space-y-5 text-sm text-slate-400">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-300" />
                  {profile.email}
                </p>

                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-cyan-300" />
                  {profile.phone}
                </p>

                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  {profile.location}
                </p>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </GlassCard>

            <GlassCard className="gsap-reveal overflow-hidden">
              <iframe
                title="Kanpur Map"
                src="https://maps.google.com/maps?q=Kanpur%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full grayscale invert-[0.9] hue-rotate-180"
                loading="lazy"
              />
            </GlassCard>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}