import db from '../db.server'

export const getTeamById = async (id: string) => {
  const team = await db.team.findUnique({
    where: { id },
    select: {
      id: true,
      handle: true,
      slug: true,
      name: true,
      city: true,
      colorScheme: {
        select: {
          primary: true,
          secondary: true,
        },
      },
      players: {
        select: {
          id: true,
          handle: true,
          slug: true,
          name: true,
          position: true,
          height: true,
          weight: true,
        },
      },
    },
  })

  return { team }
}

export const getTeams = async () => {
  const teams = await db.team.findMany({
    select: {
      id: true,
      handle: true,
      slug: true,
      name: true,
      city: true,
    },
  })

  return { teams }
}
