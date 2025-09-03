import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Target 
} from "lucide-react";

const reasons = [
  {
    id: "A",
    title: "Professional Workflow Integration",
    description: "Seamless integration between different Autodesk tools creates a comprehensive workflow that enhances productivity and reduces project delivery time.",
    icon: Settings,
    highlight: "Workflow Efficiency"
  },
  {
    id: "B", 
    title: "Future-Proof Technology Investment",
    description: "Staying current with the latest software versions ensures access to cutting-edge features and maintains compatibility with industry standards.",
    icon: TrendingUp,
    highlight: "Technology Leadership"
  },
  {
    id: "C",
    title: "Data Security & Compliance",
    description: "Enterprise-grade security features and compliance tools protect sensitive project data while meeting industry regulatory requirements.",
    icon: Shield,
    highlight: "Security First"
  },
  {
    id: "D",
    title: "Performance & Scalability",
    description: "Advanced computational capabilities and cloud integration enable handling of complex infrastructure projects with superior performance.",
    icon: Zap,
    highlight: "High Performance"
  },
  {
    id: "E",
    title: "Collaborative Excellence",
    description: "Multi-user environments and real-time collaboration features facilitate better team coordination and project management.",
    icon: Users,
    highlight: "Team Collaboration"
  },
  {
    id: "F",
    title: "Strategic Business Value",
    description: "The combination of tools provides comprehensive solutions that deliver measurable ROI through improved project outcomes and efficiency gains.",
    icon: Target,
    highlight: "Business Impact"
  }
];

export const ReasonsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Six Key Investment Reasons
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive analysis of why these Autodesk subscriptions deliver exceptional value 
            for engineering professionals and infrastructure projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={reason.id} 
                className="group p-8 hover:shadow-primary/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/60 backdrop-blur-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-lg font-bold px-3 py-1 bg-accent/10 text-accent border-accent/20"
                    >
                      {reason.id}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {reason.highlight}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <p className="text-lg font-semibold text-foreground">
              Each reason represents a strategic investment in professional excellence and project success.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};