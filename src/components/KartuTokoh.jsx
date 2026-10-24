function KartuTokoh({ tokoh, onHapus }) {
  return (
    <article className="kartu-tokoh">
      <div className="kartu-ikon">🏛️</div>

      <div className="kartu-konten">
        <span className="negara">{tokoh.negara}</span>
        <h3>{tokoh.nama}</h3>
        <p className="peran">{tokoh.peran}</p>
        <p className="biografi">{tokoh.biografi}</p>

        <button
          type="button"
          className="btn-hapus"
          onClick={() => onHapus(tokoh.id)}
          aria-label={`Hapus ${tokoh.nama}`}
        >
          Hapus tokoh
        </button>
      </div>
    </article>
  );
}

export default KartuTokoh;