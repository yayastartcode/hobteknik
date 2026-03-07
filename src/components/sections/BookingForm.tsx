import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function BookingForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('Cuci AC (Rp 70.000)');
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
            <p className="text-slate-500">Isi form di bawah ini, pilih admin untuk merespon pesanan Anda.</p>
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
                  <option>Cuci AC (Rp 70.000)</option>
                  <option>Cuci + Tambah Freon (Rp 150.000)</option>
                  <option>Isi Freon Full R32/R410 (Rp 250.000)</option>
                  <option>Bongkar Pasang AC (Rp 300.000)</option>
                  <option>Perbaikan AC Error/Bocor (Konsultasi)</option>
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
                placeholder="Contoh: Perumahan Bintaro Jaya Sektor 7, Tangerang Selatan" 
                className="flex min-h-[100px] w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors resize-none" 
                required
              />
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                type="button" 
                onClick={() => handleSend(siteConfig.phone1.number)}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl text-sm md:text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                  "bg-brand-600 text-white hover:bg-brand-700 h-14 shadow-lg shadow-brand-500/20 gap-2 hover:scale-[1.01] active:scale-[0.99]"
                )}
              >
                <span className="mdi mdi-whatsapp text-2xl" />
                Kirim ke Admin 1
              </button>
              
              <button 
                type="button" 
                onClick={() => handleSend(siteConfig.phone2.number)}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl text-sm md:text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                  "bg-amber-500 text-white hover:bg-amber-600 h-14 shadow-lg shadow-amber-500/20 gap-2 hover:scale-[1.01] active:scale-[0.99]"
                )}
              >
                <span className="mdi mdi-whatsapp text-2xl" />
                Kirim ke Admin 2
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
