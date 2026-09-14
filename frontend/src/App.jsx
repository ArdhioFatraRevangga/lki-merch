import { useState, useEffect } from 'react'

function App() {
  // 1. Buat state untuk menyimpan pesan dari backend
  const [pesanBackend, setPesanBackend] = useState('Sedang memuat data...');

  // 2. Gunakan useEffect untuk melakukan fetch
  useEffect(() => {
    fetch('http://localhost:5050/')
      .then(response => response.json())
      .then(data => {
        setPesanBackend(data.pesan); // Simpan pesan ke dalam state
      })
      .catch(error => {
        console.error('Ada error:', error);
        setPesanBackend('Gagal terhubung ke server backend');
      });
  }, []); // Array kosong [] artinya fetch hanya dijalankan sekali saat komponen dimuat

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Proyek LKI Merch</h1>
      <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <strong>Status Backend:</strong> {pesanBackend}
      </div>
    </div>
  )
}

export default App