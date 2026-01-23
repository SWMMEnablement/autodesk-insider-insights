import { Hero } from "@/components/Hero";
import { AuthorSection } from "@/components/AuthorSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { ROICalculator } from "@/components/ROICalculator";
import { PersonaPathways } from "@/components/PersonaPathways";
import { SoftwareSection } from "@/components/SoftwareSection";
import { TrenchesTimeline } from "@/components/TrenchesTimeline";
import { FutureVisionSection } from "@/components/FutureVisionSection";
import { ObjectionsFAQ } from "@/components/ObjectionsFAQ";
import { PersonalReasonsSection } from "@/components/PersonalReasonsSection";
import { ResourcesSection } from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AuthorSection />
      <ReasonsSection />
      <ROICalculator />
      <PersonaPathways />
      <SoftwareSection />
      <TrenchesTimeline />
      <FutureVisionSection />
      <ObjectionsFAQ />
      <PersonalReasonsSection />
      <ResourcesSection />
    </div>
  );
};

export default Index;
