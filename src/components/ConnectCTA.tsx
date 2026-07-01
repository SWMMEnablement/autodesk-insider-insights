import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export const ConnectCTA = () => {
  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-10 lg:p-14 text-center bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            If my story resonates — or if you have a SWMM modeling challenge, an
            InfoWorks ICM question, or just want to compare notes on the tools
            you're committed to — I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/robertdickinson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:robert.dickinson@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                robert.dickinson@gmail.com
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8 italic">
            I read every message. Response time is measured in days, not minutes —
            but it always comes.
          </p>
        </Card>
      </div>
    </section>
  );
};