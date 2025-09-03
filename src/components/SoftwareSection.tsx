import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Monitor, Cog, Database } from "lucide-react";

const softwareCategories = [
  {
    title: "AEC Collection",
    description: "Comprehensive BIM and CAD capabilities for innovative design and confident construction",
    tools: [
      { name: "Revit", description: "Comprehensive BIM software for multidisciplinary building design and management" },
      { name: "Autodesk Forma", description: "Enhance projects with conceptual design, modeling tools, and real-time analytics" },
      { name: "AutoCAD", description: "Versatile 2D and 3D CAD software, complete with specialized toolsets and apps" },
      { name: "InfraWorks", description: "Conceptual design and analysis tool for civil infrastructure" },
      { name: "Civil 3D", description: "Advanced software tailored for civil engineering design and documentation" },
      { name: "Autodesk Docs", description: "A cloud platform to manage project data seamlessly" }
    ],
    icon: Monitor,
    color: "from-primary to-primary-glow"
  },
  {
    title: "ICM & InfoDrainage",
    description: "Advanced water infrastructure modeling and analysis tools",
    tools: [
      { name: "ICM Ultimate", description: "Advanced 1D and 2D integrated catchment modeling with comprehensive features" },
      { name: "InfoDrainage Standard", description: "Comprehensive drainage design and analysis" },
      { name: "InfoDrainage Ultimate", description: "Advanced drainage modeling and optimization" }
    ],
    icon: Database,
    color: "from-accent to-accent-glow"
  },
  {
    title: "Legacy Innovyze Tools",
    description: "Established water modeling software with proven track record",
    tools: [
      { name: "InfoSWMM", description: "Storm water management modeling" },
      { name: "InfoSewer", description: "Sewer system analysis and design" },
      { name: "XPSWMM", description: "Comprehensive urban drainage modeling" },
      { name: "InfoWater Pro", description: "Water distribution system modeling" },
      { name: "H2OMap Series", description: "Water and sewer modeling suite" }
    ],
    icon: Cog,
    color: "from-primary/80 to-accent/80"
  }
];

export const SoftwareSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Software Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A diverse blend of Autodesk subscription software and legacy Innovyze tools, 
            providing comprehensive solutions for engineering professionals.
          </p>
          <Badge variant="outline" className="text-sm">
            50+ Years of Modeling Experience
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {softwareCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm border-0"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <div className="font-semibold text-foreground text-sm">{tool.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{tool.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-4">
              Seamless Cross-Platform Integration
            </p>
            <p className="text-muted-foreground">
              Effortlessly switch between numerous PCs by simply logging into the Autodesk account, 
              with updates managed through Autodesk Access for the latest patches and developments.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};