import { motion } from "framer-motion";
import { Check, RefreshCw, ArrowRight } from "lucide-react";

interface EvolutionItem {
  title: string;
  status: "completed" | "in-progress" | "upcoming";
}

const evolutionItems: EvolutionItem[] = [
  { title: "JavaScript básico e intermediário", status: "completed" },
  { title: "Node.js fundamental", status: "completed" },
  { title: "Git e GitHub", status: "completed" },
  { title: "Estruturas de dados", status: "completed" },
  { title: "APIs REST", status: "in-progress" },
  { title: "Express.js", status: "upcoming" },
  { title: "Banco de dados", status: "upcoming" },
  { title: "Autenticação e segurança", status: "upcoming" },
];

const statusConfig = {
  completed: {
    icon: Check,
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500",
    iconColor: "text-emerald-400",
    lineColor: "bg-emerald-500",
  },
  "in-progress": {
    icon: RefreshCw,
    bgColor: "bg-amber-500/20",
    borderColor: "border-amber-500",
    iconColor: "text-amber-400",
    lineColor: "bg-amber-500",
  },
  upcoming: {
    icon: ArrowRight,
    bgColor: "bg-muted",
    borderColor: "border-muted-foreground/30",
    iconColor: "text-muted-foreground",
    lineColor: "bg-muted-foreground/30",
  },
};

const EvolutionSection = () => {
  return (
    <section id="evolution" className="relative py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Evolução</h2>
          <p className="text-muted-foreground text-lg">
            Treinamento contínuo para se tornar um herói completo
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {evolutionItems.map((item, index) => {
            const config = statusConfig[item.status];
            const Icon = config.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center shadow-lg`}
                  >
                    <Icon
                      className={`w-5 h-5 ${config.iconColor} ${
                        item.status === "in-progress" ? "animate-spin" : ""
                      }`}
                      style={
                        item.status === "in-progress"
                          ? { animationDuration: "3s" }
                          : undefined
                      }
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className={`p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors ${
                      item.status === "in-progress"
                        ? "shadow-[0_0_20px_hsl(45_100%_50%/0.1)]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-sm font-medium ${
                          item.status === "upcoming"
                            ? "text-muted-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.status === "in-progress" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          Em andamento
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 p-4 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-muted-foreground">Concluído</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm text-muted-foreground">Em andamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
              <span className="text-sm text-muted-foreground">Próximos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EvolutionSection;
