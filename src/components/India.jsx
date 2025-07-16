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
        "Film ini tentang Shalu, cewek ceria, usil, dan apa adanya. Dia sering dibandingkan dengan kakaknya, Nimmi, yang kalem dan penurut. Tapi ternyata, Shalu bukan anak kandung — dia hasil dari masa lalu kelam sang ibu. Hubungannya sama kakaknya, Nimmi, jadi rumit pas mereka jatuh cinta sama cowok yang sama, Dev. Di tengah konflik cinta dan keluarga, Shalu harus memilih: nurutin hati sendiri atau jaga perasaan orang-orang yang dia sayang.",
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
        "Rahul dan Anjali sahabatan akrab banget, tapi Rahul malah naksir Tina, cewek baru di kampus. Anjali patah hati dan pergi. Beberapa tahun kemudian, anak Rahul berusaha nyatuin lagi ayahnya sama Anjali. Ceritanya tentang cinta pertama dan kedua, tapi buat sebagian orang, kisahnya terasa klise dan agak terlalu dramatis.",
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
        "Rahul, anak sulung dari keluarga super kaya, jatuh cinta sama Anjali, cewek sederhana dari keluarga biasa. Ayahnya nggak setuju, tapi Rahul tetap nikah sama Anjali dan akhirnya “diusir” dari keluarga. Bertahun-tahun kemudian, si adik, Rohan, coba nyatuin mereka lagi. Ceritanya campur aduk: ada cinta, konflik keluarga, air mata, dan gaya mewah.",
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
        "Di sekolah super ketat yang dipimpin kepala sekolah galak bernama Narayan (Amitabh Bachchan), cinta dilarang keras. Tapi datanglah Raj (Shah Rukh Khan), guru musik santai yang percaya kalau cinta itu kekuatan paling besar. Tiga murid jatuh cinta diam-diam, dan Raj bantu mereka melawan aturan kaku sekolah. Di balik itu, Raj punya masa lalu sendiri yang nyambung sama anak kepala sekolah. ",
      director: "Aditya Chopra",
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
        "Raj suka banget sama Tina, tapi selama bertahun-tahun dia malah kirim email ke Pooja, yang nyamar jadi Tina. Pas Raj pulang ke India dan akhirnya ketemu mereka berdua, dia masih mikir Tina itu cinta sejatinya. Padahal yang nyambung banget sama dia ya si Pooja. Jadilah cinta segitiga yang penuh salah paham, tangisan, dan adegan slow motion.",
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
        "Rohit, cowok sederhana yang doyan nyanyi, jatuh cinta sama Sonia, cewek kaya raya. Mereka pacaran bahagia... sampai Rohit tiba-tiba tewas karena jadi saksi pembunuhan. Sonia yang hancur hati pergi ke luar negeri, lalu shock karena ketemu cowok yang wajahnya persis banget kayak Rohit — namanya Raj. Nah, dari situ mulai deh muncul drama balas dendam, misteri, dan cinta yang kedua.",
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
        "Film ini tentang pasangan kaya, Raj dan Priya, yang pengen banget punya anak tapi Priya nggak bisa hamil. Diam-diam mereka sewa seorang wanita bernama Madhu buat jadi ibu pengganti. Awalnya cuma urusan “profesional,” tapi makin lama jadi ribet karena Madhu mulai jatuh cinta sama Raj. Drama pun muncul di antara cinta, keluarga, dan rahasia besar yang harus disembunyikan dari semua orang.",
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
        "Raj dan Pooja, pasangan suami istri yang udah tua tapi romantis banget, berharap bisa menikmati masa tua bareng anak-anak mereka. Tapi kenyataannya... anak-anak mereka malah egois dan nggak mau ngurus orangtuanya. Raj dan Pooja harus hidup terpisah dan ngalamin pahitnya diabaikan sama keluarga sendiri. Film ini juga nunjukin kalau nggak semua anak itu jahat — kadang yang bukan darah daging justru lebih sayang dari keluarga sendiri.",
      director: "Ravi Chopra",
    },
    {
      id: 9,
      judul: "",
      tahun: 2003,
      rating: 4.7,
      durasi: "j m",
      genre: ["Romantis", "Drama", "Keluarga", "Sedih"],
      gambar: "",
      deskripsi:
        "",
      director: "",
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
            Yok Tambah Koleksi Tontonan Lagi Yok!!!
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