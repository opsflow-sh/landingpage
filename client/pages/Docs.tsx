import { Layout } from "@/components/Layout";
import { ArrowRight, FileCode, Shield, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Docs() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Documentation
          </h1>

          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Everything you need to get started with architecture governance
          </p>

          <div className="bg-card/50 rounded-xl border border-border/40 p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Learn & Build
            </h2>
            <p className="text-foreground/70 mb-8">
              Explore guides for CalmStudio, CalmGuard, and the OpsFlow
              Platform. Get up and running with architecture governance.
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors cursor-pointer"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCode className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Getting Started
              </h3>
              <p className="text-foreground/70 text-sm">
                Install CalmStudio and CalmGuard. Create your first CALM
                architecture and run compliance checks.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                API Reference
              </h3>
              <p className="text-foreground/70 text-sm">
                CALM JSON schema reference, CalmGuard CLI commands, and MCP tool
                documentation.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/40 bg-card/30 text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Tutorials
              </h3>
              <p className="text-foreground/70 text-sm">
                FluxNova process templates, compliance policy authoring, and
                GitOps integration guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
