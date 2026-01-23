import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, DollarSign, Key, Scale, ArrowRight } from "lucide-react";

const faqs = [
  {
    id: "investment",
    icon: DollarSign,
    question: "This is a significant investment. How do I know it's not overkill for my needs?",
    answer: `Start with what you need. Most firms begin with the AEC Collection and add water modules as project demands grow.

**The integration advantage:** You're not buying redundant capabilities. Civil 3D surfaces flow directly into InfoDrainage. InfraWorks concepts transfer cleanly to detailed design. Each tool amplifies the others.

**Use our Persona Pathways** (above) to identify your core toolkit. A land development firm doesn't need ICM Ultimate on day one—that's for complex flood analysis you may subcontract to specialists.

**The real question:** What is the cost of *not* having integrated tools? Calculate the hours lost to manual data transfer, format conversion errors, and rework. That's your comparison point.`
  },
  {
    id: "perpetual",
    icon: Key,
    question: "Why should I subscribe when I own legacy perpetual licenses?",
    answer: `Perpetual licenses lock you in time. Here's the hard truth:

**Security Risk:** Outdated software doesn't receive critical security patches. One compromised project file can cost far more than years of subscription fees.

**Efficiency Drain:** You're missing performance enhancements that compound annually. A 5% speed improvement this year, 8% next year—perpetual license holders fall further behind.

**Format Isolation:** Modern project delivery increasingly requires current file formats, cloud collaboration, and BIM Level 2+ compliance. Legacy tools create friction with clients and partners.

**The real calculation:** What is the cost of one corrupted project file due to an outdated format? One missed deadline because your solver runs 3x slower than current versions? One RFP you couldn't bid on because you lacked required cloud collaboration features?

Perpetual ownership is an illusion of cost savings that compounds into competitive disadvantage.`
  },
  {
    id: "competition",
    icon: Scale,
    question: "How does this compare to other options in the market?",
    answer: `We don't name competitors—you know who they are. Here's what to evaluate:

**Our unique advantage** is the seamless workflow from:
- **Conceptual design** (InfraWorks, Forma) →
- **Detailed engineering** (Civil 3D, AutoCAD) →
- **Performance simulation** (ICM, InfoDrainage, InfoSWMM) →
- **Managed collaboration** (Autodesk Docs)

**The critical question:** Does your current toolset require manual, error-prone data transfer between these stages? Every handoff is a source of errors, delays, and liability.

**50+ years of modeling heritage:** The Innovyze acquisition brought decades of water modeling expertise. This isn't a bolt-on—it's deep integration built by engineers who've spent careers solving these problems.

**Evaluate the workflow, not the feature list.** The real cost isn't the subscription—it's the friction between tools that don't talk to each other.`
  },
  {
    id: "learning",
    icon: ArrowRight,
    question: "My team knows our current tools. Is the transition worth the disruption?",
    answer: `Transition has a cost. So does stagnation.

**The learning curve reality:**
- Civil engineers find Civil 3D intuitive if they have AutoCAD background
- Water modelers transitioning from legacy tools report 2-4 weeks to productive proficiency
- The AEC Collection's shared interface patterns mean learning one tool accelerates the next

**What you gain:**
- Staff become more marketable and engaged (retention benefit)
- New hires increasingly expect industry-standard tools (recruitment benefit)
- Training investment compounds as skills transfer across the integrated suite

**Mitigation strategy:**
1. Start with one project team, one tool
2. Run parallel workflows for a project cycle
3. Build internal champions before broader rollout

The question isn't whether to transition—it's whether to do it on your timeline or your competitors'.`
  },
  {
    id: "small-firm",
    icon: HelpCircle,
    question: "We're a small firm. Isn't this really for large organizations?",
    answer: `The opposite may be true.

**Large firms** have IT departments, custom integrations, and momentum that resists change. They often underutilize what they have.

**Small firms** gain disproportionate advantage from:
- **Punching above your weight:** The same tools Fortune 500 firms use, at your scale
- **Agility:** You can adopt new workflows without enterprise bureaucracy
- **Multiplier effect:** When one engineer uses 3 integrated tools vs. 3 disconnected tools, the efficiency gain is dramatic

**Right-sizing your subscription:**
- Named user licenses flex with project load
- Start lean with AEC Collection essentials
- Add specialized water tools as projects demand

Small doesn't mean underequipped. It means nimble.`
  }
];

export const ObjectionsFAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <HelpCircle className="w-4 h-4 mr-2" />
            Facing the Objections
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Questions You're Thinking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A German mother addresses objections head-on. Let's not dance around 
            the elephant in the room.
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
