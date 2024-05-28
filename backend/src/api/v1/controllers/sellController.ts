import { Request, Response } from 'express';
import { getSellsByWeek } from '../services/sellService';

export function getSells(req: Request, res: Response) {
  const weekNumber = parseInt(req.query.week as string, 10);
  console.log(weekNumber);
  if (isNaN(weekNumber)) {
    return res.status(400).json({ error: 'Invalid week number' });
  }
  try {
    const sells = getSellsByWeek(weekNumber);
    res.json(sells);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
