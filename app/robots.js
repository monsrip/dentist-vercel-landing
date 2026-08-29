export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://your-dental-clinic.vercel.app/sitemap.xml'
  };
}
