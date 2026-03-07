import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      {/* Admin 2 Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={`https://wa.me/${siteConfig.phone2.number}`} 
        target="_blank" rel="noreferrer"
        className="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg shadow-amber-500/30 hover:scale-[1.05] active:scale-95 transition-transform relative group"
      >
        <span className="mdi mdi-whatsapp" />
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none select-none">
          Chat Admin 2
        </span>
      </motion.a>

      {/* Admin 1 Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        href={`https://wa.me/${siteConfig.phone1.number}`} 
        target="_blank" rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg shadow-green-500/30 hover:scale-[1.05] active:scale-95 transition-transform relative group"
      >
        <span className="mdi mdi-whatsapp" />
        <span className="absolute right-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none select-none">
          Chat Admin 1
        </span>
      </motion.a>
    </div>
  );
}
