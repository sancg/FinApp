import { db } from '../models/db';
import { Sell } from '../utils/types';

export function getSellsByWeek(weekNumber: number): Sell[] {
  const sells: Sell[] = db
    .prepare(
      `
    SELECT * FROM Sell
    WHERE strftime('%W', date) = ?
  `
    )
    .all(String(weekNumber)) as Sell[];

  return sells;
}
