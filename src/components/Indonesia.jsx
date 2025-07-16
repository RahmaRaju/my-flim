import React, { useState } from "react";
import { Star, Clock, X } from "lucide-react";

function Indonesia() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const filmsPerPage = 20; 

  const filmIndonesia = [
    {
      id: 1,
      judul: "Surga yang Tak Dirindukan",
      tahun: 2015,
      rating: 4.8,
      durasi: "2j 4m",
      genre: ["Drama", "Romantis", "Religi"],
      gambar: "https://i.pinimg.com/736x/cd/5c/8b/cd5c8bd858f30775492dd4f236f1f312.jpg",
      deskripsi:
        "Arini punya kehidupan rumah tangga yang kelihatannya sempurna bareng suaminya, Pras. Tapi semuanya berubah saat Pras, karena sebuah kejadian tak terduga, menikahi wanita lain bernama Mei. Arini nggak pernah mau dimadu, tapi tiba-tiba harus nerima kenyataan pahit ini demi kebaikan. Sementara Pras terjebak antara cinta, tanggung jawab, dan pilihan yang nggak pernah dia bayangkan.",
      director: "Kuntz Agus",
    },
    {
      id: 2,
      judul: "Surga yang Tak Dirindukan 2",
      tahun: 2017,
      rating: 4.8,
      durasi: "2j 1m",
      genre: ["Drama", "Romantis", "Religi"],
      gambar: "https://i.pinimg.com/1200x/c9/7b/29/c97b2915f3d7fd92805bc5b37b834021.jpg",
      deskripsi:
        "Setelah semua drama di film pertama, Arini, Pras, dan Mei hidup dengan jalan masing-masing. Tapi takdir mempertemukan mereka lagi... kali ini di Budapest. Mei yang dulu menghilang, muncul kembali dan bikin Arini galau — antara mengikhlaskan atau mempertahankan. Pras pun terjebak lagi di tengah dua hati dan dua pilihan yang sama-sama berat.",
      director: "Manoj Punjabi",
    },
    {
      id: 3,
      judul: "Surga yang Tak Dirindukan 3",
      tahun: 2021,
      rating: 3.0,
      durasi: "2j 4m",
      genre: ["Drama", "Romance", "Religi"],
      gambar: "https://i.pinimg.com/1200x/56/f2/a7/56f2a7c1a69ba339046d11b9fe8fbbb1.jpg",
      deskripsi:
        "Setelah momen dramatis di film kedua, cerita berlanjut tentang Pras (Fedi Nuril) dan Meirose (Marsha Timothy) yang udah kembali bangun rumah tangga dan punya dua anak: Akbar & Nadia Mereka sempat hidup bahagia, tapi tiba-tiba gempa lagi: muncul Rey (Reza Rahadian), mantan Meirose dan ayah kandung Akbar, yang datang bawa drama. Blake ekonomi keluarga juga goyah karena Pras ditipu manager keuangan Seketika rumah tangga yang tadinya adem mendadak diuji lagi—Pras jadi cemburu, Meirose galau, dan semua serba rumit.",
      director: "Manoj Punjabi",
    },
    {
      id: 4,
      judul: "Setetes Embun Cinta Niyala",
      tahun: 2029,
      rating: 3.5,
      durasi: "1j 4om",
      genre: ["Romantis", "Drama"],
      gambar: "https://img.antaranews.com/cache/1200x800/2025/02/25/1000370613.jpg.webp",
      deskripsi:
        "Seorang gadis desa bernama Niyala berhasil menjadi dokter, tapi harus dijodohkan demi melunasi utang keluarga. Cinta masa kecilnya, Faiq, menikah dengan Diah, sementara Niyala dipaksa memilih antara keluarga atau hatinya, cinta segitiga penuh pengorbanan dan keikhlasan ",
      director: "Anggy Umbara",
    },
    {
      id: 5,
      judul: "Bismillah, Kunikahi Suamimu ",
      tahun: 2023,
      rating: 2.8,
      durasi: "1j 50m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/1200x/a9/55/fb/a955fb3f0cce9dd5fc6fecf89b3cace4.jpg",
      deskripsi:
        "Cathy, seorang dokter kandungan, pulang ke Indonesia dan tanpa sengaja bertemu lagi dengan Malik cinta lamanya yang kini sudah menikah dengan sahabatnya sendiri, Hanna. Saat Hanna divonis kanker dan kondisinya makin parah, ia meminta sesuatu yang nggak biasa agar Cathy menikah dengan Malik setelah ia tiada. Permintaan itu bikin Cathy galau, tapi akhirnya ia rela menikah demi Hanna. Dari situ, kisah cinta segitiga, pengorbanan, dan konflik batin pun dimulai.",
      director: "Benni Setiawan",
    },
    {
      id: 6,
      judul: "Hati Suhita",
      tahun: 2023,
      rating: 4.6,
      durasi: "2j 17m",
      genre: ["Romantis", "Drama", "Religi"],
      gambar: "https://i.pinimg.com/1200x/06/2c/fb/062cfbaf1f87683fe4a44fbfca46320f.jpg",
      deskripsi:
        "Alina Suhita, gadis kuat yang jadi santri dan pendidik di pesantren, dijodohkan dengan Gus Birru, putra pimpinan pesantren. Pernikahan mereka langsung diuji: Birru tak mencintai Suhita, bahkan menyukai wanita lain. Di balik itu, Suhita tetap memilih bertahan, berjuang dan membangun tempatnya sendiri di pesantren, sambil mengembalikan wibawa suaminya semua guna menjaga amanah dan kehormatan keluarga pesantren",
      director: "Archie Hekagery",
    },
    {
      id: 7,
      judul: "Cinta Subuh",
      tahun: 2022,
      rating: 3.8,
      durasi: "1j 52m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/1200x/28/da/2e/28da2e09f47c3f46609b051090691f0e.jpg",
      deskripsi:
        "Angga, mahasiswa yang nggak disiplin salat subuh, jatuh cinta sama Ratih, mahasiswi taat beragama. Ratih punya syarat: dia cuma mau dekat sama pria yang bisa salat subuh tepat waktu. Meski Angga berusaha, dia tetap bermasalah soal disiplin ibadah. Sementara itu ada Arya, sosok pria saleh yang juga mencintai Ratih namun hanya berani mendekati lewat jalur serius (nikah), bukan pacaran.",
      director: "Indra Gunawan",
    },
    {
      id: 8,
      judul: "Air Mata di Ujung Sajadah",
      tahun: 2023,
      rating: 4.0,
      durasi: "1j 45m",
      genre: ["Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/1200x/93/f5/f1/93f5f11c69f0f57f7592597597f3bf65.jpg",
      deskripsi:
        "Aqilla dibohongi ibunya bahwa bayinya meninggal saat lahir, padahal bayi itu diserahkan ke pasangan lain Arif dan Yumna. Tujuh tahun kemudian, Aqilla tahu anaknya Baskara masih hidup. Dia pun berjuang untuk mendapatkannya kembali, namun berat karena mengganggu kebahagiaan keluarga yang telah membesarkan anaknya.",
      director: "Key Mangunsong",
    },
    {
      id: 9,
      judul: "Sabtu Bersama Bapak",
      tahun: 2016,
      rating: 4.5,
      durasi: "1j 40m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/40/bc/6d/40bc6dcfa8d6a9d29856a0805116805a.jpg",
      deskripsi:
        "Gunawan didiagnosis hanya punya satu tahun lagi untuk hidup. Sebelum meninggal, ia membuat video pesan yang akan ditonton setiap Sabtu oleh istri dan kedua anaknya. Setelah ia tiada, kebiasaan ini terus dilestarikan Sabtu bersama ayah melalui layar video, yang mengajarkan nilai hidup dan membentuk karakter Satya dan Cakra. Namun seiring waktu, rahasia keluarga seperti penyakit ibu yang disembunyikan mulai terungkap dan menimbulkan konflik emosional di antara mereka.",
      director: "Monty Tiwa ",
    },
    {
      id: 10,
      judul: "Ngeri-Ngeri Sedap",
      tahun: 2022,
      rating: 4.8,
      durasi: "1j 54m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/a0/40/54/a0405410f873ac1cafeb2bd07623ca9b.jpg",
      deskripsi:
        "Pak Domu dan Mak Domu kangen berat sama keempat anaknya yang merantau dan jarang pulang ke kampung. Karena gak ada yang mau balik, Pak Domu pura-pura ingin cerai biar anak-anaknya panik dan akhirnya pulang. Rencana itu berhasil, tapi pas semua udah kumpul, malah muncul konflik lama yang belum selesai. Anak-anak punya luka dan pilihan hidup masing-masing yang gak pernah benar-benar didengar orang tuanya.",
      director: "Bene Dion Rajagukguk",
    },
    {
      id: 11,
      judul: "Me vs Mami",
      tahun: 2016,
      rating: 5.0,
      durasi: "1j 38m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/736x/40/38/aa/4038aa19474d3f13a820a33dedbd2ac9.jpg",
      deskripsi:
        "Mira mentalnya remaja banget dan Mami-nya super protektif dan nyebelin menurut Mira, harus pergi bareng ke Padang karena nenek sakit. Sepanjang perjalanan mereka ribut terus kayak Tom & Jerry. Tapi di balik konflik itu, pelan-pelan mereka mulai ngerti satu sama lain dan menemukan makna cinta keluarga yang sesungguhnya.",
      director: "Ody C. Harahap",
    },
    {
      id: 12,
      judul: "Susah Sinyal ",
      tahun: 2017,
      rating: 4.7,
      durasi: "1j 50m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/dc/16/62/dc166218bdc63087daaf2eec34e0f6ae.jpg",
      deskripsi:
        "Ellen adalah pengacara sibuk yang jauh dari anaknya, Kiara. Saat nenek Kiara meninggal, hubungan mereka makin renggang. Demi memperbaiki hubungan, mereka liburan bareng ke Sumba tempat indah tapi sinyalnya susah banget! Di tengah alam yang sepi dan tanpa koneksi, mereka justru mulai nyambung bukan lewat ponsel, tapi lewat hati.",
      director: "Ernest Prakasa",
    },
    {
      id: 13,
      judul: "Cek Toko Sebelah",
      tahun: 2016,
      rating: 4.7,
      durasi: "1j 44m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/80/a9/46/80a9461caaa394cd6491d76763630ae7.jpg",
      deskripsi:
        "Erwin anak muda sukses yang hidupnya udah nyaman dan mapan. Tapi semuanya berubah saat ayahnya, Koh Afuk, jatuh sakit dan minta Erwin nerusin toko kelontong keluarga.Masalahnya? Erwin nggak tertarik jualan dan punya mimpi lain. Di sisi lain, kakaknya Yohan merasa dianaktirikan karena nggak dipercaya pegang toko, padahal dia lebih dulu bantu sejak kecil.",
      director: "Ernest Prakasa",
    },
    {
      id: 14,
      judul: "Cek Toko Sebelah 2",
      tahun: 2022,
      rating: 4.7,
      durasi: "1j 54m",
      genre: ["Romantis", "Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/c9/a5/b7/c9a5b7c08f1594f31ac61da1d91ff4de.jpg",
      deskripsi:
        "Erwin berniat melamar Natalie, tapi ibu Natalie, Agnes, ragu karena perbedaan status sosial dan masa lalu keluarga Sementara itu, Yohan dan istrinya, Ayu, mendapati Koh Afuk terus mendesak mereka untuk segera punya anak padahal mereka belum siap secara mental dan finansial. ",
      director: "Ernest Prakasa",
    },
    {
      id: 15,
      judul: "Gara-Gara Warisan",
      tahun: 2022,
      rating: 4.0,
      durasi: "1j 52m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/736x/a9/19/e5/a919e543b5ec006053ac0ca28a8428cc.jpg",
      deskripsi:
        "Tiga saudara, Adam, Laras, dan Dicky berebut warisan berupa rumah kos milik ayah mereka, Dahlan.Semua punya alasan dan ambisi sendiri-sendiri. Tapi ayah mereka nggak tinggal diam dia bikin sayembara supaya anak-anaknya bisa membuktikan siapa yang paling layak mewarisi rumah kos itu.",
      director: "Muhadkly Acho",
    },
    {
      id: 16,
      judul: "Orang Kaya Baru",
      tahun: 2019,
      rating: 4.6,
      durasi: "1j 36m",
      genre: ["Romantis", "Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/dd/1e/ca/dd1eca83228d15c813af45d1c9c1727f.jpg",
      deskripsi:
        "Keluarga sederhana ini hidup pas-pasan, sampai tiba-tiba ayah mereka meninggal dan meninggalkan warisan gede banget. Seketika, mereka jadi orang kaya baru! Awalnya seru belanja mewah, pindah rumah, naik mobil mahal. Tapi makin lama, hidup jadi berantakan banyak masalah muncul, dan keluarga mulai retak karena lupa daratan.",
      director: " Ody C. Harahap",
    },
    {
      id: 17,
      judul: " Rumput Tetangga",
      tahun: 2019,
      rating: 3.5,
      durasi: "1j 43m",
      genre: ["Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/1200x/b4/01/06/b401060e99b36a07f99ec44d15a9e50a.jpg",
      deskripsi:
        "Kirana, ibu rumah tangga yang lelah dengan rutinitas harian dan merasa hidupnya gitu-gitu aja, tiba-tiba punya kesempatan buat nyobain hidup seperti apa yang dulu dia impikan jadi wanita karier sukses.Dengan bantuan dukun Instagram, dia bisa pindah ke dunia lain tempat dirinya jadi CEO keren. Tapi ternyata, hidup glamor itu gak seindah kelihatannya.",
      director: "Guntur Soeharjanto",
    },
    {
      id: 18,
      judul: "Dua Garis Biru",
      tahun: 2019,
      rating: 4.0,
      durasi: "1j 53m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/5a/7a/03/5a7a032effdd28a9b0a0a879ea45a92e.jpg",
      deskripsi:
        "Bima dan Dara adalah pasangan remaja SMA yang kebablasan. Dara hamil. Keluarga mereka syok, hubungan cinta mereka diuji, dan masa depan yang tadinya cerah berubah jadi penuh tekanan. Orang tua, sekolah, dan lingkungan sosial ikut campur, bikin keputusan makin berat. Di tengah semua itu, mereka harus belajar jadi dewasa lebih cepat dari seharusnya.",
      director: "Gina S. Noer",
    },
    {
      id: 19,
      judul: "Imperfect: Karier, Cinta & Timbangan",
      tahun: 2019,
      rating: 3.8,
      durasi: "1j 53m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/1200x/16/ea/10/16ea10ac052af56f0451f49e5f79615d.jpg",
      deskripsi:
        "Rara adalah cewek pintar dan baik, tapi sering minder karena bentuk tubuhnya yang nggak sesuai standar cantik zaman sekarang. Apalagi dia kerja di dunia media yang penuh tekanan soal penampilan.Pacarnya, Dika, sayang banget sama dia apa adanya. Tapi Rara mulai goyah waktu bosnya menyarankan dia diet dan makeover supaya bisa naik jabatan.",
      director: "Ernest Prakasa",
    },
    {
      id: 20,
      judul: "Dancing in the Rain",
      tahun: 2019,
      rating: 4.8,
      durasi: "1j 43m",
      genre: ["Drama", "Keluarga", "Persahabatan"],
      gambar: "https://i.pinimg.com/1200x/25/d6/ab/25d6ab81803842e1a45cae284a9e6f76.jpg",
      deskripsi:
        "Banyu adalah pria dengan spektrum autisme yang punya dunia sendiri, tapi hatinya tulus banget. Ia bersahabat dekat dengan Radin dan Kinara.Tiga sahabat ini selalu bersama, tapi ketika dewasa, kehidupan mulai memisahkan mereka. Banyu yang berbeda harus menghadapi dunia yang nggak selalu ramah dan di tengah itu semua, ia tetap percaya bahwa hujan adalah tempatnya menari dan merasa bebas.",
      director: "Rudy Aryanto",
    },
    {
      id: 21,
      judul: "Ayat-Ayat Cinta ",
      tahun: 2008,
      rating: 4.3,
      durasi: "2j 5m",
      genre: ["Romantis", "Drama", "Religi"],
      gambar: "https://i.pinimg.com/736x/c9/f6/43/c9f643515499dab21ad7a62c57995b49.jpg",
      deskripsi:
        "Fahri adalah mahasiswa Indonesia yang kuliah di Mesir. Dia sosok yang cerdas, saleh, dan disukai banyak perempuan. Tapi hidupnya berubah saat cinta datang dari arah yang nggak terduga ada Maria, Aisha, Noura, dan Nurul. Fahri harus menghadapi tuduhan palsu, ujian cinta, dan pilihan hidup yang rumit, semuanya tetap berpegang pada nilai-nilai Islam yang kuat.",
      director: "Hanung Bramantyo",
    },
    {
      id: 22,
      judul: "Ayat-Ayat Cinta 2 ",
      tahun: 2017,
      rating: 3.0,
      durasi: "2j 5m",
      genre: ["Romantis", "Drama", "Religi"],
      gambar: "https://i.pinimg.com/736x/5e/db/ea/5edbeadfbf241be49537eedcd1763f92.jpg",
      deskripsi:
        "Beberapa waktu setelah peristiwa di film pertama, Fahri kini tinggal di Edinburgh, Skotlandia sebagai dosen. Ia masih dibayangi rasa kehilangan sejak istrinya, Aisha, menghilang saat menjadi relawan di Gaza. Kehidupan di kota asing bikin Fahri bertemu berbagai figur baru dari tetangga Yahudi, violinis skeptis yang menuduhnya teroris, hingga sepupu Aisha, Hulya yang perlahan membuka hati Fahri. Di sisi lain, muncul Sabina, wanita terlantar yang dimanafaatkan Fahri sebagai keluarga baru. Di tengah pergulatan yang kompleks dari trauma, Islamofobia, hingga dilema cinta Fahri dipaksa terus berjuang menjaga iman, harapan, dan hati yang rapuh.",
      director: "Guntur Soehardjanto",
    },
    {
      id: 23,
      judul: "Merry Riana: Mimpi Sejuta Dolar",
      tahun: 2014,
      rating: 3.5,
      durasi: "1j 45m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/1200x/23/c4/3f/23c43f2fd3f2ca8db5ecfde0ecc64da6.jpg",
      deskripsi:
        "Menceritakan perjuangan Merry yang terpaksa pindah ke Singapura saat krisis 1998, hidup susah, bekerja keras sambil kuliah, dan akhirnya sukses mencapai mimpi satu juta dolar di usia muda disertai kisah cinta, kegagalan dan pelajaran hidup",
      director: "Hestu Saputra",
    },
    {
      id: 24,
      judul: "Dimsum Martabak",
      tahun: 2018,
      rating: 3.0,
      durasi: "1j 38m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/1200x/11/37/3d/11373db2f7ec2f01701a0c978637f019.jpg",
      deskripsi:
        "Mona kehilangan pekerjaan di restoran dimsum dan harus mencari nafkah untuk keluarganya. Dia akhirnya bergabung dengan food truck martabak milik Soga dan Dudi. Dari awal sering cekcok karena cara kerja beda, lama-lama kedekatan kerja ini berkembang jadi cinta. Tapi Soga menyembunyikan fakta bahwa dirinya adalah putra mahkota keluarga kaya. Saat Mona tahu, hubungan mereka terancam karena perbedaan status sosial.",
      director: "Andreas Sullivan",
    },
    {
      id: 25,
      judul: "Bila Esok Ibu Tiada",
      tahun: 2024,
      rating: 3.0,
      durasi: "1j 45m",
      genre: ["Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/a0/e5/a0/a0e5a05b67b8a22ee16e306a13661446.jpg",
      deskripsi:
        "Setelah kematian Haryo , sang ayah, Rahmi berjuang menjaga keutuhan rumah tangga dan merawat keempat anaknya, Ranika, Rangga, Rania, dan Hening. Seiring dewasa, Ranika menjadi sosok otoriter, sedangkan anak-anak lain menghadapi konflik dan jarak satu sama lain. Rahmi berharap anak-anaknya bersatu kembali sebelum ia tiada, namun harus menghadapi ego, perselisihan, dan kasih yang terluka di antara mereka.",
      director: "Rudi Soedjarwo",
    },
    {
      id: 26,
      judul: "Kaka Boss",
      tahun: 2024,
      rating: 3.5,
      durasi: "2j",
      genre: ["Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/b8/f4/f8/b8f4f8345e8b0c7a2540bc589dea31d8.jpg",
      deskripsi:
        "Ferdinand “Kaka Boss” Omakare adalah bos penagih utang dari Timur Indonesia yang sukses di Jakarta. Namun, putrinya, Angel, malu dengan profesinya yang kelihatan seperti preman. Demi bikin sang anak bangga, ia nekat banting setir jadi penyanyi meski suaranya sumbang dan perjalanan ini penuh konflik keluarga.",
      director: "Arie Kriting",
    },
    {
      id: 27,
      judul: "Kapan Kawin?",
      tahun: 2015,
      rating: 3.5,
      durasi: "1j 55m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/0f/be/dc/0fbedc4076289f3179227fde01f33a78.jpg",
      deskripsi:
        "Dinda, seorang profesional sukses berusia 33 tahun, terus didesak orang tua untuk menikah. Untuk menghindari tekanan tersebut, ia menyewa Satrio, seorang aktor teater idealis, sebagai pacar palsu saat pulang ke Yogyakarta. Namun, rencana sederhana ini jadi berantakan karena Satrio justru mencampuri skenario, dan Dinda akhirnya belajar lebih banyak soal dirinya dan hubungan dengan keluarga.",
      director: "Ody C. Harahap",
    },
    {
      id: 28,
      judul: "Bukaan 8",
      tahun: 2017,
      rating: 2.8,
      durasi: "1j 34m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/f7/81/4a/f7814a65071c59566b7ac4431b9b24c3.jpg",
      deskripsi:
        "Alfi adalah mantan admin media sosial yang sekarang jadi suami siaga. Istrinya, Mia, lagi hamil besar dan siap melahirkan. Tapi masalah muncul keluarga Mia gak terlalu suka sama Alfi, apalagi karena dia belum kerja tetap. Saat proses persalinan dimulai alias bukaan 1 sampai 8, konflik makin terasa tentang keuangan, kejujuran, dan penerimaan keluarga. Semua berpusat di rumah sakit, tapi banyak hal kocak dan emosional yang terjadi.",
      director: "Angga Dwimas Sasongko",
    },
    {
      id: 29,
      judul: "Mahasiswi Baru",
      tahun: 2019,
      rating: 2.7,
      durasi: "1j 36m",
      genre: ["Komedi", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/43/65/2d/43652de22320bd66e45f4550835618c7.jpg",
      deskripsi:
        "Lastri, wanita lanjut usia yang penuh semangat, memutuskan kuliah jadi mahasiswi baru. Langsung digeng sama mahasiswa muda, Sarah, Erfan, dan Reva. Mereka bikin kehebohan di kampus, plonco, pulang malam, bikin kampus ribut sampe anak Lastri, Anna pusing sendiri. Dekan Chaerul bahkan nyuruh evaluasi karena sudah terlalu ramai.",
      director: "Monty Tiwa",
    },
    {
      id: 30,
      judul: "3 Dara",
      tahun: 2015,
      rating: 2.7,
      durasi: "1j 32m",
      genre: ["Fiksi", "Drama", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/43/c9/6f/43c96fd82baa54343b08ed5465430e71.jpg",
      deskripsi:
        "Afandi, Richard, dan Jay adalah tiga cowok playboy yang sering mainin hati cewek. Suatu hari, karena satu kejadian aneh dan mistis, mereka tiba-tiba berubah jadi perempuan. Hidup pun jungkir balik dari susah jalan pakai heels, ribetnya dandan, sampai ngerasain gimana rasanya diperlakukan nggak adil sebagai cewek. Lewat pengalaman absurd ini, mereka belajar lebih menghargai perempuan dan mengevaluasi hidup masing-masing.",
      director: "Ardy Octaviand",
    },
    {
      id: 31,
      judul: "Jomblo",
      tahun: 2006,
      rating: 2.8,
      durasi: "1j 56m",
      genre: ["Romantis", "Drama", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/76/78/92/76789287f06858b136d5dbc2addbe9c2.jpg",
      deskripsi:
        "Empat mahasiswa Unb Bandung Doni, Agus, Olip, dan Bimo, masing-masing punya alasan unik jadi jomblo.Mereka saling bantu, belajar soal cinta, dan menghadapi perubahan hubungan Olip akhirnya belajar nyatakan cinta, Agus bertemu yang sejalan, sementara Doni dan Bimo juga mengalami pasang surut masing-masing.",
      director: "Hanung Bramantyo ",
    },
    {
      id: 32,
      judul: "Jelita Sejuba",
      tahun: 2018,
      rating: 4.0,
      durasi: "1j 45m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/1200x/fa/d8/8c/fad88cc616a57c6a77bb0e56dc0b5c43.jpg",
      deskripsi:
        "Sharifah, gadis lugu dari Natuna, dan Kapten Jaka, prajurit TNI, bertemu di warung makan kecil bernama Jelita Sejuba. Setelah pertemuan cepat, Jaka melamar Sharifah dan menikah. Namun, kehidupan sebagai istri tentara menuntut Sharifah menanggung rindu dan tanggung jawab sendirian terutama saat Jaka bertugas jauh, bahkan sempat gugur saat tugas PBB.Sharifah pun menjadi sosok tegar mengurus anak-anak dan menjalani hidup tanpa suami, sambil menjaga ingatan akan cinta dan pengorbanan mereka.",
      director: "Ray Nayoan",
    },
    {
      id: 33,
      judul: "Home Sweet Loan",
      tahun: 2024,
      rating: 4.5,
      durasi: "1j 52m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/1200x/c1/77/92/c1779271cfe5fbdc6bf40c3998a12bff.jpg",
      deskripsi:
        "Kaluna, hidup sebagai anak bungsu yang tinggal bersama orang tua dan dua kakaknya. Dia bermimpi punya rumah sendiri, tapi gajinya pas-pasan dan harus bantu keluarga mengatasi kesulitan keuangan. Ditemani sahabat-sahabatnya Danan, Miya, dan Tanish Kaluna jadi pejuang bermimpi sambil bantu keluarganya.",
      director: "Sabrina Rochelle Kalangie",
    },
    {
      id: 34,
      judul: "Laut Tengah ",
      tahun: 2024,
      rating: 2.8,
      durasi: "1j 48m",
      genre: ["Romantis", "Drama", "Keluarga", "Religi"],
      gambar: "https://i.pinimg.com/1200x/ef/90/49/ef904945f48b6bda8900c05c4a0b1c6f.jpg",
      deskripsi:
        "Haia adalah perempuan ambisius yang berjuang mendapatkan beasiswa S2 di Korea Selatan. Saat beasiswanya hampir batal, dosennya Prof.Fatih menawarkan jalan alternatif, menjadi istri kedua Bhumi, suami keponakan Prof.Fatih, agar ia bisa melanjutkan kuliah ia menerima tawaran itu. Haia pun meneruskan studi di Korea, sementara Bhumi masih berstatus suami sah dan mempunyai seorang istri pertama, Aisha, yang ternyata sedang sakit parah. Kini Haia harus memilih kembali ke Indonesia dan mengurus keluarga, atau tetap di Korea menyelesaikan pendidikannya. ",
      director: "Archie Hekagery",
    },
    {
      id: 35,
      judul: "Ajari Aku Islam",
      tahun: 2019,
      rating: 4.5,
      durasi: "1j 50m",
      genre: ["Romantis", "Drama", "Religi"],
      gambar: "https://i.pinimg.com/1200x/08/9d/cd/089dcd1bef1e7e959f6dc4c7d6d40fc7.jpg",
      deskripsi:
        "Kenny, pemuda Tionghoa Medan non-Muslim, jatuh cinta pada Fidya, gadis muslim Melayu. Hubungan mereka diuji karena perbedaan agama dan budaya, kedua keluarga punya rencana sendiri soal jodoh. Kesungguhan Kenny mengungkap keingintahuannya pada Islam justru berhasil membuat Fidya jatuh cinta padanya.",
      director: "Deni Pusung",
    },
    {
      id: 36,
      judul: "Hanum & Rangga",
      tahun: 2018,
      rating: 4.0,
      durasi: "1j 30m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://i.pinimg.com/1200x/53/7d/ca/537dca773398e7fd1875df4be7d81a8e.jpg",
      deskripsi:
        "Hanum dan Rangga pindah ke New York setelah meraih gelar doktor di Wina. Di sana, Hanum ditawari posisi produser acara di Global New York TV (GNTV) untuk membahas Islam di Amerika, impian yang ia dambakan sejak lama. Rangga mendukung keputusan karier sang istri, bahkan menunda risetnya sendiri. Namun, karier Hanum yang semakin menyita waktu menciptakan jarak antara mereka. Rangga merasa kesepian dan menemukan kenyamanan lewat aktivitas sukarela di perpustakaan bersama Azima, yang menimbulkan kecemburuan dalam rumah tangga mereka.",
      director: "Benni Setiawan",
    },
    {
      id: 37,
      judul: "172 Days",
      tahun: 2023,
      rating: 3.8,
      durasi: "1j 43m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/736x/5a/9d/61/5a9d6115f1b893336f792308060fbfe4.jpg",
      deskripsi:
        "adzira Shafa tumbuh dalam pergaulan bebas—pesta, alkohol, narkoba. Setelah melalui titik balik, ia memutuskan berhijrah dan memperdalam agama. Di salah satu majelis pengajian, ia bertemu dengan ustadz muda Ameer Azzikra. Cinta tumbuh, mereka menikah, dan hidup bahagia selama 172 hari. Namun kebahagiaan itu harus diuji saat Ameer jatuh sakit dan meninggal dunia, meninggalkan Zira dengan kesedihan dan keikhlasan.",
      director: "Hadrah Daeng Ratu",
    },
    {
      id: 38,
      judul: "Pintu Surga Terakhir",
      tahun: 2021,
      rating: 4.5,
      durasi: "1j 21m",
      genre: ["Romantis", "Drama"],
      gambar: "https://posters.cdn.klikfilm.net/380_543/pintu_surga_terakhir_380_543_rev.jpg",
      deskripsi:
        "rma adalah wanita karier sukses yang menunda nikah demi merawat ayahnya, yang dirawat sendiri sejak ibunya meninggal. Ia memandang sang ayah sebagai pintu surga terakhir. Suatu hari Irma dipertemukan kembali dengan Yusuf. Ketika hubungan cintanya tumbuh, ayahnya jatuh sakit. Irma pun menghadapi dilema besar antara menjaga ayah tercinta atau menjalanin cinta hatinya dengan Yusuf.",
      director: "Fajar Bustomi",
    },
    {
      id: 39,
      judul: "Catatan Harian Menantu Sinting",
      tahun: 2024,
      rating: 4.5,
      durasi: "2j 2m",
      genre: ["Romantis", "Drama", "Keluarga"],
      gambar: "https://lpminvest.com/wp-content/uploads/2025/01/catatan-harian.jpg",
      deskripsi:
        "Sahat dan Minar adalah pasangan Batak muda yang baru menikah dan tinggal di rumah ibu Sahat.Awalnya harmonis, konflik muncul karena mertua mendesak mereka cepat punya cucu laki-laki bahkan melarang pindah rumah sebelum hal itu terjadi. Minar merasa tersiksa karena sulit membangun hubungan suami-istri di bawah pengawasan ibu mertua. Konflik jadi makin rumit saat diketahui masalah kesuburan Sahat. Mereka pun cek up medis, sampai tekanan tinggi ibu mertua memuncak.",
      director: "Sunil Soraya",
    },
    {
      id: 40,
      judul: "Miracle in Cell No. 7 ",
      tahun: 2022,
      rating: 4.0,
      durasi: "2j 25m",
      genre: ["Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/b5/b9/29/b5b929af2c6903a2b94e01d1f56b8b7a.jpg",
      deskripsi:
        "Dodo Rozak, pria sederhana dengan gangguan kecerdasan, tak sengaja dituduh membunuh dan memperkosa anak pejabat. Ia dipenjara di sel nomor 7, bertemu tahanan lain seperti Japra, Zaki, dan lainnya. Mereka bersimpati dan membantu Dodo menyelundupkan tamu, putri kecilnya, Kartika. Saat kisahnya terungkap, Kartika yang sudah dewasa berjuang untuk membebaskan sang ayah menyelamatkan warisan cinta dan keadilan keluarga.",
      director: "Hanung Bramantyo",
    },
    {
      id: 41,
      judul: "Hello Ghost",
      tahun: 2023,
      rating: 4.0,
      durasi: "1j 54m",
      genre: ["Romantis", "Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/b6/50/98/b65098c578b0c1d6a74c504aad00c6eb.jpg",
      deskripsi:
        "Kresna, seorang pria yang depresi dan gagal bunuh diri, tiba-tiba bisa melihat empat hantu, Kuatno, kakek usil mata keranjang, Bima, mantan sopir angkot perokok, Lita, hantu yang mudah menangis, Chika, anak kecil bersepatu roda. Mereka tak akan pergi sebelum Kresna memenuhi permintaan terakhir mereka. Lewat petualangan ini, dia mulai menyembuhkan luka batin, menemukan cinta bersama Suster Linda, dan melihat makna hidup baru.",
      director: " Indra Gunawan",
    },
    {
      id: 42,
      judul: "Mencuri Raden Saleh ",
      tahun: 2022,
      rating: 4.5,
      durasi: "2j 34m",
      genre: ["Drama", "Aksi"],
      gambar: "https://i.pinimg.com/1200x/49/1a/b5/491ab566dbfb93f69df4a63703756a8c.jpg",
      deskripsi:
        "Piko, mahasiswa seni rupa, menjadi pemalsu lukisan untuk membebaskan ayahnya dari penjara. Ia mendapat tawaran nyeleneh, mencuri lukisan masterpiece Raden Saleh, The Arrest of Pangeran Diponegoro, dari Istana Negara. Ia membentuk tim, Ucup si hacker, Sarah si atlet jago bela diri, Gofar montir, Tuktuk pembalap, dan Fella bandar judi kampus. Misi mereka penuh permainan risiko, konflik keluarga, dan tantangan moral.",
      director: "Angga Dwimas Sasongko",
    },
    {
      id: 43,
      judul: "Kang Mak from Pee Mak",
      tahun: 2024,
      rating: 3.5,
      durasi: "2j 2m",
      genre: ["Romantis", "Komedi", "Keluarga", "Horor"],
      gambar: "https://i.pinimg.com/736x/c4/dc/cf/c4dccf5d55a57818ae13cd3154b70ace.jpg",
      deskripsi:
        "Tentara RI Makmur pulang dari medan perang untuk menemui istrinya, Sari, yang tengah hamil. Dia ditemani oleh empat sahabat Supra, Jaka, Fajrul, dan Solah. Mereka selamat kembali dan sempat merayakan bersama. Namun tiba-tiba muncul rumor bahwa Sari sudah meninggal, dan yang menemui Makmur selama ini ternyata arwah. Makmur pun harus menyingkap misteri supernatural itu sambil tetap mempertahankan persahabatan dan cintanya.",
      director: "Herwin Novianto",
    },
    {
      id: 44,
      judul: "Bangsal Isolasi",
      tahun: 2024,
      rating: 3.0,
      durasi: "1j 30m",
      genre: [ "Horor", "Laga"],
      gambar: "https://i.pinimg.com/736x/fe/91/f0/fe91f00f1bc81f0a6815562050394230.jpg",
      deskripsi:
        "Weni, seorang jurnalis berani, menyamar sebagai narapidana demi menyelidiki kematian adiknya, Ratna, di Lapas Ratu Adil. Ia memasuki bangsal isolasi sel kutukan di mana penghuni selalu menemui ajal. Dengan bantuan sipir Adit, ia menghadapi napi berbahaya seperti Bella serta mencoba mengungkap konspirasi gelap dan kematian misterius penghuni lapas tersebut.",
      director: "Adhe Dharmastriya",
    },
    {
      id: 45,
      judul: " Racun Sangga: Santet Pemisah Rumah Tangga",
      tahun: 2024,
      rating: 4.9,
      durasi: "1j 58m",
      genre: ["Romantis", "Horor", "Keluarga"],
      gambar: "https://i.pinimg.com/736x/10/14/26/10142614c9ce5f07ee9f35d91100eb61.jpg",
      deskripsi:
        "Maya dan Andi adalah pasangan suami istri yang pindah ke rumah baru setelah menikah via taaruf. Awalnya bahagia, kebahagiaan mereka sirna saat mulai terjadi kejanggalan, hewan mati muncul, suara misterius terdengar, dan hawa rumah terasa sangat pana.  Andi kemudian jatuh sakit misterius mimpi buruk, halusinasi, batuk darah, hingga lumpuh total. Maya yang tengah hamil berusaha mencari penyembuhan medis dan alternatif, tapi Andi semakin memburuk. Akhirnya mereka menyadari ini bukan penyakit biasa, tapi akibat Racun Sangga, ritual santet Kalimantan yang bertujuan merusak rumah tangga dan menembus tubuh korban secara mendalam. Maya pun harus melawan mistis sambil melindungi suami dan janinnya.",
      director: "Rizal Mantovani",
    },
    {
      id: 46,
      judul: "KKN di Desa Penari",
      tahun: 2022,
      rating: 3.7,
      durasi: "1j 30m",
      genre: ["Horor"],
      gambar: "https://i.pinimg.com/736x/d7/42/de/d742de97ac5af7c709955e8433720c5d.jpg",
      deskripsi:
        "Enam mahasiswa KKN, Nur, Widya, Ayu, Bima, Anton, dan Wahyu ditugaskan ke desa terpencil. Mereka diberi peringatan untuk tidak melewati gapura Tapak Tilas. Namun ketika Ayu dan Bima melanggar tabu, teror mistis mulai terjadi kesurupan, penampakan penari gaib bernama Badarawuhi, dan ritual desa menyeramkan. ",
      director: "Awi Suryadi",
    },
    {
      id: 47,
      judul: "Badarawuhi di Desa Penari",
      tahun: 2024,
      rating: 3.5,
      durasi: "1j 20m",
      genre: ["Horor"],
      gambar: "https://i.pinimg.com/736x/70/aa/55/70aa55c38bac82809a79875dc9c73385.jpg",
      deskripsi:
        "Di tahun 1955, sosok mistis Badarawuhi menjadi ratu roh Desa Penari. Setelah memakan tumbal pertama, ceritanya dilanjutkan 25 tahun kemudian Mila bersama sepupunya Yuda dan teman Arya serta Jito, datang ke desa terpencil buat menyembuhkan ibunya melalui ritual mengembalikan gelang pusaka kawaturih. Namun kedatangan mereka memancing badai teror dari roh penari pemimpin itu. Ritual dhawuh menjerat para perempuan, konflik mistis nyata, dan mereka pun berusaha kabur dari desa sebelum jadi korban selanjutnya.",
      director: " Kimo Stamboel",
    },
    {
      id: 48,
      judul: "Agak Laen",
      tahun: 2024,
      rating: 4.0,
      durasi: "1j 59m",
      genre: ["Horor", "Komedi"],
      gambar: "https://i.pinimg.com/736x/5c/83/30/5c83309dc09de9201ff80ef175a8b202.jpg",
      deskripsi:
        "Empat sahabat—Bene, Jegel, Boris, dan Oki—punya usaha rumah hantu di pasar malam. Awalnya sepi pengunjung, mereka coba bikin atraksi mistis dan malah berhasil! Namun segalanya jadi kacau saat salah satu pengunjung, calon anggota DPRD, tiba-tiba tewas di dalam wahana. Panikan, mereka memutuskan mengubur jenazah itu di dalam rumah hantu biar gak ketahuan. Tapi bukan membantunya malah makin menyeramkan arwah korban gentayangan, wahana jadi viral tapi juga bikin polisi curiga dan semua jadi berantakan Mereka pun berusaha nutupin kejadian itu rancang cerita horor baru, bohong ke polisi, sambil menghadapi teror arwah yang makin liar.",
      director: "Ernest Prakasa",
    },
    {
      id: 49,
      judul: "Onde Mande!",
      tahun: 2023,
      rating: 3.5,
      durasi: "1j 37m",
      genre: ["Romantis", "Drama", "Keluarga", "Komedi"],
      gambar: "https://i.pinimg.com/1200x/00/6d/2d/006d2de23f0173252571860e2944336f.jpg",
      deskripsi:
        "Angku Wan, mantan guru desa Sigiran, menang undian besar dari perusahaan sabun. Sayangnya, ia meninggal mendadak sebelum bisa klaim hadiahnya Teman dan warga desa pun kompak bikin rencana unik pura-pura Angku Wan masih hidup agar uangnya tetap bisa dipakai membangun desa.",
      director: "Paul Fauzan Agusta",
    },
    {
      id: 50,
      judul: "Mariposa",
      tahun: 2020,
      rating: 3.3,
      durasi: "1j 58m",
      genre: ["Romantis", "Drama"],
      gambar: "https://i.pinimg.com/736x/9a/30/80/9a308015884fa0f67a6673b8695a1a0e.jpg",
      deskripsi:
        "Acha, siswi baru yang ceria dan ambisius, jatuh cinta pada pandangan pertama ke Iqbal, siswa pintar tapi dingin karena tekanan ayahnya untuk menjuarai olimpiade sains. Dengan tekad kuat, Acha terus mendekat, meyakinkan Iqbal bahwa hatinya akan cair seperti air yang perlahan memecahkan batu. Namun hubungan mereka diuji saat Iqbal dihadapkan pada dilema antara cinta dan harapan orang tua.",
      director: "Fajar Bustomi ",
    },
    {
      id: 51,
      judul: "MeloDylan",
      tahun: 2019,
      rating: 2.8,
      durasi: "1j 32m",
      genre: ["Romantis", "Drama", "Keluarga", "Sedih"],
      gambar: "https://i.pinimg.com/1200x/ca/7f/03/ca7f03a14c1fec3cadb1925d167306b4.jpg",
      deskripsi:
        "Melody pindah ke sekolah baru pas lagi bawa beban masa lalu, termasuk mantan pacar yang bikin repot. Di sinilah ia bertemu Dylan, cowok populer dan penuh misteri. Mereka saling tertarik dan bikin geger sekolah. Namun konflik muncul karena rumor, rival, dan perbedaan karakter. Ketika akhirnya mereka memutuskan berpisah, Melody menyadari cintanya lebih dalam dari yang ia kira. Tiba-tiba Dylan harus kuliah ke luar negeri. Sebelum pergi, Dylan tinggalkan video cinta yang membuat Melody punya harapan baru bahwa mereka akan bertemu lagi suatu hari.",
      director: "Fajar Nugros",
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
            Film Indonesia
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