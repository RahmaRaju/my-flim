import React from "react";

function TopRatedFilms() {
  const topFilms = [
    { title: "Film A", rating: 9.5, image: "https://via.placeholder.com/200" },
    { title: "Film B", rating: 9.4, image: "https://via.placeholder.com/200" },
    { title: "Film C", rating: 9.3, image: "https://via.placeholder.com/200" },
    { title: "Film D", rating: 9.2, image: "https://via.placeholder.com/200" },
    { title: "Film E", rating: 9.1, image: "https://via.placeholder.com/200" },
    { title: "Film F", rating: 9.0, image: "https://via.placeholder.com/200" },
    { title: "Film G", rating: 8.9, image: "https://via.placeholder.com/200" },
    { title: "Film H", rating: 8.8, image: "https://via.placeholder.com/200" },
    { title: "Film I", rating: 8.7, image: "https://via.placeholder.com/200" },
    { title: "Film J", rating: 8.6, image: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-6 px-4">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-4xl w-full text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow mb-6">Top Rated Films</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topFilms.map((film, idx) => (
            <div key={idx} className="bg-[#1d2d44]/90 p-4 rounded-lg shadow-md">
              <img src={film.image} alt={film.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-white font-bold">{film.title}</h3>
              <p className="text-white/80">Rating: {film.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedFilms;
