'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend } from 'react-icons/fi';

export default function EmailService() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || sending) return;
    setSending(true);
    const formData = new FormData(form.current);
    const templateParams = {
      title: formData.get('subject'),
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send('service_fooyh6w', 'template_pl0ne2s', templateParams, 'LkMkvFKOmlkML4B4f');
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch {
      toast.error('Could not send your message. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  const fieldClass = 'w-full rounded-xl border border-white/10 bg-[#071512] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#82968e] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10';

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-2 sm:p-3">
        <div><h2 className="text-xl font-bold">Send me a message</h2><p className="muted mt-1 text-sm">I&apos;ll get back to you as soon as I can.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-xs font-semibold text-[#c9d7d1]">YOUR NAME<input className={fieldClass} type="text" name="user_name" placeholder="Your name" required /></label>
          <label className="grid gap-2 text-xs font-semibold text-[#c9d7d1]">YOUR EMAIL<input className={fieldClass} type="email" name="user_email" placeholder="you@example.com" required /></label>
        </div>
        <label className="grid gap-2 text-xs font-semibold text-[#c9d7d1]">SUBJECT<input className={fieldClass} type="text" name="subject" placeholder="What would you like to discuss?" required /></label>
        <label className="grid gap-2 text-xs font-semibold text-[#c9d7d1]">MESSAGE<textarea className={`${fieldClass} resize-y`} name="message" rows={5} placeholder="Write your message..." required /></label>
        <button type="submit" disabled={sending} className="primary-button w-fit disabled:cursor-not-allowed disabled:opacity-60"><FiSend />{sending ? 'Sending...' : 'Send message'}</button>
      </form>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}
