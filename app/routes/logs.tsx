import type { LoaderFunction, MetaFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import { getLogsData } from '../lib/logs'

type LogsLoaderData = Await<ReturnType<typeof getLogsData>>

export const meta: MetaFunction = () => {
  return {
    title: 'Logs | Remix Cloudflare Demo',
    description: 'Demo reading from a mongodb database using prisma.',
  }
}

export const loader: LoaderFunction = async () => {
  return json(await getLogsData())
}

export default function Logs() {
  const { logs } = useLoaderData<LogsLoaderData>()

  return (
    <main className="container px-4 py-8 mx-auto prose">
      <h1>Logs from mysql through prisma</h1>

      <ul>
        {logs.map((log) => (
          <li key={log.id} className="">
            <div className="">
              <div className="">Created: {log.createdAt.toString()}</div>
              <div className="">Message: {log.message}</div>
              <div className="">Meta: {JSON.stringify(log.meta)}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
