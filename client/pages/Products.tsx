import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

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

          <div className="mt-20 pt-20 border-t border-border/40">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Product Roadmap
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12 text-center">
              Here's what we're shipping next
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    date: "Dec 18",
                    items: [
                      "Release Agentic Ops Framework = Open Source",
                      "Announce KubePilot CE"
                    ],
                    status: "upcoming"
                  },
                  {
                    date: "Jan 12",
                    items: ["KubePilot Plus goes Public Preview"],
                    status: "upcoming"
                  },
                  {
                    date: "Feb 1",
                    items: ["Kubepilot + becomes Public"],
                    status: "upcoming"
                  },
                  {
                    date: "Mar 26",
                    items: ["Opspilot EE Private Beta Launch"],
                    status: "upcoming"
                  },
                  {
                    date: "Apr 22",
                    items: ["OpsFlow Command Center"],
                    status: "upcoming"
                  }
                ].map((milestone, idx) => (
                  <div key={idx} className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      {idx < 4 && <div className="w-1 h-16 bg-border/40 mt-2" />}
                    </div>
                    <div className="pb-6 flex-1">
                      <p className="text-sm font-bold text-primary mb-2">{milestone.date}</p>
                      <div className="space-y-2">
                        {milestone.items.map((item, itemIdx) => (
                          <p key={itemIdx} className="text-foreground/80 text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-foreground/60 text-sm mt-12">
            More products launching soon...
          </p>
        </div>
      </div>
    </Layout>
  );
}
