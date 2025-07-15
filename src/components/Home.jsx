import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Search, Film, Home as HomeIcon, BarChart2, Settings } from "lucide-react";

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F06292"];
const filmData = [
  { name: "Barat", value: 20 },
  { name: "India", value: 10 },
  { name: "Indonesia", value: 15 },
  { name: "Korea", value: 25 },
  { name: "Kartun", value: 5 },
  { name: "Malaysia", value: 8 },
];

const totalDitonton = filmData.reduce((sum, item) => sum + item.value, 0);
function Home({ onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState("home");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const kategori = ["Barat", "India", "Indonesia", "Korea", "Kartun", "Malaysia"];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f3c] to-[#132347] px-4 py-10 overflow-y-auto">
      <nav className="bg-white/5 backdrop-blur-lg fixed w-full top-0 left-0 z-10 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Film className="text-indigo-400" size={28} />
            <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
              CineLens
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveNav("home")}
              className={`flex items-center space-x-2 ${activeNav === "home" ? "text-indigo-400" : "text-white/80 hover:text-white"} cursor-pointer`}
            >
              <HomeIcon size={18} />
              <span>Beranda</span>
            </button>
            <a href="#kategori" className="text-white/80 hover:text-white flex items-center space-x-2 cursor-pointer">
              <Film size={18} />
              <span>Kategori</span>
            </a>
            <a href="#film-rekomendasi" className="text-white/80 hover:text-white flex items-center space-x-2 cursor-pointer">
              <BarChart2 size={18} />
              <span>Statistik</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto mt-20 space-y-12">
        <section className="text-center pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hallo!! <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Rahma Raju</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Kumpulan film yang udah dita tonton. Nambah film apa dita hari ini?
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Cari film..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-white/10 backdrop-blur-md text-white px-14 py-4 w-full rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-white/20 placeholder-white/50"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition cursor-pointer">
              Cari
            </button>
          </div>
        </section>
        <section id="kategori" className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Kategori Film</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Temukan film berdasarkan kategori yang kamu sukai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kategori.map((label, idx) => (
              <button
                key={idx}
                onClick={() => onMenuClick(label.toLowerCase())}
               className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 hover:from-indigo-500/30 hover:to-cyan-500/30 rounded-xl p-6 text-center shadow-lg transition-all duration-300 border border-white/10 hover:border-indigo-400/30 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                    <Film className="text-indigo-400 group-hover:text-white transition" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
                  <p className="text-white/70 text-sm">
                    {filmData.find(item => item.name === label)?.value || 0} film
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section id="film-rekomendasi" className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Statistik Penayangan</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Pantau kebiasaan menontonmu dan kategori favoritmu.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={filmData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {filmData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke="none"
                      />
                    ))}

                  </Pie>
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    formatter={(value, entry, index) => (
                      <span className="text-white text-sm">
                        {value} - {filmData[index].value} film
                      </span>
                    )}

                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    itemStyle={{ color: '#ffffff' }}
                    formatter={(value, name) => [`${value} film`, name]}
                    labelStyle={{ color: '#a5b4fc', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full lg:w-1/2 text-center">
              <p className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {totalDitonton}
              </p>
              <p className="text-xl text-white/90 mb-2">Total Film Ditonton</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home; 