import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import OrderPrints from './components/OrderPrints';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        <Hero />
        <Services />
        <OrderPrints />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
