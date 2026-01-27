import { motion } from "framer-motion";
import { Github, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-primary/80 rounded-full" />
              <div className="w-4 h-2 bg-primary/80 rounded-full" />
            </div>
            <span className="font-semibold text-foreground/80">
              Kathillen
            </span>
          </div>

          {/* Center text */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>e muito</span>
            <Code2 className="w-4 h-4 text-accent" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Kathillen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <span className="text-sm text-muted-foreground">
              © {currentYear}
            </span>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground/60 mt-8 italic font-mono"
        >
          "Com grandes poderes vêm grandes responsabilidades."
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
