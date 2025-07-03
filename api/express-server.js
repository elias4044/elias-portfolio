/*
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                embeds: [{
                    title: '📬 New Message from Portfolio Contact Form',
                    fields: [
                        { name: 'Name', value: name },
                        { name: 'Email', value: email },
                        { name: 'Message', value: message }
                    ],
                    color: 0x00ff99,
                    timestamp: new Date().toISOString()
                }]
            })
        });

        return res.json({ success: true });
    } catch (error) {
        console.error('Error sending to Discord:', error);
        return res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

*/
