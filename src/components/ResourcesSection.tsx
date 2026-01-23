import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare, Users, Headphones, Award, Rocket } from "lucide-react";

const resources = [
  {
    title: "What's New in InfoWorks ICM",
    description: "Interactive explorer for the latest features, improvements, and updates in InfoWorks ICM. Stay current with cutting-edge capabilities.",
    url: "https://icm-new-view-robertdickinson.replit.app",
    icon: Rocket,
    category: "Product Updates",
    highlight: "Latest Features"
  },
  {
    title: "User Voice Platform",
    description: "Suggest enhancements and innovations for Autodesk Innovyze software. A pivotal channel where users can actively contribute to software development.",
    url: "https://innovyzefeedback.autodesk.com/ideas",
    icon: MessageSquare,
    category: "Community",
    highlight: "Shape the Future"
  },
  {
    title: "SWMM5.org Blog",
    description: "Comprehensive resource for SWMM modeling insights, tutorials, and technical expertise covering 50 years of storm water management modeling experience.",
    url: "https://swmm5.org",
    icon: Award,
    category: "Technical Blog",
    highlight: "Expert Insights"
  },
  {
    title: "LinkedIn Profile",
    description: "Connect with Robert Dickinson - Autodesk Technologist specializing in ICM InfoWorks and SWMM Networks with Ruby, Python and AI Agents.",
    url: "https://www.linkedin.com/in/robertdickinson",
    icon: Users,
    category: "Professional",
    highlight: "50 Years EPASWMM"
  },
  {
    title: "CADD Microsystems",
    description: "Exceptional Autodesk reseller providing expert assistance with subscription needs and ensuring a seamless subscription journey.",
    url: "#",
    icon: Headphones,
    category: "Support",
    highlight: "Trusted Partner"
  },
  {
    title: "Health Journey Article",
    description: "Detailed account of the uncommon synergy between link-node hydraulic modeling and NHL T-cell lymphoma experience.",
    url: "https://www.linkedin.com/pulse/uncommon-synergy-link-node-hydraulic-modeling-nhl-t-cell-dickinson",
    icon: Award,
    category: "Personal",
    highlight: "Inspiring Story"
  }
];

const additionalLinks = [
  { title: "SWMM5.org Blog", url: "https://swmm5.org" },
  { title: "Autodesk AEC Collection", url: "https://www.autodesk.com/collections/architecture-engineering-construction" },
  { title: "InfoDrainage", url: "https://www.autodesk.com/products/infodrainage" },
  { title: "ICM InfoWorks", url: "https://www.autodesk.com/products/infoworks-icm" },
  { title: "Autodesk Access", url: "https://access.autodesk.com/" },
  { title: "Autodesk Docs", url: "https://docs.autodesk.com/" },
  { title: "Civil 3D", url: "https://www.autodesk.com/products/civil-3d" }
];

export const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resources & Links
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential resources, community platforms, and professional connections 
            mentioned throughout this engineering perspective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm border-0"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {resource.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {resource.highlight}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  
                  {resource.url !== "#" && (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Resource
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">
            Additional Autodesk Resources
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalLinks.map((link, index) => (
              <Card 
                key={index}
                className="p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-card/40 backdrop-blur-sm border-0 cursor-pointer"
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{link.title}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              Community Engagement
            </p>
            <p className="text-muted-foreground">
              Dual channels for contribution: Active forum participation and User Voice platform engagement 
              to help shape the future of engineering software.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};