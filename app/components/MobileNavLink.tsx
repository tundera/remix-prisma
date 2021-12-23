import clsx from 'clsx'
import { Link, useLocation } from 'remix'
import { Disclosure } from '@headlessui/react'

type MobileNavLinkProps = {
  to: string
  text: string
}

const MobileNavLink = ({ to, text }: MobileNavLinkProps) => {
  const { pathname } = useLocation()

  const isActive = pathname === to

  return (
    <Disclosure.Button
      as={Link}
      to={to}
      className={clsx(
        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block px-3 py-2 rounded-md text-base font-medium',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {text}
    </Disclosure.Button>
  )
}

export default MobileNavLink
