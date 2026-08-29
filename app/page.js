import { Icon } from '@/components/Icons';
import { AppointmentForm, BeforeAfter, FAQ, HeaderNav, ScrollReveal } from '@/components/InteractiveUI';

const services = [
  { icon: 'sparkles', title: 'Cosmetic Dentistry', text: 'Thoughtful smile improvements including whitening, bonding and veneers.', tag: 'Smile design' },
  { icon: 'implant', title: 'Dental Implants', text: 'Restore missing teeth with carefully planned, long-term replacement options.', tag: 'Restore confidence' },
  { icon: 'braces', title: 'Clear Aligners', text: 'Discreet orthodontic treatment designed to gradually straighten your smile.', tag: 'Modern orthodontics' },
  { icon: 'shield', title: 'Preventive Care', text: 'Routine exams, professional cleaning and practical home-care guidance.', tag: 'Stay ahead' },
  { icon: 'child', title: 'Family Dentistry', text: 'Comfort-focused dental care for children, adults and older family members.', tag: 'All ages' },
  { icon: 'scan', title: 'Digital Dentistry', text: 'Modern imaging and digital workflows for clearer planning and communication.', tag: 'Precision first' }
];

const testimonials = [
  { name: 'Riya Sen', role: 'Clear aligner patient', text: 'The clinic feels calm from the moment you walk in. Every step was explained clearly and I never felt rushed.', initials: 'RS' },
  { name: 'Arjun Mehta', role: 'Implant patient', text: 'Professional, organized and genuinely patient. The digital scan helped me understand the treatment before deciding.', initials: 'AM' },
  { name: 'Sneha Kapoor', role: 'Family dentistry', text: 'My daughter was nervous, but the team made the visit easy. We now book our whole family here.', initials: 'SK' }
];

const treatmentPlans = [
  { number: '01', title: 'A healthier foundation', meta: 'PREVENTIVE PLAN', text: 'Comprehensive examination, gum-health screening, professional cleaning and a personalised recall schedule.', items: ['60-minute first visit', 'Digital records', 'Home-care coaching'] },
  { number: '02', title: 'Restore function', meta: 'RESTORATIVE PLAN', text: 'Conservative solutions for damaged or missing teeth, planned around long-term stability and natural appearance.', items: ['Crowns & onlays', 'Implant planning', 'Bite rehabilitation'] },
  { number: '03', title: 'Refine your smile', meta: 'COSMETIC PLAN', text: 'A considered combination of whitening, alignment and minimally invasive treatments—never a one-size-fits-all makeover.', items: ['Digital smile preview', 'Clear aligners', 'Bonding & veneers'] }
];

