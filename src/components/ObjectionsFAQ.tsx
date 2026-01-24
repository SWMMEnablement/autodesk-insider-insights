import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, DollarSign, Key, ArrowRight } from "lucide-react";

const faqs = [
  {
    id: "why-pay",
    icon: DollarSign,
    question: "Why pay for software you get through work?",
    answer: `This isn't about access—it's about principle.

**As an employee,** I use our latest tools through my work account. That's a job benefit.

**As a subscriber,** I participate in the ecosystem as a user. I experience billing, renewals, licensing quirks—the same friction our customers feel.

**The dual role advantage:** When I give feedback, I'm not just speaking as a developer. I'm a customer who has skin in the game. The annual fee is my personal stake in the software's success.

**It's also insurance:** If I ever leave Autodesk, my personal projects, my consulting work, my ability to stay current—none of that depends on my employment status.`
  },
  {
    id: "investment",
    icon: DollarSign,
    question: "Isn't this a significant expense for personal use?",
    answer: `Let's be honest about the numbers.

**The cost is real:** AEC Collection plus water tools is a meaningful annual expense. I'm not pretending otherwise.

**What I'm buying:**
- Independence from employer-provided access
- A voice in User Voice as a paying customer
- Access to every update, beta, and new feature
- The right to say "I use this software by choice"

**The real question:** What is 50 years of career investment worth? For me, maintaining connection to these tools—on my own terms—is worth the subscription.

I'm not advising you to do the same. This is my choice.`
  },
  {
    id: "perpetual",
    icon: Key,
    question: "Do you regret not keeping perpetual licenses?",
    answer: `I had perpetual licenses before 2021. Here's why I switched:

**The honest truth:**
- Perpetual licenses freeze you in time
- I was missing features that made my work easier
- Format compatibility was becoming a headache
- Security patches matter when you're handling client data

**What I lost:** The psychological comfort of "owning" something.

**What I gained:** A living toolset that evolves with the industry.

**My perspective at 65:** Time is more valuable than perpetual licenses. Spending hours on workarounds because my software is 3 versions behind? That's a bad trade.`
  },
  {
    id: "small-firm",
    icon: HelpCircle,
    question: "Would you recommend this for others?",
    answer: `I'm specifically NOT giving advice here.

**What I can share:**
- My reasons are personal—50 years invested in this ecosystem
- Your situation is different
- Employee benefits, perpetual licenses, competitor tools—all valid choices

**What I believe:**
- If you're considering Autodesk tools, the integration story is real
- If you're a small firm, start lean and grow
- If you have perpetual licenses that work for you, don't let anyone pressure you

**This site isn't a recommendation.** It's a documentation of one person's choice. Take what's useful, ignore what isn't.`
  },
  {
    id: "legacy",
    icon: ArrowRight,
    question: "What happens to this commitment if circumstances change?",
    answer: `Fair question. Life doesn't always cooperate with 15-year plans.

**My intent:**
- Continue as long as I'm professionally active
- Document each year's renewal as part of this chronicle
- Adjust if health, finances, or family require it

**What I won't do:**
- Pretend I'm locked in regardless of circumstances
- Hide it if I ever need to pause or stop
- Make this about proving something to others

**The goal:** Reach 80 with 15 consecutive years. But if I get to 12 and life intervenes? I'll document that too. This is a personal journal, not a contract.`
  }
];

export const ObjectionsFAQ = () => {
  return (
    <section id="objections-faq" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <HelpCircle className="w-4 h-4 mr-2" />
            Honest Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Questions You Might Have
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Frank answers about my choice to pay for software I could get through work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => {
                  const Icon = faq.icon;
                  return (
                    <AccordionItem key={faq.id} value={faq.id} className="border-muted/30">
                      <AccordionTrigger className="text-left hover:no-underline group py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 pl-14">
                        <div className="prose prose-sm prose-invert max-w-none">
                          {faq.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="mb-4 last:mb-0 whitespace-pre-line">
                              {paragraph.split('**').map((part, j) => 
                                j % 2 === 0 ? part : <strong key={j} className="text-foreground font-semibold">{part}</strong>
                              )}
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>

          {/* Closing Statement */}
          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">
                Still Have Questions?
              </p>
              <p className="text-muted-foreground">
                The best answers come from seeing it work. Request a workflow demonstration 
                tailored to your specific project types.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
