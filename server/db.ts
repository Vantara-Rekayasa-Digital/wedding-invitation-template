import fs from 'fs';
import path from 'path';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';

const DB_PATH = process.env.NODE_ENV === 'production'
    ? '/tmp/rsvp.db'
    : path.join(process.cwd(), 'rsvp.db');

export async function createConnection(): Promise<Database> {
    // Ensure directory exists
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Open database connection
    const db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    // Create table if it doesn't exist
    await db.exec(`
    CREATE TABLE IF NOT EXISTS rsvp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      attendance TEXT NOT NULL,
      guests INTEGER DEFAULT 1,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

    return db;
}

export async function initializeDatabase() {
    const db = await createConnection();
    console.log('Database initialized successfully');
    await db.close();
}
