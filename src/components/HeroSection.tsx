import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, FolderGit2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const phrases = [
    "Build apps by just typing.",
    "Transformando código em responsabilidade.",
    "Com grandes poderes, vem muito código.",
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < phrase.length) {
          setDisplayedText(phrase.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhrase, phrases]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Spider-eye inspired decorative element */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-8 md:w-24 md:h-12 bg-card border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <div className="w-10 h-5 md:w-16 md:h-8 bg-primary/20 rounded-full animate-pulse" />
          </div>
          <div className="w-16 h-8 md:w-24 md:h-12 bg-card border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <div className="w-10 h-5 md:w-16 md:h-8 bg-primary/20 rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Main title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 min-h-[1.2em]">
            <span className="text-glow text-foreground">{displayedText}</span>
            <span className="typing-cursor text-primary">|</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 font-mono"
        >
          <span className="text-primary">Desenvolvedor Backend</span>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-accent">JavaScript</span>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-foreground">Node.js</span>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-muted-foreground">CLI</span>
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground italic mb-12 text-sm md:text-base"
        >
          "Com grandes poderes vêm grandes responsabilidades — e muito código."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 font-semibold"
            onClick={() => scrollToSection("projects")}
          >
            <FolderGit2 className="mr-2 h-5 w-5" />
            Ver Projetos
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Kathillen" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            onClick={() => scrollToSection("about")}
          >
            <User className="mr-2 h-5 w-5" />
            Sobre Mim
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
