// Kartun.jsx
import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Kartun() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const filmsPerPage = 20; // Number of films to display per page

  const filmKartun = [
    {
      id: 1,
      judul: "Toy Story",
      tahun: 1995,
      rating: 4.8,
      durasi: "1j 21m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg",
      deskripsi:
        "Mainan-mainan Andy menjadi hidup saat dia tidak ada, dan Woody si koboi merasa terancam dengan kedatangan mainan baru, Buzz Lightyear.",
      director: "John Lasseter",
    },
    {
      id: 2,
      judul: "The Lion King",
      tahun: 1994,
      rating: 4.7,
      durasi: "1j 28m",
      genre: ["Animation", "Adventure", "Drama"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg",
      deskripsi:
        "Simba, seekor singa muda, melarikan diri setelah kematian ayahnya dan harus kembali untuk merebut kembali takhtanya.",
      director: "Roger Allers, Rob Minkoff",
    },
    {
      id: 3,
      judul: "Spirited Away",
      tahun: 2001,
      rating: 4.9,
      durasi: "2j 5m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Spirited_Away_poster.png/220px-Spirited_Away_poster.png",
      deskripsi:
        "Seorang gadis muda tersesat di dunia roh dan harus bekerja di pemandian untuk menyelamatkan orang tuanya.",
      director: "Hayao Miyazaki",
    },
    {
      id: 4,
      judul: "Finding Nemo",
      tahun: 2003,
      rating: 4.6,
      durasi: "1j 40m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Finding_Nemo.jpg/220px-Finding_Nemo.jpg",
      deskripsi:
        "Seorang ayah ikan badut melakukan perjalanan melintasi samudra untuk menemukan putranya yang hilang.",
      director: "Andrew Stanton, Lee Unkrich",
    },
    {
      id: 5,
      judul: "Up",
      tahun: 2009,
      rating: 4.7,
      durasi: "1j 36m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Up_%282009_film%29.jpg/220px-Up_%282009_film%29.jpg",
      deskripsi:
        "Seorang duda tua mewujudkan impian seumur hidupnya dengan mengikat ribuan balon ke rumahnya dan terbang ke Amerika Selatan.",
      director: "Pete Docter, Bob Peterson",
    },
    {
      id: 6,
      judul: "Zootopia",
      tahun: 2016,
      rating: 4.5,
      durasi: "1j 48m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Zootopia.jpg/220px-Zootopia.jpg",
      deskripsi:
        "Seekor kelinci polisi bekerja sama dengan rubah penipu untuk mengungkap konspirasi di kota hewan.",
      director: "Byron Howard, Rich Moore",
    },
    {
      id: 7,
      judul: "Coco",
      tahun: 2017,
      rating: 4.8,
      durasi: "1j 45m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Coco_%282017_film%29_poster.jpg/220px-Coco_%282017_film%29_poster.jpg",
      deskripsi:
        "Seorang anak laki-laki muda yang bercita-cita menjadi musisi melakukan perjalanan ke Tanah Orang Mati untuk menemukan kakek buyutnya.",
      director: "Lee Unkrich, Adrian Molina",
    },
    {
      id: 8,
      judul: "Inside Out",
      tahun: 2015,
      rating: 4.7,
      durasi: "1j 35m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Inside_Out_%282015_film%29_poster.jpg/220px-Inside_Out_%282015_film%29_poster.jpg",
      deskripsi:
        "Perasaan seorang gadis muda berjuang untuk membimbingnya melalui kehidupan setelah pindah ke kota baru.",
      director: "Pete Docter, Ronnie del Carmen",
    },
    {
      id: 9,
      judul: "How to Train Your Dragon",
      tahun: 2010,
      rating: 4.6,
      durasi: "1j 38m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/How_to_Train_Your_Dragon_Poster.jpg/220px-How_to_Train_Your_Dragon_Poster.jpg",
      deskripsi:
        "Seorang remaja Viking yang canggung berteman dengan naga yang terluka, menantang tradisi sukunya.",
      director: "Dean DeBlois, Chris Sanders",
    },
    {
      id: 10,
      judul: "Moana",
      tahun: 2016,
      rating: 4.4,
      durasi: "1j 47m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_poster_2016.jpg/220px-Moana_poster_2016.jpg",
      deskripsi:
        "Seorang putri Polinesia berlayar untuk menyelamatkan rakyatnya dengan bantuan dewa Maui.",
      director: "Ron Clements, John Musker",
    },
    {
      id: 11,
      judul: "Frozen",
      tahun: 2013,
      rating: 4.3,
      durasi: "1j 42m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Frozen_%282013_film%29_poster.jpg/220px-Frozen_%282013_film%29_poster.jpg",
      deskripsi:
        "Seorang putri memulai perjalanan untuk menemukan saudara perempuannya yang memiliki kekuatan es, yang telah menjebak kerajaan dalam musim dingin abadi.",
      director: "Chris Buck, Jennifer Lee",
    },
    {
      id: 12,
      judul: "Despicable Me",
      tahun: 2010,
      rating: 4.2,
      durasi: "1j 35m",
      genre: ["Animation", "Comedy", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Despicable_Me_poster.jpg/220px-Despicable_Me_poster.jpg",
      deskripsi:
        "Seorang penjahat super Gru berencana mencuri bulan, tetapi rencananya terganggu oleh tiga gadis yatim piatu.",
      director: "Pierre Coffin, Chris Renaud",
    },
    {
      id: 13,
      judul: "Shrek",
      tahun: 2001,
      rating: 4.5,
      durasi: "1j 30m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Shrek_poster.jpg/220px-Shrek_poster.jpg",
      deskripsi:
        "Seorang ogre yang suka menyendiri harus menyelamatkan seorang putri untuk mendapatkan kembali rawa-rawanya.",
      director: "Andrew Adamson, Vicky Jenson",
    },
    {
      id: 14,
      judul: "Spider-Man: Into the Spider-Verse",
      tahun: 2018,
      rating: 4.9,
      durasi: "1j 57m",
      genre: ["Animation", "Action", "Adventure"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Spider-Man-_Into_the_Spider-Verse_poster.jpg/220px-Spider-Man-_Into_the_Spider-Verse_poster.jpg",
      deskripsi:
        "Miles Morales menjadi Spider-Man di alam semesta alternatif dan bergabung dengan Spider-People dari dimensi lain untuk menyelamatkan semua realitas.",
      director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    },
    {
      id: 15,
      judul: "Klaus",
      tahun: 2019,
      rating: 4.7,
      durasi: "1j 36m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Klaus_poster.jpeg/220px-Klaus_poster.jpeg",
      deskripsi:
        "Seorang tukang pos egois berteman dengan pembuat mainan Klaus, dan membawa kebahagiaan ke kota yang suram.",
      director: "Sergio Pablos",
    },
    {
      id: 16,
      judul: "Paddington 2",
      tahun: 2017,
      rating: 4.8,
      durasi: "1j 43m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Paddington_2_poster.png/220px-Paddington_2_poster.png",
      deskripsi:
        "Beruang Paddington dituduh mencuri buku pop-up dan harus membuktikan dirinya tidak bersalah.",
      director: "Paul King",
    },
    {
      id: 17,
      judul: "Toy Story 3",
      tahun: 2010,
      rating: 4.8,
      durasi: "1j 43m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Toy_Story_3_poster.jpg/220px-Toy_Story_3_poster.jpg",
      deskripsi:
        "Mainan-mainan Andy secara tidak sengaja dikirim ke tempat penitipan anak saat dia bersiap kuliah.",
      director: "Lee Unkrich",
    },
    {
      id: 18,
      judul: "The Incredibles",
      tahun: 2004,
      rating: 4.6,
      durasi: "1j 55m",
      genre: ["Animation", "Action", "Adventure"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Incredibles_poster.jpg/220px-The_Incredibles_poster.jpg",
      deskripsi:
        "Sebuah keluarga pahlawan super yang menyembunyikan identitas mereka dipaksa untuk beraksi lagi untuk menyelamatkan dunia.",
      director: "Brad Bird",
    },
    {
      id: 19,
      judul: "Ratatouille",
      tahun: 2007,
      rating: 4.7,
      durasi: "1j 51m",
      genre: ["Animation", "Comedy", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/RatatouillePoster.jpg/220px-RatatouillePoster.jpg",
      deskripsi:
        "Seekor tikus bernama Remy bercita-cita menjadi koki hebat di Paris.",
      director: "Brad Bird, Jan Pinkava",
    },
    {
      id: 20,
      judul: "Wall-E",
      tahun: 2008,
      rating: 4.8,
      durasi: "1j 38m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/WALL-Eposter.jpg/220px-WALL-Eposter.jpg",
      deskripsi:
        "Robot pembersih sampah terakhir di Bumi jatuh cinta pada robot pencari dan mengikutinya ke luar angkasa.",
      director: "Andrew Stanton",
    },
    {
      id: 21,
      judul: "Tangled",
      tahun: 2010,
      rating: 4.3,
      durasi: "1j 40m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tangled_poster.jpg/220px-Tangled_poster.jpg",
      deskripsi:
        "Rapunzel, seorang putri dengan rambut ajaib yang sangat panjang, melarikan diri dari menara untuk melihat dunia.",
      director: "Nathan Greno, Byron Howard",
    },
    {
      id: 22,
      judul: "Howl's Moving Castle",
      tahun: 2004,
      rating: 4.8,
      durasi: "1j 59m",
      genre: ["Animation", "Adventure", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Howls-moving-castle-poster.jpg/220px-Howls-moving-castle-poster.jpg",
      deskripsi:
        "Seorang gadis muda dikutuk menjadi tua dan mencari kastil bergerak penyihir untuk mematahkan kutukan.",
      director: "Hayao Miyazaki",
    },
    {
      id: 23,
      judul: "Big Hero 6",
      tahun: 2014,
      rating: 4.5,
      durasi: "1j 42m",
      genre: ["Animation", "Action", "Adventure"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Big_Hero_6_%28poster%29.jpg/220px-Big_Hero_6_%28poster%29.jpg",
      deskripsi:
        "Seorang jenius robotika muda membentuk tim pahlawan super dengan robot tiupnya untuk memecahkan misteri.",
      director: "Don Hall, Chris Williams",
    },
    {
      id: 24,
      judul: "Your Name.",
      tahun: 2016,
      rating: 4.8,
      durasi: "1j 46m",
      genre: ["Animation", "Drama", "Fantasy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
      deskripsi:
        "Seorang gadis desa dan anak laki-laki Tokyo menemukan bahwa mereka bertukar tubuh dalam mimpi.",
      director: "Makoto Shinkai",
    },
    {
      id: 25,
      judul: "Kung Fu Panda",
      tahun: 2008,
      rating: 4.4,
      durasi: "1j 32m",
      genre: ["Animation", "Action", "Adventure"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/KungFuPandaPoster.jpg/220px-KungFuPandaPoster.jpg",
      deskripsi:
        "Seekor panda canggung yang merupakan penggemar kung fu ditakdirkan untuk menjadi Dragon Warrior.",
      director: "Mark Osborne, John Stevenson",
    },
    {
      id: 26,
      judul: "Encanto",
      tahun: 2021,
      rating: 4.5,
      durasi: "1j 42m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Encanto_poster.jpg/220px-Encanto_poster.jpg",
      deskripsi:
        "Seorang gadis muda di Kolombia yang merupakan satu-satunya anggota keluarganya tanpa kekuatan magis, berjuang untuk menyelamatkan keajaiban mereka.",
      director: "Jared Bush, Byron Howard",
    },
    {
      id: 27,
      judul: "Sing 2",
      tahun: 2021,
      rating: 4.0,
      durasi: "1j 50m",
      genre: ["Animation", "Comedy", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Sing_2_poster.jpg/220px-Sing_2_poster.jpg",
      deskripsi:
        "Buster Moon dan teman-temannya harus meyakinkan bintang rock legendaris untuk bergabung dengan pertunjukan baru mereka.",
      director: "Garth Jennings",
    },
    {
      id: 28,
      judul: "Minions: The Rise of Gru",
      tahun: 2022,
      rating: 3.9,
      durasi: "1j 27m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Minions_The_Rise_of_Gru_poster.jpg/220px-Minions_The_Rise_of_Gru_poster.jpg",
      deskripsi:
        "Kisah asal-usul Gru muda dan bagaimana dia menjadi penjahat super.",
      director: "Kyle Balda, Brad Ableson",
    },
    {
      id: 29,
      judul: "Puss in Boots: The Last Wish",
      tahun: 2022,
      rating: 4.6,
      durasi: "1j 42m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Puss_in_Boots_The_Last_Wish_poster.jpg/220px-Puss_in_Boots_The_Last_Wish_poster.jpg",
      deskripsi:
        "Puss in Boots menemukan bahwa dia hanya memiliki satu dari sembilan nyawanya yang tersisa, dan memulai perjalanan untuk menemukan Bintang Harapan.",
      director: "Joel Crawford",
    },
    {
      id: 30,
      judul: "The Super Mario Bros. Movie",
      tahun: 2023,
      rating: 4.1,
      durasi: "1j 32m",
      genre: ["Animation", "Adventure", "Comedy"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/The_Super_Mario_Bros._Movie_poster.jpg/220px-The_Super_Mario_Bros._Movie_poster.jpg",
      deskripsi:
        "Dua tukang ledeng Brooklyn, Mario dan Luigi, tersedot ke dunia jamur yang aneh dan harus menyelamatkan seorang putri.",
      director: "Aaron Horvath, Michael Jelenic",
    },
    {
      id: 31,
      judul: "Elemental",
      tahun: 2023,
      rating: 4.0,
      durasi: "1j 41m",
      genre: ["Animation", "Comedy", "Family"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Elemental_poster.jpg/220px-Elemental_poster.jpg",
      deskripsi:
        "Di kota di mana elemen-elemen hidup berdampingan, seorang wanita api dan seorang pria air menemukan bahwa mereka memiliki lebih banyak kesamaan daripada yang mereka kira.",
      director: "Peter Sohn",
    },
    {
      id: 32,
      judul: "Spider-Man: Across the Spider-Verse",
      tahun: 2023,
      rating: 4.9,
      durasi: "2j 20m",
      genre: ["Animation", "Action", "Adventure"],
      gambar: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg/220px-Spider-Man-_Across_the_Spider-Verse_poster.jpg",
      deskripsi:
        "Miles Morales melintasi Multiverse, di mana ia bertemu tim Spider-People yang bertanggung jawab untuk melindungi keberadaannya.",
      director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(filmKartun.length / filmsPerPage);

  // Get current films to display
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filmKartun.slice(indexOfFirstFilm, indexOfLastFilm);

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
            Koleksi Film Kartun
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Temukan pilihan film-film kartun terbaik yang menghibur dan penuh makna
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
                  boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)", 
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
            Menampilkan {indexOfFirstFilm + 1} - {Math.min(indexOfLastFilm, filmKartun.length)} dari {filmKartun.length} film Kartun
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

export default Kartun;