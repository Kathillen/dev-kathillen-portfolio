import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, BookOpen, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectStatus = "completed" | "in-progress" | "study";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  repoUrl: string;
}

const projects: Project[] = [
  {
    name: "Node.js CLI Tools",
    description: "Ferramentas de linha de comando para automação de tarefas e produtividade no desenvolvimento.",
    technologies: ["Node.js", "JavaScript", "CLI"],
    status: "completed",
    repoUrl: "https://github.com/Kathillen",
  },
  {
    name: "Sistema Educacional",
    description: "Aplicação backend para gerenciamento de conteúdo educacional e progresso de estudantes.",
    technologies: ["Node.js", "JavaScript", "JSON"],
    status: "in-progress",
    repoUrl: "https://github.com/Kathillen",
  },
  {
    name: "API REST Fundamentals",
    description: "Projeto de estudos para dominar conceitos de APIs RESTful com Node.js e Express.",
    technologies: ["Node.js", "Express", "REST"],
    status: "study",
    repoUrl: "https://github.com/Kathillen",
  },
  {
    name: "Git Workflow Automation",
    description: "Scripts e automações para otimizar fluxos de trabalho com Git e GitHub.",
    technologies: ["Git", "Bash", "Automação"],
    status: "completed",
    repoUrl: "https://github.com/Kathillen",
  },
  {
    name: "JavaScript Exercises",
    description: "Coleção de exercícios e desafios resolvidos para domínio da linguagem JavaScript.",
    technologies: ["JavaScript", "Algoritmos", "Lógica"],
    status: "completed",
    repoUrl: "https://github.com/Kathillen",
  },
  {
    name: "Backend Architecture",
    description: "Estudos e práticas sobre arquitetura de aplicações backend escaláveis.",
    technologies: ["Node.js", "Design Patterns", "Clean Code"],
    status: "study",
    repoUrl: "https://github.com/Kathillen",
  },
];

const statusConfig = {
  completed: {
    label: "Concluído",
    icon: Rocket,
    className: "status-completed",
  },
  "in-progress": {
    label: "Em Desenvolvimento",
    icon: Code2,
    className: "status-in-progress",
  },
  study: {
    label: "Estudo",
    icon: BookOpen,
    className: "status-study",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Projetos</h2>
          <p className="text-muted-foreground text-lg">
            Missões concluídas e em andamento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover-glow group h-full"
              >
                <div className="relative p-6 rounded-xl bg-card border border-border/50 h-full flex flex-col">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className={`${status.className} border text-xs font-medium`}
                    >
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {status.label}
                    </Badge>
                  </div>

                  {/* Project name */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                    asChild
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            asChild
          >
            <a
              href="https://github.com/Kathillen?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver todos os repositórios
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
