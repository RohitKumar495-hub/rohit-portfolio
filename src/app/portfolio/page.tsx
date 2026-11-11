'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  { title: 'Daily Drop', category: 'Full-stack', image: '/dailydrop.png', link: 'https://daily-drop-full-stack-2i94.vercel.app/', github: 'https://github.com/RohitKumar495-hub/Daily-Drop-Full-Stack', description: 'An e-commerce web app for daily essentials with user authentication, cart management, an admin portal and online payments.', tech: ['React', 'Tailwind CSS', 'Redux', 'Node.js', 'MongoDB', 'Stripe'] },
  { title: 'ConnectU', category: 'Full-stack', image: '/connectU.png', link: 'https://connect-u-vert.vercel.app', github: 'https://github.com/RohitKumar495-hub/connectU', description: 'A real-time chat application with user authentication and private and group conversations.', tech: ['Next.js', 'Node.js', 'Socket.io', 'MongoDB'] },
  { title: 'Invoice Flow', category: 'Full-stack', image: '/invoice.png', link: 'https://invoice-flow-six-rho.vercel.app/', github: 'https://github.com/RohitKumar495-hub/InvoiceFlow', description: 'A responsive invoice management app for creating, managing and tracking invoices.', tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'MongoDB'] },
  { title: 'SOSS Platform', category: 'Full-stack', image: '/soss.png', link: 'https://soss-rust.vercel.app/user/home', github: 'https://github.com/RohitKumar495-hub', description: 'A student-focused platform with mentorship, reviews and academic resources.', tech: ['Next.js', 'Node.js', 'Redux', 'Firebase'] },
  { title: 'Routine App', category: 'Frontend', image: '/routine.png', link: 'https://routine-app-gold.vercel.app/', github: 'https://github.com/RohitKumar495-hub/Routine-app', description: 'A routine and task management app for planning daily activities and tracking tasks.', tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'] },
  { title: 'Portfolio', category: 'Frontend', image: '/portfolio.png', link: 'https://rohit-updated-portfolio.vercel.app/', github: 'https://github.com/RohitKumar495-hub/rohit-portfolio', description: 'My personal portfolio, being updated to present my work and development experience.', tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'] },
];

const filters = ['All', 'Full-stack', 'Frontend'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="page-section pb-16">
      <div className="mb-8">
        <span className="eyebrow">Selected work</span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Projects & <span className="text-[var(--accent)]">experiments.</span></h1>
        <p className="muted mt-4 max-w-2xl leading-7">A selection of applications I&apos;ve built to explore product ideas, solve practical problems and strengthen my development skills.</p>
      </div>

      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${filter === item ? 'border-[var(--accent)] bg-[var(--accent)] text-[#111916]' : 'border-white/15 bg-white/[.03] text-[#d5e0dc] hover:border-[var(--accent)]'}`}>{item}</button>)}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => <article key={project.title} className="surface-card overflow-hidden transition hover:-translate-y-1 hover:border-[var(--accent)]/50">
          <Link href={project.link} target="_blank" rel="noreferrer" className="block overflow-hidden bg-[#10221e]">
            <Image src={project.image} alt={`${project.title} screenshot`} width={900} height={560} className="h-56 w-full object-cover transition duration-500 hover:scale-[1.025] sm:h-64" />
          </Link>
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4"><div><span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{project.category}</span><h2 className="mt-1 text-xl font-bold">{project.title}</h2></div><Link href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="rounded-lg border border-white/15 p-2 text-[var(--accent)] hover:border-[var(--accent)]"><FiExternalLink /></Link></div>
            <p className="muted mt-3 min-h-[68px] text-sm leading-6">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
              <Link href={project.link} target="_blank" rel="noreferrer" className="primary-button !min-h-10 !rounded-lg !px-4 !text-sm">Live demo <FiArrowUpRight /></Link>
              <Link href={project.github} target="_blank" rel="noreferrer" className="secondary-button !min-h-10 !rounded-lg !px-4 !text-sm"><FiGithub /> GitHub profile</Link>
            </div>
          </div>
        </article>)}
      </div>
    </section>
  );
}
