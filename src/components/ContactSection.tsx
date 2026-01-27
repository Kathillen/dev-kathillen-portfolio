import { motion } from "framer-motion";
import { Github, Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative eyes */}
          <div className="flex justify-center gap-3 mb-8">
            <motion.div
              className="w-12 h-6 bg-card border border-primary/40 rounded-full flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-8 h-4 bg-primary/30 rounded-full" />
            </motion.div>
            <motion.div
              className="w-12 h-6 bg-card border border-primary/40 rounded-full flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
            >
              <div className="w-8 h-4 bg-primary/30 rounded-full" />
            </motion.div>
          </div>

          <h2 className="section-title mb-4">Chamar o Herói</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Toda cidade precisa de um bom dev.
          </p>
          <p className="text-foreground/80 text-xl mb-12">
            Vamos construir algo incrível juntos?
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 font-semibold"
              asChild
            >
              <a href="mailto:contato@exemplo.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/Kathillen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.3)] px-8 py-6 text-lg font-bold"
              asChild
            >
              <a href="mailto:contato@exemplo.com">
                <Rocket className="w-6 h-6 mr-3" />
                Vamos construir algo juntos
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
