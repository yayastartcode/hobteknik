import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Promo } from './components/sections/Promo';
import { Electronics } from './components/sections/Electronics';
import { BookingForm } from './components/sections/BookingForm';
import { PriceList } from './components/sections/PriceList';
import { Gallery } from './components/sections/Gallery';
import { Faq } from './components/sections/Faq';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-50 font-sans text-slate-900">
      {/* Decorative Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-100 blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-indigo-100 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />
      
      <main>
        <Hero />
        <Promo />
        <Electronics />
        <BookingForm />
        <PriceList />
        <Gallery />
        <Faq />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
