import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { saveToGoogleDrive } from '@/lib/googleDrive';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message, location } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // Run both in parallel
        const [emailRes, driveRes] = await Promise.all([
            sendEmail({ name, email, message, location }).catch(err => {
                console.error('Email failed:', err);
                return null;
            }),
            saveToGoogleDrive({ name, email, message, location, timestamp: new Date().toISOString() }).catch(err => {
                console.error('Drive failed:', err);
                return null;
            })
        ]);

        if (!emailRes && !driveRes) {
            return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
