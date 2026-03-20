import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  Shield,
  FileCode,
  Workflow,
  Eye,
  Scale,
  Layers,
  CheckCircle,
  Lock,
  Github,
  ExternalLink,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Layers className="w-4 h-4" />
            Building for the CALM & FluxNova Ecosystem
          </div>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-3 pb-6 animate-fade-in flex-wrap">
            <span className="px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold">
              CALM
            </span>
            <span className="px-3 py-1 rounded-full border border-sky-400/40 bg-sky-400/10 text-sky-400 text-xs font-semibold">
              FluxNova
            </span>
            <span className="px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-400 text-xs font-semibold">
              FINOS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Architecture Governance for the FINOS Ecosystem
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-6 pt-5 animate-fade-in">
            Building the platform that bridges CALM, FluxNova, and the AI
            Governance Framework. Design architectures visually, enforce
            compliance automatically, and monitor drift in production.
          </p>

          {/* Hackathon trust signal */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400/90 text-sm font-medium">
              <Trophy className="w-4 h-4" />
              DTCC/FINOS 2026 Hackathon Bronze Winner | $40K Grant Recipient
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 pt-2 animate-fade-in">
            <Link
              to="/community"
              className="px-8 py-4 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all transform hover:-translate-y-1"
            >
              Explore Open Source
              <ArrowRight className="w-4 h-4 inline-block ml-2" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors"
            >
              See the Platform
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Open Core
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Enterprise Ready
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              FINOS Native
            </div>
          </div>
        </div>
      </section>

      {/* CalmStudio Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background border-t border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold mb-4">
              <Shield className="w-3 h-3" />
              FINOS Open Source
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CalmStudio
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Design and validate CALM architectures visually. The open-source
              canvas editor for the Common Architecture Language Model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Styled canvas mockup */}
              <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-card/80 to-background/50 p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="text-xs text-foreground/40 ml-2">
                    CalmStudio — Architecture Canvas
                  </span>
                </div>
                <div className="space-y-4">
                  {/* Mock canvas nodes */}
                  <div className="flex gap-4 items-center justify-center">
                    <div className="px-4 py-2 rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-400 text-xs font-mono">
                      API Gateway
                    </div>
                    <div className="text-foreground/30">→</div>
                    <div className="px-4 py-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 text-emerald-400 text-xs font-mono">
                      Auth Service
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <div className="px-4 py-2 rounded-lg border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-mono">
                      Event Bus
                    </div>
                    <div className="text-foreground/30">→</div>
                    <div className="px-4 py-2 rounded-lg border border-purple-400/40 bg-purple-400/10 text-purple-400 text-xs font-mono">
                      Data Store
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <span className="text-xs text-foreground/30 font-mono">
                      CALM JSON → validated ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Design Architectures Visually
                </h3>
                <p className="text-foreground/70">
                  A visual canvas editor that transforms how you design and
                  validate architectures using the CALM specification.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Visual canvas editor for CALM architectures",
                  "21 MCP tools for AI-assisted design",
                  "FluxNova process templates",
                  "CALM JSON export and validation",
                  "Open source — contributed to FINOS",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/opsflo/calmstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
                <Link
                  to="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CalmGuard Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background border-t border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold mb-4">
              <Shield className="w-3 h-3" />
              FINOS Open Source
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CalmGuard
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Architecture compliance CLI. Validate CALM architectures against
              enterprise policies at build time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Enforce Compliance Automatically
                </h3>
                <ul className="space-y-2">
                  {[
                    "CLI commands: check, analyze, generate",
                    "Policy engine: SOX, PCI-DSS, NIST-CSF, SOC2, FINOS CCC",
                    "MCP server for AI-assisted validation",
                    "Build-time validation in CI/CD pipelines",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/opsflo/calmguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
                <Link
                  to="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  Read the Docs
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-card/50 to-background/50 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="text-xs text-foreground/40 ml-2">
                    Terminal
                  </span>
                </div>
                <div className="text-foreground/60 font-mono text-sm space-y-2">
                  <div>$ calmguard check architecture.calm.json</div>
                  <div className="text-primary">
                    ✓ Schema valid | 3 nodes | 4 relationships
                  </div>
                  <div className="mt-3">
                    $ calmguard analyze --framework pci-dss
                  </div>
                  <div className="text-amber-400">
                    ⚠ 2 findings | 1 critical | 1 advisory
                  </div>
                  <div className="mt-3">$ calmguard generate --policy sox</div>
                  <div className="text-primary">
                    ✓ Generated SOX compliance report → report.pdf
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Core Model Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background border-t border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Core Model
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Free open-source tools for everyone. Enterprise platform for teams
              that need more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free tier */}
            <div className="rounded-xl border border-border/40 bg-card/50 p-8 hover:border-border/60 transition-all duration-300">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 text-xs font-semibold mb-6">
                <Shield className="w-3 h-3" />
                FINOS Open Source
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-6">Free</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "CalmStudio visual canvas",
                  "CalmGuard CLI",
                  "CALM validation engine",
                  "FluxNova templates",
                  "Community support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/opsflo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500/80 text-white font-semibold hover:bg-emerald-500 transition-colors w-full justify-center cursor-pointer"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Enterprise tier */}
            <div className="rounded-xl border border-primary/40 bg-card/50 p-8 hover:border-primary/60 transition-all duration-300 shadow-lg shadow-primary/5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold mb-6">
                <Layers className="w-3 h-3" />
                OpsFlow Platform
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Enterprise
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in open source",
                  "Governance Dashboard",
                  "Runtime Monitor",
                  "Policy Hub",
                  "Risk Engine",
                  "AI Engine",
                  "Audit trail & compliance reports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors w-full justify-center cursor-pointer">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-center text-foreground/50 text-sm mt-8">
            Like Kafka → Confluent. Kubernetes → Red Hat. PostgreSQL →
            Supabase.
          </p>
        </div>
      </section>

      {/* Architecture Lifecycle Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Architecture Governance
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              From design to runtime — full lifecycle coverage
            </p>
          </div>

          {/* Pipeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                phase: "Design-time",
                tool: "CalmStudio",
                icon: FileCode,
                color: "sky",
              },
              {
                step: "2",
                phase: "Build-time",
                tool: "CalmGuard",
                icon: Shield,
                color: "amber",
              },
              {
                step: "3",
                phase: "Deploy-time",
                tool: "GitOps Integration",
                icon: Workflow,
                color: "emerald",
              },
              {
                step: "4",
                phase: "Runtime",
                tool: "OpsFlow Monitor",
                icon: Eye,
                color: "purple",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex-1 rounded-xl border border-border/40 bg-card/50 p-6 text-center hover:border-border/60 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs text-foreground/50 font-semibold uppercase tracking-wider mb-1">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-foreground/60">{item.tool}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block text-foreground/30 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINOS Ecosystem Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Across Three FINOS Initiatives
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Contributing to the open standards shaping financial services
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://github.com/finos/architecture-as-code"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">CALM</h3>
              <p className="text-foreground/70 mb-4">
                Common Architecture Language Model — the open standard for
                describing software architecture as code. Machine-readable,
                version-controlled, validatable.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                View Spec
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            <a
              href="https://github.com/finos/fluxnova"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-secondary/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                FluxNova
              </h3>
              <p className="text-foreground/70 mb-4">
                Process Automation Platform — orchestrate workflows across
                financial services infrastructure with standardized process
                templates and automation.
              </p>
              <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Project
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            <a
              href="https://github.com/finos/ai-readiness"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">AIGF</h3>
              <p className="text-foreground/70 mb-4">
                AI Governance Framework — guidelines and tools for responsible
                AI adoption in regulated industries. Risk assessment, model
                governance, compliance.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Architecture Governance */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Architecture Governance?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Regulated industries need more than diagrams. They need
              enforceable, auditable architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Compliance at Scale",
                description:
                  "Validate architectures against SOX, PCI-DSS, NIST-CSF, SOC2, and FINOS CCC policies automatically across your entire portfolio.",
              },
              {
                icon: FileCode,
                title: "Architecture-as-Code",
                description:
                  "CALM JSON makes architecture machine-readable, version-controlled, and diffable — just like your application code.",
              },
              {
                icon: Shield,
                title: "FINOS Native",
                description:
                  "Built on open standards from the Fintech Open Source Foundation. No vendor lock-in, full transparency, community-governed.",
              },
              {
                icon: Workflow,
                title: "Design-to-Runtime Coverage",
                description:
                  "From canvas to production — validate at design time, enforce at build time, monitor drift at runtime.",
              },
              {
                icon: Lock,
                title: "AI-Augmented Governance",
                description:
                  "21 MCP tools bring AI assistance to architecture design and compliance validation without replacing human judgment.",
              },
              {
                icon: Layers,
                title: "Open Core Transparency",
                description:
                  "Core tools are open source and FINOS-donated. Enterprise features build on top, never behind a paywall for basics.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border/40 bg-card/30 p-6 hover:border-border/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Govern Your Architecture?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Start with free open-source tools. Scale to the enterprise platform
            when your team needs more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="px-8 py-4 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all transform hover:-translate-y-1"
            >
              Explore Open Source
              <ArrowRight className="w-4 h-4 inline-block ml-2" />
            </Link>
            <a
              href="https://github.com/opsflo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
