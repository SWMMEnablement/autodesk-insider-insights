import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Minus, Waves, Droplets, Zap, Droplet } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  bestFor: string;
}

interface Feature {
  name: string;
  category: string;
  icmUltimate: boolean | 'partial';
  infoDrainage: boolean | 'partial';
  xpswmm: boolean | 'partial';
  infoWaterPro: boolean | 'partial';
}

const products: Product[] = [
  { 
    name: "ICM Ultimate", 
    icon: Waves, 
    color: "text-accent",
    description: "Flood, Sewer & Combined",
    bestFor: "Municipal utilities, large-scale flood modeling, combined sewer systems"
  },
  { 
    name: "InfoDrainage", 
    icon: Droplets, 
    color: "text-secondary-foreground",
    description: "Site Drainage & SuDS",
    bestFor: "Land developers, civil engineers, green infrastructure projects"
  },
  { 
    name: "XPSWMM", 
    icon: Zap, 
    color: "text-primary",
    description: "EPA SWMM Interface",
    bestFor: "EPA compliance, FEMA studies, regulatory submissions"
  },
  { 
    name: "InfoWater Pro", 
    icon: Droplet, 
    color: "text-blue-500",
    description: "Water Distribution",
    bestFor: "Water utilities, pressure management, distribution network optimization"
  },
];

const features: Feature[] = [
  { name: "1D/2D Hydraulic Modeling", category: "Modeling", icmUltimate: true, infoDrainage: 'partial', xpswmm: true, infoWaterPro: false },
  { name: "Real-Time Control (RTC)", category: "Modeling", icmUltimate: true, infoDrainage: false, xpswmm: true, infoWaterPro: true },
  { name: "Water Quality Simulation", category: "Modeling", icmUltimate: true, infoDrainage: false, xpswmm: true, infoWaterPro: true },
  { name: "SuDS/LID Design", category: "Design", icmUltimate: 'partial', infoDrainage: true, xpswmm: true, infoWaterPro: false },
  { name: "Stormwater Compliance", category: "Design", icmUltimate: true, infoDrainage: true, xpswmm: true, infoWaterPro: false },
  { name: "Pressure Zone Analysis", category: "Analysis", icmUltimate: false, infoDrainage: false, xpswmm: false, infoWaterPro: true },
  { name: "Network Optimization", category: "Analysis", icmUltimate: true, infoDrainage: false, xpswmm: 'partial', infoWaterPro: true },
  { name: "GIS Integration", category: "Integration", icmUltimate: true, infoDrainage: true, xpswmm: true, infoWaterPro: true },
  { name: "Ruby/Python API", category: "Integration", icmUltimate: true, infoDrainage: false, xpswmm: false, infoWaterPro: 'partial' },
  { name: "Cloud Collaboration", category: "Integration", icmUltimate: true, infoDrainage: true, xpswmm: 'partial', infoWaterPro: true },
];

const FeatureIndicator = ({ value }: { value: boolean | 'partial' }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-500" />
        </div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-amber-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
        <Minus className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export const FeatureComparison = () => {
  const categories = [...new Set(features.map(f => f.category))];

  return (
    <section id="comparison" className="py-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Product Comparison
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose the Right Tool for Your Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare key features across Autodesk's water infrastructure software portfolio.
          </p>
        </div>

        {/* Product Cards - Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 lg:hidden">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.name} className="p-3 bg-card/60 backdrop-blur-sm border-primary/10 text-center">
                <Icon className={`w-6 h-6 mx-auto mb-2 ${product.color}`} />
                <div className="font-semibold text-sm text-foreground">{product.name}</div>
                <div className="text-xs text-muted-foreground">{product.description}</div>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <Card className="bg-card/60 backdrop-blur-sm border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-primary/10 hover:bg-transparent">
                  <TableHead className="w-[200px] text-foreground font-semibold">Feature</TableHead>
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <TableHead key={product.name} className="text-center min-w-[120px]">
                        <div className="hidden lg:flex flex-col items-center gap-1">
                          <Icon className={`w-5 h-5 ${product.color}`} />
                          <span className="font-semibold text-foreground text-sm">{product.name}</span>
                          <span className="text-xs text-muted-foreground font-normal">{product.description}</span>
                        </div>
                        <div className="lg:hidden">
                          <Icon className={`w-5 h-5 mx-auto ${product.color}`} />
                        </div>
                      </TableHead>
                    );
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <>
                    <TableRow key={`cat-${category}`} className="bg-muted/30 hover:bg-muted/40">
                      <TableCell colSpan={5} className="font-semibold text-primary text-sm py-2">
                        {category}
                      </TableCell>
                    </TableRow>
                    {features
                      .filter(f => f.category === category)
                      .map((feature) => (
                        <TableRow key={feature.name} className="border-primary/5 hover:bg-primary/5">
                          <TableCell className="font-medium text-foreground text-sm">
                            {feature.name}
                          </TableCell>
                          <TableCell><FeatureIndicator value={feature.icmUltimate} /></TableCell>
                          <TableCell><FeatureIndicator value={feature.infoDrainage} /></TableCell>
                          <TableCell><FeatureIndicator value={feature.xpswmm} /></TableCell>
                          <TableCell><FeatureIndicator value={feature.infoWaterPro} /></TableCell>
                        </TableRow>
                      ))}
                  </>
                ))}
                {/* Best For Row */}
                <TableRow className="bg-accent/10 hover:bg-accent/15 border-t-2 border-accent/20">
                  <TableCell className="font-bold text-foreground text-sm py-4">
                    Best For
                  </TableCell>
                  {products.map((product) => (
                    <TableCell key={`best-${product.name}`} className="text-center py-4">
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px] mx-auto">
                        {product.bestFor}
                      </p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 p-4 border-t border-primary/10 bg-muted/20">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-emerald-500" />
              </div>
              <span className="text-muted-foreground">Full Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-amber-500" />
              </div>
              <span className="text-muted-foreground">Partial Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                <Minus className="w-3 h-3 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground">Not Available</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};