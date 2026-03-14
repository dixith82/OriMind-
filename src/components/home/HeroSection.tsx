import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroEarth from "@/assets/hero-earth.jpg";

const HeroSection = () => {

const ref = useRef<HTMLElement>(null);

const { scrollYProgress } = useScroll({
target: ref,
offset: ["start start", "end start"]
});

const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

return ( <section
   ref={ref}
   className="relative min-h-screen flex items-center justify-center overflow-hidden"
 >

```
  {/* Background Image */}
  <motion.div
    className="absolute inset-0"
    style={{ y: bgY }}
  >
    <img
      src={heroEarth}
      alt="Earth from space"
      className="w-full h-full object-cover scale-110"
    />

    <div className="absolute inset-0 bg-black/70" />
  </motion.div>


  {/* Animated Gradient */}
  <div className="absolute inset-0 animated-gradient-bg opacity-60" />


  {/* Hero Content */}
  <motion.div
    className="relative z-10 text-center max-w-5xl mx-auto px-6"
    style={{ opacity }}
  >

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">

        OriMind

        <span className="block text-white/40">
          Autonomous Intelligence Systems
        </span>

      </h1>


      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">

        OriMind is a research & innovation company building next-generation
        autonomous intelligence systems. Our flagship platform
        <span className="text-cyan-400 font-semibold">
          {" "}infinall.ai
        </span>
        {" "}transforms natural language into real execution —
        building software, research and content automatically.

      </p>


      {/* CTA Buttons */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <a
          href="https://www.infinall.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition"
        >
          Explore infinall.ai
        </a>

        <a
          href="/product"
          className="px-8 py-4 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
        >
          Learn More
        </a>

      </div>

    </motion.div>


    {/* Scroll indicator */}

    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >

      <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-1">

        <motion.div
          className="w-1 h-1 bg-white rounded-full"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

      </div>

    </motion.div>

  </motion.div>

</section>

);
};

export default HeroSection;
