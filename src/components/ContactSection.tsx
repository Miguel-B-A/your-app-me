import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/40" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Get in Touch</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />
        
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I'm currently looking for internship and job opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>your@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Your City, Country</span>
          </div>
        </div>

        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-lg"
        >
          <Send className="w-5 h-5" />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
