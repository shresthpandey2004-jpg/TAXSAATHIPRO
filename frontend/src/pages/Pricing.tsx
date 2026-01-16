import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      features: [
        'Basic tax calculator',
        'Expense tracking',
        'Old vs New regime comparison',
        'Email support',
      ],
      cta: 'Get Started',
      link: '/signup',
      popular: false,
    },
    {
      name: 'Filing Plan',
      price: '₹999',
      period: 'per year',
      features: [
        'Everything in Free',
        'ITR filing assistance',
        'CA review',
        'Document upload',
        'Priority support',
        'Tax saving tips',
      ],
      cta: 'Start Filing',
      link: '/signup',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹1,999',
      period: 'per year',
      features: [
        'Everything in Filing',
        'Dedicated CA support',
        'GST assistance',
        'Quarterly reviews',
        'Advance tax planning',
        'Unlimited consultations',
      ],
      cta: 'Go Premium',
      link: '/signup',
      popular: false,
    },
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
            <h1 className="text-5xl font-bold mb-4 gradient-text">Simple Pricing</h1>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-8 rounded-2xl relative ${
                  plan.popular ? 'border-2 border-primary-500 glow-blue' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link}
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 btn-glow'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Can I switch plans later?',
                  a: 'Yes, you can upgrade or downgrade your plan anytime.',
                },
                {
                  q: 'Is my data secure?',
                  a: 'Absolutely! We use bank-level encryption to protect your data.',
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'Yes, we offer a 7-day money-back guarantee.',
                },
                {
                  q: 'Can I file for previous years?',
                  a: 'Yes, our CAs can help you file belated returns.',
                },
              ].map((faq, i) => (
                <div key={i} className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
