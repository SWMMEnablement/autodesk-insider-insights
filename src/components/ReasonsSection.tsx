import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  TrendingUp, 
  Heart, 
  Zap, 
  Users, 
  Award 
} from "lucide-react";

const reasons = [
  {
    id: "A",
    title: "My Workflow, My Investment",
    description: "Paying for these tools ensures my workflow remains seamless and under my control. As a subscriber, I'm not dependent on employer-provided access.",
    icon: Wrench,
    highlight: "Personal Ownership"
  },
  {
    id: "B", 
    title: "Staying Current, Staying Relevant",
    description: "After 50 years in this field, I've learned that stagnation is the real risk. My subscription keeps me connected to how the software evolves.",
    icon: TrendingUp,
    highlight: "Continuous Growth"
  },
  {
    id: "C",
    title: "Skin in the Game",
    description: "When I report a bug or request a feature, I do so as a paying customer. That changes the conversation. I have stake in seeing improvements.",
    icon: Heart,
    highlight: "Genuine Stake"
  },
  {
    id: "D",
    title: "The Tools That Shaped My Career",
    description: "From SWMM in the 1970s to ICM Ultimate today—these tools are part of my professional identity. Supporting them is supporting my own legacy.",
    icon: Zap,
    highlight: "Career Legacy"
  },
  {
    id: "E",
    title: "Community & Contribution",
    description: "My subscription enables me to participate fully in forums, User Voice, and beta programs—not as an employee, but as a fellow user.",
    icon: Users,
    highlight: "Community Voice"
  },
  {
    id: "F",
    title: "A Legacy of Support",
    description: "My subscription is a vote of confidence in the software's future—a legacy I'm building year by year. At 80, I want to say I believed in these tools.",
    icon: Award,
    highlight: "Long-term Vision"
  }
];

export const ReasonsSection = () => {
  return (
    <section id="my-values" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Personal Values
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What This Subscription Means to Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't investment reasons for you—they're my personal values. 
            Why I choose to pay when I don't have to.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
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
              Each reason reflects a personal choice—not a sales pitch.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};