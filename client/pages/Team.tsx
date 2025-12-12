import { Layout } from "@/components/Layout";
import { Linkedin, ExternalLink } from "lucide-react";

export default function Team() {
  const founders = [
    {
      name: "Anoop Mehendale",
      title: "CEO & Founder",
      bio: "Enterprise strategist and healthcare innovation leader with deep expertise in AI-driven business transformation. Currently Founder of Guident AI (Oct 2025 - Present), building AI ventures. Previously Founder & CEO of Xficient Inc. (Aug 2023 - Aug 2025), which raised $4M from Angels and healthcare-focused VC (Ikigai Growth Partners) in Seed and Preseed rounds to bring Generative AI to healthcare payers, before being acquired by investors. Former Healthcare Sales Strategy Leader at Salesforce (Nov 2021 - Apr 2023), where he spearheaded discovery and expansion of healthcare applications, conceptualizing and leading the launch of a $500M healthtech platform for enterprise solutions. Director of Data at Optum Life Sciences (Apr 2018 - Oct 2021), steering Customer Success teams overseeing a $30M portfolio of Top 20 pharmaceutical and medical companies. Senior Director of Enterprise Strategy at Aetna with M&A responsibilities, driving innovation in Revenue Cycle, Consumer Health, and Payer Research. Founder of Mathema Analytics (acquired by Moody's Analytics), demonstrating successful exit experience. MBA from Indian School of Business, Master of Business Administration from The Wharton School, B.S. in Mechanical Engineering.",
      linkedinUrl: "https://www.linkedin.com/in/anoopmehendale/",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fa30503b7e4574ce58f3b2c243fc27924?format=webp&width=800",
    },
    {
      name: "Gourav Shah",
      title: "Chief Builder & Co-Founder",
      bio: "DevOps domain expert and visionary educator with 18+ years of hands-on experience in Operations, Cloud, and Platform Engineering. Premium Instructor on Udemy with 228,700+ total learners and 5,400+ reviews, establishing trusted relationships with enterprise organizations globally. Founder of School of DevOps™ and creator of the RealOps Career Framework, on a mission to build an elite workforce of DevOps professionals. Course Developer at The Linux Foundation (Apr 2019 - Jun 2023), where he authored and developed six in-depth courses tailored for DevOps professionals, focusing on modern practices, tools, and methodologies—directly opening enterprise training opportunities. Corporate Trainer at School of DevOps (Sep 2012 - Present, 13+ years), transforming DevOps education and empowering IT professionals with real-world mastery through hands-on training. Principal Consultant at RealOps Consulting (Oct 2012 - Present, 13+ years), driving innovation and excellence in DevOps consulting by architecting scalable, resilient, and automated systems. Proven track record of building distribution channels and enterprise relationships through education, community engagement, and corporate training at scale. Brings deep technical expertise, exceptional communication ability, and demonstrated capacity to influence and scale impact at the organizational level.",
      linkedinUrl: "https://www.linkedin.com/in/gouravshah/",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Fc3c5f8faf5a94ef0bb6a60a9d701ac8a?format=webp&width=800",
    },
    {
      name: "Prashant Sasatte",
      title: "CTO & Co-Founder",
      bio: "Technical leader and serial entrepreneur with elite academic credentials. Founder of Olelo Intelligent Systems (Oct 2018 - Present) building privacy-first, secure enterprise smart voice assistant solutions. Founder of Cogmeta Intelligent Systems redefining customer engagement through revolutionary audience intelligence platform. Founded Interior Point Analytics (Dec 2011 - Feb 2015). Previous Principal Analytics Engineer at Exponential, leading research and implementation of statistical models and optimization algorithms. Education: Master of Mathematics in Computer Science from University of Waterloo (Grade 4.0/4.0) and B.E. in Computer Science from BITS Pilani (Grade 9.92/10.00). Combines technical excellence with entrepreneurial vision to drive OpsFlow's technology strategy and product architecture.",
      linkedinUrl: "https://www.linkedin.com/in/prashantsasatte/",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2F1cd7901e1bab4583962976450b937efb?format=webp&width=800",
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
