import { Fragment } from 'react'
import type { LoaderFunction, MetaFunction } from 'remix'
import { json, Link, useLoaderData } from 'remix'

export const meta: MetaFunction = ({ params }) => {
  return {
    title: `Post ${params.slug} | Remix Cloudflare Demo`,
    description: 'Demo Cloudflare KV store to do redirects at the edge.',
  }
}

function randomPost(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const loader: LoaderFunction = ({ params, request }) => {
  const url = new URL(request.url)

  const extraRedirects = [randomPost(1, 500), randomPost(500, 1000)]

  return json({
    extraRedirects,
    latency: url.searchParams.get('l'),
    slug: params.slug,
  })
}

export default function Post() {
  const { extraRedirects, latency, slug } = useLoaderData()
  console.log({ latency })

  return (
    <main className="container px-4 py-8 mx-auto prose">
      <h1>Post {slug}</h1>
      {typeof latency === 'string' ? <p>latency: {latency}ms</p> : null}
      <p>
        <Link prefetch="intent" to="/redirects">
          Edge Redirects
        </Link>
        {extraRedirects.map((to: number) => (
          <Fragment key={to}>
            {' '}
            |{' '}
            <Link prefetch="intent" to={`/redirects/${to}`}>
              /redirects/{to}
            </Link>
          </Fragment>
        ))}
      </p>
    </main>
  )
}
