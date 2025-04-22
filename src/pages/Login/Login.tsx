import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { login } from '../../services/authServices'
export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })

    try {
      login(email, password)
        .then((response) => {
          console.log(response)
          console.log('Login successful:', response)
        })
        .catch((error) => {
          console.error('Login error:', error)
        })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Login Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
            Iniciar Sesión
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center bg-white rounded-r-lg p-4">
        <img src={logo} alt="logo" className="w-full max-w-md object-contain" />
      </div>
    </div>
  )
}
