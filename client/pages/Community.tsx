import { Layout } from "@/components/Layout";
import { ArrowRight, Github, ExternalLink, Shield } from "lucide-react";

export default function Community() {
  return (
    <Layout>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Open Source
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Open Source at FINOS
          </h1>

          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            CalmStudio and CalmGuard are open-source tools contributed to the
            FINOS ecosystem. Explore the repos, read the spec, and start
            contributing.
          </p>

          <div className="bg-card/50 rounded-xl border border-border/40 p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Get Involved
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
              <a
                href="https://github.com/opsflo/calmstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
              >
                <Github className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    CalmStudio
                  </div>
                  <div className="text-xs text-foreground/60">
                    Visual architecture editor
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/opsflo/calmguard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
              >
                <Github className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    CalmGuard
                  </div>
                  <div className="text-xs text-foreground/60">
                    Compliance CLI
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/finos/architecture-as-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    CALM Spec
                  </div>
                  <div className="text-xs text-foreground/60">
                    Architecture-as-Code standard
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/opsflo/calmstudio/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    Contributing
                  </div>
                  <div className="text-xs text-foreground/60">
                    How to contribute
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.finos.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                FINOS Foundation
              </h3>
              <p className="text-foreground/70 text-sm">
                The Fintech Open Source Foundation driving open standards and
                innovation in financial services technology.
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3">
                Visit FINOS <ExternalLink className="w-3 h-3" />
              </span>
            </a>
            <a
              href="https://github.com/opsflo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/40 bg-card/30 text-left hover:border-primary/50 hover:bg-card transition-all cursor-pointer"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                Contributor Community
              </h3>
              <p className="text-foreground/70 text-sm">
                Join developers and architects building open-source architecture
                governance tools for the FINOS ecosystem.
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3">
                GitHub <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
