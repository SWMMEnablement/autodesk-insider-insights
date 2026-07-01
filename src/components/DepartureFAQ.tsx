import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Compass } from "lucide-react";

const faqs = [
  {
    q: "Why did you leave Autodesk on May 22, 2026?",
    a: "After a rewarding chapter inside Autodesk, I stepped out to focus full-time on SWMM6 & SWMM5 enablement, independent consulting, and my role as Chair of the SWMM5+ TAC at CIMM. Being an employee gave me the inside view; being independent lets me serve the wider water-modeling community without institutional constraints.",
  },
  {
    q: "Are you still using Autodesk tools every day?",
    a: "Yes. AEC Collection, ICM InfoWorks (Flood, Sewer, Ultimate), InfoDrainage, and InfoWater Pro remain my daily drivers for consulting, training, and research. Leaving the company didn't change my workflow — it just changed who pays for it. Now it's entirely me.",
  },
  {
    q: "Why keep paying now that the employee benefit is gone?",
    a: "Because the 5-year commitment was never about the benefit. I subscribed as an employee to have skin in the game as a customer. Continuing as a former employee is the natural extension of that same principle — and it lets me keep contributing to User Voice, testing releases, and mentoring the SWMM community with current tools.",
  },
  {
    q: "Do you still speak on behalf of Autodesk?",
    a: "No. Everything on this site, on swmm5.org, and in my LinkedIn posts is my personal perspective as an independent subscriber and small business owner. No Autodesk approval, no marketing filter — just an engineer who has been paying the invoice since 2021 and plans to keep paying through 2036.",
  },
];

export const DepartureFAQ = () => {
  return (
    <section id="departure-faq" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="border-accent/30 text-accent">
            <Compass className="w-3 h-3 mr-1" />
            Life After Autodesk
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why I Left — And Why I'm Still Subscribed
          </h2>
          <p className="text-lg text-muted-foreground">
            Four honest answers about my departure on May 22, 2026 and the commitment that continues.
          </p>
        </div>

        <Card className="p-6 md:p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};