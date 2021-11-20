import { Link } from 'remix'

const Header = () => {
  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content">
      <div className="flex-none px-2 mx-2">
        <Link prefetch="intent" to="/" className="btn btn-ghost" title="Go home">
          <span className="text-lg font-bold">daisyUI</span>
        </Link>
      </div>
      <div className="flex-none"></div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a className="btn btn-ghost btn-sm rounded-btn">About</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
