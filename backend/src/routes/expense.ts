import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware, AuthRequest } from '../middleware/auth'

const router = express.Router()
const prisma = new PrismaClient()

// Get all expenses
router.get('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: 'desc' },
    })

    res.json({ success: true, data: expenses })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Create expense
router.post('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { category, amount, description, financialYear } = req.body

    const expense = await prisma.expense.create({
      data: {
        userId: req.userId!,
        category,
        amount: parseFloat(amount),
        description,
        financialYear: financialYear || '2024-25',
        date: new Date(),
      },
    })

    res.status(201).json({ success: true, data: expense })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Delete expense
router.delete('/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params

    await prisma.expense.delete({
      where: {
        id,
        userId: req.userId,
      },
    })

    res.json({ success: true, message: 'Expense deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
