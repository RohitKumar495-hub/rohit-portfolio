import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa6';
import { FiArrowUpRight, FiBriefcase, FiDownload, FiMapPin } from 'react-icons/fi';

const groups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'BootStrap', 'CSS3', 'Tailwind CSS', 'Redux Toolkit'] },
  { title: 'Backend & data', items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase'] },
  { title: 'Tools & workflow', items: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code'] },
];

const experience = [
  { role: 'Analyst Trainee – Service Desk', company: 'Cognizant', period: 'Aug 2026 – Present', detail: 'Supporting users with IT issues involving laptops, Wi-Fi, authentication and troubleshooting. Working within service processes and collaborating to resolve technical incidents.' },
  { role: 'Software Developer Engineer 1', company: 'IdsPay', period: 'Feb 2026 – Apr 2026', detail: 'Worked on web application features and frontend/backend integration. Add specific technologies and measurable contributions here if you want to make this entry more detailed.' },
  { role: 'React Developer Intern', company: 'CollegePur', period: 'Apr 2025 – Jul 2025', detail: 'Developed and maintained React components, collaborated with teammates and contributed to user-facing application features.' },
];

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="page-section">
        <span className="eyebrow">A little about me</span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Developer mindset.<br /><span className="text-[var(--accent)]">Practical solutions.</span></h1>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-5 text-[var(--muted)] leading-7">
            <p>I&apos;m Rohit Kumar, a BCA graduate from Sarala Birla University with a 9.09 CGPA. I build responsive web applications and enjoy working across the frontend and backend.</p>
            <p>My primary toolkit includes React, Next.js, TypeScript and the MERN stack. Through academic, internship and personal projects, I&apos;ve worked on user interfaces, API integration, application state, authentication flows and database-backed features.</p>
            <p>I&apos;m continuously improving my engineering fundamentals and looking for opportunities where I can contribute to real products, learn from experienced teams and grow as a developer.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/R_Resume.pdf" download className="primary-button">Download resume <FiDownload /></a>
              <Link href="/contact" className="secondary-button">Contact me <FiArrowUpRight /></Link>
            </div>
          </div>
          <div className="surface-card grid content-center gap-5 p-6">
            <div className="flex items-center gap-3"><FaGraduationCap className="text-2xl text-[var(--accent)]" /><div><p className="text-xs uppercase tracking-wider text-[var(--muted)]">Education</p><p className="font-semibold">BCA · Sarala Birla University</p><p className="text-sm text-[var(--muted)]">CGPA 9.09</p></div></div>
            <div className="flex items-center gap-3"><FiMapPin className="text-2xl text-[var(--accent)]" /><div><p className="text-xs uppercase tracking-wider text-[var(--muted)]">Based in</p><p className="font-semibold">Kolkata, India</p></div></div>
            <div className="flex items-center gap-3"><FiBriefcase className="text-2xl text-[var(--accent)]" /><div><p className="text-xs uppercase tracking-wider text-[var(--muted)]">Career focus</p><p className="font-semibold">Frontend & Full-Stack Development</p></div></div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <h2 className="section-kicker">Technical skills</h2>
        <p className="muted mt-2 text-sm">Grouped by how I use them in projects — without arbitrary skill percentages.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {groups.map((group) => <div key={group.title} className="surface-card p-5"><h3 className="text-lg font-bold">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="tag">{item}</span>)}</div></div>)}
        </div>
      </section>

      <section className="pb-12">
        <h2 className="section-kicker">Experience</h2>
        <p className="muted mt-2 text-sm">A snapshot of my professional journey.</p>
        <div className="mt-6 space-y-4">
          {experience.map((item) => <article key={item.company} className="surface-card relative p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">{item.period}</p><h3 className="mt-2 text-lg font-bold">{item.role}</h3><p className="mt-1 text-sm font-semibold text-[#b6d8cc]">{item.company}</p></div><span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)] sm:inline-flex">Experience</span></div>
            <p className="muted mt-4 max-w-3xl text-sm leading-6">{item.detail}</p>
          </article>)}
        </div>
      </section>

      <section className="pb-8">
        <h2 className="section-kicker">Education</h2>
        <div className="surface-card mt-6 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">2023 – 2026</p>
          <h3 className="mt-2 text-lg font-bold">Bachelor of Computer Applications (BCA)</h3>
          <p className="mt-1 text-sm text-[#b6d8cc]">Sarala Birla University, Ranchi</p>
          <p className="muted mt-3 text-sm">Graduated with a 9.09 CGPA, building a foundation in computer science, programming and application development.</p>
        </div>
      </section>
    </div>
  );
}
