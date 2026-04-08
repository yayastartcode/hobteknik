import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export function Promo() {
  return (
    <section id="promo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Promo & Paket Populer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Dapatkan harga spesial untuk perawatan rutin AC Anda agar tetap sejuk dan awet.</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Promo Card 1 */}
          <motion.div variants={fadeIn} className="bg-white border text-center border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow relative group">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">TERLARIS</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2 mt-2">Cuci AC Standart 1 PK</h3>
            <div className="flex items-end justify-center gap-2 mb-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600">Rp 85.000</p>
              <p className="text-sm text-slate-400 line-through mb-1">Rp 100.000</p>
            </div>
            <ul className="space-y-3 mb-8 text-left text-sm text-slate-600">
              {['Cuci Indor & Outdor', 'Cek Tekanan Freon', 'Cek Arus Listrik', 'Gratis Biaya Kunjungan'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#booking" className="block w-full text-center bg-brand-50 text-brand-700 py-3 rounded-xl font-semibold hover:bg-brand-100 transition-colors">Pesan Sekarang</a>
          </motion.div>

          {/* Promo Card 2 */}
          <motion.div variants={fadeIn} className="bg-white border-2 text-center border-brand-500 rounded-3xl p-6 shadow-xl shadow-brand-100 relative group lg:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">REKOMENDASI</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2 mt-2">Cuci + Tambah Freon 0.5 PK</h3>
            <div className="flex items-end justify-center gap-2 mb-6 text-center">
              <p className="text-4xl font-extrabold text-brand-600">Rp 310.000</p>
            </div>
            <ul className="space-y-3 mb-8 text-left text-sm text-slate-600 font-medium">
              {['Semua fitur cuci AC', 'Tambah Freon R32/R410a', 'Garansi Dingin', 'Free Konsultasi'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#booking" className="block w-full text-center bg-brand-600 text-white py-3.5 rounded-xl font-semibold hover:bg-brand-700 hover:shadow-lg transition-all">Pesan Sekarang</a>
          </motion.div>

          {/* Promo Card 3 */}
          <motion.div variants={fadeIn} className="bg-white border text-center border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow relative group">
            <h3 className="font-bold text-lg text-slate-900 mb-2 mt-2">Isi Full Freon 0.5 - 1 PK</h3>
            <div className="flex items-end justify-center gap-2 mb-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600">Rp 375.000</p>
            </div>
            <ul className="space-y-3 mb-8 text-left text-sm text-slate-600">
              {['Pengisian Freon Full', 'Cek Kebocoran', 'Vakum Sistem', 'Garansi 30 Hari'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#booking" className="block w-full text-center bg-brand-50 text-brand-700 py-3 rounded-xl font-semibold hover:bg-brand-100 transition-colors">Pesan Sekarang</a>
          </motion.div>

          {/* Promo Card 4 */}
          <motion.div variants={fadeIn} className="bg-white border text-center border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow relative group">
            <h3 className="font-bold text-lg text-slate-900 mb-2 mt-2">Bongkar-Pasang 0.5 PK</h3>
            <div className="flex items-end justify-center gap-2 mb-6 text-center">
              <p className="text-3xl font-extrabold text-brand-600">Rp 450.000</p>
            </div>
            <ul className="space-y-3 mb-8 text-left text-sm text-slate-600">
              {['Bongkar AC Lama', 'Pasang di Lokasi Baru', 'Setting & Testing', '(Belum termasuk material)'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#booking" className="block w-full text-center bg-brand-50 text-brand-700 py-3 rounded-xl font-semibold hover:bg-brand-100 transition-colors">Pesan Sekarang</a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
