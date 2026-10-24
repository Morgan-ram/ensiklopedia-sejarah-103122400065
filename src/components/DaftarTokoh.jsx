import KartuTokoh from "./KartuTokoh";

function DaftarTokoh({ tokohList, onHapus }) {
  return (
    <section className="panel daftar-panel">
      <h2>Daftar Tokoh Sejarah</h2>
      <p className="panel-description">
        Jelajahi tokoh-tokoh yang tercatat dalam koleksi.
      </p>

      {tokohList.length === 0 ? (
        <p className="data-kosong">
          Belum ada data TokohSejarah.
        </p>
      ) : (
        <div className="daftar-tokoh">
          {tokohList.map((tokoh) => (
            <KartuTokoh
              key={tokoh.id}
              tokoh={tokoh}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DaftarTokoh;