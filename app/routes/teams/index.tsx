import type { LoaderFunction, MetaFunction } from 'remix'
import { json, Link, useLoaderData } from 'remix'

import TeamCard from '~/components/TeamCard'
import { getTeams } from '~/lib/teams'

export type TeamsLoaderData = Awaited<ReturnType<typeof getTeams>>

export const meta: MetaFunction = () => {
  return {
    title: 'Teams | Remix Cloudflare Demo',
    description: 'Demo reading teams from a database using prisma.',
  }
}

export const loader: LoaderFunction = async () => {
  return json(await getTeams())
}

export default function Teams() {
  const { teams } = useLoaderData<TeamsLoaderData>()

  return (
    <div className="flex flex-col items-center px-12 py-16 space-y-8 lg:space-y-16">
      <h1 className="text-6xl font-extrabold text-black dark:text-white">Teams</h1>
      <section>
        <div className="w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid max-w-2xl grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-20 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 md:max-w-6xl">
              {teams.map((team) => (
                <Link key={team.id} to={team.slug} className="group">
                  <TeamCard team={team} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
