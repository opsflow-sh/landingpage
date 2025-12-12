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
          </div>

          <p className="text-center text-foreground/60 text-sm mt-12">
            More products launching soon...
          </p>
        </div>
      </div>
    </Layout>
  );
}
