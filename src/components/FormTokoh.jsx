import { useState } from "react";

function FormTokoh({ onTambah }) {
  const [nama, setNama] = useState("");
  const [negara, setNegara] = useState("");
  const [peran, setPeran] = useState("");
  const [biografi, setBiografi] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nama.trim() || !negara.trim() ||
        !peran.trim() || !biografi.trim()) {
      alert("Semua kolom harus diisi.");
      return;
    }

    onTambah({
      id: crypto.randomUUID(),
      nama: nama.trim(),
      negara: negara.trim(),
      peran: peran.trim(),
      biografi: biografi.trim(),
    });

    setNama("");
    setNegara("");
    setPeran("");
    setBiografi("");
  }

  return (
    <section className="panel">
      <h2>Tambah Tokoh</h2>
      <p className="panel-description">
        Masukkan informasi tokoh sejarah baru.
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

        <button type="submit" className="btn-primary">
          + Tambah Tokoh
        </button>
      </form>
    </section>
  );
}

export default FormTokoh;