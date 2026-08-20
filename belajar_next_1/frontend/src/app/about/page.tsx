
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kenali lebih dekat siapa saya, apa yang saya pelajari, dan apa
            yang memotivasi saya.
          </p>
        </div>

        {/* Ini profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Ini photo dan info */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-gray-800/50 flex items-center justify-center overflow-hidden">
              <Image
                src="/AFIQ.jpeg"
                alt="Muh Afiqri Rhamadan"
                width={192}
                height={192}
                className="w-full h-full object-cover object-top scale-110 translate-y-2"
                priority
              />
            </div>

            <div className="w-full space-y-3">
              {[
                { label: "Nama", value: "Muh Afiqri Rhamadan" },
                { label: "Kelas", value: "XII RPL 1" },
                { label: "Sekolah", value: "SMK Telkom Makassar" },
                { label: "Lokasi", value: "Makassar, Indonesia" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800/50"
                >
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deskripsi kanan */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Siapa Saya?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Saya adalah siswa kelas XII jurusan Rekayasa Perangkat Lunak
                (RPL) di SMK Telkom Makassar yang memiliki passion besar di bidang
                full-stack web development. Saya berfokus menciptakan solusi web yang modern,
                fungsional, dan memberikan pengalaman pengguna terbaik.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Perjalanan Saya
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Perjalanan saya di dunia pemrograman dimulai dari ketertarikan pada dasar web di kelas X.
                Seiring berjalannya waktu, saya mendalami ekosistem JavaScript modern seperti
                React.js, Next.js (App Router), TypeScript, hingga backend Express.js dan arsitektur database MySQL/PostgreSQL.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Tujuan Saya
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Saya bercita-cita menjadi seorang Full-Stack Software Engineer profesional yang mampu membangun
                aplikasi berskala besar dan bermanfaat bagi masyarakat. Portofolio ini merangkum
                pencapaian, kemampuan, dan proyek yang telah saya kembangkan.
              </p>
            </div>
          </div>
        </div>

        {/* Ini edukasi dan timeline pendidikan */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Pendidikan
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* timeline 1 */}
            <div className="relative pl-8 border-l-2 border-indigo-500/30">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-950" />
              <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800/50">
                <span className="text-xs text-indigo-400 font-medium">
                  2023 — Sekarang
                </span>
                <h3 className="text-white font-semibold mt-1">
                  SMK Telkom Makassar — XII RPL 1
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Menempuh pendidikan di Jurusan Rekayasa Perangkat Lunak (RPL). Mempelajari
                  pengembangan web fullstack, aplikasi mobile, arsitektur database, dan prinsip rekayasa perangkat lunak.
                </p>
              </div>
            </div>

            {/* timeline 2 */}
            <div className="relative pl-8 border-l-2 border-gray-800/50">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-700 border-4 border-gray-950" />
              <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800/50">
                <span className="text-xs text-gray-500 font-medium">
                  2020 — 2023
                </span>
                <h3 className="text-white font-semibold mt-1">SMP Telkom Makassar</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Awal mula mengenal dan tertarik dengan dunia teknologi informasi, komputer, serta logika pemrograman dasar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}