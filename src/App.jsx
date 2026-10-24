import { useState } from "react";
import AppHeader from "./components/AppHeader";
import StatistikTokoh from "./components/StatistikTokoh";
import FormTokoh from "./components/FormTokoh";
import DaftarTokoh from "./components/DaftarTokoh";
import AppFooter from "./components/AppFooter";
import "./App.css";

const dataAwal = [
  {
    id: "tokoh-1",
    nama: "R.A. Kartini",
    negara: "Indonesia",
    peran: "Pelopor emansipasi perempuan",
    biografi:
      "R.A. Kartini dikenal melalui pemikirannya tentang pendidikan dan kesetaraan kesempatan bagi perempuan.",
  },
  {
    id: "tokoh-2",
    nama: "Soekarno",
    negara: "Indonesia",
    peran: "Proklamator dan presiden pertama",
    biografi:
      "Soekarno berperan penting dalam perjuangan kemerdekaan Indonesia dan membacakan teks proklamasi pada 17 Agustus 1945.",
  },
  {
    id: "tokoh-3",
    nama: "Marie Curie",
    negara: "Polandia dan Prancis",
    peran: "Ilmuwan fisika dan kimia",
    biografi:
      "Marie Curie melakukan penelitian penting tentang radioaktivitas dan menjadi perempuan pertama yang menerima Hadiah Nobel.",
  },
];

function App() {
  const [tokohList, setTokohList] = useState(dataAwal);

  function tambahTokoh(tokohBaru) {
    setTokohList((daftarSebelumnya) => [
      ...daftarSebelumnya,
      tokohBaru,
    ]);
  }

  function hapusTokoh(id) {
    setTokohList((daftarSebelumnya) =>
      daftarSebelumnya.filter((tokoh) => tokoh.id !== id)
    );
  }

  return (
    <div className="app-container">
      <AppHeader />

      <main className="main-content">
        <StatistikTokoh jumlah={tokohList.length} />

        <div className="layout-grid">
          <FormTokoh onTambah={tambahTokoh} />

          <DaftarTokoh
            tokohList={tokohList}
            onHapus={hapusTokoh}
          />
        </div>
      </main>

      <AppFooter />
    </div>
  );
}

export default App;