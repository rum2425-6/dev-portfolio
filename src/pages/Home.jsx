import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "../components/common/Container";
import MagneticButton from "../components/common/MagneticButton";
import TechMarquee from "../components/sections/TechMarquee";
import ParticleField from "../components/three/ParticleField";
import { profile, stats } from "../data/portfolio";
import useTyping from "../hooks/useTyping";
import profileImage from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Backend Developer",
];

export default function Home() {
  const typed = useTyping(roles);

  console.log(profileImage);
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
        <ParticleField />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
            >
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-cyan-300">
                Available for entry-level Software Engineer roles
              </div>

              <h1 className="font-display max-w-5xl text-5xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
                Hi, I’m <span className="gradient-text">Sumit Kumar Gupta</span>
              </h1>

              <div className="mt-6 h-9">
                <span className="font-mono text-lg text-slate-300 sm:text-xl md:text-2xl">
                  {typed}
                  <span className="animate-pulse text-cyan-300">|</span>
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                {profile.summary}
              </p>

              <div className="mt-9 flex w-full flex-col flex-wrap items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
                <MagneticButton className="w-full sm:w-auto">
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-cyan-400/30 sm:w-auto"
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                </MagneticButton>

                <Link to="/projects" className="w-full sm:w-auto">
                  <MagneticButton>
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/40 hover:text-cyan-300 sm:w-auto">
                      View Projects
                      <FaArrowRight />
                    </span>
                  </MagneticButton>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <MagneticButton>
                    <span className="inline-flex w-full items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 px-7 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20 sm:w-auto">
                      Hire Me
                    </span>
                  </MagneticButton>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:col-span-5 lg:justify-end"
            >
              <div className="relative aspect-square w-[280px] sm:w-[340px] md:w-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-30 blur-3xl" />

                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glow-border relative rounded-full p-1"
                >
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="relative z-10 h-full w-full rounded-full border-4 border-[#030014] object-cover"
                  />
                </motion.div>

                <div className="absolute -left-4 top-10 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm backdrop-blur-xl">
                  ⚛️ React.js
                </div>

                <div className="absolute -right-4 top-1/2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm backdrop-blur-xl">
                  🟢 Node.js
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm backdrop-blur-xl">
                  🚀 MERN Stack
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="gsap-reveal rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-xl"
              >
                <h3 className="font-display text-3xl font-bold">
                  <span className="gradient-text">{item.value}+</span>
                </h3>

                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="font-mono text-xs text-slate-500">scroll</span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-2 w-1 rounded-full bg-cyan-300"
            />
          </div>
        </div>
      </section>

      <TechMarquee />
    </>
  );
}
