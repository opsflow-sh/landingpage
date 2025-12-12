import { Layout } from "@/components/Layout";
import { Linkedin, ExternalLink } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "Anoop Mehendale",
      title: "CEO & Founder",
      bio: "Experienced enterprise strategist and healthcare innovator. Founded Xficient Inc. (Aug 2023), raising $4M to bring Generative AI to healthcare payers. Previously Head of Sales Strategy for Healthcare Payer Vertical at Salesforce, where he conceptualized and led the launch of a $500M healthtech platform. Senior Director of Enterprise Strategy at Aetna with M&A responsibilities. Founder of Mathema Analytics (acquired by Moody's Analytics). MBA from Indian School of Business, B.S. in Mechanical Engineering.",
      linkedinUrl: "https://www.linkedin.com/in/anoop-mehendale/",
      imageUrl: "https://via.placeholder.com/300x300?text=Anoop+Mehendale",
    },
    {
      name: "Gourav Shah",
      title: "Chief Builder & Co-Founder",
      bio: "Domain expert with 18+ years of expertise in Operations and DevOps. Recognized thought leader and corporate trainer with a proven track record of building distribution channels. Trusted by 200,000+ students on Udemy and enterprise organizations worldwide. Brings deep technical expertise combined with exceptional ability to communicate and scale impact through education and community building.",
      linkedinUrl: "https://www.linkedin.com/in/gouravshah/",
      imageUrl: "https://via.placeholder.com/300x300?text=Gourav+Shah",
    },
    {
      name: "Prashant Sasatte",
      title: "CTO & Co-Founder",
      bio: "Technical leader with proven startup experience and elite educational background. Brings deep technical expertise in building scalable systems and leading engineering teams. Prior experience launching and scaling technology products. Combines technical excellence with entrepreneurial vision to drive OpsFlow's technology strategy and product architecture.",
      linkedinUrl: "https://www.linkedin.com/in/prashantsasatte/",
      imageUrl: "https://via.placeholder.com/300x300?text=Prashant+Sasatte",
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
              Industry veterans combining enterprise expertise, deep domain knowledge, and technical excellence to transform operations with agentic intelligence.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Profile Image Circle */}
                <div className="mb-6 relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300 bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={founder.imageUrl}
                      alt={founder.name}
                      className="w-full h-full object-cover"
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
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

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
              We're building the next generation of operational intelligence. Our combined expertise spans enterprise strategy, deep DevOps and operations knowledge, and cutting-edge technology. Together, we're creating tools that empower teams to manage complex operations with agentic intelligence—keeping humans informed, in control, and focused on what matters most.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
