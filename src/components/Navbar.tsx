import { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
    navigate('/') // Esto te manda a la raíz
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto cursor-pointer" // Le agregué cursor-pointer para que se vea clickeable
              src={logo}
              alt="Logo"
              onClick={handleLogoClick}
            />
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menú</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to={'/'}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Clubes
            </Link>
            <Link
              to={'/'}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Posts
            </Link>
            <Link
              to={'/'}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Acerca de
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg">
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Cerrar menú</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-4 pt-2 pb-3 space-y-4">
            <a
              href="#"
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Clubes
            </a>
            <a
              href="#"
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Posts
            </a>
            <a
              href="#"
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Acerca de
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
