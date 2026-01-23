import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GitCompare, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Clock,
  RefreshCw,
  Zap
} from "lucide-react";

type WorkflowView = "siloed" | "integrated";

interface WorkflowStep {
  id: string;
  tool: string;
  action: string;
  duration: string;
}

interface DataTransfer {
  from: string;
  to: string;
  method: string;
  errorRisk: "high" | "medium" | "low";
  issue?: string;
}

const siloedWorkflow: WorkflowStep[] = [
  { id: "1", tool: "Sketching Tool", action: "Conceptual site layout", duration: "2 days" },
  { id: "2", tool: "Standalone CAD", action: "Detailed grading design", duration: "5 days" },
  { id: "3", tool: "Spreadsheet", action: "Drainage calculations", duration: "2 days" },
  { id: "4", tool: "Legacy Modeler", action: "Stormwater simulation", duration: "3 days" },
  { id: "5", tool: "Report Software", action: "Compile deliverables", duration: "2 days" },
];

const siloedTransfers: DataTransfer[] = [
  { from: "1", to: "2", method: "PDF export → Manual trace", errorRisk: "high", issue: "Scale errors, lost design intent" },
  { from: "2", to: "3", method: "Manual data entry", errorRisk: "high", issue: "Transcription errors in pipe data" },
  { from: "3", to: "4", method: "CSV import/manual rebuild", errorRisk: "medium", issue: "Network topology mismatch" },
  { from: "4", to: "5", method: "Screenshots + copy/paste", errorRisk: "medium", issue: "Outdated results if model changes" },
];

const integratedWorkflow: WorkflowStep[] = [
  { id: "1", tool: "InfraWorks", action: "Conceptual site layout", duration: "1 day" },
  { id: "2", tool: "Civil 3D", action: "Detailed grading design", duration: "3 days" },
  { id: "3", tool: "InfoDrainage", action: "Drainage design + simulation", duration: "2 days" },
  { id: "4", tool: "Autodesk Docs", action: "Compiled deliverables", duration: "0.5 days" },
];

const integratedTransfers: DataTransfer[] = [
  { from: "1", to: "2", method: "Direct model transfer", errorRisk: "low" },
  { from: "2", to: "3", method: "Surface + pipe network sync", errorRisk: "low" },
  { from: "3", to: "4", method: "Automatic report generation", errorRisk: "low" },
];

