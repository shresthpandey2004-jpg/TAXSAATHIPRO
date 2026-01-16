import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAPI = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  signup: (name: string, email: string, password: string) => 
    api.post('/auth/signup', { name, email, password }),
  
  getProfile: () => 
    api.get('/auth/profile'),
}

export const taxAPI = {
  calculate: (data: any) => 
    api.post('/tax/calculate', data),
  
  getHistory: () => 
    api.get('/tax/history'),
}

export const expenseAPI = {
  getAll: () => 
    api.get('/expenses'),
  
  create: (data: any) => 
    api.post('/expenses', data),
  
  delete: (id: string) => 
    api.delete(`/expenses/${id}`),
}

export default api
