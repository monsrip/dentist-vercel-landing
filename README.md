# Lumina Dental Studio — Next.js Landing Page

A responsive, Vercel-ready dentist landing page built with **Next.js 16.3.3 + React 19** and zero third-party animation/UI libraries.

## Included

- Advanced responsive hero with floating glass cards and custom CSS illustration
- Sticky animated navigation + mobile menu
- Services/treatments grid
- Digital dentistry / 3D scan concept section
- First-visit process timeline
- Interactive before/after smile comparison
- Dentist/team cards
- Patient testimonial section with publishing disclaimer
- FAQ accordion
- Appointment request form
- Next.js API route for form validation
- Floating WhatsApp CTA
- SEO/Open Graph metadata
- Security-related response headers
- Reduced-motion accessibility support
- Mobile/tablet/desktop responsive layouts
- No external images, fonts or UI packages required

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1 — GitHub
1. Push this folder to a GitHub repository.
2. Log in to Vercel.
3. Click **Add New → Project**.
4. Import the GitHub repository.
5. Vercel detects Next.js automatically.
6. Click **Deploy**.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Replace before going live

Search the project for these sample values:

- `Lumina Dental Studio`
- `+91 98765 43210`
- `919876543210`
- `24 Wellness Avenue, Your City, India`
- `hello@luminadental.example`
- `your-dental-clinic.vercel.app`
- Sample dentist names/credentials
- Sample testimonials/rating

## Appointment form

`app/api/appointments/route.js` currently **validates the form and returns a reference number only**. It intentionally does not save patient information.

For production, connect the route to whichever workflow you use, for example:

- Clinic CRM
- Email provider
- Database
- WhatsApp Business workflow
- Appointment scheduling system

Because medical/appointment information can be sensitive, implement only the data collection you actually need and follow the privacy/security requirements applicable to the clinic.

## Main files

- `app/page.js` — landing page sections/content
- `app/globals.css` — complete design, responsive system and animation
- `components/InteractiveUI.js` — mobile nav, reveal animation, FAQ, slider and form
- `components/Icons.js` — inline SVG icons
- `app/api/appointments/route.js` — appointment request API route
- `app/layout.js` — metadata and global layout
