import { motion } from 'framer-motion';

const priceCategories = [
  {
    title: 'Cuci AC (Hanya Jasa)',
    items: [
      { name: 'Cuci AC Standart 1 PK', price: 'Rp 85.000' },
      { name: 'Cuci AC Standart 1.5 PK', price: 'Rp 125.000' },
      { name: 'Cuci AC Standart 2 PK', price: 'Rp 150.000' },
      { name: 'Cuci AC Inverter 1 PK', price: 'Rp 100.000' },
      { name: 'Cuci AC Inverter 1.5 PK', price: 'Rp 150.000' },
      { name: 'Cuci AC Inverter 2 PK', price: 'Rp 175.000' },
      { name: 'Cuci Besar (Overhaul) 1 PK', price: 'Rp 650.000' },
      { name: 'Cuci Besar (Overhaul) 1.5 PK', price: 'Rp 750.000' },
      { name: 'Cuci Besar (Overhaul) 2 PK', price: 'Rp 850.000' },
    ]
  },
  {
    title: 'Pasang & Bongkar (Hanya Jasa)',
    items: [
      { name: 'Pasang AC 0,5 - 1 PK', price: 'Rp 300.000' },
      { name: 'Pasang AC 1.5 PK', price: 'Rp 400.000' },
      { name: 'Pasang AC 2 PK', price: 'Rp 500.000' },
      { name: 'Bongkar AC', price: 'Rp 200.000' },
      { name: 'Bongkar-Pasang 0,5 PK', price: 'Rp 450.000' },
      { name: 'Bongkar-Pasang 1 PK', price: 'Rp 550.000' },
      { name: 'Bongkar-Pasang 1,5 - 2 PK', price: 'Rp 650.000' },
    ]
  },
  {
    title: 'Freon & Sistem Pipa',
    items: [
      { name: 'Tambah Freon 0,5 PK', price: 'Rp 225.000' },
      { name: 'Tambah Freon 1 PK', price: 'Rp 275.000' },
      { name: 'Tambah Freon 1,5 - 2 PK', price: 'Rp 375.000' },
      { name: 'Pengecekan', price: 'Rp 100.000' },
      { name: 'Isi Full Freon 0,5 - 1 PK', price: 'Rp 375.000' },
      { name: 'Isi Full Freon 1,5 PK', price: 'Rp 475.000' },
      { name: 'Isi Full Freon 2 PK', price: 'Rp 575.000' },
      { name: 'Perbaikan Kebocoran 1 PK', price: 'Rp 225.000' },
      { name: 'Perbaikan Kebocoran 2 PK', price: 'Rp 325.000' },
      { name: 'Vakum System Pipa', price: 'Rp 175.000' },
      { name: 'Flushing System Pipa', price: 'Rp 225.000' },
    ]
  },
  {
    title: 'Sparepart Khusus',
    items: [
      { name: 'Kapasitor Kompresor 0,5 - 1 PK', price: 'Rp 400.000' },
      { name: 'Kapasitor Kompresor 1,5 - 2 PK', price: 'Rp 500.000' },
      { name: 'Kapasitor Fan 0,5 - 1 PK', price: 'Rp 275.000' },
      { name: 'Kapasitor Fan 1,5 - 2 PK', price: 'Rp 375.000' },
      { name: 'Overload 0,5 - 1 PK', price: 'Rp 275.000' },
      { name: 'Overload 1,5 - 2 PK', price: 'Rp 375.000' },
    ]
  },
  {
    title: 'Modul / PCB Kontrol & Outdoor',
    items: [
      { name: 'Perbaikan Modul 0,5 - 1 PK', price: 'Rp 775.000' },
      { name: 'Perbaikan Modul 1,5 - 2 PK', price: 'Rp 975.000' },
      { name: 'Penggantian Modul 0,5 - 1 PK', price: 'Rp 1.475.000' },
      { name: 'Penggantian Modul 1,5 - 2 PK', price: 'Rp 1.975.000' },
      { name: 'Perbaikan Modul Outdoor 1 PK', price: 'Rp 1.275.000' },
      { name: 'Perbaikan Modul Outdoor 2 PK', price: 'Rp 1.475.000' },
      { name: 'Ganti Modul Outdoor 1 PK', price: 'Rp 1.975.000' },
      { name: 'Ganti Modul Outdoor 2 PK', price: 'Rp 2.475.000' },
    ]
  }
];

export function PriceList() {
  return (
    <section id="harga" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Daftar Harga Layanan</h2>
          <p className="text-slate-600">Transparan tanpa biaya tersembunyi. Khusus jasa, sparepart diinformasikan setelah pengecekan teknisi.</p>
        </motion.div>

        <div className="space-y-8">
          {priceCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white"
            >
              <div className="bg-brand-50 border-b border-brand-100 p-4 sm:px-6">
                <h3 className="font-bold text-brand-800 text-lg">{category.title}</h3>
              </div>
              <div className="bg-slate-50 grid grid-cols-12 gap-4 p-4 sm:px-6 border-b border-slate-200 font-bold text-slate-700 text-sm md:text-base hidden sm:grid">
                <div className="col-span-8">Jenis Layanan</div>
                <div className="col-span-4 text-right">Harga</div>
              </div>
              <div className="divide-y divide-slate-100">
                {category.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 p-4 sm:px-6 items-center hover:bg-slate-50/80 transition-colors">
                    <div className="sm:col-span-8">
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                    </div>
                    <div className="sm:col-span-4 sm:text-right text-brand-600 font-extrabold text-sm md:text-base">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
