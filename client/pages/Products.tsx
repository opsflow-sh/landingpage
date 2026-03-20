import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  FileCode,
  Shield,
  LayoutDashboard,
  Eye,
  Brain,
  Github,
  ExternalLink,
  Scale,
  Lock,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <Layout>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Workflow className="w-4 h-4" />
              Products
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Products
            </h1>

            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Open-source architecture tools donated to FINOS, backed by an
              enterprise governance platform.
            </p>
          </div>

          {/* Tier 1: FINOS Open Source */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold">
                <Shield className="w-3 h-3" />
                FINOS Open Source
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CalmStudio */}
              <div className="rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                  <FileCode className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  CalmStudio
                </h3>
                <p className="text-foreground/70 mb-4">
                  Visual canvas editor for CALM architectures. Design, validate,
                  and export architecture-as-code with an intuitive drag-and-drop
                  interface.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Visual canvas editor",
                    "21 MCP tools for AI-assisted design",
                    "FluxNova process templates",
                    "CALM JSON export & validation",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://github.com/opsflo/calmstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* CalmGuard */}
              <div className="rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  CalmGuard
                </h3>
                <p className="text-foreground/70 mb-4">
                  Architecture compliance CLI. Validate CALM architectures
                  against enterprise compliance policies at build time in your
                  CI/CD pipelines.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "CLI: check, analyze, generate",
                    "SOX, PCI-DSS, NIST-CSF, SOC2, FINOS CCC",
                    "MCP server for AI validation",
                    "CI/CD pipeline integration",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://github.com/opsflo/calmguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Tier 2: OpsFlow Platform */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold">
                <Scale className="w-3 h-3" />
                OpsFlow Platform
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: LayoutDashboard,
                  title: "Governance Dashboard",
                  description:
                    "Centralized view of all architectures, compliance status, and risk posture across your organization.",
                },
                {
                  icon: Eye,
                  title: "Runtime Monitor",
                  description:
                    "Detect architecture drift in production. Compare deployed state against approved CALM blueprints.",
                },
                {
                  icon: Lock,
                  title: "Policy Hub",
                  description:
                    "Manage compliance policies centrally. Define, version, and enforce rules across all teams and architectures.",
                },
                {
                  icon: Scale,
                  title: "Risk Engine",
                  description:
                    "Automated risk scoring and impact analysis. Prioritize remediation based on business criticality.",
                },
                {
                  icon: Brain,
                  title: "AI Engine",
                  description:
                    "AI-powered architecture recommendations, anomaly detection, and automated compliance remediation.",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/40 bg-card/50 p-6 hover:border-primary/50 hover:bg-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Lifecycle Summary */}
          <div className="rounded-xl border border-border/40 bg-card/50 p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Full Architecture Lifecycle
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Design with CalmStudio → Validate with CalmGuard → Deploy with
              GitOps → Monitor with OpsFlow Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/opsflo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500/80 text-white font-semibold hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors cursor-pointer">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
