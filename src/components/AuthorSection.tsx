import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Users } from "lucide-react";

export const AuthorSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="p-8 lg:p-12 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  A Unique Dual Perspective
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have a not-so-common relationship with Autodesk software, stemming from two distinct connections. 
                  Firstly, as an Autodesk employee, I have access to specific tools and benefits. Secondly, outside of my role, 
                  I also maintain a separate Autodesk subscription for the AEC Collection, InfoDrainage, and ICM Standard.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Software Portfolio</h3>
                <p className="text-muted-foreground">
                  I utilize a diverse blend of Autodesk subscription software, along with legacy Innovyze tools like 
                  InfoSWMM, InfoSewer, and XPSWMM. Before Autodesk's acquisition of Innovyze in 2021, I was a dedicated 
                  subscriber to Civil 3D.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Autodesk Employee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Personal Subscriber</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Engineering Professional</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AEC Collection</Badge>
                  <Badge variant="outline">InfoDrainage</Badge>
                  <Badge variant="outline">ICM Standard</Badge>
                  <Badge variant="outline">Civil 3D</Badge>
                  <Badge variant="outline">InfoSWMM</Badge>
                  <Badge variant="outline">XPSWMM</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};