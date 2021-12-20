import type { LoaderFunction, MetaFunction } from 'remix'
import { json, Link, useLoaderData } from 'remix'

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
      <h1>Redirect testing with buckets</h1>

      {err ? <p className="text-error">{err}</p> : null}

      <p>
        This demo redirects any path from <code>{'/redirects/{team-slug}'}</code> to{' '}
        <code>{'/redirects/teams/{team-slug}'}</code> by looking up the pathname in a Cloudflare KV
        store. For example:{' '}
        <Link prefetch="intent" to="/redirects/bulls">
          {'/redirects/bulls'}
        </Link>{' '}
        will redirect to{' '}
        <Link prefetch="intent" to="/redirects/teams/bulls">
          {'/redirects/teams/bulls'}
        </Link>
      </p>

      <p>
        Every route returns a latency (added as a query param) which should give you an idea of how
        the performance reading from a KV store is.
      </p>
    </main>
  )
}
