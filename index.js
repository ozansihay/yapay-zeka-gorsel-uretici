import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Görsel Üretme Endpoint'i
app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(`${process.env.POLLINATIONS_API_URL}/${encodeURIComponent(prompt)}?width=1024&height=1024`);
    
    if (!response.ok) {
      throw new Error('Görsel oluşturulamadı');
    }

    const imageBuffer = await response.buffer();

    res.set('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('API Hatası:', error);
    res.status(500).json({ error: 'Görsel üretilemedi. Lütfen tekrar deneyin.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});