import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Phone, ShieldCheck } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="lg:w-1/2 space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            KOntak Kami setiap Saat
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Servis AC & Elektronik <br />
            Tangerang Selatan, Depok, dan Jakarta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-600">Rapi, Cepat, Terpercaya</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Cha Teknik melayani servis AC & aneka barang elektronik panggilan ke rumah/kantor untuk area Tangerang Selatan, Depok, dan Jakarta. Teknisi kami berpengalaman, pengerjaan rapi, bergaransi, dan bebas biaya kunjungan.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={`https://wa.me/${siteConfig.phone1.number}`} target="_blank" rel="noreferrer" className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ring-offset-2",
              "bg-brand-600 text-white hover:bg-brand-700 h-14 px-8 shadow-xl shadow-brand-500/30"
            )}>
              <span className="mdi mdi-whatsapp text-2xl" />
              Konsultasi via WhatsApp
            </a>
            <a href={`tel:${siteConfig.phone1.number}`} className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 ring-offset-2",
              "bg-white text-slate-700 border border-slate-200 h-14 px-8 shadow-sm"
            )}>
              <Phone className="w-5 h-5" />
              Telepon Kami
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeIn} className="flex gap-8 pt-6 border-t border-slate-200/60 mt-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">8.000+</p>
              <p className="text-sm text-slate-500 font-medium">Pelanggan Puas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">15+</p>
              <p className="text-sm text-slate-500 font-medium">Teknisi Ahli</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">4.9/5</p>
              <p className="text-sm text-slate-500 font-medium">Rating Google</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src="/public/images/tkns.jpg" alt="Teknisi Servis AC" className="w-full h-[500px] object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Garansi Layanan</p>
                <p className="text-xs text-slate-500 font-medium">Hub kami</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
