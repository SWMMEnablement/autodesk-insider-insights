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
                  The Dual Perspective
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have an unusual relationship with Autodesk software. As an employee, I have access to tools through work. 
                  But since 2021, I've also maintained my own paid subscription—AEC Collection, InfoDrainage, and ICM Ultimate. 
                  This isn't about access. It's about principle.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">The Tools in My Toolkit</h3>
                <p className="text-muted-foreground">
                  My personal subscription includes the software that has defined my 50-year career: from SWMM in the 1970s 
                  at the University of Florida, through the Innovyze era, to today's integrated Autodesk suite. These aren't 
                  just tools—they're part of my professional identity.
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
                    <span className="font-semibold text-foreground">Autodesk Employee</span>
                    <p className="text-xs text-muted-foreground">Professional role & access</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <span className="font-semibold text-foreground">Personal Subscriber</span>
                    <p className="text-xs text-muted-foreground">5 years and counting</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-secondary/30">
                  <Users className="w-6 h-6 text-foreground" />
                  <div>
                    <span className="font-semibold text-foreground">50+ Year Career</span>
                    <p className="text-xs text-muted-foreground">From SWMM to ICM Ultimate</p>
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