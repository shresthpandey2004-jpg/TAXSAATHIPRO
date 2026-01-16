export interface User {
  id: string
  email: string
  name: string
  pan?: string
  subscription: 'FREE' | 'FILING' | 'PREMIUM'
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

export interface Income {
  id: string
  source: string
  amount: number
  platform?: string
  tds: number
  isForeign: boolean
  currency: string
}

export interface Expense {
  id: string
  category: string
  amount: number
  description?: string
  date: string
}

export interface TaxCalculation {
  totalIncome: number
  totalExpenses: number
  taxableIncome: number
  oldRegimeTax: number
  newRegimeTax: number
  recommendedRegime: 'OLD' | 'NEW'
  refund: number
  savings: number
}
