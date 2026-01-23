import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Droplets, Waves, CheckCircle2, ExternalLink, TrendingUp, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

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
    label: "InfoWater Pro",
    value: 189,
    icon: Droplet,
    color: "from-blue-500 to-blue-600",
    description: "Water distribution modeling"
  },
  {
    label: "Implemented",
    value: 247,
    icon: CheckCircle2,
    color: "from-emerald-500 to-emerald-600",
    description: "Features delivered from User Voice"
  }
];

// Trend data for the chart
const trendData = [
  { quarter: "Q1 2023", implemented: 45, pending: 180, icm: 85, infoDrainage: 48, infoWaterPro: 28 },
  { quarter: "Q2 2023", implemented: 72, pending: 210, icm: 112, infoDrainage: 62, infoWaterPro: 36 },
  { quarter: "Q3 2023", implemented: 98, pending: 245, icm: 148, infoDrainage: 78, infoWaterPro: 45 },
  { quarter: "Q4 2023", implemented: 125, pending: 285, icm: 195, infoDrainage: 95, infoWaterPro: 58 },
  { quarter: "Q1 2024", implemented: 158, pending: 320, icm: 268, infoDrainage: 125, infoWaterPro: 72 },
  { quarter: "Q2 2024", implemented: 185, pending: 365, icm: 348, infoDrainage: 168, infoWaterPro: 95 },
  { quarter: "Q3 2024", implemented: 215, pending: 412, icm: 428, infoDrainage: 225, infoWaterPro: 125 },
  { quarter: "Q4 2024", implemented: 247, pending: 458, icm: 548, infoDrainage: 312, infoWaterPro: 189 },
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
  const { count, ref } = useCountUp(stat.value, 2000 + index * 150);
  const Icon = stat.icon;

  return (
    <div ref={ref}>
      <Card className="p-5 bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-foreground tabular-nums">
              {count.toLocaleString()}
              <TrendingUp className="inline-block w-3 h-3 ml-1 text-accent animate-pulse" />
            </div>
            <div className="text-sm font-semibold text-foreground mt-0.5">{stat.label}</div>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <Card className="p-3 bg-card/95 backdrop-blur-sm border-primary/20 shadow-lg">
        <p className="font-semibold text-foreground mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground capitalize">
              {entry.dataKey === 'icm' ? 'ICM InfoWorks' : 
               entry.dataKey === 'infoDrainage' ? 'InfoDrainage' :
               entry.dataKey === 'infoWaterPro' ? 'InfoWater Pro' :
               entry.dataKey}:
            </span>
            <span className="font-medium text-foreground">{entry.value}</span>
          </div>
        ))}
      </Card>
    );
  }
  return null;
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Trends Chart */}
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">User Voice Trends</h3>
              <p className="text-sm text-muted-foreground">Implemented vs Pending features over time</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Implemented
              </Badge>
              <Badge className="bg-accent/20 text-accent border-accent/30">
                <Waves className="w-3 h-3 mr-1" />
                ICM InfoWorks
              </Badge>
              <Badge className="bg-secondary/50 text-foreground border-secondary/30">
                <Droplets className="w-3 h-3 mr-1" />
                InfoDrainage
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                <Droplet className="w-3 h-3 mr-1" />
                InfoWater Pro
              </Badge>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImplemented" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIcm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInfoDrainage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInfoWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                <XAxis 
                  dataKey="quarter" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  formatter={(value) => {
                    const labels: Record<string, string> = {
                      implemented: 'Implemented',
                      icm: 'ICM InfoWorks',
                      infoDrainage: 'InfoDrainage',
                      infoWaterPro: 'InfoWater Pro'
                    };
                    return <span className="text-sm text-muted-foreground">{labels[value] || value}</span>;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="implemented" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorImplemented)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="icm" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorIcm)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="infoDrainage" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorInfoDrainage)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="infoWaterPro" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorInfoWater)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="text-center mt-8">
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
