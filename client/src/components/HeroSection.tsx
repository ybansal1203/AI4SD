import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Medical_AI_research_hero_8b260592.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    console.log(`Scrolled to ${sectionId}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground px-2" data-testid="text-hero-title">
            Robust Domain-Generalizable AI for{" "}
            <span className="text-primary dark:text-chart-2">Chest X-Ray Disease Classification</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4" data-testid="text-hero-description">
            Developing equitable medical AI that performs reliably across diverse clinical environments. 
            Our research addresses the critical generalization gap in diagnostic AI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("methodology")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg"
              data-testid="button-explore-research"
            >
              Explore Our Research
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("results")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg"
              data-testid="button-view-results"
            >
              View Results
            </Button>
          </div>

          <div className="pt-6 sm:pt-8 px-4">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2">
              Contributing to UN SDGs 3 and 10
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-xs text-muted-foreground">
              <span>Good Health & Well-being</span>
              <span className="hidden sm:inline">•</span>
              <span>Reduced Inequalities</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("overview")}
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}