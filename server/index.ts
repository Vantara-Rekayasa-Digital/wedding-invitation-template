import cors from 'cors';
import express from 'express';
import { createClient } from '@supabase/supabase-js';

// Load environment variables if available
if (typeof process.loadEnvFile === 'function') {
    try {
        process.loadEnvFile('.env.local');
    } catch {
        try {
            process.loadEnvFile('.env');
        } catch {
            // Ignore if files don't exist
        }
    }
}

const app = express();
const PORT = process.env.PORT || 3001;

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

app.use(cors());
app.use(express.json());

if (supabase) {
    console.log('Connected to Supabase:', supabaseUrl);
} else {
    console.warn('Warning: SUPABASE_URL or SUPABASE_KEY not set');
}

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

        if (!supabase) {
            return res.status(500).json({
                success: false,
                message: 'Supabase tidak terkonfigurasi. Pastikan SUPABASE_URL dan SUPABASE_KEY ada di .env'
            });
        }

        const { data, error } = await supabase
            .from('rsvp')
            .insert([
                {
                    name,
                    attendance,
                    guests: parseInt(guests) || 1,
                    message: message || ''
                }
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase insert error:', error);
            return res.status(500).json({
                success: false,
                message: `Gagal menyimpan data: ${error.message}`
            });
        }

        return res.status(201).json({
            success: true,
            message: 'RSVP berhasil disimpan',
            data
        });
    } catch (error) {
        console.error('Error saving RSVP:', error);
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat menyimpan data',
            error: error instanceof Error ? error.message : String(error)
        });
    }
});

app.get('/api/rsvp', async (req, res) => {
    try {
        if (!supabase) {
            return res.status(500).json({
                success: false,
                message: 'Supabase tidak terkonfigurasi'
            });
        }

        const { data, error } = await supabase
            .from('rsvp')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching RSVPs:', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data'
            });
        }

        return res.status(200).json({
            success: true,
            data
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

