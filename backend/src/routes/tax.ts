import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware, AuthRequest } from '../middleware/auth'

const router = express.Router()
const prisma = new PrismaClient()

// Calculate Tax
router.post('/calculate', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { income, expenses, tds } = req.body

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

    res.json({
      success: true,
      data: {
        taxableIncome,
        oldRegimeTax,
        newRegimeTax,
        recommendedRegime,
        finalTax,
        refund,
        savings: Math.abs(oldRegimeTax - newRegimeTax)
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Get Tax History
router.get('/history', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const filings = await prisma.filing.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: 'desc' },
    })

    res.json({ success: true, data: filings })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
