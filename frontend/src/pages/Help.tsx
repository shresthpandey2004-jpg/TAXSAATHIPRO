import { motion } from 'framer-motion'
import { FaBook, FaQuestionCircle, FaLightbulb } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const Help = () => {
  const guides = [
    {
      icon: FaBook,
      title: 'Tax Basics',
      content: 'Understanding income tax, deductions, and filing requirements for Indian taxpayers.',
    },
    {
      icon: FaLightbulb,
      title: 'Gig Worker Guide',
      content: 'Special tax rules for delivery partners, ride-hailing drivers, and platform workers.',
    },
    {
      icon: FaQuestionCircle,
      title: 'Freelancer Tax Guide',
      content: 'How to handle presumptive taxation, TDS, and foreign income for freelancers.',
    },
  ]

  const commonMistakes = [
    'Not claiming all eligible deductions',
    'Missing TDS credit claims',
    'Wrong income classification',
    'Not maintaining expense records',
    'Filing after deadline',
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 gradient-text">Help Center</h1>
            <p className="text-xl text-gray-400">Learn everything about tax filing</p>
          </motion.div>

          {/* Guides */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl hover:glow-blue transition-all cursor-pointer"
              >
                <guide.icon className="text-4xl text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                <p className="text-gray-400">{guide.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Common Mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>
            <ul className="space-y-3">
              {commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span className="text-gray-300">{mistake}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Glossary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Tax Glossary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { term: 'ITR', def: 'Income Tax Return - Form to file your taxes' },
                { term: 'TDS', def: 'Tax Deducted at Source - Tax deducted by payer' },
                { term: '44ADA', def: 'Presumptive taxation for professionals' },
                { term: 'PAN', def: 'Permanent Account Number - Tax ID' },
                { term: 'AY', def: 'Assessment Year - Year of tax assessment' },
                { term: 'FY', def: 'Financial Year - Year of income earning' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-lg">
                  <h3 className="font-bold text-primary-500 mb-1">{item.term}</h3>
                  <p className="text-gray-400 text-sm">{item.def}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Help
