import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Cloudflare Demo',
    description: 'A demo of Remix running on Cloudflare workers.',
  }
}

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Home
      </h1>
      <h2 className="mb-12 text-xl text-center text-gray-700 dark:text-gray-200">
        Made with Next.js, TailwindCSS, and React Query
      </h2>
    </div>
  )
}
