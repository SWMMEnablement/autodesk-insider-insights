import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import heroCover from "@/assets/icm-infoworks-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                UF Gator Pride
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Autodesk Employee Perspective
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Why I Personally Invest in the AEC Collection, ICM Ultimate and InfoDrainage Subscriptions
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Professional Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Engineering Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-3xl transform rotate-6" />
            <img 
              src={heroCover} 
              alt="ICM InfoWorks integrated catchment modeling interface" 
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};