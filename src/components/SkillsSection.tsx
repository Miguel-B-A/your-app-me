import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Languages", items: ["Java", "C", "Python", "C++", "SQL", "JavaScript"] },
  { category: "Web Development", items: ["HTML", "CSS", "React", "Angular"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools & Systems", items: ["Git", "Linux", "Windows Server", "Power BI", "Docker"] },
  { category: "Methodologies", items: ["Agile", "UML", "ER Diagrams", "Software Testing & QA"] },
  { category: "Networking", items: ["TCP/IP", "DNS", "HTTP", "Network Security"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/40" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Skills</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-display font-semibold text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
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

export default SkillsSection;
