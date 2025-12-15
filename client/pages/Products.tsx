import { Layout } from "@/components/Layout";
import { ArrowRight, Rocket, Target, Star, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const iconMap = {
    rocket: Rocket,
    target: Target,
    star: Star,
    building: Building2,
  };

  const renderIcon = (iconKey) => {
    const IconComponent = iconMap[iconKey];
    if (!IconComponent) return null;
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  return (
    <Layout>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            📦 Products
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>

          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions for building and managing agentic workflows
            at scale
          </p>

          {/* Product Roadmap Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Product Roadmap
            </h2>

            <div className="relative max-w-6xl mx-auto px-4">
              {/* Timeline center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-secondary transform -translate-x-1/2 hidden md:block" />

              <div className="space-y-12 md:space-y-20">
                {[
                  {
                    date: "Dec 18, 2025",
                    title: "Agentic Ops Framework Launch",
                    description:
                      "Release AOF as fully open source. The framework built for DevOps folks by DevOps folks from the ground up.",
                    position: "top",
                    icon: Rocket,
                  },
                  {
                    date: "Jan 2, 2026",
                    title: "KubePilot CE Release",
                    description:
                      "Announce and launch KubePilot Community Edition. The only desktop-based Agentic Kubernetes Copilot.",
                    position: "bottom",
                    icon: Target,
                  },
                  {
                    date: "Feb 1, 2026",
                    title: "KubePilot Plus Goes Public",
                    description:
                      "Launch KubePilot Plus with advanced features for professional teams and enterprises.",
                    position: "top",
                    icon: Star,
                  },
                  {
                    date: "Q2 2026",
                    title: "Enterprise Solutions Coming",
                    description:
                      "More enterprise products and services launching throughout Q2 2026.",
                    position: "bottom",
                    icon: Building2,
                  },
                ].map((milestone, idx) => {
                  const isTop = milestone.position === "top";
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-8 ${isTop ? "flex-row" : "flex-row-reverse"}`}
                    >
                      {/* Card */}
                      <div className="flex-1">
                        <div
                          className={`p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all ${
                            isTop
                              ? "md:mr-auto md:max-w-sm"
                              : "md:ml-auto md:max-w-sm"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            {milestone.icon && (
                              <milestone.icon className="w-6 h-6 text-primary" />
                            )}
                            <p className="text-sm font-bold text-primary">
                              {milestone.date}
                            </p>
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-foreground/70">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline dot and connector */}
                      <div className="relative flex flex-col items-center hidden md:flex">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                        {idx < 3 && (
                          <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/50" />
                        )}
                      </div>

                      {/* Empty space for desktop layout */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  );
                })}
              </div>

              {/* Mobile timeline indicator */}
              <div className="md:hidden flex flex-col items-center mt-8">
                <p className="text-sm text-foreground/60 text-center">
                  Timeline visualization optimized for desktop view
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 rounded-xl border border-border/40 p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to explore our products?
            </h2>
            <p className="text-foreground/70 mb-8">
              Continue chatting with us on the left to fill in this page with
              detailed product information and specifications.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/kubeagentics/kubepilot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-primary/50 hover:bg-card transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                KubePilot CE
              </h3>
              <p className="text-foreground/70 text-sm">
                The only desktop-based Agentic Kubernetes Copilot. Bring
                intelligent automation directly to your operations with a
                powerful, integrated agentic interface.
              </p>
              <p className="text-primary text-xs mt-4 font-semibold">
                View on GitHub →
              </p>
            </a>
            <a
              href="https://aof.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-primary/50 hover:bg-card transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                Agentic Ops Framework
              </h3>
              <p className="text-foreground/70 text-sm">
                The only framework built for DevOps folks by DevOps folks from
                the ground up. Next-gen automation with MCP and agentic AI for
                complex infrastructure operations.
              </p>
              <p className="text-primary text-xs mt-4 font-semibold">
                Learn More →
              </p>
            </a>
            <a
              href="http://github.com/opsflow-sh/opsflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-secondary/50 hover:bg-card transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                OpsFlow
              </h3>
              <p className="text-foreground/70 text-sm">
                Enterprise platform built on Agentic Ops Framework for managing
                complex agentic workflows at scale with advanced monitoring and
                orchestration.
              </p>
              <p className="text-secondary text-xs mt-4 font-semibold">
                Coming Soon
              </p>
            </a>
            <a
              href="https://devopsify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-primary/50 hover:bg-card transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                Devopsify
              </h3>
              <p className="text-foreground/70 text-sm">
                Ship your Replit app to production without learning DevOps. An
                agentic readiness engineer that audits your app, generates
                production artifacts, and gives an explainable path to deploy
                and operate safely.
              </p>
              <p className="text-primary text-xs mt-4 font-semibold">
                Join Waitlist →
              </p>
            </a>
          </div>

          <p className="text-center text-foreground/60 text-sm mt-12">
            More products launching soon...
          </p>
        </div>
      </div>
    </Layout>
  );
}
