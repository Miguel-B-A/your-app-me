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
        className="max-w-3xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>I'm a Computer Science student at CEU San Pablo in Madrid. I hold an International Baccalaureate from British Montessori School Mataespesa with a Science and Technology track.



          </p>
          <p>
            I have hands-on experience as a QA Analyst Intern at Grupo Diusframi, where I 
            developed and executed test plans, performed debugging, and ensured software quality. 
            I'm skilled in problem-solving, teamwork, and communicating complex concepts clearly.
          </p>
          <p>
            I'm bilingual in English (C2 Cambridge Proficiency, Grade A) and Spanish (native), 
            which allows me to work effectively in international environments. I'm always eager 
            to learn new technologies and take on challenging projects.
          </p>
        </div>
      </motion.div>
    </section>);

};

export default AboutSection;