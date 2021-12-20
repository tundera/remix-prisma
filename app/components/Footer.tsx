import { Link } from 'remix'

import ExternalLink from './ExternalLink'

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-gray-500 transition hover:text-gray-600">
            Home
          </Link>
          <Link to="/teams" className="text-gray-500 transition hover:text-gray-600">
            Teams
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/tunderadev">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/tundera">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
