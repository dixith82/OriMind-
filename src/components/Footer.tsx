import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg border border-foreground/20 flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-sm">O</span>
              </div>
              <span className="font-display font-bold text-foreground text-lg">OriMind</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building autonomous intelligence systems for the execution age.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Products</p>
            <ul className="space-y-3">
              <li>
                <a href="https://www.infinall.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Infinall <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/product" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Intelligence Layer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Company</p>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-sm text-foreground/70 hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="#careers" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Connect</p>
            <ul className="space-y-3">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1">X (Twitter) <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="mailto:mohan@orimind.com" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} OriMind. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
