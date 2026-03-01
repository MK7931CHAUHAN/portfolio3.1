import { google } from 'googleapis';
import { Readable } from 'stream';

export const saveToGoogleDrive = async (data: any) => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const fileName = `message_${data.name.replace(/\s+/g, '_')}_${Date.now()}.json`;
    const fileMetadata = {
        name: fileName,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
    };

    const media = {
        mimeType: 'application/json',
        body: Readable.from([JSON.stringify(data, null, 2)]),
    };

    try {
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id',
        });
        return response.data;
    } catch (error) {
        console.error('Google Drive Error:', error);
        throw error;
    }
};
