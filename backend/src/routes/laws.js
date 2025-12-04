import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/laws - list
router.get('/', async (req, res, next) => {
  try {
    const laws = await prisma.law.findMany({ orderBy: { id: 'asc' } });
    res.json(laws);
  } catch (err) { 
    next(err); 
  }
});

// GET /api/laws/:id - detail
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const law = await prisma.law.findUnique({ where: { id } });
    if (!law) return res.status(404).json({ error: 'Not found' });
    res.json(law);
  } catch (err) { 
    next(err); 
  }
});

export default router;  // Default export
