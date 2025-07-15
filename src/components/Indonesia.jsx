import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Indonesia() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const filmsPerPage = 20; 

  const filmIndonesia = [
    {
      id: 1,
      judul: "Laskar Pelangi",
      tahun: 2008,
      rating: 4.8,
      durasi: "2j 6m",
      genre: ["Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/7/7b/Laskar_Pelangi.jpg/220px-Laskar_Pelangi.jpg",
      deskripsi:
        "Kisah 10 anak desa dari Belitung yang berjuang untuk mendapatkan pendidikan di tengah keterbatasan ekonomi.",
      director: "Riri Riza",
    },
    {
      id: 2,
      judul: "Ada Apa Dengan Cinta?",
      tahun: 2002,
      rating: 4.5,
      durasi: "1j 52m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/1/1a/Ada_Apa_Dengan_Cinta.jpg/220px-Ada_Apa_Dengan_Cinta.jpg",
      deskripsi:
        "Kisah cinta remaja antara Cinta yang populer dan Rangga yang misterius, diwarnai dengan puisi dan konflik.",
      director: "Rudy Soedjarwo",
    },
    {
      id: 3,
      judul: "Ayat-Ayat Cinta",
      tahun: 2008,
      rating: 4.3,
      durasi: "2j 5m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Ayat-ayat_cinta_film.jpg/220px-Ayat-ayat_cinta_film.jpg",
      deskripsi:
        "Seorang mahasiswa Indonesia di Mesir menghadapi dilema cinta dan takdir.",
      director: "Hanung Bramantyo",
    },
    {
      id: 4,
      judul: "Pengabdi Setan",
      tahun: 2017,
      rating: 4.6,
      durasi: "1j 47m",
      genre: ["Horror", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/7/7e/Pengabdi_Setan_film.jpg/220px-Pengabdi_Setan_film.jpg",
      deskripsi:
        "Sebuah keluarga dihantui setelah kematian ibu mereka, yang ternyata merupakan pengikut sekte sesat.",
      director: "Joko Anwar",
    },
    {
      id: 5,
      judul: "Filosofi Kopi",
      tahun: 2015,
      rating: 4.2,
      durasi: "1j 57m",
      genre: ["Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/3/36/Poster_Filosofi_Kopi.jpg/220px-Poster_Filosofi_Kopi.jpg",
      deskripsi:
        "Dua sahabat dengan impian berbeda membuka kedai kopi yang penuh cerita.",
      director: "Angga Dwimas Sasongko",
    },
    {
      id: 6,
      judul: "Sang Pemimpi",
      tahun: 2009,
      rating: 4.7,
      durasi: "2j 5m",
      genre: ["Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/f/f6/Sang_Pemimpi.jpg/220px-Sang_Pemimpi.jpg",
      deskripsi:
        "Sekuel dari Laskar Pelangi, mengisahkan perjuangan Ikal dan Arai di bangku SMA dan impian mereka untuk kuliah di luar negeri.",
      director: "Riri Riza",
    },
    {
      id: 7,
      judul: "Habibie & Ainun",
      tahun: 2012,
      rating: 4.6,
      durasi: "2j 12m",
      genre: ["Biography", "Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Habibie_dan_Ainun.jpg/220px-Habibie_dan_Ainun.jpg",
      deskripsi:
        "Kisah cinta inspiratif antara B.J. Habibie, presiden ketiga Indonesia, dan istrinya, Hasri Ainun Besari.",
      director: "Faozan Rizal",
    },
    {
      id: 8,
      judul: "Gundala",
      tahun: 2019,
      rating: 4.4,
      durasi: "1j 57m",
      genre: ["Action", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d4/Gundala_film_poster.jpg/220px-Gundala_film_poster.jpg",
      deskripsi:
        "Seorang penjaga keamanan yang memiliki kekuatan super bangkit untuk melawan kejahatan dan korupsi di kota.",
      director: "Joko Anwar",
    },
    {
      id: 9,
      judul: "Modus Anomali",
      tahun: 2012,
      rating: 4.0,
      durasi: "1j 27m",
      genre: ["Horror", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/e/ef/Modus_Anomali.jpg/220px-Modus_Anomali.jpg",
      deskripsi:
        "Seorang pria terbangun di tengah hutan tanpa ingatan, dan harus bertahan hidup dari pembunuh tak dikenal.",
      director: "Joko Anwar",
    },
    {
      id: 10,
      judul: "The Raid: Redemption",
      tahun: 2011,
      rating: 4.7,
      durasi: "1j 41m",
      genre: ["Action", "Crime", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/The_Raid_Redemption_poster.jpg/220px-The_Raid_Redemption_poster.jpg",
      deskripsi:
        "Sebuah tim SWAT terjebak di gedung apartemen yang dikuasai oleh gembong narkoba dan tentaranya.",
      director: "Gareth Evans",
    },
    {
      id: 11,
      judul: "Cek Toko Sebelah",
      tahun: 2016,
      rating: 4.5,
      durasi: "1j 38m",
      genre: ["Comedy", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/4/4e/Cek_Toko_Sebelah_poster.jpg/220px-Cek_Toko_Sebelah_poster.jpg",
      deskripsi:
        "Kisah tentang seorang anak yang harus memilih antara kariernya atau melanjutkan toko kelontong ayahnya.",
      director: "Ernest Prakasa",
    },
    {
      id: 12,
      judul: "Marlina si Pembunuh dalam Empat Babak",
      tahun: 2017,
      rating: 4.3,
      durasi: "1j 33m",
      genre: ["Drama", "Thriller", "Western"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/c/ce/Marlina_Si_Pembunuh_Dalam_Empat_Babak_poster.jpg/220px-Marlina_Si_Pembunuh_Dalam_Empat_Babak_poster.jpg",
      deskripsi:
        "Seorang janda muda di Sumba membalas dendam setelah dirampok dan diserang.",
      director: "Mouly Surya",
    },
    {
      id: 13,
      judul: "Nanti Kita Cerita Tentang Hari Ini",
      tahun: 2020,
      rating: 4.4,
      durasi: "2j 1m",
      genre: ["Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/4/41/NKCTHI_film_poster.jpg/220px-NKCTHI_film_poster.jpg",
      deskripsi:
        "Tiga bersaudara menghadapi krisis keluarga yang mengungkap rahasia masa lalu.",
      director: "Angga Dwimas Sasongko",
    },
    {
      id: 14,
      judul: "Dilan 1990",
      tahun: 2018,
      rating: 4.0,
      durasi: "1j 50m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/2/25/Dilan_1990_film_poster.jpg/220px-Dilan_1990_film_poster.jpg",
      deskripsi:
        "Kisah cinta remaja antara Milea dan Dilan, seorang ketua geng motor yang unik di Bandung tahun 1990.",
      director: "Fajar Bustomi, Pidi Baiq",
    },
    {
      id: 15,
      judul: "Gie",
      tahun: 2005,
      rating: 4.7,
      durasi: "2j 45m",
      genre: ["Biography", "Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/3/3b/Gie_%282005_film%29_poster.jpg/220px-Gie_%282005_film%29_poster.jpg",
      deskripsi:
        "Biografi Soe Hok Gie, seorang aktivis mahasiswa yang kritis terhadap pemerintahan pada tahun 1960-an.",
      director: "Riri Riza",
    },
    {
      id: 16,
      judul: "A Copy of My Mind",
      tahun: 2015,
      rating: 4.2,
      durasi: "1j 40m",
      genre: ["Drama", "Romance", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/6/6f/A_Copy_of_My_Mind_poster.jpg/220px-A_Copy_of_My_Mind_poster.jpg",
      deskripsi:
        "Kisah cinta antara seorang pekerja salon dan seorang pembajak DVD yang terjerat dalam masalah kejahatan.",
      director: "Joko Anwar",
    },
    {
      id: 17,
      judul: "Warkop DKI Reborn: Jangkrik Boss! Part 1",
      tahun: 2016,
      rating: 3.9,
      durasi: "1j 39m",
      genre: ["Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/0/05/Warkop_DKI_Reborn_Jangkrik_Boss%21_Part_1.jpg/220px-Warkop_DKI_Reborn_Jangkrik_Boss%21_Part_1.jpg",
      deskripsi:
        "Tiga sahabat Dono, Kasino, dan Indro, terlibat dalam petualangan kocak untuk membayar utang.",
      director: "Anggy Umbara",
    },
    {
      id: 18,
      judul: "Atomic Heart (Guru Bangsa Tjokroaminoto)",
      tahun: 2015,
      rating: 4.3,
      durasi: "2j 40m",
      genre: ["Biography", "Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d4/Guru_Bangsa_Tjokroaminoto_%282015%29_poster.jpeg/220px-Guru_Bangsa_Tjokroaminoto_%282015%29_poster.jpeg",
      deskripsi:
        "Kisah hidup H.O.S. Tjokroaminoto, salah satu pelopor pergerakan nasional Indonesia.",
      director: "Garin Nugroho",
    },
    {
      id: 19,
      judul: "Kartini",
      tahun: 2017,
      rating: 4.1,
      durasi: "2j 11m",
      genre: ["Biography", "Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/Kartini_film.jpg/220px-Kartini_film.jpg",
      deskripsi:
        "Biografi Raden Ajeng Kartini, pelopor kebangkitan perempuan di Indonesia.",
      director: "Hanung Bramantyo",
    },
    {
      id: 20,
      judul: "Seperti Dendam, Rindu Harus Dibayar Tuntas",
      tahun: 2021,
      rating: 4.5,
      durasi: "1j 54m",
      genre: ["Action", "Drama", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/1/18/Vengeance_Is_Mine%2C_All_Others_Pay_Cash_poster.jpg/220px-Vengeance_Is_Mine%2C_All_Others_Pay_Cash_poster.jpg",
      deskripsi:
        "Seorang preman jalanan yang impoten berusaha membalas dendam dan menemukan cinta.",
      director: "Edwin",
    },
    {
      id: 21,
      judul: "Pengabdi Setan 2: Communion",
      tahun: 2022,
      rating: 4.6,
      durasi: "1j 59m",
      genre: ["Horror", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/b/b3/Pengabdi_Setan_2_Communion.jpg/220px-Pengabdi_Setan_2_Communion.jpg",
      deskripsi:
        "Keluarga Rini dan adik-adiknya pindah ke rumah susun dan kembali diteror oleh ibu dan makhluk gaib.",
      director: "Joko Anwar",
    },
    {
      id: 22,
      judul: "Keluarga Cemara",
      tahun: 2018,
      rating: 4.4,
      durasi: "1j 50m",
      genre: ["Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Keluarga_Cemara_film.jpg/220px-Keluarga_Cemara_film.jpg",
      deskripsi:
        "Keluarga yang kaya raya mendadak jatuh miskin dan harus beradaptasi dengan kehidupan baru di desa.",
      director: "Yandy Laurens",
    },
    {
      id: 23,
      judul: "Impetigore (Perempuan Tanah Jahanam)",
      tahun: 2019,
      rating: 4.5,
      durasi: "1j 46m",
      genre: ["Horror", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/e/e8/Perempuan_Tanah_Jahanam_poster.jpg/220px-Perempuan_Tanah_Jahanam_poster.jpg",
      deskripsi:
        "Seorang wanita kembali ke desa asalnya untuk mencari tahu tentang warisan keluarga, namun menemukan kutukan mengerikan.",
      director: "Joko Anwar",
    },
    {
      id: 24,
      judul: "Love For Sale",
      tahun: 2018,
      rating: 4.1,
      durasi: "1j 45m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/6/69/Love_For_Sale_%28film%29.jpg/220px-Love_For_Sale_%28film%29.jpg",
      deskripsi:
        "Seorang pria kesepian menyewa teman kencan dari aplikasi online, namun segalanya menjadi rumit ketika dia mulai jatuh cinta.",
      director: "Andibachtiar Yusuf",
    },
    {
      id: 25,
      judul: "Aruna & Lidahnya",
      tahun: 2018,
      rating: 4.3,
      durasi: "1j 46m",
      genre: ["Comedy", "Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/8/87/Aruna_%26_Lidahnya_poster.jpg/220px-Aruna_%26_Lidahnya_poster.jpg",
      deskripsi:
        "Seorang ahli epidemiologi yang suka makanan melakukan perjalanan dinas yang membawanya ke petualangan kuliner dan percintaan.",
      director: "Edwin",
    },
    {
      id: 26,
      judul: "The Raid 2",
      tahun: 2014,
      rating: 4.6,
      durasi: "2j 30m",
      genre: ["Action", "Crime", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_Raid_2_poster.jpg/220px-The_Raid_2_poster.jpg",
      deskripsi:
        "Rama menyusup ke dunia kejahatan bawah tanah Jakarta untuk mengungkap korupsi di kepolisian.",
      director: "Gareth Evans",
    },
    {
      id: 27,
      judul: "KKN di Desa Penari",
      tahun: 2022,
      rating: 3.8,
      durasi: "2j 10m",
      genre: ["Horror", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/4/4b/Poster_film_KKN_di_Desa_Penari.jpeg/220px-Poster_film_KKN_di_Desa_Penari.jpeg",
      deskripsi:
        "Enam mahasiswa mengalami kejadian mistis selama program KKN di sebuah desa terpencil.",
      director: "Awi Suryadi",
    },
    {
      id: 28,
      judul: "Dua Garis Biru",
      tahun: 2019,
      rating: 4.2,
      durasi: "1j 53m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/5/52/Dua_Garis_Biru_poster.jpg/220px-Dua_Garis_Biru_poster.jpg",
      deskripsi:
        "Kisah sepasang kekasih remaja yang harus menghadapi konsekuensi kehamilan di luar nikah.",
      director: "Gina S. Noer",
    },
    {
      id: 29,
      judul: "Suzzanna: Bernapas dalam Kubur",
      tahun: 2018,
      rating: 3.9,
      durasi: "2j 15m",
      genre: ["Horror"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Suzzanna_Bernapas_Dalam_Kubur.jpg/220px-Suzzanna_Bernapas_Dalam_Kubur.jpg",
      deskripsi:
        "Suzzanna, seorang wanita yang dibunuh, kembali sebagai kuntilanak untuk membalas dendam.",
      director: "Anggy Umbara, Rocky Soraya",
    },
    {
      id: 30,
      judul: "Miracle in Cell No. 7 (Indonesia)",
      tahun: 2022,
      rating: 4.5,
      durasi: "2j 24m",
      genre: ["Comedy", "Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d4/Miracle_in_Cell_No._7_versi_Indonesia.jpg/220px-Miracle_in_Cell_No._7_versi_Indonesia.jpg",
      deskripsi:
        "Seorang ayah dengan keterbelakangan mental dipenjara karena kejahatan yang tidak dilakukannya, dan putrinya berjuang untuk membuktikan ketidakbersalahannya.",
      director: "Hanung Bramantyo",
    },
    {
      id: 31,
      judul: "Seperti Hujan yang Jatuh ke Bumi",
      tahun: 2020,
      rating: 4.1,
      durasi: "1j 48m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/9/9f/Seperti_Hujan_yang_Jatuh_ke_Bumi.jpg/220px-Seperti_Hujan_yang_Jatuh_ke_Bumi.jpg",
      deskripsi:
        "Kisah cinta segitiga dan persahabatan di antara tiga anak muda.",
      director: "Lasja F. Susatyo",
    },
    {
      id: 32,
      judul: "Dear Nathan",
      tahun: 2017,
      rating: 3.8,
      durasi: "1j 50m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Poster_Dear_Nathan.jpg/220px-Poster_Dear_Nathan.jpg",
      deskripsi:
        "Salma, seorang siswi pindahan yang cerdas, jatuh cinta pada Nathan, seorang berandalan sekolah.",
      director: "Indra Jayanath",
    },
  ];

  const totalPages = Math.ceil(filmIndonesia.length / filmsPerPage);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmIndonesia.slice(indexOfFirstFilm, indexOfLastFilm);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative w-4 h-4">
                <Star className="absolute w-4 h-4 fill-gray-300 text-gray-300" />
                <Star className="absolute w-4 h-4 fill-yellow-400 text-yellow-400 clip-half" />
              </div>
            );
          } else {
            return (
              <Star
                key={i}
                className="w-4 h-4 fill-gray-300 text-gray-300"
              />
            );
          }
        })}
        <span className="ml-1 text-sm text-gray-300">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-green-900 p-6 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {[...Array(200)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Konten utama */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-start mb-4">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer px-4 py-2 bg-gray-700 rounded-lg text-white font-medium flex items-center hover:bg-gray-600 transition duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text">
            Koleksi Film Indonesia
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Temukan pilihan film-film Indonesia terbaik yang diakui secara kritis
          </p>
        </header>

        {/* Grid Film */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="cursor-pointer group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 25px rgba(52, 211, 153, 0.3)", 
                }}
              ></div>

              <div className="relative h-96 overflow-hidden">
                {" "}
                {/* Adjusted height to h-96 for poster size */}
                <img
                  src={film.gambar}
                  alt={film.judul}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <span className="bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {film.durasi}
                  </span>
                  <span className="bg-gray-900/90 text-white text-xs px-2 py-1 rounded-full">
                    {film.tahun}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {film.judul}
                  </h2>
                  <RatingStars rating={film.rating} />
                </div>

                <div className="flex flex-wrap gap-1">
                  {film.genre.map((g, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded-full group-hover:bg-emerald-500/20 group-hover:text-emerald-300"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2 animate-fade-in">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  currentPage === i + 1
                    ? "bg-emerald-500 text-white font-bold"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              Selanjutnya
            </button>
          </div>
        )}

        {/* Modal Expanded View */}
        {selectedFilm && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedFilm(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 text-white max-w-3xl w-full rounded-xl p-6 shadow-lg scale-95 animate-scale-in relative"
            >
              <button
                onClick={() => setSelectedFilm(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={selectedFilm.gambar}
                  alt={selectedFilm.judul}
                  className="w-full md:w-1/2 rounded-lg object-cover"
                />
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-emerald-400">
                    {selectedFilm.judul}
                  </h2>
                  <p className="mt-2 text-sm text-gray-300">
                    {selectedFilm.deskripsi}
                  </p>
                  <div className="mt-3">
                    <p className="text-sm">
                      <strong>Tahun:</strong> {selectedFilm.tahun}
                    </p>
                    <p className="text-sm">
                      <strong>Durasi:</strong> {selectedFilm.durasi}
                    </p>
                    <p className="text-sm">
                      <strong>Rating:</strong>{" "}
                      <span className="inline-block">
                        <RatingStars rating={selectedFilm.rating} />
                      </span>
                    </p>
                    <p className="text-sm">
                      <strong>Genre:</strong>{" "}
                      {selectedFilm.genre.join(", ")}
                    </p>
                    <p className="text-sm">
                      <strong>Sutradara:</strong> {selectedFilm.director}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 pb-10">
          <p className="text-gray-500 text-sm">
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmIndonesia.length)} dari {filmIndonesia.length} film Indonesia
          </p>
        </footer>
      </div>

      {/* Animasi */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .clip-half {
          clip-path: inset(0 50% 0 0);
        }
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Indonesia;