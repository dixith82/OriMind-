import { motion } from "framer-motion";
import { Code2, Video, BarChart3, Search, Sparkles, Globe, Paintbrush, Cpu, Rocket, FileText, Youtube, Twitter, Image, Calendar, Mic, ArrowRight, ExternalLink, TrendingUp, BookOpen, Zap, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrowserMockup from "@/components/BrowserMockup";
import SEOHead from "@/components/SEOHead";

const engineerFeatures = [
  { icon: Sparkles, title: "AI Architecture Design", desc: "Gemini AI plans your entire app architecture — routing, data models, API design — before writing code." },
  { icon: Code2, title: "Full-Stack Code Generation", desc: "Produces production-ready Next.js frontend + Python/Node.js backend in one shot." },
  { icon: Globe, title: "Live Preview & Deploy", desc: "Instantly preview in a sandboxed browser. One-click deploy to production." },
  { icon: Paintbrush, title: "File Tree & Code Editor", desc: "Browse every generated file in a VS Code–style explorer. Modify any part instantly." },
  { icon: Cpu, title: "Multi-Framework Support", desc: "Next.js 14, React, TypeScript, TailwindCSS, Prisma — the modern stack." },
  { icon: Rocket, title: "AI-Powered Iteration", desc: "Chat with Infinall to refine your app. Add features, fix bugs through natural language." },
];

const publisherFeatures = [
  { icon: Search, title: "Campaign Research", desc: "Researches trends, competitors, and audience data to craft multi-platform content strategy." },
  { icon: Video, title: "AI Video Generation", desc: "Complete scripts with narration, scenes, and B-roll cues. ElevenLabs voice-over on Pro." },
  { icon: Image, title: "Ad Image Generation", desc: "Create 3 high-quality ad image variants per campaign using AI — ready for social and display." },
  { icon: FileText, title: "Blog & WordPress Publishing", desc: "SEO-optimised blog articles published directly to your WordPress site with one click." },
  { icon: Twitter, title: "X Thread Automation", desc: "Compose and publish multi-tweet threads with optimised hooks, hashtags, scheduling." },
  { icon: Youtube, title: "YouTube Publishing", desc: "Connect your channel with OAuth. Upload videos, thumbnails, titles, descriptions automatically." },
  { icon: Calendar, title: "Smart Scheduling", desc: "Auto-post at optimal times based on your configured preferences per platform." },
  { icon: Mic, title: "Voice Generation", desc: "Pro plans include ElevenLabs AI voice-over — create narrated videos without recording." },
];

const analystFeatures = [
  { icon: BarChart3, title: "Interactive Dashboards", desc: "Generates real-time dashboards with charts, KPIs, and drill-down capabilities." },
  { icon: TrendingUp, title: "Trend Analysis", desc: "Identifies market trends, growth patterns, and predictive insights from your data." },
  { icon: FileText, title: "SWOT Analysis", desc: "Automated competitive analysis with strengths, weaknesses, opportunities, and threats." },
  { icon: Zap, title: "Actionable Insights", desc: "Translates complex data into clear recommendations and strategic next steps." },
];

const researcherFeatures = [
  { icon: Search, title: "Deep Web Research", desc: "Scrapes and aggregates data from multiple sources across the web in minutes." },
  { icon: BookOpen, title: "Report Generation", desc: "Creates structured research reports with citations, summaries, and key findings." },
  { icon: Globe, title: "Competitor Intelligence", desc: "Monitors competitor activity, pricing changes, and market positioning." },
  { icon: FileText, title: "Documentation Builder", desc: "Generates comprehensive technical and business documentation from any topic." },
];

const comparisonData = [
  { feature: "Full-stack app generation", infinall: true, traditional: false },
  { feature: "Multi-agent coordination", infinall: true, traditional: false },
  { feature: "Auto-deployment", infinall: true, traditional: false },
  { feature: "Content + Code in one tool", infinall: true, traditional: false },
  { feature: "Natural language interface", infinall: true, traditional: false },
  { feature: "Cross-platform publishing", infinall: true, traditional: false },
  { feature: "AI-powered research & analysis", infinall: true, traditional: false },
  { feature: "Zero config setup", infinall: true, traditional: false },
];

const AboutProduct = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="About Infinall — Autonomous AI Execution Engine"
        description="Deep dive into infinall.ai: the autonomous AI execution engine with specialized sub-agents for code generation, content creation, data analysis, and research."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,20%,3%)]" />
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Floating orbs */}
        {[
          { left: "5%", top: "20%", size: 300, delay: "0s" },
          { left: "70%", top: "10%", size: 400, delay: "-7s" },
        ].map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[100px] animate-orb-drift"
            style={{
              left: orb.left, top: orb.top, width: orb.size, height: orb.size,
              background: `radial-gradient(circle, hsl(190,100%,50%/0.06), transparent)`,
              animationDelay: orb.delay,
            }}
          />
        ))}

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-infinall/20 bg-infinall/5 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-infinall" />
            <span className="text-xs font-medium tracking-wider text-infinall/80 uppercase">The Product</span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-900 text-gradient-infinall mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Infinall
          </motion.h1>

          <motion.p className="text-lg sm:text-xl text-[hsl(0,0%,60%)] max-w-2xl mx-auto mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            You Imagine. It's Done.
          </motion.p>
          <motion.p className="text-sm sm:text-base text-[hsl(0,0%,45%)] max-w-xl mx-auto mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Autonomous AI execution engine that transforms natural language into complete applications and content — then deploys them automatically.
          </motion.p>

          <motion.a
            href="https://www.infinall.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-infinall text-[hsl(220,20%,4%)] font-semibold text-sm hover:shadow-[0_0_40px_hsl(190,100%,50%,0.3)] transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Try Infinall Now <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* Product Interface Mockup — Larger */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BrowserMockup url="app.infinall.ai" variant="infinall" className="mx-auto">
              <div className="p-4 sm:p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[300px] sm:min-h-[400px]">
                  {/* Sidebar */}
                  <div className="md:col-span-3 bg-[hsl(220,18%,8%)] rounded-lg p-3 border border-[hsl(220,15%,12%)] hidden md:block">
                    <p className="text-[10px] uppercase tracking-wider text-infinall/50 mb-3">Explorer</p>
                    {["src/", "├── app/", "│   ├── page.tsx", "│   └── layout.tsx", "├── components/", "│   ├── Dashboard.tsx", "│   ├── Charts.tsx", "│   └── Analytics.tsx", "├── lib/", "│   ├── api.ts", "│   └── utils.ts", "└── styles/"].map((f, i) => (
                      <p key={i} className="text-[11px] text-[hsl(0,0%,55%)] font-mono py-0.5 hover:text-infinall/80 cursor-default">{f}</p>
                    ))}
                  </div>
                  {/* Code editor */}
                  <div className="md:col-span-9 bg-[hsl(220,18%,6%)] rounded-lg p-3 sm:p-4 border border-[hsl(220,15%,12%)] font-mono text-[10px] sm:text-xs overflow-x-auto">
                    <div className="flex gap-4 mb-3 border-b border-[hsl(220,15%,12%)] pb-2">
                      <span className="text-infinall/80 text-[11px]">page.tsx</span>
                      <span className="text-[hsl(0,0%,40%)] text-[11px]">Dashboard.tsx</span>
                      <span className="text-[hsl(0,0%,40%)] text-[11px]">Analytics.tsx</span>
                    </div>
                    <div className="space-y-1">
                      <p><span className="text-[hsl(300,60%,60%)]">import</span> <span className="text-[hsl(0,0%,70%)]">{"{ Dashboard }"}</span> <span className="text-[hsl(300,60%,60%)]">from</span> <span className="text-[hsl(120,50%,50%)]">'./Dashboard'</span></p>
                      <p><span className="text-[hsl(300,60%,60%)]">import</span> <span className="text-[hsl(0,0%,70%)]">{"{ RealtimeCharts }"}</span> <span className="text-[hsl(300,60%,60%)]">from</span> <span className="text-[hsl(120,50%,50%)]">'./Charts'</span></p>
                      <p><span className="text-[hsl(300,60%,60%)]">import</span> <span className="text-[hsl(0,0%,70%)]">{"{ Analytics }"}</span> <span className="text-[hsl(300,60%,60%)]">from</span> <span className="text-[hsl(120,50%,50%)]">'./Analytics'</span></p>
                      <p className="text-[hsl(0,0%,30%)]"> </p>
                      <p><span className="text-[hsl(200,70%,60%)]">export default function</span> <span className="text-[hsl(50,80%,60%)]">Page</span><span className="text-[hsl(0,0%,70%)]">() {"{"}</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">  </span><span className="text-[hsl(300,60%,60%)]">return</span> <span className="text-[hsl(0,0%,70%)]">(</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">    </span><span className="text-[hsl(0,0%,60%)]">&lt;</span><span className="text-infinall">Dashboard</span> <span className="text-[hsl(190,80%,70%)]">title</span><span className="text-[hsl(0,0%,60%)]">=</span><span className="text-[hsl(120,50%,50%)]">"SaaS Analytics"</span><span className="text-[hsl(0,0%,60%)]">&gt;</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">      </span><span className="text-[hsl(0,0%,60%)]">&lt;</span><span className="text-infinall">RealtimeCharts</span> <span className="text-[hsl(190,80%,70%)]">interval</span><span className="text-[hsl(0,0%,60%)]">=</span><span className="text-[hsl(120,50%,50%)]">"5s"</span> <span className="text-[hsl(0,0%,60%)]">/&gt;</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">      </span><span className="text-[hsl(0,0%,60%)]">&lt;</span><span className="text-infinall">Analytics</span> <span className="text-[hsl(190,80%,70%)]">metrics</span><span className="text-[hsl(0,0%,60%)]">=</span><span className="text-[hsl(120,50%,50%)]">{"{ ['revenue','users','churn'] }"}</span> <span className="text-[hsl(0,0%,60%)]">/&gt;</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">    </span><span className="text-[hsl(0,0%,60%)]">&lt;/</span><span className="text-infinall">Dashboard</span><span className="text-[hsl(0,0%,60%)]">&gt;</span></p>
                      <p><span className="text-[hsl(0,0%,40%)]">  </span><span className="text-[hsl(0,0%,70%)]">)</span></p>
                      <p><span className="text-[hsl(0,0%,70%)]">{"}"}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-infinall/60 mb-4 font-medium">Architecture</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              How Infinall <span className="text-gradient-infinall">Works</span>
            </h2>
            <p className="text-[hsl(0,0%,50%)] text-sm sm:text-base max-w-xl mx-auto">
              A multi-agent orchestration system powered by advanced AI models.
            </p>
          </div>

          <motion.div
            className="glass-infinall-3d rounded-2xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* User input */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[hsl(220,18%,10%)] border border-[hsl(220,15%,16%)]">
                <span className="text-sm text-[hsl(0,0%,70%)]">💬</span>
                <span className="text-xs sm:text-sm text-[hsl(0,0%,70%)]">"Build me a SaaS dashboard with billing"</span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-6">
              <div className="w-px h-10 bg-gradient-to-b from-infinall/40 to-infinall/10" />
            </div>

            {/* Orchestrator */}
            <div className="flex justify-center mb-6">
              <div className="glass-infinall rounded-xl px-6 py-3 flex items-center gap-3">
                <span className="text-infinall font-display font-bold">∞</span>
                <div>
                  <p className="text-sm font-bold text-[hsl(0,0%,90%)]">Infinall Orchestrator</p>
                  <p className="text-[10px] text-[hsl(0,0%,50%)]">Gemini AI • Plans & coordinates agents</p>
                </div>
              </div>
            </div>

            {/* Arrow splits */}
            <div className="flex justify-center mb-6">
              <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-infinall/30 to-transparent" />
            </div>

            {/* 4 agents */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { icon: Code2, name: "Engineer", desc: "Code & Deploy" },
                { icon: Video, name: "Publisher", desc: "Content & Publish" },
                { icon: BarChart3, name: "Analyst", desc: "Data & Insights" },
                { icon: Search, name: "Researcher", desc: "Research & Reports" },
              ].map(a => (
                <div key={a.name} className="bg-[hsl(220,18%,8%)] rounded-xl p-3 sm:p-4 border border-infinall/10 text-center">
                  <a.icon className="w-6 h-6 text-infinall mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-bold text-[hsl(0,0%,90%)]">{a.name}</p>
                  <p className="text-[10px] text-[hsl(0,0%,50%)]">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-6">
              <div className="w-px h-10 bg-gradient-to-b from-infinall/30 to-infinall/10" />
            </div>

            {/* Output */}
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-3">
                {["🌐 Live Website", "📱 Deployed App", "📹 Published Video", "📊 Analytics Report"].map(o => (
                  <div key={o} className="bg-[hsl(220,18%,8%)] rounded-lg px-4 py-2 border border-infinall/10">
                    <span className="text-xs sm:text-sm text-[hsl(0,0%,70%)]">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinall Engineer */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-infinall/20 bg-infinall/5 mb-6">
              <Code2 className="w-3.5 h-3.5 text-infinall" />
              <span className="text-xs font-medium text-infinall/80 uppercase tracking-wider">Infinall Engineer</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              Build applications<br className="hidden sm:block" />with <span className="text-gradient-infinall">one prompt</span>
            </h2>
            <p className="text-[hsl(0,0%,50%)] text-sm sm:text-lg max-w-xl mx-auto">
              Describe what you want. Infinall Engineer researches, architects, and generates production-ready code — then deploys it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {engineerFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-infinall-3d rounded-xl p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-infinall/60 mb-3 sm:mb-4" />
                <h3 className="font-display font-bold text-[hsl(0,0%,90%)] mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[hsl(0,0%,50%)] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Publisher */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(215, 100%, 60% / 0.04) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-infinall/20 bg-infinall/5 mb-6">
              <Video className="w-3.5 h-3.5 text-infinall" />
              <span className="text-xs font-medium text-infinall/80 uppercase tracking-wider">Infinall Publisher</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              Publish content across<br className="hidden sm:block" /><span className="text-gradient-infinall">every platform</span>
            </h2>
            <p className="text-[hsl(0,0%,50%)] text-sm sm:text-lg max-w-xl mx-auto">
              Give Infinall Publisher a topic. It researches, writes, records, and publishes — YouTube, X, WordPress, and ad images.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {publisherFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-infinall-3d rounded-xl p-4 sm:p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <feat.icon className="w-5 sm:w-6 h-5 sm:h-6 text-infinall/60 mb-2 sm:mb-3" />
                <h3 className="font-display font-bold text-[hsl(0,0%,90%)] text-xs sm:text-sm mb-1 sm:mb-1.5">{feat.title}</h3>
                <p className="text-[10px] sm:text-xs text-[hsl(0,0%,50%)] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Analyst */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-infinall/20 bg-infinall/5 mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-infinall" />
              <span className="text-xs font-medium text-infinall/80 uppercase tracking-wider">Infinall Analyst</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              Data-driven <span className="text-gradient-infinall">decisions</span>
            </h2>
            <p className="text-[hsl(0,0%,50%)] text-sm sm:text-lg max-w-xl mx-auto">
              From raw data to actionable insights. Infinall Analyst builds dashboards, runs analysis, and generates strategic recommendations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {analystFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-infinall-3d rounded-xl p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-infinall/60 mb-3 sm:mb-4" />
                <h3 className="font-display font-bold text-[hsl(0,0%,90%)] mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[hsl(0,0%,50%)] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Researcher */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(190, 100%, 50% / 0.03) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-infinall/20 bg-infinall/5 mb-6">
              <Search className="w-3.5 h-3.5 text-infinall" />
              <span className="text-xs font-medium text-infinall/80 uppercase tracking-wider">Infinall Researcher</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              Research at <span className="text-gradient-infinall">AI speed</span>
            </h2>
            <p className="text-[hsl(0,0%,50%)] text-sm sm:text-lg max-w-xl mx-auto">
              Deep web research, competitor analysis, and comprehensive reports — generated in minutes, not days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {researcherFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-infinall-3d rounded-xl p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-infinall/60 mb-3 sm:mb-4" />
                <h3 className="font-display font-bold text-[hsl(0,0%,90%)] mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[hsl(0,0%,50%)] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-infinall/60 mb-4 font-medium">Comparison</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-[hsl(0,0%,92%)] mb-4 tracking-tight">
              Infinall vs <span className="text-[hsl(0,0%,40%)]">Traditional Tools</span>
            </h2>
          </div>

          <motion.div
            className="glass-infinall-3d rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-0 border-b border-infinall/10 p-4 sm:p-5">
              <span className="text-xs sm:text-sm font-bold text-[hsl(0,0%,70%)]">Feature</span>
              <span className="text-xs sm:text-sm font-bold text-infinall text-center">Infinall</span>
              <span className="text-xs sm:text-sm font-bold text-[hsl(0,0%,50%)] text-center">Traditional</span>
            </div>
            {comparisonData.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 gap-0 p-4 sm:p-5 ${i < comparisonData.length - 1 ? "border-b border-[hsl(220,15%,12%)]" : ""}`}>
                <span className="text-[11px] sm:text-sm text-[hsl(0,0%,65%)]">{row.feature}</span>
                <div className="flex justify-center">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-infinall" />
                </div>
                <div className="flex justify-center">
                  <XCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[hsl(0,0%,30%)]" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[hsl(220,20%,3%)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-[hsl(0,0%,92%)] mb-6 tracking-tight">
            Ready to build with AI?
          </h2>
          <p className="text-[hsl(0,0%,50%)] text-sm sm:text-lg mb-8">
            Stop assembling tools. Start describing outcomes.
          </p>
          <a
            href="https://www.infinall.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-infinall text-[hsl(220,20%,4%)] font-semibold text-sm hover:shadow-[0_0_40px_hsl(190,100%,50%,0.3)] transition-all"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProduct;
