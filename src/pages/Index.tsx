import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MarketSection from "@/components/MarketSection";
import SolutionSection from "@/components/SolutionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <MarketSection />
      <SolutionSection />
      <Footer />
    </div>
  );
};

export default Index;
