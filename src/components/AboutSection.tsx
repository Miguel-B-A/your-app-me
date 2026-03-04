import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a Computer Science student with a strong passion for software development 
            and problem-solving. I enjoy turning complex problems into simple, beautiful, 
            and intuitive solutions.
          </p>
          <p>
            My journey in tech started with curiosity about how things work, and it has 
            evolved into a deep interest in full-stack development, algorithms, and 
            building products that make a difference.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or learning about system design and software architecture.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
