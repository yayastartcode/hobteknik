import { motion } from 'framer-motion';

export function PriceList() {
  return (
    <section id="harga" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Daftar Harga Layanan</h2>
          <p className="text-slate-600">Transparan tanpa biaya tersembunyi. Area Tangerang Selatan, Depok & Jakarta bebas biaya kunjungan.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white"
        >
          <div className="bg-slate-50 grid grid-cols-12 gap-4 p-5 md:p-6 border-b border-slate-200 font-bold text-slate-800 text-sm md:text-base">
            <div className="col-span-8">Jenis Layanan</div>
            <div className="col-span-4 text-right">Estimasi Biaya</div>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              { title: 'Cuci AC Split 0.5 - 1 PK', price: 'Rp 70.000' },
              { title: 'Cuci AC Split 1.5 - 2 PK', price: 'Rp 80.000' },
              { title: 'Tambah Freon R32 / R410a', desc: 'Jika tekanan kurang dari standar', price: 'Rp 150.000' },
              { title: 'Isi Freon Full R32 / R410a', desc: 'Pengisian dari nol & Cek bocor dasar', price: 'Rp 250.000' },
              { title: 'Bongkar + Pasang AC Split', desc: 'Belum termasuk ketersediaan pipa', price: 'Rp 300.000' },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 p-5 md:p-6 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-8">
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  {item.desc && <p className="text-xs md:text-sm text-slate-500 mt-1">{item.desc}</p>}
                </div>
                <div className="col-span-4 text-right text-brand-600 font-extrabold text-sm md:text-base">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 p-5 text-center text-sm font-semibold text-indigo-700">
            Hubungi kami untuk layanan Perbaikan Modul, AC Bocor Air, atau Ganti Kompresor.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