export const WorkflowComparison = () => {
  const [activeView, setActiveView] = useState<WorkflowView>("siloed");
  const [animatingStep, setAnimatingStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const workflow = activeView === "siloed" ? siloedWorkflow : integratedWorkflow;
  const transfers = activeView === "siloed" ? siloedTransfers : integratedTransfers;

  const totalDays = workflow.reduce((acc, step) => {
    const days = parseFloat(step.duration);
    return acc + days;
  }, 0);

  const errorPoints = transfers.filter(t => t.errorRisk === "high" || t.errorRisk === "medium").length;

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimatingStep((prev) => {
          if (prev >= workflow.length - 1) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isAnimating, workflow.length]);

  const startAnimation = () => {
    setAnimatingStep(0);
    setIsAnimating(true);
  };

  return (
    <section id="workflow-comparison" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <GitCompare className="w-4 h-4 mr-2" />
            Workflow Visualization
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare siloed tools with manual handoffs versus integrated workflows. 
            Every data transfer is a potential error—watch where they happen.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeView === "siloed" ? "default" : "outline"}
            size="lg"
            onClick={() => { setActiveView("siloed"); setIsAnimating(false); setAnimatingStep(0); }}
            className={activeView === "siloed" 
              ? "bg-destructive/80 hover:bg-destructive text-white" 
              : "border-destructive/30 text-destructive hover:bg-destructive/10"
            }
          >
            <XCircle className="w-5 h-5 mr-2" />
            Siloed Tools
          </Button>
          <Button
            variant={activeView === "integrated" ? "default" : "outline"}
            size="lg"
            onClick={() => { setActiveView("integrated"); setIsAnimating(false); setAnimatingStep(0); }}
            className={activeView === "integrated" 
              ? "bg-gradient-to-r from-primary to-accent text-white border-0" 
              : "border-primary/30 text-primary hover:bg-primary/10"
            }
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Integrated Suite
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className={`text-4xl font-bold ${activeView === "siloed" ? "text-destructive" : "text-primary"}`}>
              {totalDays} days
            </div>
            <div className="text-sm text-muted-foreground">Total Duration</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${activeView === "siloed" ? "text-destructive" : "text-primary"}`}>
              {workflow.length}
            </div>
            <div className="text-sm text-muted-foreground">Process Steps</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${errorPoints > 0 ? "text-destructive" : "text-accent"}`}>
              {errorPoints}
            </div>
            <div className="text-sm text-muted-foreground">Error Risk Points</div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <Card className="max-w-5xl mx-auto bg-card/80 backdrop-blur-sm border-primary/10">
          <CardContent className="p-8">
            {/* Animation Control */}
            <div className="flex justify-center mb-8">
              <Button 
                onClick={startAnimation}
                disabled={isAnimating}
                variant="outline"
                className="border-primary/30"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isAnimating ? "animate-spin" : ""}`} />
                {isAnimating ? "Simulating..." : "Animate Workflow"}
              </Button>
            </div>

            {/* Workflow Steps */}
            <div className="relative">
              {workflow.map((step, index) => {
                const transfer = transfers.find(t => t.from === step.id);
                const isActive = isAnimating && animatingStep >= index;
                const isCurrentStep = isAnimating && animatingStep === index;
                
                return (
                  <div key={step.id} className="mb-6 last:mb-0">
                    {/* Step Card */}
                    <div 
                      className={`
                        flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-500
                        ${isActive 
                          ? activeView === "integrated"
                            ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                            : "bg-secondary/50 border-muted/50"
                          : "bg-secondary/30 border-transparent"
                        }
                        ${isCurrentStep ? "scale-105" : "scale-100"}
                      `}
                    >
                      {/* Step Number */}
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                        transition-all duration-300
                        ${isActive 
                          ? activeView === "integrated"
                            ? "bg-gradient-to-br from-primary to-accent text-white"
                            : "bg-muted text-foreground"
                          : "bg-muted/50 text-muted-foreground"
                        }
                      `}>
                        {index + 1}
                      </div>
                      
                      {/* Step Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.tool}
                          </span>
                          {isCurrentStep && (
                            <Badge variant="default" className="animate-pulse bg-primary/80">
                              Active
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{step.action}</div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className={isActive ? "text-foreground font-medium" : "text-muted-foreground"}>
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Data Transfer Arrow */}
                    {transfer && (
                      <div className="flex items-center gap-4 py-3 pl-12">
                        <div className={`
                          flex-1 flex items-center gap-3 p-3 rounded-lg transition-all duration-500
                          ${isAnimating && animatingStep > index
                            ? transfer.errorRisk === "high"
                              ? "bg-destructive/10 border border-destructive/30"
                              : transfer.errorRisk === "medium"
                                ? "bg-amber-500/10 border border-amber-500/30"
                                : "bg-accent/10 border border-accent/30"
                            : "bg-transparent"
                          }
                        `}>
                          <ArrowRight className={`w-5 h-5 ${
                            transfer.errorRisk === "high" ? "text-destructive" :
                            transfer.errorRisk === "medium" ? "text-amber-500" :
                            "text-accent"
                          }`} />
                          
                          <div className="flex-1">
                            <span className="text-sm font-medium text-muted-foreground">
                              {transfer.method}
                            </span>
                          </div>
                          
                          {/* Error Risk Indicator */}
                          {transfer.errorRisk !== "low" && (
                            <div className="flex items-center gap-2">
                              <AlertTriangle className={`w-4 h-4 ${
                                transfer.errorRisk === "high" ? "text-destructive" : "text-amber-500"
                              }`} />
                              {transfer.issue && (
                                <span className={`text-xs ${
                                  transfer.errorRisk === "high" ? "text-destructive" : "text-amber-500"
                                }`}>
                                  {transfer.issue}
                                </span>
                              )}
                            </div>
                          )}
                          
                          {transfer.errorRisk === "low" && (
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-accent" />
                              <span className="text-xs text-accent">Seamless</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Comparison Summary */}
            <div className={`
              mt-8 p-6 rounded-xl transition-colors duration-300
              ${activeView === "siloed" 
                ? "bg-destructive/10 border border-destructive/20" 
                : "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
              }
            `}>
              {activeView === "siloed" ? (
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-destructive mb-2">
                    The Hidden Cost of Disconnected Tools
                  </h4>
                  <p className="text-muted-foreground">
                    Each manual handoff introduces risk: transcription errors, version mismatches, 
                    lost design intent. These errors compound and often aren't discovered until 
                    construction—when fixes cost 10x more.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Integrated Workflow Advantage
                  </h4>
                  <p className="text-muted-foreground">
                    Direct data flow means no transcription, no format conversion, no version confusion.
                    Changes in Civil 3D automatically propagate to InfoDrainage. 
                    <strong className="text-foreground"> 40% faster. Zero handoff errors.</strong>
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
