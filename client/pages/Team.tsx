import { Layout } from "@/components/Layout";
import { Linkedin, ExternalLink } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "Anoop Mehendale",
      title: "Founder & CEO",
      bio: "Serial entrepreneur with a track record of building and scaling enterprise technology companies.\n\n• Founded Xficient (GenAI) → raised $4M, exited to investors\n• Founded Mathema Analytics → acquired by Moody's Analytics\n• Enterprise platforms at Highmark | Strategy & M&A at Aetna\n• Sales strategy leader at Salesforce\n• Early leadership roles in India at Mu Sigma and LatentView Analytics\n• MBA, Indian School of Business",
      linkedinUrl: "https://www.linkedin.com/in/anoopmehendale/",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fa30503b7e4574ce58f3b2c243fc27924?format=webp&width=800",
    },
    {
      name: "Gourav Shah",
      title: "Co-Founder & Chief Product Officer",
      bio: "Leading DevOps domain expert with 18+ years hands-on expertise in cloud infrastructure, container orchestration, and platform engineering.\n\n• 228,700+ students on Udemy with 5,400+ reviews—one of the most recognized educators in DevOps\n• Founder of School of DevOps™ and Linux Foundation Course Developer & Maintainer\n• Author of Ansible Playbook Essentials (Packt Publishing)\n• Corporate trainer for Fortune 500: Visa, Adobe, Walmart Labs, Cisco, Nutanix, Rakuten, Citrix\n• Deep expertise in Kubernetes, MLOps, AI infrastructure, and cloud-native architectures\n• CKA Certified | Shivaji University",
      linkedinUrl: "https://www.linkedin.com/in/gouravshah/",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc3c5f8faf5a94ef0bb6a60a9d701ac8a?format=webp&width=800",
    },
    {
      name: "Prashant Sasatte",
      title: "Co-Founder & Chief Technology Officer",
      bio: "Technical leader and serial entrepreneur with elite academic credentials and deep expertise in AI, optimization, and enterprise systems.\n\n• Founder of Olelo Intelligent Systems (privacy-first enterprise smart voice assistant solutions)\n• Founder of Cogmeta Intelligent Systems (audience intelligence platform)\n• Founded Interior Point Analytics\n• Principal Analytics Engineer at Exponential\n• Expert in statistical modeling, optimization algorithms, and secure AI architecture\n• Master of Mathematics in Computer Science, University of Waterloo (4.0/4.0)\n• B.E. Computer Science, BITS Pilani (9.92/10.00)",
      linkedinUrl: "https://www.linkedin.com/in/prashantsasatte/",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F1cd7901e1bab4583962976450b937efb?format=webp&width=800",
    },
  ];

  return (
    <Layout>
      <div className="py-20 md:py-32">
        {/* Hero Section */}
        <div className="container mx-auto max-w-6xl px-4 mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              👥 Our Team
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Founding Team
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Industry veterans combining enterprise expertise, deep domain
              knowledge, and technical excellence to transform operations with
              agentic intelligence.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Profile Image Circle */}
                <div className="mb-6 relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={founder.imageUrl}
                      alt={founder.name}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  {/* Decorative ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
                </div>

                {/* Name and Title */}
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h2>
                <p className="text-lg font-semibold text-primary mb-4">
                  {founder.title}
                </p>

                {/* Bio */}
                <div className="text-foreground/70 text-sm leading-relaxed mb-6 text-left space-y-2">
                  {founder.bio.split('\n\n').map((paragraph, idx) => (
                    <div key={idx}>
                      {paragraph.includes('•') ? (
                        <ul className="space-y-1 list-none">
                          {paragraph.split('\n').map((line, lineIdx) => (
                            <li key={lineIdx} className="flex items-start gap-2">
                              {line.startsWith('•') ? (
                                <>
                                  <span className="text-primary font-bold mt-1">•</span>
                                  <span>{line.slice(2)}</span>
                                </>
                              ) : (
                                line
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-semibold text-foreground">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* LinkedIn Link */}
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 md:mt-32 bg-gradient-to-b from-background to-card/30 py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              We're building the next generation of operational intelligence.
              Our combined expertise spans enterprise strategy, deep DevOps and
              operations knowledge, and cutting-edge technology. Together, we're
              creating tools that empower teams to manage complex operations
              with agentic intelligence—keeping humans informed, in control, and
              focused on what matters most.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
