import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCalculator, FaUser } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCalculator className="text-primary-500 text-2xl" />
            <span className="text-xl font-bold gradient-text">TaxSaathi Pro</span>
          </Link>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition">
                  Dashboard
                </Link>
                <Link to="/calculator" className="text-gray-300 hover:text-white transition">
                  Calculator
                </Link>
                <Link to="/expenses" className="text-gray-300 hover:text-white transition">
                  Expenses
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition">
                  Pricing
                </Link>
                <Link to="/help" className="text-gray-300 hover:text-white transition">
                  Help
                </Link>
                <Link to="/login" className="text-gray-300 hover:text-white transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition btn-glow"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
