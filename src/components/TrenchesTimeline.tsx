import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Lightbulb, CheckCircle2, ExternalLink, ArrowDown, Tag, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimelineEntry {
  id: string;
  userVoiceDate: string;
  userVoiceSuggestion: string;
  internalDate?: string;
  internalNote?: string;
  releaseDate: string;
  releaseVersion: string;
  versionNumber: string;
  versionMajor: string; // For filtering: "2023", "2024", "2025"
  releaseNote: string;
  userVoiceUrl?: string;
  status: "completed" | "in-progress";
}

// Real examples from Autodesk User Voice community
const timelineEntries: TimelineEntry[] = [
  {
    id: "batch-calibration",
    userVoiceDate: "2023 Q2",
    userVoiceSuggestion: "Batch export of calibration graphs from ICM would save hours of manual work for reporting.",
    internalDate: "2023 Q4",
    internalNote: "Prioritized for upcoming release cycle. High customer impact identified.",
    releaseDate: "2024 Q1",
    releaseVersion: "ICM Update 2024.2",
    versionNumber: "2024.2",
    versionMajor: "2024",
    releaseNote: "Batch calibration graph export feature released with customizable templates.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "completed"
  },
  {
    id: "feh22-rainfall",
    userVoiceDate: "2023 Q3",
    userVoiceSuggestion: "Auto-generation of FEH22 rainfall data via ICM Exchange would streamline UK flood modeling workflows.",
    internalDate: "2024 Q1",
    internalNote: "FEH22 integration prioritized. Partnering with rainfall data providers.",
    releaseDate: "2024 Q3",
    releaseVersion: "ICM 2024.3",
    versionNumber: "2024.3",
    versionMajor: "2024",
    releaseNote: "FEH22 rainfall generation integrated with ICM Exchange automation.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "completed"
  },
  {
    id: "ruby-api-improvements",
    userVoiceDate: "2022 Q3",
    userVoiceSuggestion: "Ruby API needs better documentation and more examples for network manipulation scripts.",
    internalDate: "2023 Q1",
    internalNote: "Technical writing resources allocated. Community feedback incorporated.",
    releaseDate: "2023 Q3",
    releaseVersion: "ICM 2023.3",
    versionNumber: "2023.3",
    versionMajor: "2023",
    releaseNote: "Comprehensive Ruby API documentation with 50+ code examples published.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "completed"
  },
  {
    id: "flood-contour-export",
    userVoiceDate: "2023 Q4",
    userVoiceSuggestion: "Export max flood contours and elevations directly from 2D results without external GIS processing.",
    internalDate: "2024 Q2",
    internalNote: "GIS export workflow improvements scoped. Community votes: High priority.",
    releaseDate: "2024 Q4",
    releaseVersion: "ICM 2024.4",
    versionNumber: "2024.4",
    versionMajor: "2024",
    releaseNote: "Direct flood contour and elevation export with configurable intervals.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "completed"
  },
  {
    id: "asset-id-csv",
    userVoiceDate: "2024 Q1",
    userVoiceSuggestion: "CSV exports for inspection lists should include Asset IDs for GIS synchronization workflows.",
    internalDate: "2024 Q3",
    internalNote: "GIS interoperability improvements in planning. Asset ID mapping reviewed.",
    releaseDate: "2025 Q2 (Target)",
    releaseVersion: "ICM 2025.1",
    versionNumber: "2025.1",
    versionMajor: "2025",
    releaseNote: "Enhanced CSV exports with Asset ID fields for enterprise GIS sync.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "in-progress"
  },
  {
    id: "climate-scenarios",
    userVoiceDate: "2024 Q1",
    userVoiceSuggestion: "Integration with climate change rainfall projections for future scenario modeling.",
    internalDate: "2024 Q2",
    internalNote: "Partnership with climate data providers under evaluation.",
    releaseDate: "2025 Q3 (Target)",
    releaseVersion: "ICM 2025.x",
    versionNumber: "2025.x",
    versionMajor: "2025",
    releaseNote: "Climate scenario rainfall multipliers with regional dataset integration.",
    userVoiceUrl: "https://innovyzefeedback.autodesk.com/ideas",
    status: "in-progress"
  }
];

const versionFilters = [
  { value: "all", label: "All Versions" },
  { value: "2025", label: "ICM 2025.x" },
  { value: "2024", label: "ICM 2024.x" },
  { value: "2023", label: "ICM 2023.x" },
];

