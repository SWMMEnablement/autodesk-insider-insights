import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";

export const WhatsNewSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="whats-new" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest Updates
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What's New in InfoWorks ICM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the latest features, improvements, and innovations. 
            Stay current with cutting-edge capabilities from Autodesk User Voice driven development.
          </p>
        </div>

        {/* Version Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-gradient-to-r from-primary to-primary-foreground/20 text-primary-foreground px-4 py-2 text-sm">
            ICM 2025.1 - Latest
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            ICM 2024.3
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            ICM 2024.2
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            ICM 2024.1
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            ICM 2023.x Archive
          </Badge>
        </div>

        {/* Embedded App Preview */}
        <Card className={`overflow-hidden border-primary/20 shadow-2xl transition-all duration-500 ${
          isExpanded ? "fixed inset-4 z-50" : "max-w-5xl mx-auto"
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 flex items-center justify-between border-b border-primary/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                icm-new-view-robertdickinson.replit.app
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Maximize2 className="w-4 h-4 mr-1" />
                {isExpanded ? "Minimize" : "Expand"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://icm-new-view-robertdickinson.replit.app", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Open Full App
              </Button>
            </div>
          </div>
          
          <div className={`relative bg-background ${isExpanded ? "h-[calc(100vh-8rem)]" : "h-[600px]"}`}>
            <iframe
              src="https://icm-new-view-robertdickinson.replit.app"
              className="w-full h-full border-0"
              title="What's New in InfoWorks ICM"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Card>

        {/* Backdrop for expanded mode */}
        {isExpanded && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              2025.1
            </Badge>
            <h3 className="text-lg font-semibold text-foreground mb-2">AI-Assisted Modeling</h3>
            <p className="text-sm text-muted-foreground">
              Generative AI for initial parameter estimation, reducing setup time significantly.
            </p>
          </Card>
          
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-accent/10 hover:border-accent/30 transition-colors">
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
              2024.3
            </Badge>
            <h3 className="text-lg font-semibold text-foreground mb-2">Enhanced FEH22 Support</h3>
            <p className="text-sm text-muted-foreground">
              Auto-generation of FEH22 rainfall data via ICM Exchange integration.
            </p>
          </Card>
          
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-colors">
            <Badge variant="secondary" className="mb-3">
              2024.2
            </Badge>
            <h3 className="text-lg font-semibold text-foreground mb-2">Batch Calibration Export</h3>
            <p className="text-sm text-muted-foreground">
              Export calibration graphs in batch with customizable templates—User Voice delivered.
            </p>
          </Card>
        </div>

        {/* User Voice Attribution */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Features driven by <span className="font-semibold text-primary">1,383+ ideas</span> on{" "}
            <a 
              href="https://innovyzefeedback.autodesk.com/ideas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Autodesk User Voice
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
