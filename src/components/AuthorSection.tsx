import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AuthorSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="p-8 lg:p-12 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent/30 text-accent">
                  About the Author
                </Badge>
                <h2 className="text-3xl font-bold text-foreground">
                  From Employee to Independent Subscriber
                </h2>
                <p className="text-sm font-medium text-primary leading-snug">
                  SWMM6 & SWMM5 Enablement · Small Business Owner, Autodesk AEC Collection & ICM InfoWorks, IWP, IFD · Chair, SWMM5+ TAC at CIMM · EWRI Stormwater Modeling Committee
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have an unusual relationship with Autodesk software. From 2021 as an employee, I chose to pay for my own 
                  subscription—AEC Collection, InfoDrainage, and ICM Ultimate—even though I already had work access. On May 22, 2026, 
                  I left Autodesk. My personal subscription continues. This was never about access. It's about principle.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">The Tools in My Toolkit</h3>
                <p className="text-muted-foreground">
                  I've been an AutoCAD user since 1985, when I first used it as a graduate student at the University of Florida. 
                  From SWMM in the 1970s, through Civil 3D, the Innovyze era, to today's integrated Autodesk suite—these tools 
                  have been constants in my 50-year career. They're not just software; they're part of my professional identity.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="group"
                  onClick={() => window.open("https://www.linkedin.com/in/robertdickinson/", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn Profile
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="group"
                  onClick={() => window.open("https://swmm5.org", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  swmm5.org Blog
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Former Autodesk Employee</span>
                    <p className="text-xs text-muted-foreground">Departed May 22, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <span className="font-semibold text-foreground">Personal Subscriber</span>
                    <p className="text-xs text-muted-foreground">Since 2021 — still going</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-secondary/30">
                  <Users className="w-6 h-6 text-foreground" />
                  <div>
                    <span className="font-semibold text-foreground">50+ Year Career</span>
                    <p className="text-xs text-muted-foreground">From SWMM to ICM Ultimate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Chair, SWMM5+ TAC</span>
                    <p className="text-xs text-muted-foreground">CIMM · EWRI Stormwater Modeling Committee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Building2 className="w-6 h-6 text-accent" />
                  <div>
                    <span className="font-semibold text-foreground">Small Business Owner</span>
                    <p className="text-xs text-muted-foreground">SWMM6 & SWMM5 Enablement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};