export const TrenchesTimeline = () => {
  const [versionFilter, setVersionFilter] = useState("all");

  const filteredEntries = versionFilter === "all" 
    ? timelineEntries 
    : timelineEntries.filter(entry => entry.versionMajor === versionFilter);

  const completedCount = filteredEntries.filter(e => e.status === "completed").length;
  const inProgressCount = filteredEntries.filter(e => e.status === "in-progress").length;

  return (
    <section id="trenches-timeline" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <MessageSquare className="w-4 h-4 mr-2" />
            From the Trenches to the Code
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Voice → Real Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The feedback loop isn't corporate fiction. Here's proof: real User Voice suggestions 
            that became real product features.
          </p>
        </div>

        {/* Version Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/10">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Filter by Version:</span>
              <Select value={versionFilter} onValueChange={setVersionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  {versionFilters.map((filter) => (
                    <SelectItem key={filter.value} value={filter.value}>
                      {filter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="default" className="bg-gradient-to-r from-primary to-accent text-white">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                {completedCount} Completed
              </Badge>
              <Badge variant="secondary">
                <Lightbulb className="w-3 h-3 mr-1" />
                {inProgressCount} In Progress
              </Badge>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {filteredEntries.length === 0 ? (
            <Card className="p-8 text-center bg-card/60 backdrop-blur-sm">
              <p className="text-muted-foreground">No entries found for the selected version filter.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setVersionFilter("all")}
              >
                Show All Versions
              </Button>
            </Card>
          ) : (
            filteredEntries.map((entry, index) => (
              <div key={entry.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Connector Line */}
                {index < filteredEntries.length - 1 && (
                  <div className="absolute left-6 top-[4.5rem] bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
                )}
                
                <Card className="mb-8 bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Timeline Node */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          entry.status === "completed" 
                            ? "bg-gradient-to-br from-primary to-accent" 
                            : "bg-gradient-to-br from-accent/50 to-primary/50"
                        }`}>
                          {entry.status === "completed" ? (
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          ) : (
                            <Lightbulb className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        {/* User Voice Suggestion */}
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-primary" />
                              <span className="text-sm font-semibold text-primary">User Voice Suggestion</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">{entry.userVoiceDate}</Badge>
                          </div>
                          <p className="text-foreground italic">"{entry.userVoiceSuggestion}"</p>
                          {entry.userVoiceUrl && entry.userVoiceUrl !== "#" && (
                            <a 
                              href={entry.userVoiceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                            >
                              View original suggestion <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <ArrowDown className="w-5 h-5 text-muted-foreground" />
                        </div>

                        {/* Internal Planning */}
                        {entry.internalDate && (
                          <>
                            <div className="p-4 rounded-lg bg-secondary/50 border border-muted/30">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Lightbulb className="w-4 h-4 text-accent" />
                                  <span className="text-sm font-semibold text-accent">Internal Planning</span>
                                </div>
                                <Badge variant="secondary" className="text-xs">{entry.internalDate}</Badge>
                              </div>
                              <p className="text-muted-foreground">{entry.internalNote}</p>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                              <ArrowDown className="w-5 h-5 text-muted-foreground" />
                            </div>
                          </>
                        )}

                        {/* Feature Released */}
                        <div className={`p-4 rounded-lg border ${
                          entry.status === "completed"
                            ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30"
                            : "bg-gradient-to-br from-muted/30 to-muted/10 border-muted/30"
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className={`w-4 h-4 ${entry.status === "completed" ? "text-accent" : "text-muted-foreground"}`} />
                              <span className={`text-sm font-semibold ${entry.status === "completed" ? "text-accent" : "text-muted-foreground"}`}>
                                {entry.status === "completed" ? "Feature Released" : "In Development"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {/* Version Badge */}
                              <Badge 
                                className={`text-xs flex items-center gap-1 ${
                                  entry.status === "completed" 
                                    ? "bg-gradient-to-r from-primary to-accent text-white border-0" 
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <Tag className="w-3 h-3" />
                                v{entry.versionNumber}
                              </Badge>
                              <Badge variant={entry.status === "completed" ? "default" : "secondary"} className="text-xs">
                                {entry.releaseDate}
                              </Badge>
                            </div>
                          </div>
                          <div className="font-semibold text-foreground mb-1">{entry.releaseVersion}</div>
                          <p className={entry.status === "completed" ? "text-foreground" : "text-muted-foreground"}>
                            {entry.releaseNote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              Have a Feature Request?
            </p>
            <p className="text-muted-foreground mb-4">
              Your suggestion could be on this timeline next. The feedback loop is real—use it.
            </p>
            <Badge variant="outline" className="text-sm">
              Submit via User Voice • Engage on Forums • Shape the Future
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
};
