import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalculator, FaMoneyBillWave, FaChartPie, FaFileAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    { icon: FaMoneyBillWave, label: 'Estimated Tax', value: '₹0', color: 'text-red-500' },
    { icon: FaChartPie, label: 'Tax Saved', value: '₹0', color: 'text-green-500' },
    { icon: FaFileAlt, label: 'Filings', value: '0', color: 'text-blue-500' },
  ]

  const quickActions = [
    { icon: FaCalculator, label: 'Calculate Tax', link: '/calculator', color: 'bg-primary-600' },
    { icon: FaMoneyBillWave, label: 'Add Expense', link: '/expenses', color: 'bg-green-600' },
    { icon: FaFileAlt, label: 'View Reports', link: '/reports', color: 'bg-purple-600' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{user?.name}</span>!
            </h1>
            <p className="text-gray-400">Here's your tax overview</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl hover:glow-blue transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`text-3xl ${stat.color}`} />
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, i) => (
                <Link
                  key={i}
                  to={action.link}
                  className={`${action.color} p-6 rounded-xl hover:scale-105 transition-transform flex items-center space-x-4`}
                >
                  <action.icon className="text-3xl" />
                  <span className="text-lg font-semibold">{action.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="text-center py-12 text-gray-400">
              <p>No recent activity yet</p>
              <Link to="/calculator" className="text-primary-500 hover:text-primary-400 mt-2 inline-block">
                Start calculating your taxes →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
