import Hero from "./components/Hero";
import Services from "./components/Services";
import QuoteCalculator from "./components/QuoteCalculator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />
      <Services />
      <QuoteCalculator />
      <Footer />
    </div>
  );
}

export default App;
