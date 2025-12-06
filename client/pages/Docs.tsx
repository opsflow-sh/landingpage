import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Docs() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            📚 Documentation
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Documentation
          </h1>

          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Everything you need to get started with agentic operations
          </p>

          <div className="bg-card/50 rounded-xl border border-border/40 p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Learn & Build
            </h2>
            <p className="text-foreground/70 mb-8">
              Continue chatting with us on the left to fill in this page with
              guides, tutorials, API documentation, and more.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Getting Started
              </h3>
              <p className="text-foreground/70 text-sm">
                Quick setup guides and first steps
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                API Reference
              </h3>
              <p className="text-foreground/70 text-sm">
                Complete API documentation and examples
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Tutorials
              </h3>
              <p className="text-foreground/70 text-sm">
                In-depth guides for common workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
