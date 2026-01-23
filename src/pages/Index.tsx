import { Hero } from "@/components/Hero";
import { AuthorSection } from "@/components/AuthorSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { ROICalculator } from "@/components/ROICalculator";
import { PersonaPathways } from "@/components/PersonaPathways";
import { WorkflowComparison } from "@/components/WorkflowComparison";
import { SoftwareSection } from "@/components/SoftwareSection";
import { TrenchesTimeline } from "@/components/TrenchesTimeline";
import { FutureVisionSection } from "@/components/FutureVisionSection";
import { ObjectionsFAQ } from "@/components/ObjectionsFAQ";
import { PersonalReasonsSection } from "@/components/PersonalReasonsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { StickyNavigation } from "@/components/StickyNavigation";
import { SummaryProvider, ExecutiveSummaryButton } from "@/components/ExecutiveSummary";

const Index = () => {
  return (
    <SummaryProvider>
      <div className="min-h-screen">
        <StickyNavigation />
        <Hero />
        <AuthorSection />
        <ReasonsSection />
        <ROICalculator />
        <PersonaPathways />
        <WorkflowComparison />
        <SoftwareSection />
        <TrenchesTimeline />
        <FutureVisionSection />
        <ObjectionsFAQ />
        <PersonalReasonsSection />
        <ResourcesSection />
        <ExecutiveSummaryButton />
      </div>
    </SummaryProvider>
  );
};

export default Index;
