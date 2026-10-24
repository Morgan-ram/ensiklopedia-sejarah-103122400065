function StatistikTokoh({ jumlah }) {
  return (
    <section className="statistik">
      <div>
        <span className="statistik-label">Koleksi Tokoh</span>
        <h2>{jumlah} Tokoh Sejarah</h2>
      </div>
      <span className="statistik-icon">📚</span>
    </section>
  );
}

export default StatistikTokoh;