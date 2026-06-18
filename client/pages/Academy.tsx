import { useState } from "react";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  BookOpen,
  Users,
  Building2,
  CheckCircle,
  Code2,
  Shield,
  Cpu,
  GitBranch,
  Terminal,
  LayoutDashboard,
} from "lucide-react";

const TIERS = [
  {
    name: "Associate",
    tagline: "Foundation",
    modules: "Modules 1–3",
    duration: "~8 hours",
    audience: "Entry-level professionals, architects new to AaC",
    color: "border-sky-400/40",
    badge: "bg-sky-400/10 text-sky-400",
    highlights: [
      "Architecture debt crisis & why diagrams fail",
      "CALM specification: nodes, relationships, interfaces",
      "Full CALM toolchain: CLI, Studio, Hub",
      "Your first validated architecture document",
    ],
    outcome: "Produce valid CALM documents; use the full toolchain",
  },
  {
    name: "Practitioner",
    tagline: "Applied",
    modules: "Modules 1–5",
    duration: "~16 hours",
    audience: "Mid-career architects, platform & DevOps engineers",
    color: "border-primary/60",
    badge: "bg-primary/10 text-primary",
    highlights: [
      "Everything in Associate",
      "Governance, compliance & CALM Guard",
      "AI-native architecture (15 agentic node types)",
      "FINOS AIGF + Google SAIF overlays",
      "CI/CD integration with architecture gates",
    ],
    outcome: "Design governed, AI-native architectures; automate compliance checks",
    featured: true,
  },
  {
    name: "Architect",
    tagline: "Expert",
    modules: "All modules + Capstone",
    duration: "~24 hours",
    audience: "Senior architects, engineering leads, FSI technologists",
    color: "border-secondary/60",
    badge: "bg-secondary/10 text-secondary",
    highlights: [
      "Everything in Practitioner",
      "Enterprise adoption playbooks",
      "Regulatory deep dives: SOX, DORA, MiFID II, SR 11-7",
      "Capstone: full governed architecture (choose scenario)",
      "Peer review + practical examination",
    ],
    outcome: "Lead AaC adoption at enterprise scale; architect compliant, AI-governed systems",
  },
];

const FORMATS = [
  {
    icon: BookOpen,
    title: "Self-Paced Online",
    description:
      "Work through recorded lessons, interactive labs, and quizzes on your own schedule. ~25 hours total including hands-on exercises.",
    details: ["Text + video lessons", "15 hands-on labs", "Auto-graded quizzes", "Community forum access"],
  },
  {
    icon: Users,
    title: "Live Workshop",
    description:
      "5-day intensive: 4 hours/day of instructor-led sessions + hands-on lab work. Cohort-based with peer review.",
    details: ["Small cohort format", "90 min concept + 105 min lab daily", "Pre-work + 7-day capstone window", "Direct instructor access"],
  },
  {
    icon: Building2,
    title: "Corporate / In-House",
    description:
      "Private training for your team with org-specific CALM patterns and scenarios relevant to your architecture context.",
    details: ["Custom content & scenarios", "On-site or virtual delivery", "Team certification cohort", "Post-training pattern library"],
  },
];

const TOOLS = [
  { icon: Terminal, name: "CALM CLI", desc: "Validate, generate, diff, template" },
  { icon: LayoutDashboard, name: "CALM Studio", desc: "Visual architecture canvas" },
  { icon: GitBranch, name: "CALM Hub", desc: "Versioned pattern registry" },
  { icon: Shield, name: "CALM Guard", desc: "AI-driven compliance automation" },
  { icon: Cpu, name: "calmstudio-mcp", desc: "AI-assisted architecture generation" },
  { icon: Code2, name: "CALM Server", desc: "Validation-as-a-service for CI/CD" },
];

const PERSONAS = [
  "Software / Enterprise Architects",
  "Platform & DevOps Engineers",
  "Security Architects",
  "AI/ML Engineers",
  "Engineering Managers",
  "Financial Services Technologists",
];

export default function Academy() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "associate",
    format: "self-paced",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "academy-interest",
          ...formData,
        }).toString(),
      });
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
            <Code2 className="w-3.5 h-3.5" />
            Community Training Program · Not an official FINOS certification
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Architecture as{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Code
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 font-light mb-4 animate-fade-in italic">
            "Terraform transformed infrastructure. CALM transforms architecture."
          </p>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in">
            Hands-on training on the CALM open-source specification — from your
            first validated architecture document to enterprise-scale governance
            and AI-native system design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="#register"
              className="px-8 py-4 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Register Interest
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/opsflow-sh/calm/tree/main/calm-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-muted transition-colors inline-flex items-center justify-center gap-2"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* 3-Level Program */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three-Level Program
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Each level builds on the last. Labs are cumulative — by Architect you've built a complete governed, AI-native enterprise architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 ${tier.color} bg-card p-8 flex flex-col gap-4 ${tier.featured ? "shadow-lg shadow-primary/10 scale-[1.02]" : ""}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 ${tier.badge}`}>
                    {tier.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-foreground/50 mt-1">{tier.audience}</p>
                </div>

                <div className="flex gap-4 text-sm text-foreground/60">
                  <span>{tier.modules}</span>
                  <span>·</span>
                  <span>{tier.duration}</span>
                </div>

                <ul className="space-y-2 flex-1">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-foreground/50 font-medium uppercase tracking-wide mb-1">You'll be able to</p>
                  <p className="text-sm text-foreground/70">{tier.outcome}</p>
                </div>

                <a
                  href="#register"
                  className={`mt-2 px-6 py-3 rounded-lg text-sm font-semibold text-center transition-all ${
                    tier.featured
                      ? "bg-sky-400/60 text-white hover:bg-sky-400/80"
                      : "border border-border hover:bg-muted text-foreground"
                  }`}
                >
                  Register Interest
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How You'll Learn
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Choose the format that fits your schedule and team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMATS.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-8 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-foreground/60 flex-1">{f.description}</p>
                <ul className="space-y-1.5">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-foreground/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Is This For
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {PERSONAS.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full border border-border/60 bg-card text-sm text-foreground/70 font-medium"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools You'll Master
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              The full CALM ecosystem — from CLI to AI-assisted generation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <tool.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{tool.name}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Registration Form */}
      <section id="register" className="py-20 md:py-28 border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Register Your Interest
            </h2>
            <p className="text-foreground/60">
              We'll reach out when your preferred format opens. No spam.
            </p>
          </div>

          {formState === "success" ? (
            <div className="max-w-md mx-auto text-center rounded-2xl border border-primary/30 bg-primary/5 p-10">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">You're on the list</h3>
              <p className="text-foreground/60 text-sm">We'll be in touch when enrollment opens for your chosen format.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto rounded-2xl border border-border/60 bg-card p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-foreground/30"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-foreground/30"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Track</label>
                <select
                  name="track"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="associate">Associate (~8 hrs)</option>
                  <option value="practitioner">Practitioner (~16 hrs)</option>
                  <option value="architect">Architect (~24 hrs)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Preferred Format</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                  className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="self-paced">Self-Paced Online</option>
                  <option value="live-workshop">Live Workshop (5-day intensive)</option>
                  <option value="corporate">Corporate / In-House Training</option>
                </select>
              </div>

              {formState === "error" && (
                <p className="text-sm text-destructive">Submission failed. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="px-6 py-3 rounded-lg bg-sky-400/60 text-white font-semibold hover:bg-sky-400/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? "Sending…" : "Register Interest"}
                {formState !== "submitting" && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
