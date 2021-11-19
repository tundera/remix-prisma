import db from '../db.server'

export const getTeamsData = async () => {
  const teams = await db.team.findMany({
    select: {
      id: true,
      name: true,
      city: true,
    },
  })

  return { teams }
}
