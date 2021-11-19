import type { LoaderFunction, MetaFunction } from 'remix'

import { json, useLoaderData, Link } from 'remix'

import TeamCard from '../components/TeamCard'
import { getTeamsData } from '../lib/teams'

export type TeamsLoaderData = Await<ReturnType<typeof getTeamsData>>

export const meta: MetaFunction = () => {
  return {
    title: 'Teams | Remix Cloudflare Demo',
    description: 'Demo reading from a mongodb database using prisma.',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return json(await getTeamsData())
}

export default function Teams() {
  const { teams } = useLoaderData<TeamsLoaderData>()

  return (
    <main>
      <section className="py-24 hero bg-base-200">
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {teams.map((team) => (
                <Link key={team.id} to={`teams/${team.id}`} className="group">
                  <TeamCard team={team} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
