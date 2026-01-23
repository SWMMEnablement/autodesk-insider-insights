import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Users, 
  Monitor, 
  MessageSquare, 
  Rocket, 
  HelpCircle, 
  Heart,
  BookOpen,
  Menu,
  X,
  GitCompare
} from "lucide-react";

const navItems = [
  { id: "roi-calculator", label: "ROI Calculator", icon: Calculator },
  { id: "persona-pathways", label: "Pathways", icon: Users },
  { id: "workflow-comparison", label: "Workflow", icon: GitCompare },
  { id: "software-portfolio", label: "Software", icon: Monitor },
  { id: "whats-new", label: "What's New", icon: Rocket },
  { id: "trenches-timeline", label: "Timeline", icon: MessageSquare },
  { id: "future-vision", label: "Future", icon: HelpCircle },
  { id: "objections-faq", label: "FAQ", icon: HelpCircle },
  { id: "personal-reasons", label: "Personal", icon: Heart },
  { id: "resources", label: "Resources", icon: BookOpen },
];

export const StickyNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <span className="hidden sm:inline">Autodesk Insider</span>
              <span className="sm:hidden">AEP</span>
            </button>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center gap-1.5 px-3 py-2 text-sm font-medium
                      transition-all duration-200
                      ${isScrolled 
                        ? isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        : isActive
                          ? "text-white bg-white/20"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden xl:inline">{item.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-primary/10 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-3 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        flex flex-col items-center gap-1 h-auto py-3
                        ${isActive 
                          ? "bg-gradient-to-r from-primary to-accent text-white border-0" 
                          : "border-muted/30"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs">{item.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer when scrolled to prevent content jump */}
      {isScrolled && <div className="h-16" />}
    </>
  );
};
