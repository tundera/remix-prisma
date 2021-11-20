import { motion } from 'framer-motion'

import { useCloudinaryImage } from '../hooks/useCloudinaryImage'
import type { TeamsLoaderData } from '../routes/teams'

type TeamCardProps = {
  team: TeamsLoaderData['teams'][number]
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { imageURL } = useCloudinaryImage(`nba/teams/${team.handle}`)

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-full p-2 overflow-hidden bg-gray-200 rounded-lg shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8"
      >
        <img
          src={imageURL}
          alt={team.name}
          className={`object-cover object-center w-full h-full group-hover:bg-gradient-to-tr`}
        />
        <h3 className="mt-4 text-sm font-bold text-center text-gray-700">{team.name}</h3>
      </motion.div>
    </>
  )
}

export default TeamCard
