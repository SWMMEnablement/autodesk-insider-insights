import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, BookOpen, Building, Lightbulb, Headphones } from "lucide-react";

export const PersonalReasonsSection = () => {
  const personalReasons = [
    {
      icon: BookOpen,
      title: "Half a Century with SWMM",
      description: "This year marks the golden jubilee of my journey with SWMM, beginning at age 17 during an Introduction to Environmental Engineering class at the University of Florida. It seamlessly intertwined my three passions: water, the environment, and engineering.",
      highlight: "50 Years",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Heart,
      title: "Decades with My Anchor",
      description: "Celebrating the 49th year since I met my wife, her unwavering support has been monumental. Her multifaceted roles as an exceptional wife, diligent grad student, adept technical worker, and nurturing mother have enabled me to dedicate extended hours to my craft.",
      highlight: "49 Years",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Award,
      title: "The Crucible of Health",
      description: "My encounter with a complex form of cancer in 2021 and 2022 accentuated my appreciation for life and deepened my gratitude for my profession as an engineer.",
      highlight: "Personal Growth",
      color: "from-primary/80 to-accent/80"
    },
    {
      icon: Users,
      title: "Resilience Personified",
      description: "2022 saw my wife grappling with a benign brain tumor surgery, which resulted in a stroke affecting her right side. This adversity underscored the invaluable support she provided over the years.",
      highlight: "Family Strength",
      color: "from-accent/80 to-primary/80"
    },
    {
      icon: Building,
      title: "An Autodesk Epoch",
      description: "Autodesk resonates deeply with me. My engineering journey paralleled AutoCAD's inception, and my programming endeavors often intersected with DWF and DWG files. To me, Autodesk isn't merely a name; it's a realm of endless possibilities.",
      highlight: "Professional Journey",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Headphones,
      title: "Colleagues, the Pillars",
      description: "My coworkers, some of whom I've collaborated with for an incredible 17 years, have been my stalwarts. Their unwavering support during tumultuous phases has been invaluable, and I stand in awe of their technical wizardry.",
      highlight: "17 Years",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Lightbulb,
      title: "Legacy of Learning",
      description: "My engineer children and grandchildren, potential engineers in their own right, have consistently amazed me with their intellect and creativity from a tender age. Their innovative approach has been a continuous source of inspiration.",
      highlight: "Next Generation",
      color: "from-primary/80 to-accent/80"
    },
    {
      icon: Users,
      title: "Mentors & Collaborators",
      description: "Over five decades, I've been privileged to work alongside numerous SWMM experts, with special mention to Wayne Huber and Lew Rossman, who have been instrumental in my growth.",
      highlight: "50 Years",
      color: "from-accent/80 to-primary/80"
    }
  ];

  return (
    <section id="personal-reasons" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Personal Motivations Behind the Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Over the course of my illustrious journey, a multitude of personal reasons have shaped my perspective, 
            and they coalesce into eight pivotal categories that define my commitment to this field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personalReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/60 backdrop-blur-sm border-0"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {reason.highlight}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Connection to Subscription
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You might ponder the connection between these experiences and my role as a subscriber. To me, they're intrinsically linked. 
              My subscription embodies my commitment to the software's future, transcending my identity as an employee. It's a testament to 
              my dedication to our legacy programs and converting and saving old models. Through this, I aim to empower you to be superior 
              modelers, employing the software just as you do, underscoring my shared journey in this domain.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};