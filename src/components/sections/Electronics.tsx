import { motion } from 'framer-motion';
import { MonitorPlay, Refrigerator, Waves, Microwave } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: <Refrigerator className="w-8 h-8 md:w-10 md:h-10 text-brand-500" />,
    title: 'Kulkas & Freezer',
    desc: 'Servis kulkas tidak dingin, bocor air, mati total, isi freon, atau masalah pada kompresor untuk berbagai merek.'
  },
  {
    icon: <Waves className="w-8 h-8 md:w-10 md:h-10 text-brand-500" />,
    title: 'Mesin Cuci',
    desc: 'Perbaikan mesin cuci perbaikan saluran air, tabung tidak berputar, error modul, hingga masalah mesin cuci front/top loading.'
  },
  {
    icon: <MonitorPlay className="w-8 h-8 md:w-10 md:h-10 text-brand-500" />,
    title: 'Televisi (TV)',
    desc: 'Perbaikan masalah TV LED/Smart TV seperti gambar bergaris, suara hilang, layar gelap, hingga mati total.'
  },
  {
    icon: <Microwave className="w-8 h-8 md:w-10 md:h-10 text-brand-500" />,
    title: 'Peralatan Dapur & Lainnya',
    desc: 'Kami juga melayani servis Microwave, Magic Com, Kipas Angin, Dispenser, dan berbagai perangkat elektronik rumah tangga lainnya.'
  }
];

export function Electronics() {
  return (
    <section id="elektronik" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Selain AC, Kami Melayani</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Kami memiliki tim teknisi spesialis untuk menangani layanan servis berbagai perangkat elektronik rumah sakit tangga dengan jaminan pengerjaan bergaransi.</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
