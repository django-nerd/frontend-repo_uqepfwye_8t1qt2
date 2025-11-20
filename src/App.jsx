import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import QuoteCalculator from "./components/QuoteCalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <QuoteCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
