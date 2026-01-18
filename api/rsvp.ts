import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Check if Supabase is configured
    if (!supabase) {
        console.error('Supabase not configured:', { supabaseUrl, hasKey: !!supabaseKey });
        return res.status(500).json({
            success: false,
            message: 'Database tidak terkonfigurasi. Silakan setup Supabase.',
            debug: {
                hasUrl: !!supabaseUrl,
                hasKey: !!supabaseKey
            }
        });
    }

    if (req.method === 'POST') {
        try {
            const { name, attendance, guests, message } = req.body;

            if (!name || !attendance) {
                return res.status(400).json({
                    success: false,
                    message: 'Nama dan konfirmasi kehadiran harus diisi'
                });
            }

            // Insert RSVP data to Supabase
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
                    message: `Gagal menyimpan data: ${error.message}`,
                    error: error.message
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
                success: false,,
                error: error instanceof Error ? error.message : String(error)
                message: 'Terjadi kesalahan saat menyimpan data'
            });
        }
    }

    if (req.method === 'GET') {
        try {
            const { data, error } = await supabase
                .from('rsvp')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Supabase error:', error);
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
    }

    return res.status(405).json({
        success: false,
        message: 'Method not allowed'
    });
}
