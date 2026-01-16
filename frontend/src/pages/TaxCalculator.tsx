import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const TaxCalculator = () => {
  const [income, setIncome] = useState('')
  const [expenses, setExpenses] = useState('')
  const [tds, setTds] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculateTax = () => {
    const totalIncome = parseFloat(income) || 0
    const totalExpenses = parseFloat(expenses) || 0
    const totalTds = parseFloat(tds) || 0

    // Presumptive taxation (44ADA) - 50% of income
    const presumptiveIncome = totalIncome * 0.5
    const taxableIncome = Math.max(presumptiveIncome - totalExpenses, 0)

    // Old Regime Tax Calculation
    let oldRegimeTax = 0
    if (taxableIncome > 1000000) {
      oldRegimeTax = (taxableIncome - 1000000) * 0.3 + 112500
    } else if (taxableIncome > 500000) {
      oldRegimeTax = (taxableIncome - 500000) * 0.2 + 12500
    } else if (taxableIncome > 250000) {
      oldRegimeTax = (taxableIncome - 250000) * 0.05
    }

    // New Regime Tax Calculation
    let newRegimeTax = 0
    if (taxableIncome > 1500000) {
      newRegimeTax = (taxableIncome - 1500000) * 0.3 + 150000
    } else if (taxableIncome > 1200000) {
      newRegimeTax = (taxableIncome - 1200000) * 0.2 + 90000
    } else if (taxableIncome > 900000) {
      newRegimeTax = (taxableIncome - 900000) * 0.15 + 45000
    } else if (taxableIncome > 600000) {
      newRegimeTax = (taxableIncome - 600000) * 0.10 + 15000
    } else if (taxableIncome > 300000) {
      newRegimeTax = (taxableIncome - 300000) * 0.05
    }

    const recommendedRegime = newRegimeTax < oldRegimeTax ? 'NEW' : 'OLD'
    const finalTax = Math.min(oldRegimeTax, newRegimeTax)
    const refund = Math.max(totalTds - finalTax, 0)

    setResult({
      taxableIncome,
      oldRegimeTax,
      newRegimeTax,
      recommendedRegime,
      finalTax,
      refund,
      savings: Math.abs(oldRegimeTax - newRegimeTax)
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2 gradient-text">Tax Calculator</h1>
            <p className="text-gray-400">Calculate your tax liability in seconds</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaMoneyBillWave className="mr-2 text-green-500" />
                Income & Expenses
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Total Income (₹)</label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                    placeholder="500000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Business Expenses (₹)</label>
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                    placeholder="50000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">TDS Deducted (₹)</label>
                  <input
                    type="number"
                    value={tds}
                    onChange={(e) => setTds(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition"
                    placeholder="10000"
                  />
                </div>

                <button
                  onClick={calculateTax}
                  className="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition btn-glow flex items-center justify-center"
                >
                  <FaCalculator className="mr-2" />
                  Calculate Tax
                </button>
              </div>
            </motion.div>

            {/* Result Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Results</h2>

              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary-600/20 rounded-lg border border-primary-500/30">
                    <p className="text-sm text-gray-400">Taxable Income</p>
                    <p className="text-2xl font-bold">₹{result.taxableIncome.toLocaleString()}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-400">Old Regime</p>
                      <p className="text-xl font-bold">₹{result.oldRegimeTax.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <p className="text-sm text-gray-400">New Regime</p>
                      <p className="text-xl font-bold">₹{result.newRegimeTax.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                    <p className="text-sm text-gray-400">Recommended</p>
                    <p className="text-2xl font-bold">{result.recommendedRegime} Regime</p>
                  </div>

                  <div className="p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
                    <p className="text-sm text-gray-400">Final Tax Payable</p>
                    <p className="text-2xl font-bold">₹{result.finalTax.toLocaleString()}</p>
                  </div>

                  {result.refund > 0 && (
                    <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/30 animate-pulse-glow">
                      <p className="text-sm text-gray-400">Expected Refund</p>
                      <p className="text-2xl font-bold text-green-400">₹{result.refund.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <FaCalculator className="text-5xl mx-auto mb-4 opacity-20" />
                  <p>Enter your details and click calculate</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxCalculator
