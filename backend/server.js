const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050; // Port kita ganti ke 5050

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ pesan: 'Halo dari backend Express.js lki-merch!' });
});

const server = app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});

// Menangkap error jika server langsung mati
server.on('error', (err) => {
  console.error('Terjadi error pada server:', err);
});
