import { Disclosure } from '@headlessui/react'
import { FiMenu, FiX } from 'react-icons/fi'

import NavLink from './NavLink'
import MobileNavLink from './MobileNavLink'

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-black dark:bg-white">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-start flex-1 p-2 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <svg
                    viewBox="94 235.04 404 228.96"
                    className="block w-8 h-8 text-white fill-current dark:text-black"
                  >
                    <path d="M323.7 236.8c-2.2 2.4-2.1 4.4.3 7 2.5 2.7 2.7 9.6.4 17.3-1.7 5.6-12.6 28-14.8 30.2-.7.6-2.8 3.2-4.7 5.7-4.3 5.6-19 21-20 21-.5 0-4.1 2-8.1 4.5-7.5 4.5-21.3 9.3-24.1 8.2-.8-.3-3.2-4.1-5.2-8.4-1.9-4.3-4.2-9-5-10.5-.8-1.4-1.5-3.2-1.5-3.8 0-1.9-8.9-25.2-10.6-27.8-1.6-2.4-4.6-2.9-6.1-1-.6.7-1.3 3.8-1.6 6.8-.7 7.7-11.3 30.6-20.4 44-2.6 3.9-5.2 7.9-5.8 8.8-.5 1-1.3 1.9-1.6 2.2-.3.3-2.5 3.2-4.9 6.5-2.4 3.3-6.4 8.6-8.9 11.7-2.6 3.1-6.2 7.8-8.1 10.3-3.6 4.8-25.3 26.2-32.5 32-2.2 1.8-6 4.4-8.5 5.8-13 7.2-25.1 13.6-29.5 15.7-6 2.8-8.5 4.8-8.5 6.8 0 1.2 1.2 1.4 6.3 1 5.9-.5 13.5-3.8 22.7-9.6 1.4-.9 4.6-2.6 7.2-3.8 2.5-1.2 6.9-3.9 9.8-6.1 5.8-4.3 31-27.2 31-28.2 0-.3 2.1-2.9 4.6-5.6 5.9-6.7 6.2-7 10.3-12.9 3.9-5.7 4-5.8 7.9-10.6 2.8-3.4 8.3-11.2 15.1-21.4 3-4.5 7.9-13.4 16.8-31.1l2.5-4.9 3.9 9.4c4 9.8 13.1 28.7 15.8 32.9.8 1.3 1.6 3 1.7 3.8.1.8 1.4 2.9 2.8 4.8 1.4 1.8 2.6 3.6 2.6 4 0 .7 4.7 7.9 8.8 13.5 3.8 5.1 8.1 8.9 10 9 1.9 0 1.5-1.5-2.5-8-10-16.3-15.3-25.7-15.3-27 0-.6 1-1 2.3-1 9.7 0 28.2-11.4 40.9-25.2 4.7-5.1 9.8-10.5 11.2-11.9 1.4-1.5 2.6-3 2.6-3.3 0-.3 1.5-3 3.3-5.9 4.8-7.7 5.4-8.6 8.8-15.7 1.8-3.6 4.2-9.6 5.4-13.3 2.2-6.8 2.2-6.8 3.8-4.4.9 1.3 5.7 10.9 10.7 21.3 32.1 66.3 40.7 80.7 68.4 113.9 11 13.3 32.1 34.5 43.5 43.7 8.3 6.6 38.3 26.8 40 26.8.6 0 1.1-.8 1.1-1.8s-3.1-3.6-8.1-6.7c-6.7-4.2-18-12.3-19.9-14.5-.3-.3-2.1-1.7-4-3.2-11.5-8.7-39.8-37.6-50.6-51.8-2.7-3.5-5.9-7.6-7.1-9-1.2-1.4-3.4-4.3-4.9-6.5-1.4-2.2-4.3-6.5-6.4-9.5-13.2-19.4-21.8-35.2-38-69.5-6.4-13.5-12.7-26.8-14.9-31.5-2.6-5.6-13.3-23.4-14.5-24.2-1.9-1.3-4.2-.9-5.9 1z" />
                  </svg>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink to="/" text="Home" />
                    <NavLink to="/teams" text="Teams" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" text="Home" />
              <MobileNavLink to="/teams" text="Teams" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
