import { motion } from "framer-motion";
import { Code2, Terminal, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, text: "JavaScript & Node.js" },
    { icon: Terminal, text: "CLI & Automação" },
    { icon: Lightbulb, text: "Resolução de Problemas" },
    { icon: Target, text: "Foco em Resultados" },
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground text-lg">A origem do herói</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Decorative spider-eye element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              
              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border border-primary/20" />
              
              {/* Inner circle with code icon */}
              <div className="absolute inset-12 rounded-full bg-card border border-primary/40 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                <div className="text-center">
                  <Code2 className="w-16 h-16 text-primary mx-auto mb-2" />
                  <span className="font-mono text-sm text-muted-foreground">Backend Dev</span>
                </div>
              </div>
              
              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [rotation, rotation + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div 
                    className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]"
                    style={{ transform: `translateX(${120 + i * 5}px) translateY(-50%)` }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              Desenvolvedor backend em formação, focado em{" "}
              <span className="text-primary font-semibold">JavaScript</span> e{" "}
              <span className="text-accent font-semibold">Node.js</span>. Comecei 
              resolvendo pequenos problemas e evoluí criando scripts, aplicações 
              de linha de comando e sistemas educacionais.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              Acredito que{" "}
              <span className="italic text-muted-foreground">
                aprender fazendo, errando e corrigindo
              </span>{" "}
              é o verdadeiro caminho para se tornar um bom desenvolvedor. Cada 
              bug resolvido é uma lição aprendida, cada projeto concluído é um 
              novo poder adquirido.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
