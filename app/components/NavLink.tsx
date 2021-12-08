import cn from 'classnames'
import { Link, useLocation } from 'remix'

type NavLinkProps = {
  to: string
  text: string
}

const NavLink = ({ to, text }: NavLinkProps) => {
  const { pathname } = useLocation()

  const isActive = pathname === to

  return (
    <Link
      to={to}
      className={cn(
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 dark:text-gray-700 dark:hover:bg-gray-300 hover:text-white',
        'px-3 py-2 rounded-md text-sm font-medium',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {text}
    </Link>
  )
}

export default NavLink
