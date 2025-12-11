import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    console.log("Theme toggled");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    console.log(`Scrolled to ${sectionId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "methodology", "results", "notebook", "team"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-xl text-primary" data-testid="text-logo">
            AI4SD
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("overview")}
            className={`text-sm font-medium transition-colors ${
              activeSection === "overview" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-overview"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("methodology")}
            className={`text-sm font-medium transition-colors ${
              activeSection === "methodology" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-methodology"
          >
            Methodology
          </button>
          <button
            onClick={() => scrollToSection("results")}
            className={`text-sm font-medium transition-colors ${
              activeSection === "results" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-results"
          >
            Results
          </button>
          <button
            onClick={() => scrollToSection("notebook")}
            className={`text-sm font-medium transition-colors ${
              activeSection === "notebook" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-notebook"
          >
            Notebook
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className={`text-sm font-medium transition-colors ${
              activeSection === "team" 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-team"
          >
            Team
          </button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col space-y-4 p-4">
            <button
              onClick={() => scrollToSection("overview")}
              className={`text-sm font-medium transition-colors text-left ${
                activeSection === "overview" 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="mobile-link-overview"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("methodology")}
              className={`text-sm font-medium transition-colors text-left ${
                activeSection === "methodology" 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="mobile-link-methodology"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className={`text-sm font-medium transition-colors text-left ${
                activeSection === "results" 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="mobile-link-results"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("notebook")}
              className={`text-sm font-medium transition-colors text-left ${
                activeSection === "notebook" 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="mobile-link-notebook"
            >
              Notebook
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`text-sm font-medium transition-colors text-left ${
                activeSection === "team" 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="mobile-link-team"
            >
              Team
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}