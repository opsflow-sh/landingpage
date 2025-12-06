import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa63454bd5d0647989a1c51c52f5a6a85%2Ff3ce7f74d6fa4e8ba867dfa0afd51b99"
            alt="OpsFlow.sh"
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            to="/community"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            to="/docs"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <button className="hidden md:inline-block px-4 py-2 rounded-lg bg-sky-400/60 text-white text-sm font-medium hover:bg-sky-400/80 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">OpsFlow</h3>
            <p className="text-sm text-foreground/60">
              Building the future of Agentic Ops Workflows
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  kubeagentics
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  Command Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/community"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  Alliance
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2025 OpsFlow.sh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
