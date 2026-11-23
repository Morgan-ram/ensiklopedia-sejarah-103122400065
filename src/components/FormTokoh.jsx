
import { useState, useEffect } from "react";

function FormTokoh({ onTambah, onUpdate, tokohEdit, onBatalEdit }) {
  const [nama, setNama] = useState("");
  const [negara, setNegara] = useState("");
  const [peran, setPeran] = useState("");
  const [biografi, setBiografi] = useState("");
  const [tahunLahir, setTahunLahir] = useState("");

  // Mengisi form ketika tombol Edit dipilih
  useEffect(() => {
    if (tokohEdit) {
      setNama(tokohEdit.nama);
      setNegara(tokohEdit.negara);
      setPeran(tokohEdit.peran);
      setBiografi(tokohEdit.biografi);
      setTahunLahir(String(tokohEdit.tahunLahir));
    }
  }, [tokohEdit]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !nama.trim() ||
      !negara.trim() ||
      !peran.trim() ||
      !biografi.trim() ||
      !tahunLahir
    ) {
      alert("Semua kolom harus diisi.");
      return;
    }

    const dataTokoh = {
      nama: nama.trim(),
      negara: negara.trim(),
      peran: peran.trim(),
      biografi: biografi.trim(),
      tahunLahir: Number(tahunLahir),
    };

    let berhasil;

    if (tokohEdit) {
      berhasil = await onUpdate(tokohEdit.id, dataTokoh);
    } else {
      berhasil = await onTambah(dataTokoh);
    }

    if (berhasil === false) return;

    resetForm();
  }

  function resetForm() {
    setNama("");
    setNegara("");
    setPeran("");
    setBiografi("");
    setTahunLahir("");

    if (tokohEdit) {
      onBatalEdit();
    }
  }

  return (
    <section className="panel">
      <h2>{tokohEdit ? "Edit Tokoh" : "Tambah Tokoh"}</h2>

      <p className="panel-description">
        {tokohEdit
          ? "Perbarui informasi tokoh sejarah."
          : "Masukkan informasi tokoh sejarah baru."}
      </p>

      <form onSubmit={handleSubmit} className="form-tokoh">
        <label htmlFor="nama">Nama tokoh</label>
        <input
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: R.A. Kartini"
          required
        />

        <label htmlFor="negara">Negara atau wilayah asal</label>
        <input
          id="negara"
          value={negara}
          onChange={(e) => setNegara(e.target.value)}
          placeholder="Contoh: Indonesia"
          required
        />

        <label htmlFor="peran">Peran atau bidang</label>
        <input
          id="peran"
          value={peran}
          onChange={(e) => setPeran(e.target.value)}
          placeholder="Contoh: Tokoh emansipasi"
          required
        />

        <label htmlFor="biografi">Biografi singkat</label>
        <textarea
          id="biografi"
          value={biografi}
          onChange={(e) => setBiografi(e.target.value)}
          placeholder="Tuliskan kontribusi tokoh..."
          rows="3"
          required
        />

        <label htmlFor="tahunLahir">Tahun lahir</label>
        <input
          id="tahunLahir"
          type="number"
          value={tahunLahir}
          onChange={(e) => setTahunLahir(e.target.value)}
          placeholder="Contoh: 1879"
          min="1"
          required
        />

        <button type="submit" className="btn-primary">
          {tokohEdit ? "Simpan Perubahan" : "+ Tambah Tokoh"}
        </button>

        {tokohEdit && (
          <button
            type="button"
            onClick={resetForm}
          >
            Batal Edit
          </button>
        )}
      </form>
    </section>
  );
}

export default FormTokoh;
