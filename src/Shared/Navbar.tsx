import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useScroll } from '../hooks/useScroll'
import logo from '../assets/logo.jpg'
import { supabaseClient } from '../services/supaBaseService'
export const Navbar = () => {
  const navigate = useNavigate()
  const { setScrollTarget } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data, error } = await supabaseClient.auth.getUser()

        if (!error) {
          console.log('Usuario:', data)
          setIsAuthenticated(!!data.user)
        }
      } catch (error) {
        console.error('Error inesperado:', error)
      }
    }

    checkAuth()
  }, [])

  const handleLogout = async () => {
    await supabaseClient.auth.signOut()
    window.location.href = '/'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handlePostsCLick = () => {
    setScrollTarget('posts')
    navigate('/')
  }

  const handleClubsClick = () => {
    setScrollTarget('clubs')
    navigate('/')
  }

  const handleAboutCLick = () => {
    setScrollTarget('about')
    navigate('/')
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto cursor-pointer"
              alt="Logo"
              src={logo}
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
            <button
              onClick={handleClubsClick}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Clubes
            </button>
            <button
              onClick={handlePostsCLick}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Posts
            </button>
            <button
              onClick={handleAboutCLick}
              className="text-gray-900 hover:text-custom-primary-color"
            >
              Acerca de
            </button>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className=" text-black font-bold px-6 py-2 rounded-lg border-2  border-black  "
              >
                Cerrar sesión
              </button>
            )}
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
              onClick={handleClubsClick}
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Clubes
            </a>
            <a
              onClick={handlePostsCLick}
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Posts
            </a>
            <a
              onClick={handleAboutCLick}
              className="block text-gray-900 hover:text-custom-primary-color"
            >
              Acerca de
            </a>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className=" text-black font-bold px-6 py-2 rounded-lg border-2  border-black w-full  "
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
