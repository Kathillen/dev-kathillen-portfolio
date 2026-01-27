import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  GitBranch, 
  Terminal, 
  Brain, 
  FolderTree 
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    icon: Code2,
    level: 85,
    description: "Linguagem principal de desenvolvimento",
  },
  {
    name: "Node.js",
    icon: Server,
    level: 75,
    description: "Runtime para aplicações backend",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    level: 80,
    description: "Versionamento e colaboração",
  },
  {
    name: "CLI / Terminal",
    icon: Terminal,
    level: 85,
    description: "Linha de comando e automação",
  },
  {
    name: "Lógica de Programação",
    icon: Brain,
    level: 90,
    description: "Resolução de problemas",
  },
  {
    name: "Estruturação de Projetos",
    icon: FolderTree,
    level: 70,
    description: "Arquitetura e organização",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Poderes</h2>
          <p className="text-muted-foreground text-lg">
            Poderes adquiridos ao longo da jornada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover-glow group"
            >
              <div className="relative p-6 rounded-xl bg-card border border-border/50 h-full overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow duration-300">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 block text-right font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
