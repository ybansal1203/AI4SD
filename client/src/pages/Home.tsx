import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import NotebookSection from "@/components/NotebookSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <MethodologySection />
        <ResultsSection />
        <NotebookSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}