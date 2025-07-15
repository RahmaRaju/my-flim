import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function India() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filmsPerPage = 20; 

  const filmIndia = [
    {
      id: 1,
      judul: "Dil Hai Tumhaara",
      tahun: 2002,
      rating: 4.8,
      durasi: "3j 5m",
      genre: ["Komedi", "Drama", "Romantis"],
      gambar: "https://i.scdn.co/image/ab67616d0000b273b8e928fe24553b093c038224",
      deskripsi:
        "Film india pertama yang diriku tonton. Sebenarnya ini film drama biasa, cinta segitiga, agak repot karna si pretty ini anak hasil perselingkuhan, lagunya enak enak aku hapal semua, pemainnya jugak ganteng-ganteng dan cantik-cantik, cukup rekomen buat yang mau nonton film yang santai.",
      director: "Kundan Shah",
    },
    {
      id: 2,
      judul: "Kuch Kuch Hota Hai",
      tahun: 1998,
      rating: 1.0,
      durasi: "3j 5m",
      genre: ["Drama", "Romantis"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/0/07/Kuch_Kuch_Hota_Hai_poster.jpg",
      deskripsi:
        "Film jelek dan bodoh, pertama anak kecilnya pick me iyuhh, kedua anjeli goblok dah dapat cowok kaya ganteng cinta mati sama dia malah di tinggalin, nikah sama duda anak satu hadehh sia sia ukt kuliah dia. Si rahul spek buaya darat tingkat tinggi, mana cewek yang cantik itu yang dia mau, dulu anjeli jelek sama tina dia, dah cantik anjeli mau lak sama anjeli, lagunya pun ndak enak enak kali, mending gak usah di tonton nambah dosa memaki maki ni pilem.",
      director: "Yash Johar",
    },
    {
      id: 3,
      judul: "Kabhi Khushi Kabhie Gham",
      tahun: 2001,
      rating: 3.0,
      durasi: "3j 30m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://images.justwatch.com/poster/327110642/s718/kabhi-khushi-kabhie-gham.jpg",
      deskripsi:
        "Banyak yang menangis dengan pilem ini, tapi diriku B aja, jadi rahul ni anak angkat, mo di jodohin, padahal ceweknya cantik kaya, kalau aku ndak mikir cinta, cinta tumbuh karna terbiasa, apalah ni, nah si rahul jatuh cinta ama cewek desa, bapake marah ndak setuju, kawin lari si rahul, marah bapek kenak usir dia, lalu bertahun tahun adeke sudah besar, adeke mau menyatukan keluarganya kembali, lagu paling enaknya bolee chudiyan",
      director: "Karaan Johar",
    },
    {
      id: 4,
      judul: "Mohabbatein",
      tahun: 2000,
      rating: 4.3,
      durasi: "3j 36m",
      genre: ["Drama", "Romantis"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/9/94/Mohabbatein.jpg",
      deskripsi:
        "Nah ni asik, drama cinta muda mudi kehalang karna hidup di asrama yang super ketat tambahlak emang ada bumbu maslah asmara masing masing. Sukak, pande lak tukang pilemnya cari pasangan, mereka pasangannya sama-sama cocok dengan karakter masing-masing ada yang ceria, ada yang hot ada yang tipe cinta drama kali kek anak alay jatuhnya tapi tetap enak di tonton. Lagu -lagunya jugak enak-enak.",
      director: "Aamir Khan, Amole Gupte",
    },
    {
      id: 5,
      judul: "Mujhse Dosti Karoge",
      tahun: 2002,
      rating: 3.0,
      durasi: "2j 28m",
      genre: ["Romantis", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/a/ab/Mujhse_Dosti_Karoge_Film_Poster.jpg",
      deskripsi:
        "Salah satu pilem india yang membuat kita memaki-maki pilemnya. intinya pemain cowoknya jugak pindah pindah cewek, daei tina tu ke si pooja, tidak untuk di contoh adik-adik!. Tapi lagu pilemnya enak-enak yang main jugak ganteng dan cantik jadi yang tertolong dibanding kuch kuch hota hai.",
      director: "Kunal Kohli",
    },
    {
      id: 6,
      judul: "Kaho Naa Pyaar Hai",
      tahun: 2000,
      rating: 4.5,
      durasi: "2j 57m",
      genre: ["Romantis", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/id/a/a7/Kaho_Naa_Pyaar_Hai_Poster.jpg",
      deskripsi:
        "Filemnya enak, tidak seperti alur-alur pilem india jaman dahulu lainnya. Lagu-lagunya jugak enak, cuma emangpemeran wanitanya kurang terkenal dibanding pemeran wanita pilem pilem lain, cuma akting dia gak jelek kok cocok ama pemeran cowoknya.",
      director: "Rakesh Roshan",
    },
    {
      id: 7,
      judul: "Chori Chori Chupke Chupke",
      tahun: 2001,
      rating: 4.6,
      durasi: "2j 40m",
      genre: ["Drama", "Romantis", "Keluarga", "Komedi"],
      gambar: "https://m.media-amazon.com/images/S/pv-target-images/a6b8ec019c41f87698ba4c7d0dbfc0a2692673c333af954a1d4ba096cad59bcc.jpg",
      deskripsi:
        "Filemnya sebenarnya B aja, tapi sukak sama para pemainnya lagu-lagunya jugak enak, cuma di filemnya jugak si cowok tetap sayang sama istrinya walaupun udah nikah lagi, yang si ceweknya jugak gak menye menye tambah dia jugak ada lucu-lucunya jadi gak bosan nontonnya. ",
      director: "Abbas & Mustan Burmawalla",
    },
    {
      id: 8,
      judul: "Baghban",
      tahun: 2003,
      rating: 4.7,
      durasi: "3j 1m",
      genre: ["Romantis", "Drama", "Keluarga", "Sedih"],
      gambar: "https://m.media-amazon.com/images/S/pv-target-images/f562d69b3441745019a0dc05ae37198a213f96e46d21bacd010b76e8593d26d5.jpg",
      deskripsi:
        "Salah satu pilem rekomen untuk di tonton. Satu tema ceritanya bagus, jarang jarang pilem ngangkat kisah cinta orang tua walupun dah tua, pilemnya emang sedih walupun agak ngutuk ngutuk ke anak anaknya tapi puas banget waktu anak angkatnya emang benar benar nyangjung orang tuanya, kalau gak salah ceritanya gak diangkat dari kisah nyata tapi dikisah nyata banyak kejadian kayak gini jadi ya berasa beneran nyata filemnya.",
      director: "Ravi Chopra",
    },
  ];

  const totalPages = Math.ceil(filmIndia.length / filmsPerPage);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmIndia.slice(indexOfFirstFilm, indexOfLastFilm);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-red-900 p-6 relative overflow-hidden">
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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
            Film India
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Yok Tambah Koleksi Tontontonan Lagi Yok!!!
          </p>
        </header>

        {/* Grid Film */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="cursor-pointer group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 25px rgba(255, 140, 0, 0.3)", 
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
                  <span className="bg-orange-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center">
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
                  <h2 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                    {film.judul}
                  </h2>
                  <RatingStars rating={film.rating} />
                </div>

                <div className="flex flex-wrap gap-1">
                  {film.genre.map((g, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded-full group-hover:bg-orange-500/20 group-hover:text-orange-300"
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
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 cursor-pointer"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-lg transition duration-200 cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white font-bold"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 cursor-pointer"
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
                  <h2 className="text-2xl font-bold text-orange-400">
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
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmIndia.length)} dari {filmIndia.length} film India
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

export default India;