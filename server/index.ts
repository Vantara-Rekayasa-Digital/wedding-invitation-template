import cors from 'cors';
import express from 'express';
import { createConnection } from './db';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize database on server start
createConnection().then(() => {
    console.log('Database initialized');
});

// RSVP endpoints
app.post('/api/rsvp', async (req, res) => {
    try {
        const { name, attendance, guests, message } = req.body;

        if (!name || !attendance) {
            return res.status(400).json({
                success: false,
                message: 'Nama dan konfirmasi kehadiran harus diisi'
            });
        }

        const db = await createConnection();

        const result = await db.run(
            `INSERT INTO rsvp (name, attendance, guests, message, created_at)
       VALUES (?, ?, ?, ?, datetime('now'))`,
            [name, attendance, parseInt(guests) || 1, message || '']
        );

        await db.close();

        return res.status(201).json({
            success: true,
            message: 'RSVP berhasil disimpan',
            data: {
                id: result.lastID,
                name,
                attendance,
                guests,
                message
            }
        });
    } catch (error) {
        console.error('Error saving RSVP:', error);
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat menyimpan data'
        });
    }
});

app.get('/api/rsvp', async (req, res) => {
    try {
        const db = await createConnection();

        const rsvps = await db.all(
            'SELECT id, name, attendance, guests, message, created_at FROM rsvp ORDER BY created_at DESC'
        );

        await db.close();

        return res.status(200).json({
            success: true,
            data: rsvps
        });
    } catch (error) {
        console.error('Error fetching RSVPs:', error);
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat mengambil data'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
