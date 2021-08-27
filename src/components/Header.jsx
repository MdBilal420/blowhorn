import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
]
const Header = () => {

    return (
        <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-around sm:h-10 lg:justify-between " aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <h3 className="text-2xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
                                    <span className="block xl:inline">nullBrains</span>
                                </h3>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </Link>
                            <Link to="/" className="font-medium text-gray-100 hover:text-gray-300 bg-indigo-600  border border-transparent text-base font-medium rounded-full py-2 px-3" >
                                Sign up
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">nullBrains</span>
                                </h1>
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <Link to="/"
                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                            Sign in
                        </Link>
                        <Link to="/"

                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                            Sign up
                        </Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Header
