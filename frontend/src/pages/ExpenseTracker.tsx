import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTrash, FaGasPump, FaPhone, FaLaptop } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<any[]>([])
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const categories = [
    { value: 'fuel', label: 'Fuel', icon: FaGasPump },
    { value: 'phone', label: 'Phone/Internet', icon: FaPhone },
    { value: 'equipment', label: 'Equipment', icon: FaLaptop },
  ]

  const addExpense = () => {
    if (category && amount) {
      const newExpense = {
        id: Date.now(),
        category,
        amount: parseFloat(amount),
        description,
        date: new Date().toLocaleDateString()
      }
      setExpenses([newExpense, ...expenses])
      setCategory('')
      setAmount('')
      setDescription('')
    }
  }

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2 gradient-text">Expense Tracker</h1>
            <p className="text-gray-400">Track your business expenses for tax deductions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Add Expense Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Add Expense</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Amount (₹)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                    placeholder="Petrol for delivery"
                  />
                </div>

                <button
                  onClick={addExpense}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition btn-glow flex items-center justify-center"
                >
                  <FaPlus className="mr-2" />
                  Add Expense
                </button>
              </div>

              {/* Total */}
              <div className="mt-6 p-4 bg-primary-600/20 rounded-lg border border-primary-500/30">
                <p className="text-sm text-gray-400">Total Expenses</p>
                <p className="text-3xl font-bold">₹{totalExpenses.toLocaleString()}</p>
              </div>
            </motion.div>

            {/* Expense List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2 glass p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Recent Expenses</h2>

              {expenses.length > 0 ? (
                <div className="space-y-3">
                  {expenses.map((expense, i) => (
                    <motion.div
                      key={expense.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                          {categories.find(c => c.value === expense.category)?.icon && (
                            <span className="text-primary-500">
                              {/* Icon placeholder */}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold capitalize">{expense.category}</p>
                          <p className="text-sm text-gray-400">{expense.description || expense.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold">₹{expense.amount.toLocaleString()}</p>
                        <button
                          onClick={() => deleteExpense(expense.id)}
                          className="p-2 bg-red-600/20 hover:bg-red-600/40 rounded-lg transition"
                        >
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p>No expenses added yet</p>
                  <p className="text-sm mt-2">Start tracking your business expenses</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker
