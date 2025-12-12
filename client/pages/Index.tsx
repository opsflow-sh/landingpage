import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  Zap,
  Brain,
  Users,
  Cpu,
  Github,
  ExternalLink,
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
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            ✨ The Future of Agentic Operations
          </div>

          <div className="flex justify-center animate-fade-in">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F662de63651b548e396efce312fe39372?format=webp&width=800"
              alt="AOF Logo"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Building Agentic DevOps{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Workflows
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 animate-fade-in">
            Orchestrate intelligent agents across your operations. KubePilot,
            OpsFlow, and complementary agentic tools unified into seamless
            workflows that transform how teams manage complex infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <button className="px-8 py-4 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all transform hover:-translate-y-1">
              Start Building Free
              <ArrowRight className="w-4 h-4 inline-block ml-2" />
            </button>
            <button className="px-8 py-4 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors">
              View Documentation
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Open Source & Free
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Enterprise Ready
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Kubernetes Native
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - kubepilot */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background border-t border-b border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              KubePilot
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              The only desktop-based Agentic Kubernetes Copilot. Bring
              intelligent automation directly to your operations with a
              powerful, integrated agentic interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 flex items-center justify-center min-h-80">
                <div className="text-center">
                  <Cpu className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-foreground/60">
                    Kubernetes-native agent orchestration
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Intelligent Ops at Your Fingertips
                </h3>
                <p className="text-foreground/70">
                  A unified desktop environment that transforms how you manage
                  Kubernetes operations with AI-powered decision making and
                  execution control.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Agentic Ops Modes: Chat, QuickDX, RCA, Runbooks, Scan",
                  "MCP-based Agentic Tooling for extensibility",
                  "Unique agentic interface integrated into dashboard",
                  "Works with any AI provider and local models (Ollama, Docker)",
                  "Terminal integration for human-in-control workflows",
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
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/kubeagentics/kubeagentics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Ecosystem
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Complete solutions for building and managing agentic workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agentic Ops Alliance */}
            <div className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Agentic Ops Alliance
              </h3>
              <p className="text-foreground/70 mb-6">
                Join industry leaders building the standards and best practices
                for agentic operations. Collaborate on frameworks, guidelines,
                and shared solutions.
              </p>
              <a
                href="http://agenticops.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Join Alliance
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Agentic Ops Community */}
            <div className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-secondary/50 hover:bg-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-colors">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Agentic Ops Community
              </h3>
              <p className="text-foreground/70 mb-6">
                Connect with developers and operators building with agentic
                systems. Share experiences, ask questions, and grow together
                with thousands of community members.
              </p>
              <a
                href="http://agenticops.community/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Command Center */}
            <div className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-primary/50 hover:bg-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Agentic Ops Command Center
              </h3>
              <p className="text-foreground/70 mb-6">
                Coming soon: Enterprise platform for managing and monitoring
                agentic workflows at scale. Centralized control, real-time
                insights, and intelligent automation orchestration.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold opacity-60 cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            {/* Advanced Capabilities */}
            <div className="group rounded-xl border border-border/40 bg-card/50 p-8 hover:border-secondary/50 hover:bg-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-colors">
                <Cpu className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Advanced Capabilities
              </h3>
              <p className="text-foreground/70 mb-6">
                Sophisticated agent reasoning, multi-step workflows, failure
                recovery, and advanced observability. Built for complex
                operational challenges.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all"
              >
                Explore More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agentic Ops */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Agentic Ops?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              The operational landscape is changing. Agentic systems are the
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowered Decision Making",
                description:
                  "Agents provide intelligent recommendations and handle routine tasks, keeping humans informed and in control of all critical decisions.",
              },
              {
                title: "Human-Augmented Intelligence",
                description:
                  "Combine human expertise with AI capabilities. Agents learn from your team's knowledge and adapt to your operational practices.",
              },
              {
                title: "Eliminate Toil, Not Jobs",
                description:
                  "Automate tedious, repetitive work. Free your team from operational drudgery to focus on strategic, high-value decisions.",
              },
              {
                title: "Instant Incident Assistance",
                description:
                  "Agents detect issues and gather context instantly, giving your team the information they need to respond faster.",
              },
              {
                title: "Confidence at Scale",
                description:
                  "Handle complexity through intelligent collaboration. Scale operations with your team working alongside capable agents, not replaced by them.",
              },
              {
                title: "Always Under Control",
                description:
                  "Human-in-control workflows ensure you approve critical actions. Agents are your partners in execution, not autonomous overlords.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border/40 bg-card/30 p-6 hover:border-border/60 transition-colors"
              >
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
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations building the future of intelligent
            operations. Start with kubepilot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all transform hover:-translate-y-1">
              Get Started Free
              <ArrowRight className="w-4 h-4 inline-block ml-2" />
            </button>
            <a
              href="https://github.com/kubeagentics/kubeagentics"
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
