// Korea.jsx
import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Korea() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const filmsPerPage = 20; // Number of films to display per page

  const filmKorea = [
    {
      id: 1,
      judul: "Parasite",
      tahun: 2019,
      rating: 4.9,
      durasi: "2j 12m",
      genre: ["Comedy", "Drama", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/220px-Parasite_%282019_film%29.png",
      deskripsi:
        "Sebuah keluarga miskin menyusup ke dalam rumah tangga kaya, yang mengarah pada konsekuensi tak terduga.",
      director: "Bong Joon-ho",
    },
    {
      id: 2,
      judul: "Oldboy",
      tahun: 2003,
      rating: 4.7,
      durasi: "2j 0m",
      genre: ["Action", "Drama", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboy_poster.jpg/220px-Oldboy_poster.jpg",
      deskripsi:
        "Seorang pria dipenjara selama 15 tahun tanpa alasan, kemudian dibebaskan dan diberi waktu lima hari untuk mencari tahu mengapa.",
      director: "Park Chan-wook",
    },
    {
      id: 3,
      judul: "Train to Busan",
      tahun: 2016,
      rating: 4.6,
      durasi: "1j 58m",
      genre: ["Action", "Horror", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Train_to_Busan_poster.jpg/220px-Train_to_Busan_poster.jpg",
      deskripsi:
        "Penumpang kereta api berjuang untuk bertahan hidup dari wabah zombie yang tiba-tiba.",
      director: "Yeon Sang-ho",
    },
    {
      id: 4,
      judul: "Memories of Murder",
      tahun: 2003,
      rating: 4.8,
      durasi: "2j 12m",
      genre: ["Crime", "Drama", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Memories_of_Murder.jpg/220px-Memories_of_Murder.jpg",
      deskripsi:
        "Dua detektif berusaha memecahkan serangkaian pembunuhan berantai di kota kecil Korea.",
      director: "Bong Joon-ho",
    },
    {
      id: 5,
      judul: "A Tale of Two Sisters",
      tahun: 2003,
      rating: 4.4,
      durasi: "1j 54m",
      genre: ["Drama", "Horror", "Mystery"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/A_Tale_of_Two_Sisters_poster.jpg/220px-A_Tale_of_Two_Sisters_poster.jpg",
      deskripsi:
        "Dua saudara perempuan menghadapi serangkaian peristiwa mengganggu setelah pulang dari rumah sakit jiwa.",
      director: "Kim Jee-woon",
    },
    {
      id: 6,
      judul: "The Handmaiden",
      tahun: 2016,
      rating: 4.7,
      durasi: "2j 25m",
      genre: ["Drama", "Romance", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/The_Handmaiden.png/220px-The_Handmaiden.png",
      deskripsi:
        "Seorang penipu merekrut seorang pelayan untuk membantu mencuri warisan seorang wanita bangsawan, namun rencananya berantakan.",
      director: "Park Chan-wook",
    },
    {
      id: 7,
      judul: "Burning",
      tahun: 2018,
      rating: 4.5,
      durasi: "2j 27m",
      genre: ["Drama", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Burning_%282018_film%29_poster.png/220px-Burning_%282018_film%29_poster.png",
      deskripsi:
        "Seorang penulis muda bertemu dengan teman lama dan pria misterius yang mengungkapkan hobi aneh.",
      director: "Lee Chang-dong",
    },
    {
      id: 8,
      judul: "Spring, Summer, Fall, Winter... and Spring",
      tahun: 2003,
      rating: 4.7,
      durasi: "1j 43m",
      genre: ["Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Spring_Summer_Fall_Winter_and_Spring.jpg/220px-Spring_Summer_Fall_Winter_and_Spring.jpg",
      deskripsi:
        "Kisah seorang biksu Buddha yang hidup di kuil terpencil di danau, tumbuh melalui berbagai musim kehidupan.",
      director: "Kim Ki-duk",
    },
    {
      id: 9,
      judul: "Okja",
      tahun: 2017,
      rating: 4.4,
      durasi: "2j 0m",
      genre: ["Action", "Adventure", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Okja_poster.jpeg/220px-Okja_poster.jpeg",
      deskripsi:
        "Seorang gadis muda mempertaruhkan segalanya untuk mencegah sebuah perusahaan multinasional menculik teman terbaiknya, seekor babi super raksasa.",
      director: "Bong Joon-ho",
    },
    {
      id: 10,
      judul: "I Saw the Devil",
      tahun: 2010,
      rating: 4.6,
      durasi: "2j 24m",
      genre: ["Action", "Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/I_Saw_the_Devil_poster.jpg/220px-I_Saw_the_Devil_poster.jpg",
      deskripsi:
        "Seorang agen rahasia bertekad membalas dendam terhadap pembunuh berantai yang bertanggung jawab atas kematian tunangannya.",
      director: "Kim Jee-woon",
    },
    {
      id: 11,
      judul: "The Wailing",
      tahun: 2016,
      rating: 4.5,
      durasi: "2j 36m",
      genre: ["Horror", "Mystery", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/The_Wailing_poster.jpg/220px-The_Wailing_poster.jpg",
      deskripsi:
        "Seorang polisi menyelidiki serangkaian pembunuhan aneh dan penyakit di desa terpencilnya.",
      director: "Na Hong-jin",
    },
    {
      id: 12,
      judul: "Sympathy for Mr. Vengeance",
      tahun: 2002,
      rating: 4.3,
      durasi: "2j 9m",
      genre: ["Action", "Crime", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Sympathy_for_Mr._Vengeance_poster.jpg/220px-Sympathy_for_Mr._Vengeance_poster.jpg",
      deskripsi:
        "Seorang pria tuli menculik seorang anak untuk mendapatkan uang untuk transplantasi ginjal saudara perempuannya, yang memicu lingkaran kekerasan.",
      director: "Park Chan-wook",
    },
    {
      id: 13,
      judul: "Snowpiercer",
      tahun: 2013,
      rating: 4.6,
      durasi: "2j 6m",
      genre: ["Action", "Drama", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Snowpiercer_poster.jpg/220px-Snowpiercer_poster.jpg",
      deskripsi:
        "Di masa depan pasca-apokaliptik, sisa-sisa umat manusia hidup di kereta yang terus bergerak di sekitar bumi.",
      director: "Bong Joon-ho",
    },
    {
      id: 14,
      judul: "Tae Guk Gi: The Brotherhood of War",
      tahun: 2004,
      rating: 4.7,
      durasi: "2j 20m",
      genre: ["Action", "Drama", "War"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Taegukgi_poster.jpg/220px-Taegukgi_poster.jpg",
      deskripsi:
        "Dua saudara dipaksa untuk bertempur dalam Perang Korea, dan ikatan mereka diuji oleh kekejaman perang.",
      director: "Kang Je-gyu",
    },
    {
      id: 15,
      judul: "The Man from Nowhere",
      tahun: 2010,
      rating: 4.5,
      durasi: "1j 59m",
      genre: ["Action", "Crime", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/The_Man_from_Nowhere_poster.jpg/220px-The_Man_from_Nowhere_poster.jpg",
      deskripsi:
        "Seorang mantan agen khusus berusaha menyelamatkan seorang gadis kecil yang merupakan satu-satunya temannya, setelah dia diculik oleh kartel narkoba.",
      director: "Lee Jeong-beom",
    },
    {
      id: 16,
      judul: "A Moment to Remember",
      tahun: 2004,
      rating: 4.5,
      durasi: "2j 24m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/A_Moment_to_Remember.jpg/220px-A_Moment_to_Remember.jpg",
      deskripsi:
        "Kisah cinta seorang wanita muda dan pria yang menikah, namun sang wanita menderita Alzheimer.",
      director: "John H. Lee",
    },
    {
      id: 17,
      judul: "Miracle in Cell No. 7",
      tahun: 2013,
      rating: 4.8,
      durasi: "2j 7m",
      genre: ["Comedy", "Drama", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Miracle_in_Cell_No._7_poster.jpg/220px-Miracle_in_Cell_No._7_poster.jpg",
      deskripsi:
        "Seorang ayah penyandang disabilitas mental secara salah dipenjara karena pembunuhan, dan putrinya berusaha keras untuk membersihkan namanya.",
      director: "Lee Hwan-kyung",
    },
    {
      id: 18,
      judul: "My Sassy Girl",
      tahun: 2001,
      rating: 4.4,
      durasi: "2j 17m",
      genre: ["Comedy", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/My_Sassy_Girl_movie_poster.jpg/220px-My_Sassy_Girl_movie_poster.jpg",
      deskripsi:
        "Seorang mahasiswa yang baik hati bertemu dengan seorang gadis yang eksentrik dan menawan, yang mengubah hidupnya.",
      director: "Kwak Jae-yong",
    },
    {
      id: 19,
      judul: "Sunny",
      tahun: 2011,
      rating: 4.6,
      durasi: "2j 2m",
      genre: ["Comedy", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Sunny_%282011_film%29_poster.jpg/220px-Sunny_%282011_film%29_poster.jpg",
      deskripsi:
        "Sekelompok teman sekolah menengah bersatu kembali 25 tahun kemudian untuk memenuhi janji masa muda mereka.",
      director: "Kang Hyeong-cheol",
    },
    {
      id: 20,
      judul: "The Host",
      tahun: 2006,
      rating: 4.3,
      durasi: "1j 59m",
      genre: ["Action", "Drama", "Horror"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/The_Host_film_poster.jpg/220px-The_Host_film_poster.jpg",
      deskripsi:
        "Sebuah keluarga berjuang untuk menyelamatkan putri mereka yang diculik oleh monster sungai yang bermutasi.",
      director: "Bong Joon-ho",
    },
    {
      id: 21,
      judul: "Along With the Gods: The Two Worlds",
      tahun: 2017,
      rating: 4.5,
      durasi: "2j 19m",
      genre: ["Action", "Drama", "Fantasy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Along_With_the_Gods_The_Two_Worlds.jpg/220px-Along_With_the_Gods_The_Two_Worlds.jpg",
      deskripsi:
        "Seorang petugas pemadam kebakaran yang tewas dalam tugas dibawa ke alam baka untuk diadili selama 49 hari.",
      director: "Kim Yong-hwa",
    },
    {
      id: 22,
      judul: "Confession of Murder",
      tahun: 2012,
      rating: 4.2,
      durasi: "1j 59m",
      genre: ["Action", "Crime", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Confession_of_Murder_poster.jpg/220px-Confession_of_Murder_poster.jpg",
      deskripsi:
        "Seorang detektif yang tidak pernah menangkap pembunuh berantai kembali beraksi ketika pembunuh tersebut menerbitkan buku otobiografi.",
      director: "Jung Byung-gil",
    },
    {
      id: 23,
      judul: "The Chaser",
      tahun: 2008,
      rating: 4.6,
      durasi: "2j 5m",
      genre: ["Action", "Crime", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Chaser_%282008_film%29.jpg/220px-The_Chaser_%282008_film%29.jpg",
      deskripsi:
        "Seorang mantan detektif yang menjadi germo mengejar seorang pembunuh berantai yang menculik gadis-gadisnya.",
      director: "Na Hong-jin",
    },
    {
      id: 24,
      judul: "Architecture 101",
      tahun: 2012,
      rating: 4.0,
      durasi: "1j 58m",
      genre: ["Drama", "Romance"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Architecture_101.jpg/220px-Architecture_101.jpg",
      deskripsi:
        "Seorang arsitek membantu cinta pertamanya membangun kembali rumah impiannya, yang membangkitkan kenangan masa lalu.",
      director: "Lee Yong-ju",
    },
    {
      id: 25,
      judul: "Miss Granny",
      tahun: 2014,
      rating: 4.3,
      durasi: "2j 4m",
      genre: ["Comedy", "Fantasy", "Music"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Miss_Granny_poster.jpg/220px-Miss_Granny_poster.jpg",
      deskripsi:
        "Seorang wanita tua secara ajaib kembali ke usia dua puluhan, dan bergabung dengan band cucunya.",
      director: "Hwang Dong-hyuk",
    },
    {
      id: 26,
      judul: "A Taxi Driver",
      tahun: 2017,
      rating: 4.7,
      durasi: "2j 17m",
      genre: ["Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/A_Taxi_Driver.jpeg/220px-A_Taxi_Driver.jpeg",
      deskripsi:
        "Seorang sopir taksi di Seoul secara tidak sengaja terlibat dalam Gwangju Uprising tahun 1980.",
      director: "Jang Hoon",
    },
    {
      id: 27,
      judul: "The Attorney",
      tahun: 2013,
      rating: 4.7,
      durasi: "2j 7m",
      genre: ["Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/The_Attorney_poster.jpg/220px-The_Attorney_poster.jpg",
      deskripsi:
        "Seorang pengacara pajak yang materialistis menjadi pembela hak asasi manusia setelah terlibat dalam kasus penyiksaan mahasiswa.",
      director: "Yang Woo-suk",
    },
    {
      id: 28,
      judul: "Ode to My Father",
      tahun: 2014,
      rating: 4.6,
      durasi: "2j 6m",
      genre: ["Drama", "History"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Ode_to_My_Father_poster.jpg/220px-Ode_to_My_Father_poster.jpg",
      deskripsi:
        "Kisah seorang pria yang mengabdikan hidupnya untuk keluarganya selama periode sulit dalam sejarah Korea.",
      director: "Yoon Je-kyoon",
    },
    {
      id: 29,
      judul: "The Unjust",
      tahun: 2010,
      rating: 4.4,
      durasi: "1j 59m",
      genre: ["Crime", "Drama", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/The_Unjust_poster.jpg/220px-The_Unjust_poster.jpg",
      deskripsi:
        "Seorang detektif korup dan seorang jaksa ambisius terjerat dalam jaringan kejahatan dan korupsi.",
      director: "Ryoo Seung-wan",
    },
    {
      id: 30,
      judul: "Peninsula",
      tahun: 2020,
      rating: 3.9,
      durasi: "1j 56m",
      genre: ["Action", "Horror", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Peninsula_film.jpg/220px-Peninsula_film.jpg",
      deskripsi:
        "Empat tahun setelah wabah zombie, seorang mantan tentara dikirim kembali ke semenanjung yang sekarang sepi untuk misi berbahaya.",
      director: "Yeon Sang-ho",
    },
    {
      id: 31,
      judul: "Space Sweepers",
      tahun: 2021,
      rating: 4.0,
      durasi: "2j 16m",
      genre: ["Action", "Adventure", "Sci-Fi"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Space_Sweepers_poster.jpg/220px-Space_Sweepers_poster.jpg",
      deskripsi:
        "Awak kapal pengumpul sampah luar angkasa menemukan robot humanoid yang mungkin merupakan senjata pemusnah massal.",
      director: "Jo Sung-hee",
    },
    {
      id: 32,
      judul: "Exit",
      tahun: 2019,
      rating: 4.2,
      durasi: "1j 43m",
      genre: ["Action", "Comedy", "Thriller"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Exit_film.jpg/220px-Exit_film.jpg",
      deskripsi:
        "Seorang pemuda yang menganggur harus menyelamatkan keluarga dan warga kota dari gas beracun misterius.",
      director: "Lee Sang-geun",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(filmKorea.length / filmsPerPage);

  // Get current films to display
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmKorea.slice(indexOfFirstFilm, indexOfLastFilm);

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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
            Koleksi Film Korea
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Temukan pilihan film-film Korea terbaik yang diakui secara kritis
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
                  boxShadow: "0 0 25px rgba(96, 165, 250, 0.3)", // Blue glow
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
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmKorea.length)} dari {filmKorea.length} film Korea
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

export default Korea;