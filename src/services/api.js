
const API_URL = 'http://localhost:3000/tokoh-sejarah';

export const getTokoh = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Gagal mengambil data tokoh');
  return response.json();
};

export const tambahTokoh = async (data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Gagal menambahkan tokoh');
  return response.json();
};

export const updateTokoh = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Gagal mengubah tokoh');
  return response.json();
};

export const hapusTokoh = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Gagal menghapus tokoh');
  return response.json();
};
