import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Brain, Cloud, Link2, Zap, Globe } from "lucide-react";

const visionItems = [
  {
    icon: Brain,
    timeline: "Now - 2025",
    title: "AI-Powered Model Setup",
    description: "Generative AI for initial model parameter estimation, reducing setup time by up to 40%. Automated pipe sizing suggestions based on upstream analysis.",
    status: "In Development",
    color: "from-primary to-primary-glow"
  },
  {
    icon: Link2,
    timeline: "2025 - 2026",
    title: "Real-Time Design ↔ Analysis",
    description: "Two-way integration between Autodesk Forma (conceptual design) and ICM (performance analysis). Change a site layout—instantly see flood impact. True performance-based design.",
    status: "Roadmap",
    color: "from-accent to-accent-glow"
  },
  {
    icon: Globe,
    timeline: "2025+",
    title: "Climate Data Integration",
    description: "Open API standards connecting water models with major climate forecasting datasets. Future rainfall scenarios, sea level rise projections—directly in your model.",
    status: "Roadmap",
    color: "from-primary/80 to-accent/80"
  },
  {
    icon: Cloud,
    timeline: "Ongoing",
    title: "Cloud-Native Workflows",
    description: "Full simulation capabilities in the cloud. Run 100 scenarios overnight without tying up local hardware. Collaborative model editing across time zones.",
    status: "Expanding",
    color: "from-accent/80 to-primary/80"
  },
  {
    icon: Zap,
    timeline: "2024 - 2025",
    title: "Accelerated Solvers",
    description: "GPU-accelerated 2D engine delivering 5-10x faster flood simulations. What took overnight now finishes during your coffee break.",
    status: "Available Now",
    color: "from-primary to-accent"
  }
];

export const FutureVisionSection = () => {
  return (
    <section id="future-vision" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            <Rocket className="w-4 h-4 mr-2" />
            Future-Proofing Your Investment
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where We're Headed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            50 years of legacy is powerful credibility. But you're investing in the next 5 years. 
            Here's the concrete vision—not marketing fluff.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant={item.status === "Available Now" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{item.timeline}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Strategic Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Strategic Direction
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                We're building toward a unified platform where <strong>conceptual design</strong>, 
                <strong> detailed engineering</strong>, and <strong>performance simulation</strong> operate 
                in a continuous feedback loop—not as siloed handoffs. Climate resilience isn't an add-on; 
                it's becoming core to how these tools think about infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Design ↔ Analyze
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Cloud-First
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  AI-Augmented
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Climate-Aware
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
