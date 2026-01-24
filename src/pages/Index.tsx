import { Hero } from "@/components/Hero";
import { AuthorSection } from "@/components/AuthorSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { SoftwareSection } from "@/components/SoftwareSection";
import { WhatsNewSection } from "@/components/WhatsNewSection";
import { UserVoiceStats } from "@/components/UserVoiceStats";
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
        <SoftwareSection />
        <WhatsNewSection />
        <UserVoiceStats />
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
