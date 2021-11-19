import type { LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";

import type { Log } from "@prisma/client";
import prisma from "../prisma.server";

export let meta: MetaFunction = () => {
  return {
    title: "Prisma Logs | Remix Cloudflare Demo",
    description: "Demo reading from a mysql database using prisma.",
  };
};

export let loader: LoaderFunction = async () => {
  let logs = await prisma.log.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });
  return json(logs);
};

export default function Logs() {
  let logs = useLoaderData<Log[]>();

  return (
    <main className="container mx-auto prose px-4 py-8">
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
  );
}
