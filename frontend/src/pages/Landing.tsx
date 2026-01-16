import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaRocket, FaCalculator, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Tax Filing</span>
              <br />
              Made Simple
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              For Gig Workers, Freelancers & Creators
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg text-lg font-semibold transition btn-glow"
              >
                Get Started Free
              </Link>
              <Link
                to="/calculator"
                className="px-8 py-4 glass hover:bg-white/10 rounded-lg text-lg font-semibold transition"
              >
                Try Calculator
              </Link>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: FaCalculator, title: 'Smart Calculator', desc: 'AI-powered tax calculations' },
              { icon: FaChartLine, title: 'Save More', desc: 'Maximize your deductions' },
              { icon: FaShieldAlt, title: 'Secure & Safe', desc: 'Bank-level encryption' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass p-6 rounded-xl hover:glow-blue transition-all duration-300 animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <feature.icon className="text-4xl text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-primary-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Who It's For
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '🛵 Delivery Partners', desc: 'Swiggy, Zomato, Uber Eats drivers' },
              { title: '💻 Freelancers', desc: 'Designers, developers, writers' },
              { title: '🎥 Creators', desc: 'YouTubers, influencers, artists' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-xl text-center hover:glow-purple transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Enter Income', desc: 'Add your earnings from all sources' },
              { step: '2', title: 'Add Expenses', desc: 'Track deductible business expenses' },
              { step: '3', title: 'File ITR', desc: 'Get CA-verified filing done' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="glass p-8 rounded-xl">
                  <div className="text-6xl font-bold text-primary-500/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-primary-900/20 to-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Save on Taxes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of Indians filing taxes the smart way
          </p>
          <Link
            to="/signup"
            className="inline-block px-12 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg text-xl font-semibold transition btn-glow animate-pulse-glow"
          >
            Start Free Today
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 TaxSaathi Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
