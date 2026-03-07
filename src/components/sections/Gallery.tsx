import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

// Mengambil semua gambar dari folder public/images/gale/
const images = import.meta.glob('/public/images/gale/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' });

// Mengubah object menjadi array of strings (URL gambar)
const imageUrls = Object.values(images) as string[];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Mencegah scrolling halaman saat lightbox terbuka
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto'; // Mengembalikan scrolling halaman
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % imageUrls.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + imageUrls.length) % imageUrls.length);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Galeri Pekerjaan Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Beberapa dokumentasi hasil perbaikan dan perawatan AC yang telah dikerjakan oleh teknisi ahli Cha Teknik.</p>
        </motion.div>

        {imageUrls.length > 0 ? (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {imageUrls.map((url, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={url}
                  alt={`Galeri AC ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />

                {/* Hover overlay dengan icon zoom */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-slate-500">Belum ada gambar di galeri saat ini.</p>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Tombol Tutup */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Tombol Prev */}
            <button
              onClick={goToPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <ChevronLeft className="w-8 h-8 -ml-1" />
            </button>

            {/* Container Gambar Aktif */}
            <motion.div
              layoutId={`gallery-img-${selectedImageIndex}`}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageUrls[selectedImageIndex]}
                alt={`Galeri AC besar ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/70 text-sm font-medium">
                {selectedImageIndex + 1} dari {imageUrls.length}
              </div>
            </motion.div>

            {/* Tombol Next */}
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <ChevronRight className="w-8 h-8 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
