import './globals.css';

export const metadata = {
  metadataBase: new URL('https://your-dental-clinic.vercel.app'),
  title: {
    default: 'Lumina Dental Studio | Modern Dentistry, Calmly Delivered',
    template: '%s | Lumina Dental Studio'
  },
  description:
    'A modern dental clinic landing page for preventive, cosmetic and restorative dentistry with convenient appointment booking.',
  keywords: [
    'dentist',
    'dental clinic',
    'teeth cleaning',
    'dental implants',
    'invisalign',
    'cosmetic dentistry'
  ],
  openGraph: {
    title: 'Lumina Dental Studio',
    description: 'Modern dentistry, designed around your comfort.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://your-dental-clinic.vercel.app'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7fbff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
