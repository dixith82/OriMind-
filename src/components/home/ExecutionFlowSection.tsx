import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
{
title: "Describe the Idea",
desc: "Tell infinall.ai what you want to build using natural language."
},
{
title: "AI Agents Coordinate",
desc: "Specialized agents collaborate to design architecture, generate code, research and content."
},
{
title: "Execution & Deployment",
desc: "Complete applications, reports or content are generated and ready for production."
}
];

const ExecutionFlowSection = () => {
return ( <section className="relative py-32 px-6 bg-black">

  <div className="max-w-6xl mx-auto text-center">

    <motion.h2
      className="text-5xl md:text-6xl font-bold mb-6"
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
      From Idea to Execution
    </motion.h2>

    <motion.p
      className="text-gray-400 max-w-2xl mx-auto mb-20"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
    >
      infinall.ai transforms natural language into fully executed
      applications, research and content workflows.
    </motion.p>


    <div className="grid md:grid-cols-3 gap-10">

      {steps.map((step,i)=>(

        <motion.div
          key={i}
          className="bg-gray-900 border border-gray-800 p-8 rounded-xl"
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:i*0.2}}
        >

          <div className="text-cyan-400 text-3xl font-bold mb-4">
            0{i+1}
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {step.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {step.desc}
          </p>

        </motion.div>

      ))}

    </div>


    <motion.div
      className="mt-16"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
    >

      <a
        href="https://www.infinall.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold"
      >
        Try infinall.ai
        <ArrowRight className="w-4 h-4"/>
      </a>

    </motion.div>

  </div>

</section>

);
};

export default ExecutionFlowSection;
