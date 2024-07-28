import { products, blog } from '@/content';

const generateSitemapXml = hostname => {
    const currentDate = new Date().toISOString().split('T')[0];

    // TODO: think about how to generate these pages dynamically
    const pages = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/products', changefreq: 'weekly', priority: 0.8 },
        { url: '/blog', changefreq: 'weekly', priority: 0.7 },
        { url: '/about-us', changefreq: 'monthly', priority: 0.6 },
        { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
        { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
    ];

    // Add product pages
    products.items.forEach(product => {
        pages.push({
            url: product.href,
            changefreq: 'weekly',
            priority: 0.8,
        });
    });

    // Add blog post pages
    blog.posts.forEach(post => {
        pages.push({
            url: post.href,
            changefreq: 'monthly',
            priority: 0.6,
        });
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
            .map(
                (page) => `
        <url>
          <loc>${hostname}${page.url}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
            )
            .join('')}
    </urlset>`;
};


export const getServerSideProps = async ({ res }) => {
    const hostname = 'https://minidrone.co.il';
    const sitemap = generateSitemapXml(hostname);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

const Sitemap = () => null;

export default Sitemap;
