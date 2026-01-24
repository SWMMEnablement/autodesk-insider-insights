import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Droplets, Waves, CheckCircle2, ExternalLink, TrendingUp, Droplet, ThumbsUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface StatItem {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
  description: string;
}

interface MostVotedIdea {
  id: string;
  title: string;
  votes: number;
  product: 'icm' | 'infoDrainage' | 'infoWaterPro';
  link: string;
  status: 'pending' | 'under-review' | 'planned';
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

const mostVotedIdeas: MostVotedIdea[] = [
  {
    id: "1",
    title: "Enhanced Python/Ruby API for automated model building workflows",
    votes: 342,
    product: "icm",
    link: "https://innovyzefeedback.autodesk.com/ideas",
    status: "under-review"
  },
  {
    id: "2",
    title: "Real-time collaboration with multiple users on same model",
    votes: 287,
    product: "icm",
    link: "https://innovyzefeedback.autodesk.com/ideas",
    status: "planned"
  },
  {
    id: "3",
    title: "Integrated climate change scenario analysis tools",
    votes: 256,
    product: "infoDrainage",
    link: "https://innovyzefeedback.autodesk.com/ideas",
    status: "pending"
  },
  {
    id: "4",
    title: "Advanced pressure zone optimization with AI recommendations",
    votes: 198,
    product: "infoWaterPro",
    link: "https://innovyzefeedback.autodesk.com/ideas",
    status: "under-review"
  },
  {
    id: "5",
    title: "Native BIM/IFC export with full attribute mapping",
    votes: 175,
    product: "icm",
    link: "https://innovyzefeedback.autodesk.com/ideas",
    status: "pending"
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

type ProductKey = 'implemented' | 'icm' | 'infoDrainage' | 'infoWaterPro';

interface ProductConfig {
  key: ProductKey;
  label: string;
  icon: React.ElementType;
  color: string;
  badgeClass: string;
}

const productConfigs: ProductConfig[] = [
  { 
    key: 'implemented', 
    label: 'Implemented', 
    icon: CheckCircle2, 
    color: '#10b981',
    badgeClass: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/40'
  },
  { 
    key: 'icm', 
    label: 'ICM InfoWorks', 
    icon: Waves, 
    color: 'hsl(var(--primary))',
    badgeClass: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/40'
  },
  { 
    key: 'infoDrainage', 
    label: 'InfoDrainage', 
    icon: Droplets, 
    color: 'hsl(var(--secondary))',
    badgeClass: 'bg-secondary/50 text-foreground border-secondary/30 hover:bg-secondary/70'
  },
  { 
    key: 'infoWaterPro', 
    label: 'InfoWater Pro', 
    icon: Droplet, 
    color: '#3b82f6',
    badgeClass: 'bg-blue-500/20 text-blue-600 border-blue-500/30 hover:bg-blue-500/40'
  },
];

const productBadgeStyles: Record<MostVotedIdea['product'], { icon: React.ElementType; class: string; label: string }> = {
  icm: { icon: Waves, class: 'bg-accent/20 text-accent border-accent/30', label: 'ICM InfoWorks' },
  infoDrainage: { icon: Droplets, class: 'bg-secondary/50 text-foreground border-secondary/30', label: 'InfoDrainage' },
  infoWaterPro: { icon: Droplet, class: 'bg-blue-500/20 text-blue-600 border-blue-500/30', label: 'InfoWater Pro' },
};

const statusStyles: Record<MostVotedIdea['status'], { class: string; label: string }> = {
  'pending': { class: 'bg-muted text-muted-foreground', label: 'Pending' },
  'under-review': { class: 'bg-amber-500/20 text-amber-600 border-amber-500/30', label: 'Under Review' },
  'planned': { class: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30', label: 'Planned' },
};

const MostVotedCard = ({ idea, index }: { idea: MostVotedIdea; index: number }) => {
  const productStyle = productBadgeStyles[idea.product];
  const statusStyle = statusStyles[idea.status];
  const ProductIcon = productStyle.icon;

  return (
    <Card 
      className="p-4 bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1 min-w-[60px]">
          <div className="flex items-center gap-1 text-accent">
            <ThumbsUp className="w-4 h-4" />
            <span className="font-bold text-lg">{idea.votes}</span>
          </div>
          <span className="text-xs text-muted-foreground">votes</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <a 
            href={idea.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 group-hover:underline flex items-start gap-1"
          >
            {idea.title}
            <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className={`text-xs ${productStyle.class}`}>
              <ProductIcon className="w-3 h-3 mr-1" />
              {productStyle.label}
            </Badge>
            <Badge variant="outline" className={`text-xs ${statusStyle.class}`}>
              {statusStyle.label}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const UserVoiceStats = () => {
  const [visibleProducts, setVisibleProducts] = useState<Record<ProductKey, boolean>>({
    implemented: true,
    icm: true,
    infoDrainage: true,
    infoWaterPro: true,
  });

  const toggleProduct = (key: ProductKey) => {
    setVisibleProducts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate animationBegin based on visibility for smooth transitions
  const getAnimationProps = (isVisible: boolean) => ({
    animationDuration: 500,
    animationEasing: "ease-in-out" as const,
    style: {
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    }
  });

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
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">User Voice Trends</h3>
              <p className="text-sm text-muted-foreground">Click badges to toggle visibility</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {productConfigs.map((product) => {
                const Icon = product.icon;
                const isActive = visibleProducts[product.key];
                return (
                  <Badge 
                    key={product.key}
                    className={`cursor-pointer transition-all duration-300 transform ${product.badgeClass} ${
                      !isActive ? 'opacity-40 line-through scale-95' : 'scale-100'
                    }`}
                    onClick={() => toggleProduct(product.key)}
                  >
                    <Icon className={`w-3 h-3 mr-1 transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-12'}`} />
                    {product.label}
                  </Badge>
                );
              })}
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImplemented" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
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
                <Area 
                  type="monotone" 
                  dataKey="implemented" 
                  stroke="#10b981" 
                  strokeWidth={visibleProducts.implemented ? 2 : 0}
                  fillOpacity={visibleProducts.implemented ? 1 : 0} 
                  fill="url(#colorImplemented)"
                  {...getAnimationProps(visibleProducts.implemented)}
                />
                <Area 
                  type="monotone" 
                  dataKey="icm" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={visibleProducts.icm ? 2 : 0}
                  fillOpacity={visibleProducts.icm ? 1 : 0} 
                  fill="url(#colorIcm)"
                  {...getAnimationProps(visibleProducts.icm)}
                />
                <Area 
                  type="monotone" 
                  dataKey="infoDrainage" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={visibleProducts.infoDrainage ? 2 : 0}
                  fillOpacity={visibleProducts.infoDrainage ? 1 : 0} 
                  fill="url(#colorInfoDrainage)"
                  {...getAnimationProps(visibleProducts.infoDrainage)}
                />
                <Area 
                  type="monotone" 
                  dataKey="infoWaterPro" 
                  stroke="#3b82f6" 
                  strokeWidth={visibleProducts.infoWaterPro ? 2 : 0}
                  fillOpacity={visibleProducts.infoWaterPro ? 1 : 0} 
                  fill="url(#colorInfoWater)"
                  {...getAnimationProps(visibleProducts.infoWaterPro)}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Most Voted Ideas Section */}
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-accent" />
                Most Voted Ideas
              </h3>
              <p className="text-sm text-muted-foreground">Top pending requests from the community</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="group"
              onClick={() => window.open("https://innovyzefeedback.autodesk.com/ideas", "_blank")}
            >
              View All
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
          
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {mostVotedIdeas.map((idea, index) => (
              <MostVotedCard key={idea.id} idea={idea} index={index} />
            ))}
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
