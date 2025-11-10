import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
    pages(),
    {
      name: 'vite-plugin-generate-sitemap',
      apply: 'build',
      async closeBundle() {
        const routes = ['/', '/about', '/services', '/portal', '/contact', '/contact#faq', '/services#tariff']
        const smStream = new SitemapStream({ hostname: SITE_URL })

        routes.forEach((route) => {
          smStream.write({
            url: route,
            changefreq: 'monthly',
            priority: route === '/' ? 1.0 : 0.8,
            lastmod: new Date().toISOString(),
          })
        })

        smStream.end()
        const sitemap = await streamToPromise(smStream).then((data) => data.toString())

        const outDir = path.resolve(__dirname, 'dist')
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
        console.log('✅ Sitemap generated at dist/sitemap.xml')
      },
    },
  ],
})
