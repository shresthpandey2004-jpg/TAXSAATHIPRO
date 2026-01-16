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
        // Demo mode - get from localStorage
        const demoUser = localStorage.getItem('demo_current_user')
        if (demoUser) {
          setUser(JSON.parse(demoUser))
        }
      } catch (error) {
        localStorage.removeItem('token')
        localStorage.removeItem('demo_current_user')
      }
    }
    setLoading(false)
  }

  const login = async (email: string, password: string) => {
    try {
      // Demo mode - check localStorage
      const storedUsers = JSON.parse(localStorage.getItem('demo_users') || '[]')
      const user = storedUsers.find((u: any) => u.email === email && u.password === password)
      
      if (user) {
        const demoUser = {
          id: user.id,
          email: user.email,
          name: user.name,
          subscription: 'FREE'
        }
        localStorage.setItem('token', 'demo-token-' + Date.now())
        localStorage.setItem('demo_current_user', JSON.stringify(demoUser))
        setUser(demoUser)
        toast.success('Login successful! (Demo Mode)')
        navigate('/dashboard')
      } else {
        toast.error('Invalid credentials')
        throw new Error('Invalid credentials')
      }
    } catch (error: any) {
      const errorMessage = error.message || 'Login failed'
      toast.error(errorMessage)
      throw error
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Demo mode - save to localStorage
      const storedUsers = JSON.parse(localStorage.getItem('demo_users') || '[]')
      
      // Check if user already exists
      if (storedUsers.find((u: any) => u.email === email)) {
        toast.error('User already exists')
        throw new Error('User already exists')
      }
      
      const newUser = {
        id: 'user-' + Date.now(),
        email,
        password,
        name,
        subscription: 'FREE'
      }
      
      storedUsers.push(newUser)
      localStorage.setItem('demo_users', JSON.stringify(storedUsers))
      
      const demoUser = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        subscription: 'FREE'
      }
      
      localStorage.setItem('token', 'demo-token-' + Date.now())
      localStorage.setItem('demo_current_user', JSON.stringify(demoUser))
      setUser(demoUser)
      toast.success('Account created successfully! (Demo Mode)')
      navigate('/dashboard')
    } catch (error: any) {
      const errorMessage = error.message || 'Signup failed'
      toast.error(errorMessage)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('demo_current_user')
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
