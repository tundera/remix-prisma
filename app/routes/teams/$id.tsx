import type { LoaderFunction, MetaFunction } from 'remix'

import { Fragment } from 'react'
import { json, Link, useLoaderData } from 'remix'

import { getTeamById } from '../../lib/teams'

export type TeamLoaderData = Await<ReturnType<typeof getTeamById>>

export const meta: MetaFunction = ({ params, data }) => {
  return {
    title: `Team ${data.name} | Remix Cloudflare Demo`,
    description: 'Demo Cloudflare KV store to do redirects at the edge.',
  }
}

export const loader: LoaderFunction = async ({ params, request }) => {
  return json(await getTeamById(params.id as string))
}

export default function Post() {
  const { team } = useLoaderData<TeamLoaderData>()
  console.log({ team })

  return (
    <main className="container px-4 py-8 mx-auto prose">
      <h1>
        {team?.city} {team?.name}
      </h1>
      <div>
        <pre>
          <code>{JSON.stringify(team, null, 4)}</code>
        </pre>
      </div>
    </main>
  )
}
