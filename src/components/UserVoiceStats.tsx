import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Droplets, Waves, CheckCircle2, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatItem {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
  description: string;
}

const stats: StatItem[] = [
  {
    label: "Total Ideas",
    value: 1383,
    icon: MessageSquare,
    color: "from-primary to-primary/70",
    description: "Across all Autodesk Water products"
  },
  {
    label: "ICM InfoWorks",
    value: 548,
    icon: Waves,
    color: "from-accent to-accent/70",
    description: "Flood, Sewer & Ultimate combined"
  },
  {
    label: "InfoDrainage",
    value: 312,
    icon: Droplets,
    color: "from-secondary to-secondary/70",
    description: "Site drainage & SuDS design"
  },
  {
    label: "Implemented",
    value: 247,
    icon: CheckCircle2,
    color: "from-green-500 to-green-600",
    description: "Features delivered from User Voice"
  }
];

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
  const Icon = stat.icon;

  return (
    <div ref={ref}>
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-foreground tabular-nums">
              {count.toLocaleString()}
              <TrendingUp className="inline-block w-4 h-4 ml-2 text-accent animate-pulse" />
            </div>
            <div className="text-lg font-semibold text-foreground mt-1">{stat.label}</div>
            <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const UserVoiceStats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Autodesk User Voice Community
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Community-Driven Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from the Autodesk User Voice platform. 
            Your ideas shape the future of water infrastructure software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="group"
            onClick={() => window.open("https://innovyzefeedback.autodesk.com/ideas", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Submit Your Idea on User Voice
          </Button>
        </div>
      </div>
    </section>
  );
};
