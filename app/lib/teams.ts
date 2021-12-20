import db from '~/db.server'

export const getTeamBySlug = async (slug: string) => {
  const team = await db.team.findUnique({
    where: { slug },
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
          number: true,
          height: true,
          weight: true,
          team: {
            select: {
              handle: true,
            },
          },
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
      colorScheme: {
        select: {
          primary: true,
          secondary: true,
        },
      },
    },
  })

  return { teams }
}
