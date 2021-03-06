import { Miniflare } from 'miniflare'

const run = async () => {
  const miniflare = new Miniflare({
    script: ' ',
    buildCommand: ' ',
    kvNamespaces: ['REDIRECTS'],
    kvPersist: true,
  })

  const REDIRECTS = await miniflare.getKVNamespace('REDIRECTS')

  for (let i = 1; i <= 1000; i++) {
    await REDIRECTS.put(`/redirects/${i}`, `/redirects/post/${i}`)
  }
}

run()
  .then(() => {
    console.log('Populated KV Store')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
