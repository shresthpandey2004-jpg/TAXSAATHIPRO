import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { authAPI } from '../services/api'
import type { User, AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const { data } = await authAPI.getProfile()
        setUser(data.user)
      } catch (error) {
        localStorage.removeItem('token')
      }
    }
    setLoading(false)
  }

  const login = async (email: string, password: string) => {
    try {
      const { data } = await authAPI.login(email, password)
      localStorage.setItem('token', data.token)
      setUser(data.user)
      toast.success('Login successful!')
      navigate('/dashboard')
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Login failed'
      toast.error(errorMessage)
      throw error
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    try {
      const { data } = await authAPI.signup(name, email, password)
      localStorage.setItem('token', data.token)
      setUser(data.user)
      toast.success('Account created successfully!')
      navigate('/dashboard')
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Signup failed'
      toast.error(errorMessage)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
