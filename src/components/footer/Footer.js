import React from 'react'
import metaviz_logo from '../assets/Logo-Metaviz-Pro.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white dark:bg-gray-800">
  <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Useful Links</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link to="https://metaviz.pro/about-us/" className=" hover:underline">About Us</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-services/" className="hover:underline">OUr Services</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/testimonials/" className="hover:underline">Our Testimonials</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/case-studies/" className="hover:underline">Case Studies</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/portfolio/" className="hover:underline">Portfolio</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/pricing/" className="hover:underline">Pricing</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-team/" className="hover:underline">Our Team</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/our-core-team/" className="hover:underline">Our Core Team</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/process/" className="hover:underline">Process</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/industry-expertise/" className="hover:underline">Industry Expertise</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/open-source-contributions/" className="hover:underline">Open Source Contributions</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/test-automation/" className="hover:underline">Test Automation</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/cybersecurity/" className="hover:underline">Cybersecurity</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Support</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link to="https://metaviz.pro/contact-us/" className="hover:underline">Contact Us</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/careers/" className="hover:underline">Careers</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/client-portal/" className="hover:underline">Client Portal</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/resources/" className="hover:underline">Resources</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/social-responsibility/" className="hover:underline">Social Responsibility</Link>
          </li>
          <li className="mb-4">
            <Link to="https://metaviz.pro/faqs/" className="hover:underline">FAQs</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h3>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link to="#" className=" hover:underline">
            Metaviz Pro</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:underline"   onClick={() => window.location = 'mailto:info@metaviz.pro'}>info@metaviz.pro</Link>
          </li>
          <li className="mb-4">
          <Link to="https://www.facebook.com/Metaviz.pro" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
         <i className="fa-brands fa-facebook fa-xl" style={{color: '#4b67a1'}} />

          </Link>
          <Link to="https://www.linkedin.com/company/metaviz-tech/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
      <i className="fa-brands fa-linkedin fa-xl ms-2" style={{color: '#1682bb'}} />

          </Link>
          <Link to="https://www.instagram.com/metavizpro?igsh=OGVwMG9wb2RhdmVi">
        <i className="fa-brands fa-instagram fa-xl ms-2 text-black" />

           </Link>
          </li>
        </ul>
      </div>
      
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="text-center">
      <Link to="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
        <img src={metaviz_logo} className="h-12 mr-3 sm:h-12" alt="metavzi Logo" />
        Metaviz AI ChatBot
      </Link>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Metaviz ChatBot™. All Rights Reserved By Metaviz Pro
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
