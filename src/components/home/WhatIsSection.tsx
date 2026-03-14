import { motion } from "framer-motion";
import { Brain, Target, Layers, Zap } from "lucide-react";

const focusAreas = [
  { icon: Brain, title: "Intent Understanding", desc: "Machines that comprehend human intent, context, and nuance at a deep level" },
  { icon: Target, title: "Reasoning", desc: "Complex objective analysis, planning, and autonomous decision-making" },
  { icon: Layers, title: "Long-Term Memory", desc: "Persistent context systems that remember, learn, and adapt over time" },
  { icon: Zap, title: "Action Coordination", desc: "Multi-agent orchestration for independent task execution" },
];

const WhatIsSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">The Parent Company</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-800 mb-8 sm:mb-10 tracking-tight leading-[1]">
              What is<br />OriMind?
            </h2>

            <div className="space-y-5">
              <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
                OriMind is a parent AI intelligence company. We do not offer a single tool or assistant.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Instead, we build the <strong className="text-foreground">core intelligence systems</strong> that power autonomous AI products capable of real-world execution.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 sm:mt-10 pl-6 border-l-2 border-foreground/20">
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                OriMind builds intelligence.
              </p>
              <p className="font-display text-lg sm:text-xl text-muted-foreground mt-1">
                Products deliver results.
              </p>
            </div>
          </motion.div>

          {/* Right column - Focus areas */}
          <div className="lg:pt-4">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 font-medium">Our Focus</p>
            <p className="text-foreground text-base sm:text-lg mb-6 sm:mb-8">
              The building blocks for AI systems to execute work independently
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  className="glass-card-3d rounded-xl p-5 sm:p-6 group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <area.icon className="w-7 sm:w-8 h-7 sm:h-8 text-foreground/60 mb-3 sm:mb-4 group-hover:text-foreground transition-colors" />
                  <h3 className="font-display text-xs sm:text-sm font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
