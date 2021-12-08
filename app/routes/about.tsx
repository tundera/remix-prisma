import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Cloudflare Demo',
    description: 'A demo of Remix running on Cloudflare workers.',
  }
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        About
      </h1>
    </div>
  )
}
