import { useRef } from 'react'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'
import { Form, json, useLoaderData, useSubmit } from 'remix'

import db from '../db.server'
import { unencryptedSession } from '../sessions.server'

const VALID_THEMES = [
  'dark',
  'light',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
]

export const meta: MetaFunction = () => {
  return {
    title: 'Themes | Remix Cloudflare Demo',
    description: 'Demo utilizing cookies to change the theme.',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const session = await unencryptedSession.getSession(request.headers.get('Cookie'))

  const formData = new URLSearchParams(await request.text())

  const theme = formData.get('theme') || 'dark'
  session.set('theme', theme)

  await db.log.create({
    data: {
      level: 'Info',
      message: `theme set to ${theme}`,
      meta: {},
    },
  })

  return json(null, {
    headers: {
      'Set-Cookie': await unencryptedSession.commitSession(session),
    },
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await unencryptedSession.getSession(request.headers.get('Cookie'))
  const theme = session.get('theme') || 'dark'

  return json(theme)
}

export default function Themes() {
  const selectedTheme = useLoaderData()

  const formRef = useRef<HTMLFormElement>(null)
  const submit = useSubmit()

  const onRadioChanged = () => {
    submit(formRef.current)
  }

  return (
    <main className="container px-4 py-8 mx-auto prose">
      <h1>Themes</h1>

      <p>
        By storing the user selected theme in a cookie we can provide a zero flicker experience even
        on initial page load.
      </p>

      <Form ref={formRef} method="post">
        {VALID_THEMES.map((theme) => (
          <div key={theme} className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">{theme}</span>
              <input
                data-testid={`theme-${theme}`}
                type="radio"
                name="theme"
                defaultChecked={selectedTheme === theme}
                className="radio"
                value={theme}
                onChange={onRadioChanged}
              />
            </label>
          </div>
        ))}
        <noscript>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </noscript>
      </Form>
    </main>
  )
}
