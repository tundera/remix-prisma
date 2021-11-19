import type { TeamsLoaderData } from '../routes/teams'

import { useCloudinaryImage } from '../hooks/useCloudinaryImage'

type TeamCardProps = {
  team: TeamsLoaderData['teams'][number]
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { imageURL } = useCloudinaryImage(`nba/teams/${team.handle}`)

  console.log(imageURL)
  return (
    <>
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={imageURL}
          alt={team.name}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-center text-gray-700">{team.name}</h3>
    </>
  )
}

export default TeamCard
