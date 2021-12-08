import { Suspense } from 'react'
import type { LinksFunction, LoaderFunction, ShouldReloadFunction } from 'remix'
import { json, Links, LiveReload, Meta, Outlet, Scripts, useLoaderData } from 'remix'

import Header from './components/Header'
import Footer from './components/Footer'
import { unencryptedSession } from './sessions.server'
import tailwindStylesUrl from './styles/tailwind.css'
import { useScrollRestoration } from './utils/scroll'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesUrl }]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await unencryptedSession.getSession(request.headers.get('Cookie'))
  const theme = session.get('theme') || 'dark'

  return json({ theme })
}

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) => {
  return !!submission && submission.action === '/themes'
}

function Document({
  children,
  title,
  theme,
}: {
  children: React.ReactNode
  title?: string
  theme?: string
}) {
  useScrollRestoration()

  return (
    <html lang="en" data-theme={theme || 'dark'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const { theme } = useLoaderData()

  return (
    <Document theme={theme}>
      <div className="flex flex-col justify-between min-h-screen w-full bg-gray-200 dark:bg-gray-700">
        <Header />
        <main className="flex flex-col items-center justify-center min-h-[92vh] px-16 py-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>Replace this UI with what you want users to see when your app throws uncaught errors.</p>
    </Document>
  )
}
