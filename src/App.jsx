
import { useEffect, useState } from 'react';

import AppHeader from './components/AppHeader';
import StatistikTokoh from './components/StatistikTokoh';
import FormTokoh from './components/FormTokoh';
import DaftarTokoh from './components/DaftarTokoh';
import AppFooter from './components/AppFooter';

import {
  getTokoh,
  tambahTokoh as tambahTokohAPI,
  updateTokoh as updateTokohAPI,
  hapusTokoh as hapusTokohAPI,
} from './services/api';

import './App.css';

function App() {
  const [tokohList, setTokohList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tokohEdit, setTokohEdit] = useState(null);

  // GET: Mengambil data dari backend
  useEffect(() => {
    const ambilDataTokoh = async () => {
      try {
        const data = await getTokoh();
        setTokohList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    ambilDataTokoh();
  }, []);

  // POST: Menambahkan tokoh
  const tambahTokoh = async (tokohBaru) => {
    try {
      const data = await tambahTokohAPI(tokohBaru);

      setTokohList((daftarSebelumnya) => [
        ...daftarSebelumnya,
        data,
      ]);

      setError('');
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // PATCH: Mengubah data tokoh
  const editTokoh = async (id, dataBaru) => {
    try {
      const data = await updateTokohAPI(id, dataBaru);

      setTokohList((daftarSebelumnya) =>
        daftarSebelumnya.map((tokoh) =>
          tokoh.id === id ? data : tokoh
        )
      );

      setTokohEdit(null);
      setError('');
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // DELETE: Menghapus tokoh
  const hapusTokoh = async (id) => {
    try {
      await hapusTokohAPI(id);

      setTokohList((daftarSebelumnya) =>
        daftarSebelumnya.filter((tokoh) => tokoh.id !== id)
      );

      if (tokohEdit?.id === id) {
        setTokohEdit(null);
      }

      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <AppHeader />

      <main className="container">
        <StatistikTokoh jumlah={tokohList.length} />

        {error && (
          <p className="error-message">{error}</p>
        )}

        {loading ? (
          <p>Memuat data tokoh sejarah...</p>
        ) : (
          <>
            <FormTokoh
              onTambah={tambahTokoh}
              onUpdate={editTokoh}
              tokohEdit={tokohEdit}
              onBatalEdit={() => setTokohEdit(null)}
            />

            <DaftarTokoh
              tokohList={tokohList}
              onHapus={hapusTokoh}
              onEdit={setTokohEdit}
            />
          </>
        )}
      </main>

      <AppFooter />
    </>
  );
}

export default App;
