import { Dribbble, Facebook, Github, LucideTwitter, Twitch, Twitter, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-gray-900 text-gray-300">
    <div className="mx-auto w-full max-w-screen-xl text-white">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Quick Links</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="/#Features" className="hover:underline">Features</a>
                </li>
                <li className="mb-4">
                    <a href="/#Pricing" className="hover:underline">Pricing</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms of service</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Cookie Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Company</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Support & Help</h2>
            <ul className="text-body font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Faqs</a>
                </li>
                
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-neutral-secondary-soft md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/">Foxnote™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
          <a href="#" className="text-body hover:text-heading">
                <Facebook/>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <Twitch/>
                <span className="sr-only">Twitch community</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
            <LucideTwitter/>
            <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <Github/>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <Dribbble/>
                <span className="sr-only">Dribbble account</span>
            </a>
        </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
