import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Why Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Why OriMind Is Different</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-foreground mb-6 sm:mb-8 tracking-tight leading-[1.05]">
              A New Category<br />of AI Company
            </h2>

            <div className="space-y-5">
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                OriMind is not focused on building tools that assist users. We build{" "}
                <strong>intelligence systems that allow products to take full responsibility for execution.</strong>
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                This approach shifts AI from <strong className="text-foreground">assistance to autonomy</strong> — enabling results, not just suggestions.
              </p>
            </div>

            <div className="w-16 h-px bg-foreground/10 mt-8 sm:mt-10" />
          </motion.div>

          {/* Vision Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Vision Snapshot</p>
            <h3 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-foreground mb-6 sm:mb-8 tracking-tight leading-[1.05]">
              The Execution<br /><span className="text-foreground/40">Age</span>
            </h3>

            <div className="space-y-5">
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                OriMind believes the next phase of technology is defined by <strong>execution.</strong>
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Intelligence should not stop at recommendations — <strong className="text-foreground">it should deliver outcomes.</strong>
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We are building the <strong className="text-foreground">intelligence infrastructure</strong> for this future.
              </p>
            </div>

            <div className="w-16 h-px bg-foreground/10 mt-8 sm:mt-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
