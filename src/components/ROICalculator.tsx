import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Download, TrendingUp, DollarSign, Clock, Users } from "lucide-react";

export const ROICalculator = () => {
  const [engineers, setEngineers] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(85);
  const [timeSavings, setTimeSavings] = useState(15);
  const [showResults, setShowResults] = useState(false);

  // Calculations
  const annualHoursPerEngineer = 2080; // 52 weeks × 40 hours
  const hoursSavedPerEngineer = (annualHoursPerEngineer * timeSavings) / 100;
  const totalHoursSaved = hoursSavedPerEngineer * engineers;
  const annualValueSaved = totalHoursSaved * hourlyRate;
  const estimatedSubscriptionCost = engineers * 4500; // Approximate AEC Collection cost per seat
  const netROI = annualValueSaved - estimatedSubscriptionCost;
  const roiPercentage = ((annualValueSaved / estimatedSubscriptionCost) * 100).toFixed(0);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleDownloadTemplate = () => {
    // Create a simple text template for download
    const template = `
BUSINESS CASE: Investment in Autodesk AEC Collection & Water Solutions
======================================================================

PREPARED BY: [Your Name]
DATE: ${new Date().toLocaleDateString()}
ORGANIZATION: [Your Firm Name]

EXECUTIVE SUMMARY
-----------------
This business case outlines the strategic value of investing in Autodesk's 
integrated AEC Collection and water modeling solutions.

CURRENT STATE ANALYSIS
----------------------
• Number of Engineering Staff: ${engineers}
• Average Hourly Rate: $${hourlyRate}
• Current Workflow Inefficiencies: [Describe manual processes, data transfer issues]

PROPOSED SOLUTION
-----------------
Autodesk AEC Collection + Water Modeling Tools (ICM/InfoDrainage)

KEY BENEFITS (Based on 6 Reasons Framework)
--------------------------------------------

1. WORKFLOW INTEGRATION
   - Seamless data flow from conceptual design to analysis
   - Estimated time savings: ${timeSavings}%
   - Annual hours recovered: ${totalHoursSaved.toLocaleString()} hours

2. CONTINUOUS LEARNING & UPDATES
   - Access to latest features without additional upgrade costs
   - Security patches and performance improvements included

3. PROFESSIONAL DEVELOPMENT
   - Industry-standard tools enhance staff capabilities
   - Improved competitiveness for project bids

4. TECHNICAL SUPPORT
   - Direct access to expert support resources
   - Reduced troubleshooting time

5. FEEDBACK LOOP PARTICIPATION
   - Shape future tool development via User Voice
   - Features that match real workflow needs

6. INNOVATION ACCESS
   - AI-powered features in development pipeline
   - Cloud collaboration capabilities

FINANCIAL ANALYSIS
------------------
• Annual Hours Saved: ${totalHoursSaved.toLocaleString()} hours
• Value of Time Recovered: $${annualValueSaved.toLocaleString()}
• Estimated Subscription Investment: $${estimatedSubscriptionCost.toLocaleString()}
• Net Annual Benefit: $${netROI.toLocaleString()}
• Return on Investment: ${roiPercentage}%

RISK MITIGATION
---------------
• [Describe risks of NOT investing: outdated tools, competitive disadvantage]
• [Describe risks of perpetual license stagnation]

RECOMMENDATION
--------------
[Your recommendation based on the analysis]

NEXT STEPS
----------
1. [Schedule demo with Autodesk reseller]
2. [Pilot program with key team members]
3. [Full deployment timeline]

======================================================================
Template generated from: Autodesk Employee Perspective
Visit: https://autodesk-insider-insights.lovable.app
    `;

    const blob = new Blob([template], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Autodesk_Business_Case_Template.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Justification Toolkit
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Calculate Your Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wondering if it's worth it. Calculate exactly what integrated workflows 
            mean for your bottom line—then download a ready-to-use business case template.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Your Team Profile
              </CardTitle>
              <CardDescription>
                Enter your team's details to estimate potential value
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Number of Engineers */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="engineers" className="text-base font-medium">
                    Number of Engineers
                  </Label>
                  <span className="text-2xl font-bold text-primary">{engineers}</span>
                </div>
                <Slider
                  id="engineers"
                  value={[engineers]}
                  onValueChange={(value) => setEngineers(value[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Engineering staff who will use the software
                </p>
              </div>

              {/* Hourly Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="hourlyRate" className="text-base font-medium">
                    Average Billable Hourly Rate
                  </Label>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-20 text-right font-bold text-primary"
                      min={25}
                      max={300}
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your firm's average billable rate for engineering work
                </p>
              </div>

              {/* Time Savings */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="timeSavings" className="text-base font-medium">
                    Estimated Time Savings
                  </Label>
                  <span className="text-2xl font-bold text-accent">{timeSavings}%</span>
                </div>
                <Slider
                  id="timeSavings"
                  value={[timeSavings]}
                  onValueChange={(value) => setTimeSavings(value[0])}
                  min={5}
                  max={35}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Industry average: 10-20% from reduced data transfer and rework
                </p>
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-6"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className={`bg-card/80 backdrop-blur-sm border-accent/20 transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-60'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Your Projected Value
              </CardTitle>
              <CardDescription>
                Annual impact based on your inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {showResults ? (
                <>
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Hours Recovered</span>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {totalHoursSaved.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">per year</div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">Value Recovered</span>
                      </div>
                      <div className="text-3xl font-bold text-accent">
                        ${annualValueSaved.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">per year</div>
                    </div>
                  </div>

                  {/* ROI Summary */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">Return on Investment</div>
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {roiPercentage}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Net benefit: <span className="font-semibold text-foreground">${netROI.toLocaleString()}</span>/year
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-muted/20">
                      <span className="text-muted-foreground">Estimated subscription cost</span>
                      <span className="font-medium">${estimatedSubscriptionCost.toLocaleString()}/yr</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-muted/20">
                      <span className="text-muted-foreground">Time value recovered</span>
                      <span className="font-medium text-accent">+${annualValueSaved.toLocaleString()}/yr</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Hours saved per engineer</span>
                      <span className="font-medium">{hoursSavedPerEngineer.toFixed(0)} hrs/yr</span>
                    </div>
                  </div>

                  {/* Download Template */}
                  <Button 
                    onClick={handleDownloadTemplate}
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Business Case Template
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Pre-formatted template with your data—ready to share with your CFO
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">
                    Adjust the sliders and click "Calculate My ROI" to see your projected value
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
