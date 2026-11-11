import EmailService from '@/components/EmailService';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const links = [
  { label: 'Email', value: 'kumarguptarohit2005@gmail.com', href: 'mailto:kumarguptarohit2005@gmail.com', icon: <FiMail /> },
  { label: 'WhatsApp', value: '+91 6201819104', href: 'https://wa.me/916201819104', icon: <FaWhatsapp /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/rohit-kumar', href: 'https://www.linkedin.com/in/rohit-kumar-4a170328a/', icon: <FiLinkedin /> },
  { label: 'GitHub', value: 'github.com/RohitKumar495-hub', href: 'https://github.com/RohitKumar495-hub', icon: <FiGithub /> },
];

export default function ContactPage() {
  return (
    <section className="page-section pb-16">
      <span className="eyebrow">Get in touch</span>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Have a project or <span className="text-[var(--accent)]">opportunity?</span></h1>
      <p className="muted mt-4 max-w-2xl leading-7">I&apos;m open to discussing frontend and full-stack developer opportunities, collaborations and interesting product ideas. Feel free to reach out.</p>
      <div className="mt-9 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="space-y-4">
          {links.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            className="surface-card flex items-center gap-4 p-5 transition hover:border-[var(--accent)]/60">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-xl text-[var(--accent)]">{item.icon}</span>
            <span className="min-w-0"><span className="block text-xs uppercase tracking-wider text-[var(--muted)]">{item.label}</span><span className="mt-1 block break-all text-sm font-semibold">{item.value}</span></span>
          </a>)}
          <div className="surface-card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-xl text-[var(--accent)]"><FiMapPin /></span>
            <span><span className="block text-xs uppercase tracking-wider text-[var(--muted)]">Location</span><span className="mt-1 block text-sm font-semibold">Kolkata, India</span></span>
          </div>
        </div>
        <div className="surface-card p-3 sm:p-5"><EmailService /></div>
      </div>
    </section>
  );
}
