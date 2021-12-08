import { Link } from 'remix'

import ExternalLink from './ExternalLink'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link to="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link to="/about" className="text-gray-500 hover:text-gray-600 transition">
            About
          </Link>
          <Link to="/teams" className="text-gray-500 hover:text-gray-600 transition">
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
