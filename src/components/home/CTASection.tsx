import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-foreground mb-4 sm:mb-6 tracking-tight">
            Ready to build with<br />autonomous AI?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg mb-8 sm:mb-10 max-w-lg mx-auto">
            Join the next generation of creators who describe what they want and let AI handle the execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all hover:shadow-[0_0_30px_hsl(0,0%,100%,0.15)]"
            >
              Get Started with Infinall
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
