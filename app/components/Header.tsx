import { Link } from 'remix'

const Header = () => {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link prefetch="intent" to="/" title="Back to homepage" className="flex items-center p-2">
            Home
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                prefetch="intent"
                to="/about"
                title="Learn more"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                About
              </Link>
            </li>
            <li className="flex">
              <Link
                prefetch="intent"
                to="/demo"
                title="View demo"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Link
              </Link>
            </li>
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
            Log in
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
