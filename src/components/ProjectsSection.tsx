import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects: { title: string; description: string; tech: string[]; github?: string; live?: string }[] = [
  {
    title: "UniGO",
    description: "A comprehensive university carpooling platform that connects students to share rides in a safe, affordable, and sustainable way.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "TypeScript", "Python"],
    github: "https://github.com/Miguel-B-A/UNIGO",
  },
  {
    title: "Black-Scholes Option Pricing",
    description: "Interactive financial options pricing app using the Black-Scholes model. Features real-time Call/Put pricing, full Greeks calculation (Δ, Γ, Θ, V, ρ), moneyness indicator, and visualizations with heatmaps and P&L charts.",
    tech: ["Python", "Streamlit", "NumPy", "SciPy", "Plotly"],
    github: "https://github.com/Miguel-B-A/BlackScholes_Project",
    live: "https://blackscholes-project-miguel-b-a.streamlit.app/",
  },
  {
    title: "Bond Pricer & Duration-Convexity Calculator",
    description: "Interactive bond analytics tool featuring bond pricing, current yield, YTM, Macaulay & Modified Duration, Convexity, DV01, price vs. YTM curves, heatmaps, and sensitivity tables with ±200bps shock analysis.",
    tech: ["Python", "Streamlit", "NumPy", "Plotly"],
    github: "https://github.com/Miguel-B-A/Bond-Pricer-Duration-Convexity-Calculator",
    live: "https://bond-pricer-duration-convexity-calculator.streamlit.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-xl">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
