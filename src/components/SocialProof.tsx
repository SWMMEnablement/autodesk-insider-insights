import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, Star, MessageSquare, ThumbsUp } from "lucide-react";

const posts = [
  {
    title: "Why I Personally Invest in Autodesk AEC Collection, ICM Ultimate & InfoDrainage",
    excerpt:
      "The original LinkedIn article that started this chronicle — a candid look at why I pay for the tools I already had access to as an employee.",
    url: "https://www.linkedin.com/pulse/autodesk-employee-perspective-why-i-personally-invest-dickinson/",
    tags: ["AEC Collection", "ICM Ultimate", "InfoDrainage"],
    featured: true,
    metric: "Founding post",
  },
  {
    title: "AutoCAD, Civil 3D & the AEC Collection Workflow",
    excerpt:
      "How the AEC Collection stitches AutoCAD, Civil 3D, Revit, InfraWorks and Forma into a single design-to-analysis pipeline for water and land development.",
    url: "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
    tags: ["AEC Collection", "Civil 3D", "AutoCAD"],
    featured: true,
    metric: "AEC Collection deep-dive",
  },
  {
    title: "SWMM5, SWMM6 and the Road Ahead",
    excerpt:
      "Notes from the SWMM5+ TAC at CIMM on where the open-source engine is heading and how it complements ICM InfoWorks.",
    url: "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
    tags: ["SWMM5", "SWMM6", "ICM"],
    metric: "Technical",
  },
  {
    title: "50 Years with SWMM — A Personal Retrospective",
    excerpt:
      "From punch cards at UF in the 1970s to today's cloud-connected ICM Ultimate — the throughline of a career built on one modeling engine.",
    url: "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
    tags: ["Career", "SWMM", "History"],
    metric: "Community favorite",
  },
  {
    title: "InfoDrainage for Land Developers",
    excerpt:
      "Why InfoDrainage belongs in every land-development toolkit alongside Civil 3D — SuDS, detention design, and regulatory reporting in one place.",
    url: "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
    tags: ["InfoDrainage", "AEC Collection"],
    metric: "Practitioner focus",
  },
  {
    title: "What's New in InfoWorks ICM — Version Roundups",
    excerpt:
      "Ongoing release-by-release breakdowns of ICM InfoWorks features, tied back to the Autodesk User Voice ideas that shaped them.",
    url: "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
    tags: ["ICM InfoWorks", "User Voice"],
    metric: "Release coverage",
  },
];

export const SocialProof = () => {
  return (
    <section id="social-proof" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">
            <Linkedin className="w-3.5 h-3.5 mr-1.5" />
            Social Proof
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            From My LinkedIn Feed
          </h2>
          <p className="text-lg text-muted-foreground">
            Recent posts and articles where I've written about the AEC Collection,
            ICM InfoWorks, InfoDrainage, and the broader Autodesk Water portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <Card
              key={i}
              className={`p-6 shadow-soft border-0 bg-card/80 backdrop-blur-sm flex flex-col hover:shadow-lg transition-shadow ${
                post.featured ? "ring-2 ring-accent/40" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                {post.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" /> Featured
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1 mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> {post.metric}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(post.url, "_blank", "noopener,noreferrer")}
                  className="text-primary hover:text-primary"
                >
                  Read <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/robertdickinson/recent-activity/all/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            See All Recent LinkedIn Activity
          </Button>
        </div>
      </div>
    </section>
  );
};