# 🚀 TaxSaathi Pro

**Modern, Animated Tax Filing Platform for Indian Gig Workers, Freelancers & Creators**

A fully functional SaaS platform with stunning animations, glassmorphism UI, and complete backend integration!

---

## ✨ Features

### 🎨 Design & Animations
- Modern UI with **Glassmorphism** & **Glow Effects**
- Smooth animations with **Framer Motion**
- Gradient backgrounds & neon effects
- Fully responsive design (mobile-first)
- Custom scrollbars & hover effects
- Dark theme with sky blue accents

### 🔐 Authentication
- User signup & login
- JWT token-based security
- Protected routes
- Password hashing with bcrypt
- Session management

### 🧮 Tax Calculator
- **Old vs New Regime** comparison
- **Presumptive Taxation** (Section 44ADA)
- TDS & refund calculation
- Visual tax breakdown
- Recommended regime suggestion

### 📊 Expense Tracker
- Add/delete expenses
- Category-wise tracking
- Real-time total calculation
- Date-wise records

### � Pages (8 Total)
1. **Landing** - Hero, features, how it works
2. **Login** - Animated login form
3. **Signup** - User registration
4. **Dashboard** - Stats & quick actions
5. **Tax Calculator** - Full tax calculation
6. **Expense Tracker** - Expense management
7. **Pricing** - 3-tier pricing plans
8. **Help** - Tax guides & glossary

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** (⚡ super fast)
- **TypeScript** (type safety)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (smooth animations)
- **React Router v6** (routing)
- **Axios** (API calls)
- **React Hot Toast** (notifications)
- **React Icons** (icon library)

### Backend
- **Node.js** + **Express** (REST API)
- **TypeScript** (type safety)
- **Prisma ORM** (database)
- **PostgreSQL** (database)
- **JWT** (authentication)
- **Bcrypt** (password hashing)
- **CORS** (cross-origin)

---

## 📦 Quick Start (5 Minutes)

### Prerequisites
- Node.js 18+ installed
- PostgreSQL installed and running

### Installation

```bash
# 1. Install all dependencies
npm run install-all

# 2. Setup backend environment
cd backend
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# 3. Setup frontend environment
cd ../frontend
cp .env.example .env

# 4. Run database migrations
cd ../backend
npx prisma migrate dev --name init
npx prisma generate

# 5. Start both servers (from root)
cd ..
npm run dev
```

### Access the App
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health

---

## � Project Structure

```
TaxSaathi-Pro/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # 8 pages with animations
│   │   ├── context/      # Auth context
│   │   ├── services/     # API integration
│   │   └── types/        # TypeScript types
│   └── package.json
│
├── backend/               # Express backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth middleware
│   │   └── server.ts     # Express server
│   ├── prisma/
│   │   └── schema.prisma # Database schema
│   └── package.json
│
├── README.md              # This file
├── SETUP_GUIDE.md        # Detailed setup
├── QUICK_START.txt       # Quick reference
├── FEATURES.md           # Complete features
└── PROJECT_SUMMARY.md    # Project overview
```

---

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Tax
- `POST /api/tax/calculate` - Calculate tax
- `GET /api/tax/history` - Get filing history (protected)

### Expenses
- `GET /api/expenses` - Get all expenses (protected)
- `POST /api/expenses` - Create expense (protected)
- `DELETE /api/expenses/:id` - Delete expense (protected)

---

## 🎨 Design Highlights

- **Color Scheme:** Dark theme with sky blue (#0ea5e9)
- **Typography:** System fonts for performance
- **Animations:** 60fps smooth transitions
- **Glassmorphism:** Frosted glass cards
- **Glow Effects:** Neon-style button glows
- **Responsive:** Mobile, tablet, desktop

---

## 🔧 Configuration

### Backend (.env)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/taxsaathi"
JWT_SECRET="your-secret-key"
PORT=5000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel
```

### Backend (Railway/Render)
```bash
cd backend
npm run build
# Deploy to Railway or Render with PostgreSQL
```

---

## 📚 Documentation

- **SETUP_GUIDE.md** - Detailed setup instructions
- **QUICK_START.txt** - Quick 5-minute setup
- **FEATURES.md** - Complete feature list
- **PROJECT_SUMMARY.md** - Project overview

---

## 🐛 Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check DATABASE_URL in backend/.env
- Verify database exists: `psql -l`

### Port Already in Use
- Change PORT in backend/.env
- Update VITE_API_URL in frontend/.env

### Module Not Found
- Run `npm install` in both folders
- Run `npx prisma generate` in backend

---

## 🎯 What's Next?

### Phase 2 Features
- AI Tax Assistant (ChatGPT integration)
- Document upload & storage
- CA dashboard
- Payment integration (Razorpay)
- Email notifications
- Referral program

### Phase 3 Features
- GST module
- Accounting features
- Mobile app (React Native)
- Admin analytics
- Loan readiness reports

---

## 📝 License

MIT License - Feel free to use for your projects!

---

## 🎉 Credits

Built with ❤️ for Indian Gig Workers, Freelancers & Creators

**Tech Stack:** React + TypeScript + Tailwind + Framer Motion + Node.js + Express + Prisma + PostgreSQL

---

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review the troubleshooting section
3. Ensure all dependencies are installed

---

**Happy Coding! 🚀**
