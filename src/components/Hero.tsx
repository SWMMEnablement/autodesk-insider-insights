import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
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
                A Personal Chronicle
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                My 5-Year Commitment: Why I Still Pay for Autodesk Software After Leaving
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed italic">
                A personal chronicle of supporting the tools I believe in
              </p>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              For the past five years, I have personally paid for Autodesk subscriptions. I started as an employee 
              who chose to pay anyway. On May 22, 2026, I left Autodesk—and my personal subscription continues. 
              This site documents that commitment: a personal investment in the software that has defined my 50-year 
              career. My goal is simple: to be able to say at 80 that I've supported these tools for 15 straight years. 
              This is my story.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                <span>Personal Subscriber Since 2021</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Goal: 15 Years by Age 80</span>
              </div>
              <a 
                href="mailto:robert.dickinson@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>robert.dickinson@gmail.com</span>
              </a>
            </div>

            <div>
              <Button
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/robertdickinson/", "_blank", "noopener,noreferrer")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl font-semibold"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect with me on LinkedIn
              </Button>
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