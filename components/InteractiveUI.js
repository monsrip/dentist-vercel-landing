'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icons';

export function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const sections = document.querySelectorAll('main > section, main > footer');
    sections.forEach((section, sectionIndex) => {
      section.classList.add('section-motion');
      section.style.setProperty('--section-order', sectionIndex);

      const staggered = section.querySelectorAll(
        ':scope > .container > *:not([data-reveal]), :scope > .container > [data-reveal]'
      );
      staggered.forEach((element, index) => {
        element.style.setProperty('--section-stagger', `${Math.min(index * 75, 300)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
  return null;
}

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Services', '#services'],
    ['Why us', '#why-us'],
    ['Dentists', '#dentists'],
    ['Reviews', '#reviews'],
    ['FAQ', '#faq']
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-wrap container">
        <a href="#top" className="brand" aria-label="Lumina Dental Studio home">
          <span className="brand-mark"><Icon name="tooth" size={25} /></span>
          <span><strong>Lumina</strong><small>Dental Studio</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href="tel:+919876543210"><Icon name="phone" size={18} /> +91 98765 43210</a>
          <a className="btn btn-primary btn-small" href="#appointment">Book a visit</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#appointment" className="btn btn-primary" onClick={() => setOpen(false)}>Book appointment</a>
      </div>
    </header>
  );
}

export function BeforeAfter() {
  const [value, setValue] = useState(52);
  return (
    <div className="before-after" style={{ '--position': `${value}%` }}>
      <div className="smile-scene smile-after" aria-label="Smile result illustration">
        <div className="ba-label">After</div>
        <div className="mouth mouth-after">
          <div className="lip top" /><div className="lip bottom" />
          <div className="teeth">
            {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
          </div>
        </div>
      </div>
      <div className="smile-scene smile-before">
        <div className="ba-label">Before</div>
        <div className="mouth mouth-before">
          <div className="lip top" /><div className="lip bottom" />
          <div className="teeth">
            {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
          </div>
        </div>
      </div>
      <div className="ba-divider"><span>↔</span></div>
      <input
        className="ba-range"
        type="range"
        min="10"
        max="90"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Compare before and after illustration"
      />
    </div>
  );
}

export function FAQ() {
  const faqs = [
    ['How often should I visit the dentist?', 'For many people, a routine check-up every six months is a useful baseline. Your dentist may recommend a different interval based on your oral health and treatment needs.'],
    ['Do you offer same-day emergency appointments?', 'We keep limited urgent-care slots available. Call the clinic directly for severe pain, swelling, a broken tooth or another time-sensitive dental concern.'],
    ['Is teeth whitening suitable for everyone?', 'Not always. Whitening works best on certain types of natural-tooth staining. We first assess your teeth and gums and discuss what result is realistic for you.'],
    ['Can I book for my child?', 'Yes. Our family dentistry appointments can include children, with a calm introduction to the clinic and age-appropriate preventive care.'],
    ['Do you provide EMI or payment plans?', 'This demo includes a flexible-payment section. Replace the sample payment information with your clinic’s actual financing, insurance or EMI policies before publishing.']
  ];

  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => (
        <div className={`faq-item ${open === i ? 'active' : ''}`} key={q}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span><span className="faq-plus">+</span>
          </button>
          <div className="faq-answer"><p>{a}</p></div>
        </div>
      ))}
    </div>
  );
}

export function AppointmentForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to submit request');
      setStatus('success');
      setMessage(`Request received. Reference: ${data.reference}`);
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please call the clinic.');
    }
  }

  return (
    <form className="appointment-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input name="name" type="text" placeholder="Your full name" required minLength={2} /></label>
        <label>Phone number<input name="phone" type="tel" placeholder="+91 98765 43210" required minLength={8} /></label>
      </div>
      <div className="form-row">
        <label>Service
          <select name="service" defaultValue="General check-up" required>
            <option>General check-up</option><option>Teeth cleaning</option><option>Dental implants</option><option>Clear aligners</option><option>Cosmetic dentistry</option><option>Emergency dentistry</option>
          </select>
        </label>
        <label>Preferred date<input name="date" type="date" required /></label>
      </div>
      <label>Message <textarea name="message" rows="4" placeholder="Tell us how we can help (optional)" /></label>
      <button className="btn btn-dark form-submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : <>Request appointment <Icon name="arrow" size={18} /></>}
      </button>
      {message && <p className={`form-message ${status}`}>{message}</p>}
      <p className="form-note">Demo form: the included API validates the request but does not store patient data. Connect your own CRM/email/database before production use.</p>
    </form>
  );
}
