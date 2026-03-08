import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Berapa lama estimasi pengerjaan cuci AC?",
      a: "Rata-rata pengerjaan cuci AC standar memakan waktu sekitar 30 - 45 menit per unit. Untuk perbaikan bisa berbeda tergantung tingkat kerusakannya dan pengecekan lebih detail."
    },
    {
      q: "Apakah area layanan mencakup seluruh Tangerang Selatan, Depok, dan Jakarta?",
      a: "Ya, kami melayani pemanggilan servis dan pengecekan untuk seluruh wilayah Tangerang Selatan, Kota Depok, dan seluruh wilayah Jakarta Raya tanpa biaya kunjungan tambahan."
    },
    {
      q: "Apakah ada garansi setelah perbaikan?",
      a: "Tentu. Kami memberikan garansi untuk perbaikan kerusakan atau pengisian freon, sehingga Anda bisa tenang menggunakan jasa kami."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Pertanyaan Seputar Layanan AC</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none hover:bg-slate-50/50"
              >
                {faq.q}
                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", activeFaq === index ? "rotate-180" : "")} />
              </button>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
