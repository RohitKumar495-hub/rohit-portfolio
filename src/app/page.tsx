'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiBriefcase, FiCode, FiExternalLink, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaGraduationCap, FaRocket } from 'react-icons/fa6';
import { FaWhatsapp, FaAws } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';


const skills = [
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'Bootstrap', icon: 'bootstrap/bootstrap-plain.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  { name: 'Express.js', icon: 'express/express-original.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', icon: 'redux/redux-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', icon: 'github/github-original.svg' },
  { name: 'HTML5', icon: 'html5/html5-original.svg' },
  { name: 'CSS3', icon: 'css3/css3-original.svg' },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Render', icon: <SiRender /> },
  { name: 'Vercel', icon: 'vercel/vercel-original.svg' }
]

const projects = [
  { title: 'Daily Drop', description: 'E-commerce platform for daily essentials with product browsing, cart management, admin tools and online payments.', image: '/dailydrop.png', href: 'https://daily-drop-full-stack-2i94.vercel.app/', stack: ['Next.js', 'TypeScript', 'Redux', 'Stripe'] },
  { title: 'ConnectU', description: 'A real-time chat application with authentication and private and group conversations.', image: '/connectU.png', href: 'https://connect-u-vert.vercel.app', stack: ['Next.js', 'Node.js', 'Socket.io'] },
  { title: 'SOSS Platform', description: 'A student-focused platform bringing academic support, mentorship and campus resources together.', image: '/soss.png', href: 'https://soss-rust.vercel.app/user/home', stack: ['Next.js', 'Node.js', 'MongoDB'] },
];

export default function Home() {
  return (
    <div className="pb-12">

      <section className="hero-container relative overflow-hidden rounded-3xl border border-white/10 px-6 py-12 sm:px-10 sm:py-16 lg:px-14">

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .45 }}
          >
            <span className="eyebrow">Full-Stack Developer</span>

            <h1 className="mt-6 max-w-3xl text-xl font-extrabold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Building useful web experiences with{" "}
              <span className="text-[var(--accent)]">
                modern technologies.
              </span>
            </h1>

            <p className="muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
              I&apos;m Rohit Kumar, a developer focused on React, Next.js,
              TypeScript and the MERN stack. I enjoy turning ideas into
              responsive interfaces and practical full-stack applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="primary-button">
                Explore projects <FiArrowUpRight />
              </Link>

              <Link href="/contact" className="secondary-button">
                <FiMail /> Contact me
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                aria-label="GitHub"
                href="https://github.com/RohitKumar495-hub"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FiGithub />
              </a>

              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rohit-kumar-4a170328a/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FiLinkedin />
              </a>

              <a
                aria-label="Email"
                href="mailto:kumarguptarohit2005@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FiMail />
              </a>

              <a
                aria-label="WhatsApp"
                href="https://wa.me/916201819104"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Developer code card */}
        <div className="relative z-10 mt-10 hidden max-w-[440px] lg:absolute lg:bottom-14 lg:right-10 lg:mt-0 lg:block">
          <div className="rounded-2xl border border-white/15 bg-[#071512]/85 p-5 shadow-2xl shadow-black/30">
            <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff765f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd4a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#39c982]" />
              <span className="ml-2 text-xs text-[#91aaa0]">
                rohit.dev / profile.ts
              </span>
            </div>

            <pre className="overflow-hidden text-sm leading-7 text-[#d8e9e2]">
              <code>
                <span className="text-[#ffad70]">const</span> developer = {"{"}
                {'\n'}  name: <span className="text-[#9be6b5]">&quot;Rohit Kumar&quot;</span>,
                {'\n'}  focus: <span className="text-[#9be6b5]">&quot;Web Development&quot;</span>,
                {'\n'}  stack: [<span className="text-[#9be6b5]">&quot;React&quot;</span>, <span className="text-[#9be6b5]">&quot;Next.js&quot;</span>,
                {'\n'}    <span className="text-[#9be6b5]">&quot;TypeScript&quot;</span>, <span className="text-[#9be6b5]">&quot;Node.js&quot;</span>],
                {'\n'}  mindset: <span className="text-[#9be6b5]">&quot;Always learning&quot;</span>
                {'\n'}{"}"};
              </code>
            </pre>
          </div>
        </div>

      </section>


      <section className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-[#0b1c19] p-4 sm:grid-cols-4 sm:p-5">
        {[
          { icon: <FiCode />, value: '6+', label: 'Projects' },
          { icon: <FiBriefcase />, value: '3', label: 'Work experiences' },
          { icon: <FaGraduationCap />, value: '9.09', label: 'BCA CGPA' },
          { icon: <FaRocket />, value: '1', label: 'Internships' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 border-white/10 px-2 py-2 sm:border-r last:border-0">
            <span className="text-2xl text-[var(--accent)]">{item.icon}</span>
            <div><p className="text-2xl font-extrabold">{item.value}</p><p className="text-xs text-[var(--muted)] sm:text-sm">{item.label}</p></div>
          </div>
        ))}
      </section>


      <section className="page-section">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="section-kicker">Technical toolkit</h2>
            <p className="muted mt-2 text-sm">
              Technologies I use to build real-world applications.
            </p>
          </div>
          <Link
            href="/about"
            className="hidden items-center gap-1 text-sm font-semibold text-[var(--accent)] sm:flex"
          >
            All skills <FiArrowUpRight />
          </Link>
        </div>

<div className="tech-marquee">
  <div className="tech-marquee-track">
    {[...skills, ...skills].map((skill, index) => (
      <div
        key={`${skill.name}-${index}`}
        className="tech-item surface-card"
      >
        <span className="tech-logo flex items-center justify-center">
          {typeof skill.icon === 'string' ? (
            <img
              src={
                skill.icon.startsWith('http')
                  ? skill.icon
                  : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`
              }
              alt={`${skill.name} logo`}
              className="h-9 w-9 object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-3xl">{skill.icon}</span>
          )}
        </span>

        <span>{skill.name}</span>
      </div>
    ))}
  </div>
</div>
      </section>


      <section className="pb-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div><h2 className="section-kicker">Featured projects</h2><p className="muted mt-2 text-sm">A few projects that demonstrate my approach to building for the web.</p></div>
          <Link href="/portfolio" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--accent)]">View all <FiArrowUpRight /></Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => <article key={project.title} className="surface-card overflow-hidden transition hover:-translate-y-1 hover:border-[var(--accent)]/50">
            <Link href={project.href} target="_blank" rel="noreferrer" className="block overflow-hidden bg-[#10221e]">
              <Image src={project.image} alt={`${project.title} project preview`} width={700} height={420} className="h-48 w-full object-cover transition duration-500 hover:scale-[1.03]" />
            </Link>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3"><h3 className="text-lg font-bold">{project.title}</h3><Link href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="text-[var(--accent)]"><FiExternalLink /></Link></div>
              <p className="muted mt-2 min-h-[60px] text-sm leading-6">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div><h2 className="text-2xl font-extrabold">Let&apos;s build something useful.</h2><p className="muted mt-2 text-sm">Open to developer opportunities and interesting collaborations.</p></div>
        <Link href="/contact" className="primary-button shrink-0">Get in touch <FiArrowDownRight /></Link>
      </section>
    </div>
  );
}
