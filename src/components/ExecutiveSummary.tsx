import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Printer, Building2, Droplets, Landmark } from "lucide-react";

// Context to share data between ROI Calculator, Persona Pathways, and Executive Summary
interface SummaryData {
  roi: {
    engineers: number;
    hourlyRate: number;
    timeSavings: number;
    totalHoursSaved: number;
    annualValueSaved: number;
    estimatedCost: number;
    netROI: number;
    roiPercentage: string;
  } | null;
  persona: {
    id: string;
    title: string;
    subtitle: string;
    startingPoint: string;
    coreTools: string[];
  } | null;
}

interface SummaryContextType {
  summaryData: SummaryData;
  setROIData: (data: SummaryData["roi"]) => void;
  setPersonaData: (data: SummaryData["persona"]) => void;
}

const SummaryContext = createContext<SummaryContextType | null>(null);

export const useSummaryContext = () => {
  const context = useContext(SummaryContext);
  if (!context) {
    return null;
  }
  return context;
};

export const SummaryProvider = ({ children }: { children: React.ReactNode }) => {
  const [summaryData, setSummaryData] = useState<SummaryData>({
    roi: null,
    persona: null,
  });

  const setROIData = (data: SummaryData["roi"]) => {
    setSummaryData((prev) => ({ ...prev, roi: data }));
  };

  const setPersonaData = (data: SummaryData["persona"]) => {
    setSummaryData((prev) => ({ ...prev, persona: data }));
  };

  return (
    <SummaryContext.Provider value={{ summaryData, setROIData, setPersonaData }}>
      {children}
    </SummaryContext.Provider>
  );
};

