import db from '../db.server'

export const getLogsData = async () => {
  const logs = await db.log.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 20,
  })

  return { logs }
}
