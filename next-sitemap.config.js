/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://naveen17.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://naveen17.vercel.app/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority based on path
    const customPriority = {
      '/': 1.0,
      '/resume': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    
    // Add section anchors
    const sections = ['#about', '#projects', '#skills', '#experience', '#contact'];
    sections.forEach(section => {
      result.push({
        loc: section,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
