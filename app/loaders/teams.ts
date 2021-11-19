import type { LoaderFunction } from 'remix'

import { json } from 'remix'
import { db } from 'app/lib/db'

async function getLoaderData() {
  const teams = await db.team.findMany({
    select: {
      id: true,
      name: true,
      city: true,
    },
  })
  console.dir(teams)

  return { teams }
}

export type LoaderData = Await<ReturnType<typeof getLoaderData>>

export const loader: LoaderFunction = async ({ request }) => {
  return json(await getLoaderData())
}
