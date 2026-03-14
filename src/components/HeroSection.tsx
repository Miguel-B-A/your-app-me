import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-lg mb-4 font-medium tracking-wide">
          
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4">
          
          <span className="gradient-text">Miguel Barrera Abad</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-display font-medium text-muted-foreground mb-6">Computer Science Student & Finance Enthusiast


        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">Computer Science student at CEU San Pablo with a strong passion for software development, problem-solving, and building clean, efficient applications. Also self-teaching myself IB/Quantitative trading fundamentals by coding my own financial models and data tools.




        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-5">
          
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/in/miguel-barrera-abad" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mba1401@outlook.es" className="p-2.5 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>);

};

export default HeroSection;