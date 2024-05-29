import { pathDatabase } from '@/helpers/route';
import Database from 'better-sqlite3';
import { readFileSync } from 'fs';

const db = new Database('store.db');
db.pragma('journal_mode = WAL');

const sqlFile = readFileSync(pathDatabase + '/init.sql', 'utf8');
db.exec(sqlFile);

export default db;
