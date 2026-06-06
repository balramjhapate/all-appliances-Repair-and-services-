import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/landing/'],
      },
    ],
    sitemap: 'https://homerepairpro.in/sitemap.xml',
  };
}