export const ExecutiveSummaryButton = () => {
  const context = useSummaryContext();
  const [isOpen, setIsOpen] = useState(false);

  const summaryData = context?.summaryData || { roi: null, persona: null };
  const hasData = summaryData.roi || summaryData.persona;

  const handlePrint = () => {
    const printContent = document.getElementById("executive-summary-content");
    if (printContent) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Executive Summary - Autodesk Investment</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: 'Segoe UI', system-ui, sans-serif; 
                padding: 40px; 
                max-width: 800px; 
                margin: 0 auto;
                color: #1a1a1a;
                line-height: 1.6;
              }
              .header { 
                border-bottom: 3px solid #0057B8; 
                padding-bottom: 20px; 
                margin-bottom: 30px;
              }
              .header h1 { 
                color: #0057B8; 
                font-size: 28px; 
                margin-bottom: 5px;
              }
              .header .subtitle { 
                color: #666; 
                font-size: 14px;
              }
              .section { 
                margin-bottom: 25px;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #0057B8;
              }
              .section h2 { 
                color: #0057B8; 
                font-size: 18px; 
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .metrics { 
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                gap: 20px;
                margin: 20px 0;
              }
              .metric { 
                text-align: center;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border: 1px solid #e0e0e0;
              }
              .metric .value { 
                font-size: 32px; 
                font-weight: bold; 
                color: #FA4616;
              }
              .metric .label { 
                font-size: 12px; 
                color: #666;
                margin-top: 5px;
              }
              .tools-list { 
                display: flex; 
                flex-wrap: wrap; 
                gap: 8px;
                margin-top: 10px;
              }
              .tool { 
                background: #0057B8; 
                color: white; 
                padding: 6px 12px; 
                border-radius: 20px;
                font-size: 12px;
                font-weight: 500;
              }
              .footer { 
                margin-top: 40px; 
                padding-top: 20px; 
                border-top: 1px solid #e0e0e0;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
              .highlight { 
                background: linear-gradient(135deg, #0057B8 0%, #FA4616 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              @media print {
                body { padding: 20px; }
                .section { break-inside: avoid; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Executive Summary</h1>
              <p class="subtitle">Investment in Autodesk AEC Collection & Water Solutions</p>
              <p class="subtitle">Generated: ${new Date().toLocaleDateString()}</p>
            </div>
            
            ${summaryData.roi ? `
              <div class="section">
                <h2>📊 Financial Analysis</h2>
                <div class="metrics">
                  <div class="metric">
                    <div class="value">${summaryData.roi.roiPercentage}%</div>
                    <div class="label">Return on Investment</div>
                  </div>
                  <div class="metric">
                    <div class="value">${summaryData.roi.totalHoursSaved.toLocaleString()}</div>
                    <div class="label">Hours Recovered/Year</div>
                  </div>
                  <div class="metric">
                    <div class="value">$${summaryData.roi.netROI.toLocaleString()}</div>
                    <div class="label">Net Annual Benefit</div>
                  </div>
                </div>
                <p><strong>Team Size:</strong> ${summaryData.roi.engineers} engineers @ $${summaryData.roi.hourlyRate}/hr</p>
                <p><strong>Efficiency Gain:</strong> ${summaryData.roi.timeSavings}% time savings through integrated workflows</p>
                <p><strong>Annual Value Recovered:</strong> $${summaryData.roi.annualValueSaved.toLocaleString()}</p>
                <p><strong>Estimated Investment:</strong> $${summaryData.roi.estimatedCost.toLocaleString()}/year</p>
              </div>
            ` : ''}
            
            ${summaryData.persona ? `
              <div class="section">
                <h2>🎯 Recommended Software Pathway</h2>
                <p><strong>Role:</strong> ${summaryData.persona.title} ${summaryData.persona.subtitle}</p>
                <p><strong>Starting Point:</strong> <span class="highlight">${summaryData.persona.startingPoint}</span></p>
                <div class="tools-list">
                  ${summaryData.persona.coreTools.map(tool => `<span class="tool">${tool}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            
            <div class="section">
              <h2>✅ Key Benefits</h2>
              <ul style="padding-left: 20px;">
                <li>Seamless data flow from design to analysis—zero manual handoffs</li>
                <li>Continuous updates and security patches included</li>
                <li>Professional development through industry-standard tools</li>
                <li>Direct feedback loop shaping product development</li>
                <li>Cloud collaboration across teams and time zones</li>
              </ul>
            </div>
            
            <div class="section">
              <h2>🚀 Next Steps</h2>
              <ol style="padding-left: 20px;">
                <li>Schedule demonstration with authorized reseller</li>
                <li>Identify pilot project and team</li>
                <li>Plan 30-day parallel workflow trial</li>
                <li>Measure and document efficiency gains</li>
                <li>Full deployment decision</li>
              </ol>
            </div>
            
            <div class="footer">
              <p>Generated from: Autodesk Employee Perspective</p>
              <p>https://autodesk-insider-insights.lovable.app</p>
            </div>
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const getPersonaIcon = () => {
    if (!summaryData.persona) return null;
    switch (summaryData.persona.id) {
      case "land-dev": return <Building2 className="w-5 h-5" />;
      case "water-modeler": return <Droplets className="w-5 h-5" />;
      case "infrastructure": return <Landmark className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          size="lg"
        >
          <FileText className="w-5 h-5 mr-2" />
          Executive Summary
          {hasData && (
            <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
              Ready
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Executive Summary
          </DialogTitle>
        </DialogHeader>
        
        <div id="executive-summary-content" className="space-y-6 py-4">
          {!hasData ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Configure Your Summary
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Use the ROI Calculator and select a Persona Pathway above to generate 
                your personalized executive summary.
              </p>
            </div>
          ) : (
            <>
              {/* ROI Summary */}
              {summaryData.roi && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    📊 Financial Analysis
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">
                        {summaryData.roi.roiPercentage}%
                      </div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-accent">
                        {summaryData.roi.totalHoursSaved.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Hours/Year</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-3xl font-bold text-foreground">
                        ${summaryData.roi.netROI.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Net Benefit</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Team: {summaryData.roi.engineers} engineers @ ${summaryData.roi.hourlyRate}/hr</p>
                    <p>• Efficiency gain: {summaryData.roi.timeSavings}% time savings</p>
                    <p>• Investment: ${summaryData.roi.estimatedCost.toLocaleString()}/year</p>
                  </div>
                </div>
              )}

              {/* Persona Summary */}
              {summaryData.persona && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    🎯 Recommended Pathway
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    {getPersonaIcon()}
                    <div>
                      <div className="font-semibold text-foreground">
                        {summaryData.persona.title} {summaryData.persona.subtitle}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Start with: <span className="text-accent font-medium">{summaryData.persona.startingPoint}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {summaryData.persona.coreTools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button onClick={handlePrint} className="flex-1 bg-gradient-to-r from-primary to-accent text-white">
                  <Printer className="w-4 h-4 mr-2" />
                  Print / Save as PDF
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                Use your browser's "Save as PDF" option when printing for a downloadable file
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
