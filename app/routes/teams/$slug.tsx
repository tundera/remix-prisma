import type { LoaderFunction, MetaFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import PlayerCard from '~/components/PlayerCard'
import { getTeamBySlug } from '~/lib/teams'

export type TeamLoaderData = Awaited<ReturnType<typeof getTeamBySlug>>

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.team.city} ${data.team.name} | Remix Cloudflare Demo`,
    description: 'Demo Cloudflare KV store to do redirects at the edge.',
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  return json(await getTeamBySlug(params.slug as string))
}

export default function Team() {
  const { team } = useLoaderData<TeamLoaderData>()

  return (
    <div className="flex flex-col items-center py-16 space-y-8 lg:space-y-16">
      <h1 className="text-6xl font-extrabold">
        {team?.city} {team?.name}
      </h1>
      <section>
        <div className="w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid max-w-2xl grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 md:max-w-6xl">
              {team?.players.map((player) => (
                <PlayerCard key={player.handle} player={player} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
