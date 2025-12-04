import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import lawsRouter from './routes/laws.js';  // Add `.js` to local imports
import authRouter from './routes/auth.js';  // Default import

// Initialize Prisma Client and Express app
const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Simple health check route
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: Date.now() }));

// Routers
app.use('/api/laws', lawsRouter);
app.use('/api/auth', authRouter);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// Set port and start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