export default function Home() {
  return (
    <main id="top">
      <ScrollReveal />
      <div className="noise" />
      <HeaderNav />

      <section className="hero section-pad">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span className="pulse-dot" /> Accepting new patients · Mon–Sat</div>
            <h1>Modern dentistry.<br /><span>Calmly delivered.</span></h1>
            <p className="hero-lead">Comfort-first dental care, digital precision and treatment plans built around the way you actually live.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#appointment">Book your first visit <Icon name="arrow" size={19} /></a>
              <a className="btn btn-ghost" href="tel:+919876543210"><span className="round-icon"><Icon name="phone" size={18} /></span> Call the clinic</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span>RS</span><span>AM</span><span>SK</span><span>+</span></div>
              <div><div className="stars">★★★★★</div><strong>4.9 patient rating</strong><small>Sample social proof — replace with verified clinic reviews.</small></div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="portrait-card photo-card">
              <img src="/images/lumina-dentist-hero.png" alt="Dentist in a modern Lumina treatment room" />
              <div className="photo-shade" />
              <div className="portrait-topline"><span>Private, unrushed care</span><span className="mini-brand"><Icon name="tooth" size={18} /></span></div>
              <div className="portrait-caption"><span>LEAD DENTIST</span><strong>Dr. Maya Kapoor</strong><small>Restorative & cosmetic dentistry</small></div>
            </div>
            <div className="float-card card-rating"><span className="icon-shell"><Icon name="star" size={16} /></span><div><strong>4.9 / 5</strong><small>from 240+ patient visits</small></div></div>
            <div className="float-card card-availability"><span className="icon-shell"><Icon name="calendar" size={17} /></span><div><small>Next opening</small><strong>Tomorrow · 11:30</strong></div></div>
            <div className="float-card card-scan"><span className="scan-ring"><Icon name="scan" size={19} /></span><div><strong>Digital scans</strong><small>Comfortable & precise</small></div></div>
          </div>
        </div>

        <div className="container trust-strip" data-reveal>
          <div><Icon name="shield" size={20} /><span><strong>Sterilization-first</strong><small>Safety-led protocols</small></span></div>
          <div><Icon name="scan" size={20} /><span><strong>Digital planning</strong><small>See before you decide</small></span></div>
          <div><Icon name="clock" size={20} /><span><strong>On-time visits</strong><small>Respect for your schedule</small></span></div>
          <div><Icon name="sparkles" size={20} /><span><strong>Comfort focused</strong><small>Clear, calm communication</small></span></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="container">
          <div className="section-head" data-reveal>
            <div><p className="kicker">CARE FOR EVERY SMILE</p><h2>Everything your smile needs,<br />under one roof.</h2></div>
            <p>From preventive visits to complex restorative work, our approach combines clinical detail with a calm, straightforward patient experience.</p>
          </div>
          <div className="service-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service.title} data-reveal style={{ '--delay': `${i * 65}ms` }}>
                <div className="service-icon"><Icon name={service.icon} size={28} /></div>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3><p>{service.text}</p>
                <a href="#appointment">Explore treatment <Icon name="arrow" size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="why-us">
        <div className="container experience-grid">
          <div className="experience-copy" data-reveal>
            <p className="kicker">DENTISTRY, REIMAGINED</p>
            <h2>Less uncertainty.<br />More clarity at every step.</h2>
            <p>We use modern tools to make appointments easier to understand — from the first scan to your final review.</p>
            <div className="feature-list">
              <div><span><Icon name="check" size={17} /></span><p><strong>Visual treatment explanations</strong><small>See what your dentist sees with digital images and scans.</small></p></div>
              <div><span><Icon name="check" size={17} /></span><p><strong>Options before decisions</strong><small>Understand alternatives, timelines and expected outcomes.</small></p></div>
              <div><span><Icon name="check" size={17} /></span><p><strong>Comfort-led appointments</strong><small>A slower, more considerate experience for anxious patients.</small></p></div>
            </div>
            <a className="text-link" href="#dentists">Meet your dental team <Icon name="arrow" size={17} /></a>
          </div>

          <div className="tech-canvas" data-reveal>
            <div className="tech-gridlines" />
            <div className="scan-window">
              <div className="scan-header"><span className="window-dots"><i /><i /><i /></span><span>3D SMILE SCAN</span><small>Live preview</small></div>
              <div className="tooth-model">
                <div className="arch top-arch">{Array.from({ length: 8 }).map((_, i) => <span key={i} />)}</div>
                <div className="arch bottom-arch">{Array.from({ length: 8 }).map((_, i) => <span key={i} />)}</div>
                <div className="scan-line" />
              </div>
              <div className="scan-metrics"><span><small>Occlusion</small><b>Aligned</b></span><span><small>Scan quality</small><b>98%</b></span><span><small>Capture</small><b>02:14</b></span></div>
            </div>
            <div className="tech-note note-one"><Icon name="scan" size={17} /><span>High-detail digital scan</span></div>
            <div className="tech-note note-two"><Icon name="sparkles" size={17} /><span>Visual smile planning</span></div>
          </div>
        </div>
      </section>

      <section className="plans section-pad">
        <div className="container">
          <div className="plans-top" data-reveal>
            <div><p className="kicker">CARE, PERSONALISED</p><h2>Not a menu of procedures.<br />A plan built around you.</h2></div>
            <p>Every recommendation starts with your health, priorities, timing and budget. We explain what is essential, what is optional and what can wait.</p>
          </div>
          <div className="plan-grid">
            {treatmentPlans.map((plan, i) => (
              <article className="plan-card" key={plan.number} data-reveal style={{ '--delay': `${i * 80}ms` }}>
                <div className="plan-index"><span>{plan.number}</span><small>{plan.meta}</small></div>
                <h3>{plan.title}</h3><p>{plan.text}</p>
                <ul>{plan.items.map(item => <li key={item}><Icon name="check" size={14} />{item}</li>)}</ul>
                <a href="#appointment">Discuss this plan <Icon name="arrow" size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="standards section-pad">
        <div className="container standards-shell">
          <div className="standards-copy" data-reveal>
            <p className="kicker">THE LUMINA STANDARD</p>
            <h2>Clinical detail you can see. Comfort you can feel.</h2>
            <p>Good dentistry is more than the final result. It is the quality of the diagnosis, the time allowed for questions and the consistency of every visit.</p>
            <a className="btn btn-light" href="#appointment">Plan a consultation <Icon name="arrow" size={17} /></a>
          </div>
          <div className="standards-data" data-reveal>
            <div><strong>60<sup>min</sup></strong><span>Reserved for every comprehensive new-patient examination</span></div>
            <div><strong>100<sup>%</sup></strong><span>Digital records for clearer diagnosis and progress tracking</span></div>
            <div><strong>1:1</strong><span>Direct treatment planning with your dedicated dentist</span></div>
            <div><strong>0</strong><span>Pressure to commit before you understand your options</span></div>
          </div>
        </div>
      </section>

      <section className="journey section-pad">
        <div className="container">
          <div className="section-head compact" data-reveal>
            <div><p className="kicker">YOUR FIRST VISIT</p><h2>Simple from hello<br />to treatment plan.</h2></div>
            <p>No confusing process. We keep each step visible so you know what happens next.</p>
          </div>
          <div className="steps">
            {[
              ['01', 'Tell us what matters', 'Share your goals, concerns and dental history.'],
              ['02', 'Complete examination', 'A focused clinical exam with digital diagnostics as needed.'],
              ['03', 'See your options', 'We explain findings and walk through appropriate treatment choices.'],
              ['04', 'Choose your pace', 'Book the next step when you are comfortable moving forward.']
            ].map(([n, t, d], i) => (
              <div className="step" key={n} data-reveal style={{ '--delay': `${i * 75}ms` }}><span>{n}</span><div className="step-line" /><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="smile-section section-pad">
        <div className="container smile-grid">
          <div className="smile-copy" data-reveal>
            <p className="kicker">SMILE PREVIEW</p><h2>Small changes can make a big difference.</h2>
            <p>Use this interactive comparison to present a cosmetic case study or treatment concept. The demo uses an illustration, so you can replace it later with consented patient photography.</p>
            <div className="mini-stats"><div><strong>01</strong><span>Personal plan</span></div><div><strong>02</strong><span>Preview options</span></div><div><strong>03</strong><span>Natural goal</span></div></div>
          </div>
          <div data-reveal><BeforeAfter /><p className="ba-disclaimer">Illustrative demo only — not a clinical result or treatment guarantee.</p></div>
        </div>
      </section>

      <section className="dentists section-pad" id="dentists">
        <div className="container">
          <div className="section-head" data-reveal>
            <div><p className="kicker">MEET THE TEAM</p><h2>Expert care without<br />the clinical coldness.</h2></div>
            <p>Replace these sample profiles with your clinic’s real dentists, registrations, qualifications and professional biographies.</p>
          </div>
          <div className="doctor-grid">
            <article className="doctor-card doctor-featured" data-reveal>
              <div className="doctor-photo doctor-photo-real"><img src="/images/lumina-dentist-hero.png" alt="Dr. Maya Kapoor in the Lumina clinic" /></div>
              <div className="doctor-info"><span>Principal dentist · Cosmetic & restorative</span><h3>Dr. Maya Kapoor</h3><p>BDS, MDS <em>· Sample credentials</em></p><blockquote>“The best care feels collaborative. You should leave knowing exactly what we found, what we recommend and why.”</blockquote><div className="doctor-tags"><b>Smile design</b><b>Restorative care</b><b>Digital dentistry</b><b>Family care</b></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="reviews section-pad" id="reviews">
        <div className="container">
          <div className="review-heading" data-reveal><div><p className="kicker">PATIENT STORIES</p><h2>Care people feel good about.</h2></div><div className="rating-block"><strong>4.9</strong><span><b>★★★★★</b><small>Sample rating display</small></span></div></div>
          <div className="review-grid">
            {testimonials.map((t, i) => (
              <article className="review-card" key={t.name} data-reveal style={{ '--delay': `${i * 80}ms` }}>
                <Icon name="quote" size={31} /><p>“{t.text}”</p><div className="reviewer"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role}</small></div></div>
              </article>
            ))}
          </div>
          <p className="review-note">These testimonials are sample content. Publish only genuine, permissioned reviews in production.</p>
        </div>
      </section>

      <section className="access section-pad">
        <div className="container access-grid">
          <div className="access-main" data-reveal>
            <p className="kicker">CARE THAT FITS REAL LIFE</p>
            <h2>Clear costs.<br />Flexible ways to begin.</h2>
            <p>Receive a written treatment plan before care begins, with transparent fees and sensible sequencing for multi-stage treatment.</p>
            <div className="access-points">
              <div><span><Icon name="check" size={16} /></span><p><strong>Written estimates</strong><small>Know the proposed investment before booking treatment.</small></p></div>
              <div><span><Icon name="check" size={16} /></span><p><strong>Phased treatment</strong><small>Prioritise urgent needs and schedule elective care at your pace.</small></p></div>
              <div><span><Icon name="check" size={16} /></span><p><strong>Payment options</strong><small>Ask the care coordinator about available payment arrangements.</small></p></div>
            </div>
          </div>
          <aside className="emergency-card" data-reveal>
            <div className="emergency-top"><span><Icon name="phone" size={20} /></span><small>URGENT DENTAL CARE</small></div>
            <h3>In pain today?</h3>
            <p>Call us for severe toothache, swelling, a broken tooth or a dental injury. We reserve limited priority appointments during clinic hours.</p>
            <a href="tel:+919876543210">+91 98765 43210 <Icon name="arrow" size={17} /></a>
            <div className="open-status"><i /> Clinic open today until 7:00 PM</div>
          </aside>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro" data-reveal><p className="kicker">COMMON QUESTIONS</p><h2>Good questions deserve clear answers.</h2><p>Can’t find what you need?</p><a href="tel:+919876543210"><Icon name="phone" size={17} /> Call +91 98765 43210</a></div>
          <div data-reveal><FAQ /></div>
        </div>
      </section>

      <section className="appointment section-pad" id="appointment">
        <div className="container appointment-shell">
          <div className="appointment-copy" data-reveal>
            <div className="eyebrow light"><span className="pulse-dot" /> New patient appointments</div>
            <h2>Ready for a calmer<br />dental experience?</h2>
            <p>Send your preferred date and treatment interest. The clinic can confirm a suitable appointment by phone or message.</p>
            <div className="clinic-details">
              <div><span><Icon name="location" size={20} /></span><p><strong>Lumina Dental Studio</strong><small>24 Wellness Avenue, Your City, India</small></p></div>
              <div><span><Icon name="clock" size={20} /></span><p><strong>Monday–Saturday</strong><small>9:00 AM – 7:00 PM</small></p></div>
              <div><span><Icon name="phone" size={20} /></span><p><strong>+91 98765 43210</strong><small>Emergency calls welcome during clinic hours</small></p></div>
            </div>
          </div>
          <div className="form-card" data-reveal><div className="form-card-head"><span>REQUEST A VISIT</span><small>We’ll confirm availability</small></div><AppointmentForm /></div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand"><a href="#top" className="brand inverted"><span className="brand-mark"><Icon name="tooth" size={25} /></span><span><strong>Lumina</strong><small>Dental Studio</small></span></a><p>Modern dentistry designed around comfort, clarity and long-term oral health.</p></div>
          <div><h4>Clinic</h4><a href="#services">Treatments</a><a href="#dentists">Our dentists</a><a href="#reviews">Patient stories</a><a href="#appointment">Book a visit</a></div>
          <div><h4>Popular care</h4><a href="#services">Dental implants</a><a href="#services">Clear aligners</a><a href="#services">Teeth whitening</a><a href="#services">Family dentistry</a></div>
          <div><h4>Contact</h4><p>24 Wellness Avenue<br />Your City, India</p><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:hello@luminadental.example">hello@luminadental.example</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Lumina Dental Studio. Demo website.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div></div>
      </footer>

      <a className="whatsapp" href="https://wa.me/919876543210?text=Hello%20Lumina%20Dental%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" aria-label="Book by WhatsApp"><Icon name="whatsapp" size={24} /><span>WhatsApp</span></a>
    </main>
  );
}
