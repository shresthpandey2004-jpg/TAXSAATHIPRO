# 🚀 TaxSaathi Pro - Complete Setup Guide

## Prerequisites

Before you begin, make sure you have:
- **Node.js 18+** installed
- **PostgreSQL** installed and running
- **Git** (optional, for version control)

## Step-by-Step Setup

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Setup PostgreSQL Database

Create a new PostgreSQL database:

```sql
CREATE DATABASE taxsaathi;
```

### 3. Configure Environment Variables

**Backend (.env):**
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/taxsaathi?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-this-to-something-random"
PORT=5000
NODE_ENV=development
```

**Frontend (.env):**
```bash
cd ../frontend
cp .env.example .env
```

The frontend `.env` should have:
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Run Database Migrations

```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start Development Servers

**Option 1 - Run both servers together (from root):**
```bash
npm run dev
```

**Option 2 - Run separately:**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

### 6. Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **API Health Check:** http://localhost:5000/api/health

## 🎨 Features Included

✅ Modern animated landing page with glassmorphism
✅ User authentication (signup/login)
✅ Tax calculator with Old vs New regime comparison
✅ Expense tracker
✅ Dashboard with stats
✅ Pricing page
✅ Help center
✅ Fully responsive design
✅ Smooth animations with Framer Motion
✅ Glow effects and modern UI

## 🔧 Troubleshooting

### Database Connection Error
- Make sure PostgreSQL is running
- Check your DATABASE_URL in backend/.env
- Verify database exists: `psql -l`

### Port Already in Use
- Change PORT in backend/.env
- Update VITE_API_URL in frontend/.env accordingly

### Module Not Found
- Run `npm install` in both frontend and backend folders
- Run `npx prisma generate` in backend folder

## 📝 Next Steps

1. Customize the design and colors
2. Add more features from your blueprint
3. Integrate payment gateway (Razorpay)
4. Add AI features (OpenAI API)
5. Deploy to production (Vercel + Railway)

## 🚀 Production Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy dist folder to Vercel
```

### Backend (Railway/Render)
```bash
cd backend
npm run build
# Deploy to Railway or Render
```

## 📞 Support

If you face any issues, check:
- Node.js version: `node --version` (should be 18+)
- PostgreSQL status: `pg_isready`
- All dependencies installed: `npm list`

Happy coding! 🎉
