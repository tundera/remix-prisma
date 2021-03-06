import { build } from 'esbuild'

const mode = process.env.NODE_ENV?.toLowerCase() ?? 'development'
const databaseUrl = process.env.DATABASE_URL ?? ''
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME ?? ''

console.log(`[Worker] Running esbuild in ${mode} mode`)

build({
  entryPoints: ['./worker/index.ts'],
  bundle: true,
  minify: mode === 'production',
  format: 'esm',
  define: {
    'process.env.NODE_ENV': `"${mode}"`,
    'process.env.DATABASE_URL': `"${databaseUrl}"`,
    'process.env.CLOUDINARY_CLOUD_NAME': `"${cloudinaryCloudName}"`,
  },
  outfile: 'worker.js',
  plugins: [
    {
      name: 'prisma-plugin',
      setup(build) {
        build.onResolve({ filter: /^@prisma\/client$/ }, () => {
          return {
            path: require.resolve('@prisma/client'),
          }
        })
      },
    },
  ],
})
