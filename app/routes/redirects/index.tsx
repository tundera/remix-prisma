import type { LoaderFunction, MetaFunction } from 'remix'
import { Link, json, useLoaderData } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Redirects | Remix Cloudflare Demo',
    description: 'Demo Cloudflare KV store to do redirects at the edge.',
  }
}

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)

  return json({
    err: url.searchParams.get('err'),
  })
}

export default function RedirectsIndex() {
  const { err } = useLoaderData()

  return (
    <main className="container px-4 py-8 mx-auto prose">
      <h1>AB testing with buckets</h1>

      {err ? <p className="text-error">{err}</p> : null}

      <p>
        This demo redirects any path from{' '}
        <Link prefetch="intent" to="1">
          /redirects/1
        </Link>{' '}
        -{' '}
        <Link prefetch="intent" to="1000">
          /redirects/1000
        </Link>{' '}
        to <code>/redirects/post/1</code> - <code>/redirects/post/1000</code> by looking up the
        pathname in a Cloudflare KV store.
      </p>

      <p>
        Every route returns a latency (added as a query param) which should give you an idea of how
        the performance reading from a KV store is.
      </p>
    </main>
  )
}
