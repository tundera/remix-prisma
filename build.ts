import task from 'tasuku'
import { execa } from 'execa'

const runBuildTasks = async () => {
  await task('Running build tasks', async ({ task, setTitle }) => {
    const buildTasks = await task.group((task) => [
      task('Generateing Prisma client', async ({ setTitle }) => {
        await execa('yarn', ['prisma', 'generate'], {
          env: {
            PRISMA_CLIENT_ENGINE_TYPE: 'dataproxy',
          },
        })
        setTitle('Successfully generated Prisma client')
      }),
      task('Building Tailwind styles', async ({ setTitle }) => {
        await execa('yarn', ['tailwindcss', '--minify', '-o', 'app/styles/tailwind.css'])
        setTitle('Successfully built Tailwind styles')
      }),
      task('Building Remix application', async ({ setTitle }) => {
        await execa('yarn', ['remix', 'build'])
        setTitle('Successfully built Remix application')
      }),
      task('Building web worker', async ({ setTitle }) => {
        await execa('node', ['-r', 'tsm', '-r', 'tsconfig-paths/register', 'build-worker.ts'], {
          env: {
            NODE_ENV: 'production',
          },
        })
        setTitle('Successfully built web worker')
      }),
    ])

    buildTasks.clear()

    setTitle('Successfully ran build tasks')
  })
}

const main = async () => {
  await runBuildTasks()
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
