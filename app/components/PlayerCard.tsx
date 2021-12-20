import type { TeamLoaderData } from '~/routes/teams/$id'

import { useParams } from 'react-router-dom'

import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'

type PlayerCardProps = {
  player: NonNullable<NonNullable<TeamLoaderData['team']>['players'][number]>
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { id: teamId } = useParams()
  console.log(teamId)

  const { imageURL: teamImage } = useCloudinaryImage(`nba/teams/${teamId ?? ''}`)
  const { imageURL: playerImage } = useCloudinaryImage(`nba/players/${player.handle}`)

  return (
    <article className="relative flex flex-col justify-end h-40 bg-white shadow-2xl w-80 overflow-clip dark:bg-gray-900">
      <img
        src={teamImage}
        alt="Team image"
        className="absolute object-cover -translate-x-4 opacity-10 w-[100%] h-[100%]"
        placeholder="blur"
      />
      <div className="px-2 pt-2">
        <div className="flex items-end justify-evenly">
          <img
            src={playerImage}
            alt="Player image"
            className="z-10 object-contain w-[250px] h-[125px]"
          />
          <div className="">
            <p className="w-full text-sm font-medium tracking-tight text-gray-500 md:text-md dark:text-gray-400">
              #{player.number} | {player.position}
            </p>
            <p className="w-full mb-6 font-medium tracking-tight text-gray-900 text-md md:text-lg sm:mb-10 dark:text-gray-100">
              {player.name}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PlayerCard
