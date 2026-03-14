import { motion } from "framer-motion";
import { ArrowRight, Code2, BarChart3, Search, Video } from "lucide-react";
import BrowserMockup from "@/components/BrowserMockup";

const agents = [
{
icon: Code2,
title: "Infinall Engineer",
desc: "Generates production-ready applications from a single prompt."
},
{
icon: Video,
title: "Infinall Publisher",
desc: "Creates and publishes blogs, videos and marketing campaigns automatically."
},
{
icon: BarChart3,
title: "Infinall Analyst",
desc: "Transforms data into dashboards, insights and analytics."
},
{
icon: Search,
title: "Infinall Researcher",
desc: "Performs deep web research and produces structured reports."
}
];

const ProductShowcase = () => {
return (

<section className="relative py-32 px-6 bg-[hsl(220,20%,4%)] overflow-hidden">

<div className="max-w-7xl mx-auto">

{/* SECTION HEADER */}

<div className="text-center mb-20">

<motion.h2
className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-tight mb-6"
initial={{ opacity:0, y:30 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
>
INFINALL
</motion.h2>

<motion.p
className="text-gray-400 max-w-2xl mx-auto text-lg"
initial={{ opacity:0 }}
whileInView={{ opacity:1 }}
viewport={{ once:true }}
>
infinall.ai is an autonomous AI execution engine capable of
building software, content and research automatically.
</motion.p>

</div>


{/* MAIN PRODUCT SCREENSHOT */}

<motion.div
className="mb-24"
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
>

<BrowserMockup url="app.infinall.ai" className="max-w-5xl mx-auto">

<img
src="/screenshots/dashboard.png"
alt="Infinall AI dashboard interface"
className="w-full rounded-lg"
/>

</BrowserMockup>

</motion.div>


{/* FEATURE SCREENSHOTS */}

<div className="grid md:grid-cols-2 gap-10 mb-24">

<motion.img
src="/screenshots/workflow.png"
className="rounded-xl border border-gray-800"
initial={{ opacity:0, y:30 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
/>

<motion.img
src="/screenshots/agents.png"
className="rounded-xl border border-gray-800"
initial={{ opacity:0, y:30 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
/>

</div>


{/* AGENT GRID */}

<div className="grid md:grid-cols-2 gap-6 mb-20">

{agents.map((agent, i) => (

<motion.div
key={agent.title}
className="bg-gray-900 p-8 rounded-xl border border-gray-800"
initial={{ opacity:0, y:20 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
transition={{ delay:i*0.1 }}
>

<div className="flex items-center gap-4 mb-4">

<div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
<agent.icon className="text-cyan-400 w-5 h-5"/>
</div>

<h3 className="text-xl font-semibold text-white">
{agent.title}
</h3>

</div>

<p className="text-gray-400 text-sm">
{agent.desc}
</p>

</motion.div>

))}

</div>


{/* CTA */}

<div className="text-center">

<a
href="https://www.infinall.ai"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold hover:shadow-lg"
>

Try infinall.ai
<ArrowRight className="w-4 h-4"/>

</a>

</div>

</div>

</section>

);
};

export default ProductShowcase;