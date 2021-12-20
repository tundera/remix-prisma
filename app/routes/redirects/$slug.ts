import type { LoaderFunction, MetaFunction } from 'remix'
import { redirect } from 'remix'
import { capitalCase } from 'change-case'

declare global {
  const REDIRECTS: KVNamespace
}

export const meta: MetaFunction = ({ params }) => {
  return {
    title: `${capitalCase(params.slug as string)} | Remix Cloudflare Demo`,
    description: 'Demo Cloudflare KV store to do redirects at the edge.',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const start = Date.now()
  const url = new URL(request.url)

  let redirectPath = await REDIRECTS.get(url.pathname)
  redirectPath = redirectPath || `/redirects?err=${url.pathname} not found`

  return redirect(`${redirectPath}?l=${Date.now() - start}`)
}
