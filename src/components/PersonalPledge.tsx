import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Calendar, TrendingUp } from "lucide-react";

const subscriptionYears = [
  { year: 2021, status: "complete" },
  { year: 2022, status: "complete" },
  { year: 2023, status: "complete" },
  { year: 2024, status: "complete" },
  { year: 2025, status: "complete" },
  { year: 2026, status: "current" },
];

const milestones = [
  { year: "1970s", label: "University of Florida", description: "First encounter with SWMM" },
  { year: "1985", label: "AutoCAD Begins", description: "Started using AutoCAD as a UF grad student" },
  { year: "1985-2020", label: "Career Milestones", description: "40+ years in water modeling & CAD" },
  { year: "2021", label: "Personal Subscription", description: "Started paying as an employee" },
  { year: "May 2026", label: "Left Autodesk", description: "Departed as an employee — subscription continues" },
  { year: "2026", label: "Present Day", description: "5 years in as a paying subscriber, going strong" },
  { year: "2030", label: "10-Year Goal", description: "Age 75 milestone — a decade of personal commitment" },
];

export const PersonalPledge = () => {
  return (
    <section id="personal-pledge" className="py-16 bg-gradient-to-br from-accent/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            <Target className="w-4 h-4 mr-2" />
            The Personal Pledge
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            A Promise to Myself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Documenting a personal commitment to the software's ecosystem, 
            separate from my professional role.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Subscription Counter */}
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Subscription History
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {subscriptionYears.map((item) => (
                <div 
                  key={item.year}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    item.status === "current" 
                      ? "bg-accent/20 border-accent/40 text-accent" 
                      : "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span className="font-semibold">{item.year}</span>
                  {item.status === "current" && (
                    <Badge className="ml-1 text-xs bg-accent/20 text-accent border-accent/30">
                      Current
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary">2021</div>
                <div className="text-xs text-muted-foreground">Started</div>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-xs text-muted-foreground">Years Strong</div>
              </div>
              <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                <div className="text-2xl font-bold text-emerald-600">15</div>
                <div className="text-xs text-muted-foreground">Year Goal</div>
              </div>
            </div>
          </Card>

          {/* Career Timeline */}
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Journey Timeline
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.year === "2026" 
                        ? "bg-accent ring-4 ring-accent/20" 
                        : milestone.year.includes("203") 
                          ? "bg-muted-foreground/30 border-2 border-dashed border-muted-foreground" 
                          : "bg-primary"
                    }`} />
                    {index < milestones.length - 1 && (
                      <div className={`w-0.5 h-8 ${
                        milestone.year.includes("203") || milestones[index + 1].year.includes("203")
                          ? "border-l-2 border-dashed border-muted-foreground/30"
                          : "bg-primary/30"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">{milestone.year}</span>
                      <span className="text-sm text-muted-foreground">—</span>
                      <span className="text-sm font-medium text-primary">{milestone.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Looking Ahead Quote */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">Looking Ahead to 80</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            "When I look at this site in 2036, I want to see the history of a promise kept. 
            Each year's renewal is a chapter. The bugs fixed, the features added, the projects 
            completed—all witnessed not just as an employee, but as a committed user."
          </p>
        </Card>
      </div>
    </section>
  );
};