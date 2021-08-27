import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiDribbble } from 'react-icons/fi'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
]
const Footer = () => {
    return (
        <footer class="bg-dark-grey max-w flex text-white">
            <div class="container mx-auto text-center">

                <div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center items-center mt-5">
                        <FiFacebook className="text-gray-900 mr-5" />
                        <FiInstagram className="text-gray-900 mr-5" />
                        <FiTwitter className="text-gray-900 mr-5" />
                        <FiGithub className="text-gray-900 mr-5" />
                        <FiDribbble className="text-gray-900 mr-5" />
                    </div>

                    <p class="text-sm text-gray-500 py-4">© 2021 SomeCompany.Incl All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
