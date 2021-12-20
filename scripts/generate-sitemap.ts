#!/usr/bin/env node

import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')
  const pages = await globby(['app/routes/**/*.tsx'])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page.replace('app/routes', '').replace('.tsx', '')
            const route = path === '/index' ? '' : path
            return `
              <url>
                  <loc>${`https://tundera.dev${route}`}</loc>
              </url>
            `
          })
          .join('')}
    </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}

const main = async () => {
  await generateSitemap()
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
