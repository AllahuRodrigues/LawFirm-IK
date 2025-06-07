import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/'],
    },
    sitemap: 'https://ikadvogados.co.mz/sitemap.xml',
    host: 'https://ikadvogados.co.mz',
  }
} 