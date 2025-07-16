import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Barat() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const filmsPerPage = 20;

  const filmBarat = [
    {
      id: 1,
      judul: "Now You See Me",
      tahun: 2013,
      rating: 4.6,
      durasi: "1j 55m",
      genre: ["Kejahatan", "Laga", "Perampokan", "Drama"],
      gambar: "https://i.pinimg.com/1200x/42/d6/35/42d635f627ab3ef0af39946b757cd729.jpg",
      deskripsi: "Empat pesulap hebat membentuk kelompok The Four Horsemen dan melakukan aksi spektakuler: merampok bank secara langsung di atas panggung. Aksi mereka menarik perhatian FBI, tapi para pesulap selalu selangkah lebih maju dengan trik mencengangkan. Di balik semua itu, tersembunyi misi misterius yang lebih besar dari sekadar pertunjukan sulap.",
      director: "Louis Leterrier",
    },
    {
      id: 2,
      judul: "Now You See Me 2",
      tahun: 2016,
      rating: 4.7,
      durasi: "2j 9m",
      genre: ["Kejahatan", "Laga", "Perampokan"],
      gambar: "https://i.pinimg.com/1200x/64/a4/fd/64a4fdf6564dc075e1a4862c87eb7746.jpg",
      deskripsi: "Setahun setelah aksi terakhir mereka, The Four Horsemen kembali dengan misi baru. Namun kali ini, mereka dijebak oleh miliarder jenius yang memaksa mereka mencuri teknologi rahasia. Dalam pertarungan antara ilusi dan intrik, para pesulap harus menggunakan trik terbaik mereka untuk membalikkan keadaan dan mengungkap kebenaran.",
      director: "Jon M.Chu",
    },
    {
      id: 3,
      judul: "Cruella",
      tahun: 2021,
      rating: 4.0,
      durasi: "2j 14m",
      genre: ["Misteri", "Drama", "Kejahatan"],
      gambar: "https://i.pinimg.com/1200x/10/b7/1b/10b71b813167aec755f4c52c06eeb344.jpg",
      deskripsi: "Film ini nyeritain awal mula Cruella de Vil sebelum jadi penjahat terkenal di 101 Dalmatians. Dulu dia cewek muda kreatif bernama Estella yang suka banget sama dunia fashion. Tapi setelah ngalamin kejadian pahit, dia berubah jadi Cruella — sosok nyentrik, pemberani, dan penuh gaya yang siap bikin dunia fashion heboh!",
      director: "Craig Gillespie",
    },
  ];


  const totalPages = Math.ceil(filmBarat.length / filmsPerPage);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmBarat.slice(indexOfFirstFilm, indexOfLastFilm);
  
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-6 relative overflow-hidden">
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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">
            Koleksi Film Barat
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Yok Tambah Koleksi Tontonan Lagi Yok!!!
          </p>
        </header>

        {/* Grid Film */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="cursor-pointer group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 25px rgba(245, 158, 11, 0.3)",
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
                  <span className="bg-blue-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center">
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
                  <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {film.judul}
                  </h2>
                  <RatingStars rating={film.rating} />
                </div>

                <div className="flex flex-wrap gap-1">
                  {film.genre.map((g, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-300"
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
                    ? "bg-blue-500 text-white font-bold"
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
            className="fixed inset-0 bg-blue/70 backdrop-blur-sm flex items-center justify-center z-50" 
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
                  <h2 className="text-2xl font-bold text-blue-400">
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
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmBarat.length)} dari {filmBarat.length} film Barat
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

export default Barat;