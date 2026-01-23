import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Droplets, Landmark, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useSummaryContext } from "./ExecutiveSummary";

type PersonaKey = "land-dev" | "water-modeler" | "infrastructure";

interface Tool {
  name: string;
  priority: "core" | "secondary" | "advanced";
  description: string;
}

interface Persona {
  id: PersonaKey;
  title: string;
  subtitle: string;
  icon: typeof Building2;
  color: string;
  tools: Tool[];
  message: string;
  startingPoint: string;
}

const personas: Persona[] = [
  {
    id: "land-dev",
    title: "Land Development",
    subtitle: "Civil Engineer",
    icon: Building2,
    color: "from-primary to-primary-glow",
    tools: [
      { name: "Civil 3D", priority: "core", description: "Site grading, road design, utilities" },
      { name: "InfraWorks", priority: "core", description: "Conceptual design & visualization" },
      { name: "InfoDrainage Standard", priority: "core", description: "Stormwater management & BMP design" },
      { name: "AutoCAD", priority: "secondary", description: "2D documentation & detailing" },
      { name: "Autodesk Docs", priority: "secondary", description: "Project data management" },
      { name: "ICM Ultimate", priority: "advanced", description: "Complex flood analysis (often subcontracted)" },
    ],
    message: "Your core workflow. Start here. ICM Ultimate is for complex flood analysis you may subcontract to specialists.",
    startingPoint: "Civil 3D + InfoDrainage Standard"
  },
  {
    id: "water-modeler",
    title: "Municipal Water",
    subtitle: "Modeler",
    icon: Droplets,
    color: "from-accent to-accent-glow",
    tools: [
      { name: "ICM Ultimate", priority: "core", description: "Integrated catchment modeling & 2D flood analysis" },
      { name: "InfoSWMM", priority: "core", description: "Storm water management modeling" },
      { name: "InfoWater Pro", priority: "core", description: "Water distribution system analysis" },
      { name: "Civil 3D", priority: "secondary", description: "Site layout & existing conditions" },
      { name: "InfoDrainage Ultimate", priority: "secondary", description: "Advanced drainage optimization" },
      { name: "XPSWMM", priority: "advanced", description: "Complex urban drainage scenarios" },
    ],
    message: "Your analytical engine. Integration with Civil 3D ensures design intent matches model reality.",
    startingPoint: "ICM Ultimate + InfoSWMM"
  },
  {
    id: "infrastructure",
    title: "Large Infrastructure",
    subtitle: "Project Manager",
    icon: Landmark,
    color: "from-primary/80 to-accent/80",
    tools: [
      { name: "AEC Collection (Full)", priority: "core", description: "Complete BIM & CAD capabilities" },
      { name: "ICM Ultimate", priority: "core", description: "Enterprise-scale catchment modeling" },
      { name: "Autodesk Docs", priority: "core", description: "Multi-team collaboration & data management" },
      { name: "Autodesk Forma", priority: "secondary", description: "Real-time performance analytics" },
      { name: "InfoWater Pro", priority: "secondary", description: "Distribution network optimization" },
      { name: "InfoSewer", priority: "secondary", description: "Sewer system analysis at scale" },
    ],
    message: "Full suite for enterprise projects. Autodesk Docs becomes critical for multi-team coordination across complex programs.",
    startingPoint: "AEC Collection + ICM Ultimate"
  }
];

export const PersonaPathways = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaKey | null>(null);
  const summaryContext = useSummaryContext();

  const activePersona = personas.find(p => p.id === selectedPersona);

  // Update summary context when persona changes
  useEffect(() => {
    if (activePersona && summaryContext) {
      summaryContext.setPersonaData({
        id: activePersona.id,
        title: activePersona.title,
        subtitle: activePersona.subtitle,
        startingPoint: activePersona.startingPoint,
        coreTools: activePersona.tools.filter(t => t.priority === "core").map(t => t.name),
      });
    }
  }, [activePersona, summaryContext]);

  return (
    <section id="persona-pathways" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            <Sparkles className="w-4 h-4 mr-2" />
            Persona-Based Pathways
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not every firm needs the same setup. Select your role to see which tools 
            matter most for your specific workflow.
          </p>
        </div>

        {/* Persona Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isSelected = selectedPersona === persona.id;
            
            return (
              <Button
                key={persona.id}
                variant={isSelected ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedPersona(persona.id)}
                className={`
                  px-6 py-8 h-auto flex flex-col items-center gap-2 min-w-[200px]
                  transition-all duration-300
                  ${isSelected 
                    ? `bg-gradient-to-br ${persona.color} text-white border-0 shadow-lg scale-105` 
                    : 'hover:scale-102 border-muted-foreground/20'}
                `}
              >
                <Icon className="w-8 h-8" />
                <span className="font-bold text-lg">I am a...</span>
                <span className="text-base opacity-90">{persona.title}</span>
                <span className="text-sm opacity-75">{persona.subtitle}</span>
              </Button>
            );
          })}
        </div>

        {/* Results Panel */}
        {activePersona && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${activePersona.color} text-white`}>
                <div className="flex items-center gap-4">
                  <activePersona.icon className="w-10 h-10" />
                  <div>
                    <CardTitle className="text-2xl text-white">
                      {activePersona.title} {activePersona.subtitle}
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Your recommended software pathway
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {/* Starting Point */}
                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Start Here:</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {activePersona.startingPoint}
                  </span>
                </div>

                {/* Tool Grid */}
                <div className="space-y-4">
                  {/* Core Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      Core Tools
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {activePersona.tools.filter(t => t.priority === "core").map((tool) => (
                        <div 
                          key={tool.name}
                          className="p-4 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/15 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground">{tool.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{tool.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      Add as Needed
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {activePersona.tools.filter(t => t.priority === "secondary").map((tool) => (
                        <div 
                          key={tool.name}
                          className="p-4 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/15 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground">{tool.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{tool.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      Advanced / As Project Demands
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {activePersona.tools.filter(t => t.priority === "advanced").map((tool) => (
                        <div 
                          key={tool.name}
                          className="p-4 rounded-lg bg-secondary/50 border border-muted/30 hover:bg-secondary/70 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-foreground">{tool.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{tool.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Guidance Message */}
                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/50">
                  <p className="text-foreground italic">
                    "{activePersona.message}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Prompt to select */}
        {!selectedPersona && (
          <div className="text-center text-muted-foreground py-12">
            <p className="text-lg">👆 Select your role above to see your personalized pathway</p>
          </div>
        )}
      </div>
    </section>
  );
};
