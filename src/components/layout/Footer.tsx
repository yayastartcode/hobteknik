import { siteConfig } from '@/config/site';
import { MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center bg-white/5 w-fit p-3 rounded-2xl mb-6">
              <img src="/images/hoblg.png" alt="HOB Teknik Logo" className="h-20 lg:h-24 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Penyedia layanan jasa perawatan, cuci AC, dan servis elektronik Profesional, Rapi, Cepat, dan Bergaransi di wilayah Bali (Denpasar, Kuta, dsb).
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Kami</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cuci AC Panggilan</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Tambah & Isi Freon</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Bongkar Pasang AC</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Perbaikan AC Bocor Air</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Area Layanan</h4>
            <ul className="space-y-3 text-sm">
              {['Kota Denpasar', 'Kuta & Seminyak', 'Jimbaran & Uluwatu', 'Sanur & Renon', 'Canggu & Tabanan'].map(area => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-500" /> {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="mdi mdi-whatsapp text-brand-500 text-2xl" />
                <div>
                  <p className="font-bold text-white mb-0.5">WhatsApp Admin</p>
                  <a href={`https://wa.me/${siteConfig.phone1.number}`} className="hover:text-brand-400 transition-colors">{siteConfig.phone1.display}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <Clock className="w-5 h-5 text-brand-500 mt-1" />
                <div>
                  <p className="font-bold text-white mb-0.5">Jam Operasional</p>
                  <p className="text-slate-400">Setiap Hari: 08.00 - 20.00 WITA</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 font-medium">
        <p>&copy; {(new Date()).getFullYear()} HOB Teknik. All rights reserved.</p>
      </div>
    </footer>
  );
}
