import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function BookingForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('Cuci AC Standart (Mulai Rp 85.000)');
  const [address, setAddress] = useState('');

  const handleSend = (phoneNumber: string) => {
    if (!name || !address) {
      alert("Mohon isi nama dan alamat Anda");
      return;
    }
    const text = `Halo, saya ingin memesan layanan AC.\n\nNama: ${name}\nLayanan: ${service}\nAlamat: ${address}\n\nMohon direspon, terima kasih.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100/60"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Kirim Pesanan Cepat</h3>
            <p className="text-slate-500">Isi form di bawah ini untuk memesan layanan kami melalui WhatsApp.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Pilih Layanan</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors appearance-none"
                >
                  <option>Cuci AC Standart (Mulai Rp 85.000)</option>
                  <option>Cuci AC Inverter (Mulai Rp 100.000)</option>
                  <option>Tambah/Isi Full Freon (Mulai Rp 225.000)</option>
                  <option>Bongkar/Pasang AC (Mulai Rp 200.000)</option>
                  <option>Perbaikan Modul / PCB (Mulai Rp 775.000)</option>
                  <option>Pengecekan (Rp 100.000)</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Alamat / Lokasi Lengkap</label>
              <textarea
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Contoh: Jalan Sunset Road"
                className="flex min-h-[100px] w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => handleSend(siteConfig.phone1.number)}
                className={cn(
                  "inline-flex items-center justify-center w-full rounded-xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                  "bg-[#25D366] text-white hover:bg-[#20ba5a] h-14 shadow-lg shadow-green-500/20 gap-3 hover:scale-[1.01] active:scale-[0.99]"
                )}
              >
                <span className="mdi mdi-whatsapp text-2xl" />
                Pesan Sekarang via WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
