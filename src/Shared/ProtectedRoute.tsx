import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabaseClient } from '../services/supaBaseService'

interface ProtectedRouteProps {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabaseClient.auth.getUser()
      setIsAuthenticated(!!data.user)
      setIsLoading(false)
    }

    checkUser()
  }, [])

  if (isLoading) {
    return <div className="text-center py-10">Cargando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
