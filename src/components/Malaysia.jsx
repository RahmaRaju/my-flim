// Malaysia.jsx
import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Malaysia() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const filmsPerPage = 20; // Number of films to display per page

  const filmMalaysia = [
    {
      id: 1,
      judul: "Ola Bola",
      tahun: 2016,
      rating: 4.5,
      durasi: "1j 53m",
      genre: ["Drama", "Sport"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Ola_Bola_poster.jpg/220px-Ola_Bola_poster.jpg",
      deskripsi:
        "Sebuah tim sepak bola Malaysia berjuang untuk lolos ke Olimpiade Moskow 1980.",
      director: "Chiu Keng Guan",
    },
    {
      id: 2,
      judul: "The Journey",
      tahun: 2014,
      rating: 4.3,
      durasi: "1j 37m",
      genre: ["Comedy", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/The_Journey_2014_poster.jpg/220px-The_Journey_2014_poster.jpg",
      deskripsi:
        "Seorang ayah konservatif menemani calon menantunya dalam perjalanan melintasi Malaysia untuk mengundang teman-teman ke pernikahan putrinya.",
      director: "Chiu Keng Guan",
    },
    {
      id: 3,
      judul: "Munafik",
      tahun: 2016,
      rating: 4.0,
      durasi: "1j 38m",
      genre: ["Horror", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Munafik_poster.jpg/220px-Munafik_poster.jpg",
      deskripsi:
        "Seorang ustaz yang sedang berduka kehilangan imannya setelah kematian istrinya, dan menghadapi kekuatan supernatural.",
      director: "Syamsul Yusof",
    },
    {
      id: 4,
      judul: "Hantu Kak Limah Balik Rumah",
      tahun: 2010,
      rating: 3.8,
      durasi: "1j 40m",
      genre: ["Comedy", "Horror"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Hantu_Kak_Limah_Balik_Rumah_poster.jpg/220px-Hantu_Kak_Limah_Balik_Rumah_poster.jpg",
      deskripsi:
        "Penduduk kampung menghadapi hantu Kak Limah yang kembali menghantui mereka.",
      director: "Mamat Khalid",
    },
    {
      id: 5,
      judul: "Adiwiraku",
      tahun: 2017,
      rating: 4.4,
      durasi: "1j 30m",
      genre: ["Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Adiwiraku_poster.jpg/220px-Adiwiraku_poster.jpg",
      deskripsi:
        "Berdasarkan kisah nyata, seorang guru berjuang untuk meningkatkan prestasi siswanya di sekolah pedesaan.",
      director: "Eric Ong",
    },
    {
      id: 6,
      judul: "Polis EVO",
      tahun: 2015,
      rating: 4.1,
      durasi: "1j 45m",
      genre: ["Action", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Polis_Evo_poster.jpg/220px-Polis_Evo_poster.jpg",
      deskripsi:
        "Dua polisi dengan kepribadian berbeda harus bekerja sama untuk menjatuhkan gembong narkoba.",
      director: "Ghaz Abu Bakar",
    },
    {
      id: 7,
      judul: "Pekak",
      tahun: 2016,
      rating: 4.2,
      durasi: "1j 40m",
      genre: ["Drama", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Pekak_poster.jpg/220px-Pekak_poster.jpg",
      deskripsi:
        "Seorang penjual narkoba tunarungu jatuh cinta dengan seorang siswa sekolah menengah, dan hidupnya berubah.",
      director: "Mohd Khairul Azri Md Noor",
    },
    {
      id: 8,
      judul: "One Two Jaga",
      tahun: 2018,
      rating: 4.6,
      durasi: "1j 40m",
      genre: ["Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/One_Two_Jaga_poster.jpg/220px-One_Two_Jaga_poster.jpg", // Reusing image as it's the same film
      deskripsi:
        "Menggambarkan korupsi di kepolisian dan kehidupan imigran ilegal di Kuala Lumpur.",
      director: "Nam Ron",
    },
    {
      id: 9,
      judul: "Puteri Gunung Ledang",
      tahun: 2004,
      rating: 4.0,
      durasi: "2j 30m",
      genre: ["Adventure", "Drama", "Fantasy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Puteri_Gunung_Ledang_poster.jpg/220px-Puteri_Gunung_Ledang_poster.jpg",
      deskripsi:
        "Kisah epik tentang seorang putri mistis dan seorang pahlawan yang jatuh cinta padanya.",
      director: "Saw Teong Hin",
    },
    {
      id: 10,
      judul: "Tombiruo: Penunggu Rimba",
      tahun: 2017,
      rating: 3.9,
      durasi: "1j 55m",
      genre: ["Action", "Fantasy", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Tombiruo_poster.jpg/220px-Tombiruo_poster.jpg",
      deskripsi:
        "Seorang pria dengan wajah cacat yang tinggal di hutan mencari keadilan setelah kematian ayahnya.",
      director: "Seth Larney, Nasir Jani",
    },
    {
      id: 11,
      judul: "Sangkar",
      tahun: 2019,
      rating: 4.0,
      durasi: "1j 40m",
      genre: ["Action", "Drama", "Sport"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Sangkar_poster.jpg/220px-Sangkar_poster.jpg",
      deskripsi:
        "Dua petarung MMA menghadapi konsekuensi dari tindakan mereka di dalam dan di luar ring.",
      director: "Kabir Bhatia",
    },
    {
      id: 12,
      judul: "Crossroads: One Two Jaga",
      tahun: 2018,
      rating: 4.1,
      durasi: "1j 40m",
      genre: ["Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/One_Two_Jaga_poster.jpg/220px-One_Two_Jaga_poster.jpg", // Reusing image as it's the same film
      deskripsi:
        "Menggambarkan korupsi di kepolisian dan kehidupan imigran ilegal di Kuala Lumpur.",
      director: "Nam Ron",
    },
    {
      id: 13,
      judul: "Paskal",
      tahun: 2018,
      rating: 4.3,
      durasi: "1j 55m",
      genre: ["Action", "Drama", "War"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Paskal_poster.jpg/220px-Paskal_poster.jpg",
      deskripsi:
        "Berdasarkan kisah nyata, tim PASKAL (Pasukan Khas Laut) Angkatan Laut Malaysia melakukan misi penyelamatan.",
      director: "Adrian Teh",
    },
    {
      id: 14,
      judul: "Wira",
      tahun: 2019,
      rating: 4.0,
      durasi: "1j 30m",
      genre: ["Action", "Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Wira_poster.jpg/220px-Wira_poster.jpg",
      deskripsi:
        "Seorang mantan tentara kembali ke rumah untuk menyelamatkan keluarganya dari rentenir yang kejam.",
      director: "Adrian Teh",
    },
    {
      id: 15,
      judul: "Roh",
      tahun: 2020,
      rating: 4.2,
      durasi: "1j 23m",
      genre: ["Horror", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Roh_poster.jpg/220px-Roh_poster.jpg",
      deskripsi:
        "Sebuah keluarga yang tinggal di hutan terpencil menghadapi serangkaian peristiwa aneh setelah bertemu seorang gadis misterius.",
      director: "Emir Ezwan",
    },
    {
      id: 16,
      judul: "Mael Totey The Movie",
      tahun: 2020,
      rating: 3.7,
      durasi: "1j 30m",
      genre: ["Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Mael_Totey_The_Movie_poster.jpg/220px-Mael_Totey_The_Movie_poster.jpg",
      deskripsi:
        "Mael Totey, seorang pria polos dengan niat baik, mencoba membantu orang-orang di sekitarnya.",
      director: "Syahmi Sazli",
    },
    {
      id: 17,
      judul: "Jagat",
      tahun: 2015,
      rating: 4.4,
      durasi: "1j 25m",
      genre: ["Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jagat_poster.jpg/220px-Jagat_poster.jpg",
      deskripsi:
        "Kisah seorang anak laki-laki India-Malaysia yang tumbuh di lingkungan kejahatan dan kemiskinan di tahun 90-an.",
      director: "Shanjhey Kumar Perumal",
    },
    {
      id: 18,
      judul: "Guang",
      tahun: 2018,
      rating: 4.3,
      durasi: "1j 30m",
      genre: ["Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Guang_poster.jpg/220px-Guang_poster.jpg",
      deskripsi:
        "Seorang pria muda dengan autisme berjuang untuk menemukan pekerjaan dan mengejar mimpinya dalam musik.",
      director: "Quek Shio Chuan",
    },
    {
      id: 19,
      judul: "Mukhsin",
      tahun: 2006,
      rating: 4.0,
      durasi: "1j 35m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Mukhsin_poster.jpg/220px-Mukhsin_poster.jpg",
      deskripsi:
        "Kisah cinta pertama antara seorang anak laki-laki dan seorang gadis di desa Malaysia pada tahun 1970-an.",
      director: "Yasmin Ahmad",
    },
    {
      id: 20,
      judul: "Talentime",
      tahun: 2009,
      rating: 4.1,
      durasi: "2j 0m",
      genre: ["Drama", "Music", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Talentime_poster.jpg/220px-Talentime_poster.jpg",
      deskripsi:
        "Siswa-siswi dari berbagai latar belakang bersaing dalam kompetisi bakat di sekolah.",
      director: "Yasmin Ahmad",
    },
    {
      id: 21,
      judul: "Mat Kilau: Kebangkitan Pahlawan",
      tahun: 2022,
      rating: 4.0,
      durasi: "1j 58m",
      genre: ["Action", "Historical", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Mat_Kilau_Kebangkitan_Pahlawan_poster.jpg/220px-Mat_Kilau_Kebangkitan_Pahlawan_poster.jpg",
      deskripsi:
        "Berdasarkan kisah nyata, seorang pahlawan Melayu memimpin perlawanan melawan penjajah Inggris.",
      director: "Syamsul Yusof",
    },
    {
      id: 22,
      judul: "Mechamato Movie",
      tahun: 2022,
      rating: 3.9,
      durasi: "1j 40m",
      genre: ["Animation", "Action", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Mechamato_Movie_poster.jpg/220px-Mechamato_Movie_poster.jpg",
      deskripsi:
        "Seorang anak laki-laki bernama Amato menemukan robot bernama Mechabot dan menjadi pahlawan yang melawan robot jahat.",
      director: "Nizam Razak",
    },
    {
      id: 23,
      judul: "Air Force The Movie: Selagi Bernyawa",
      tahun: 2022,
      rating: 4.1,
      durasi: "1j 50m",
      genre: ["Action", "Drama", "War"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Air_Force_The_Movie_Selagi_Bernyawa_poster.jpg/220px-Air_Force_The_Movie_Selagi_Bernyawa_poster.jpg",
      deskripsi:
        "Tentara Angkatan Udara Malaysia melakukan misi berbahaya untuk menyelamatkan sandera.",
      director: "Zulkarnain Azhar",
    },
    {
      id: 24,
      judul: "Dukun",
      tahun: 2018,
      rating: 4.0,
      durasi: "1j 45m",
      genre: ["Horror", "Thriller", "Crime"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Dukun_poster.jpg/220px-Dukun_poster.jpg",
      deskripsi:
        "Seorang pengacara harus membela seorang dukun yang dituduh melakukan pembunuhan ritual.",
      director: "Dain Said",
    },
    {
      id: 25,
      judul: "Pulang",
      tahun: 2018,
      rating: 3.8,
      durasi: "2j 0m",
      genre: ["Drama", "Historical"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Pulang_poster.jpg/220px-Pulang_poster.jpg",
      deskripsi:
        "Kisah seorang wanita yang mencari suaminya yang hilang setelah dia pergi berlayar pada tahun 1940-an.",
      director: "Kabir Bhatia",
    },
    {
      id: 26,
      judul: "Upin & Ipin: Keris Siamang Tunggal",
      tahun: 2019,
      rating: 4.2,
      durasi: "1j 40m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Upin_%26_Ipin_Keris_Siamang_Tunggal_poster.jpg/220px-Upin_%26_Ipin_Keris_Siamang_Tunggal_poster.jpg",
      deskripsi:
        "Upin dan Ipin bersama teman-teman mereka memulai petualangan di dunia fantasi untuk menyelamatkan kerajaan.",
      director: "Ahmad Razuri Roseli, Adam Amiruddin, Syed Nurfaiz Khalid Syed Putra",
    },
    {
      id: 27,
      judul: "Ejen Ali The Movie",
      tahun: 2019,
      rating: 4.1,
      durasi: "1j 35m",
      genre: ["Animation", "Action", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Ejen_Ali_The_Movie_poster.jpg/220px-Ejen_Ali_The_Movie_poster.jpg",
      deskripsi:
        "Ali, seorang agen muda M.A.T.A., menemukan rahasia yang mengancam kota Cyberaya.",
      director: "Usamah Zaid Yasin",
    },
    {
      id: 28,
      judul: "BoBoiBoy Movie 2",
      tahun: 2019,
      rating: 4.0,
      durasi: "1j 30m",
      genre: ["Animation", "Action", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/BoBoiBoy_Movie_2_poster.jpg/220px-BoBoiBoy_Movie_2_poster.jpg",
      deskripsi:
        "BoBoiBoy dan teman-temannya harus menghentikan penjahat kuat yang ingin mencuri kekuatan elemennya.",
      director: "Nizam Razak",
    },
    {
      id: 29,
      judul: "Coast Guard Malaysia: Ops Helang",
      tahun: 2023,
      rating: 3.7,
      durasi: "1j 45m",
      genre: ["Action", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Coast_Guard_Malaysia_Ops_Helang_poster.jpg/220px-Coast_Guard_Malaysia_Ops_Helang_poster.jpg",
      deskripsi:
        "Kisah tentang tim Penjaga Pantai Malaysia dalam misi penyelamatan dan penegakan hukum.",
      director: "Lie Chee Teong",
    },
    {
      id: 30,
      judul: "Didi & Friends The Movie",
      tahun: 2023,
      rating: 3.5,
      durasi: "1j 20m",
      genre: ["Animation", "Family", "Musical"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Didi_%26_Friends_The_Movie_poster.jpg/220px-Didi_%26_Friends_The_Movie_poster.jpg",
      deskripsi:
        "Didi dan teman-temannya memulai petualangan untuk menemukan harta karun tersembunyi.",
      director: "Akmal Aziz, Hairulfaizalizwan Ahmad",
    },
    {
      id: 31,
      judul: "Anwar: The Untold Story",
      tahun: 2023,
      rating: 3.9,
      durasi: "1j 40m",
      genre: ["Biography", "Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Anwar_The_Untold_Story_poster.jpg/220px-Anwar_The_Untold_Story_poster.jpg",
      deskripsi:
        "Mengisahkan perjalanan politik dan perjuangan Anwar Ibrahim.",
      director: "Viva Westi",
    },
    {
      id: 32,
      judul: "Rahsia",
      tahun: 2023,
      rating: 3.8,
      durasi: "1j 30m",
      genre: ["Horror", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Rahsia_poster.jpg/220px-Rahsia_poster.jpg",
      deskripsi:
        "Sebuah keluarga menghadapi teror supernatural setelah pindah ke rumah baru.",
      director: "Shamyl Othman",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(filmMalaysia.length / filmsPerPage);

  // Get current films to display
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmMalaysia.slice(indexOfFirstFilm, indexOfLastFilm);

  // Change page
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
            Koleksi Film Malaysia
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Temukan pilihan film-film terbaik dari Malaysia
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
                  boxShadow: "0 0 25px rgba(52, 211, 153, 0.3)", // Emerald glow
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
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmMalaysia.length)} dari {filmMalaysia.length} film Malaysia
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

export default Malaysia;