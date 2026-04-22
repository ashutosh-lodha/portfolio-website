import { motion } from "framer-motion";
import {
  SiLinux,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiNginx,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss as SiCss3,
  SiPython,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { Cloud as SiAmazon, Cloud, Code2, Database, LineChart } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Skill = { name: string; icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }> };
type Category = {
  title: string;
  subtitle: string;
  color: string;
  glyph: React.ReactNode;
  skills: Skill[];
};

export function Skills() {
  const stackCategories: Category[] = [
    {
      title: "DevOps · Cloud · Platform",
      subtitle: "infra/",
      color: "primary",
      glyph: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", icon: SiAmazon },
        { name: "Linux", icon: SiLinux },
        { name: "Go", icon: SiGo },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Helm", icon: SiHelm },
        { name: "Terraform", icon: SiTerraform },
        { name: "NGINX", icon: SiNginx },
        { name: "Git", icon: SiGit },
      ],
    },
    {
      title: "Application Development",
      subtitle: "app/",
      color: "secondary",
      glyph: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
      ],
    },
    {
      title: "Databases",
      subtitle: "data/",
      color: "chart-1",
      glyph: <Database className="w-6 h-6" />,
      skills: [
        { name: "Redis", icon: SiRedis },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      title: "Monitoring & Observability",
      subtitle: "obs/",
      color: "chart-2",
      glyph: <LineChart className="w-6 h-6" />,
      skills: [
        { name: "Prometheus", icon: SiPrometheus },
        { name: "Grafana", icon: SiGrafana },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px bg-border flex-1" />
          <h2 className="font-mono text-2xl font-bold text-foreground">
            <span className="text-secondary">02.</span> cat infrastructure.yml
          </h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
            <div className="w-[80%] h-[80%] border border-border/50 rounded-xl m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-[1px] h-full bg-border/50 absolute top-0 left-1/2 -translate-x-1/2" />
            <div className="w-full h-[1px] bg-border/50 absolute top-1/2 left-0 -translate-y-1/2" />
          </div>

          {stackCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border p-6 rounded-lg relative z-10 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-md bg-muted text-${category.color} group-hover:bg-${category.color}/10 transition-colors`}
                >
                  {category.glyph}
                </div>
                <div>
                  <h3 className="font-mono text-lg font-semibold leading-none">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    ~/stack/{category.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 border border-border rounded-full text-sm font-mono hover:bg-muted hover:border-primary/30 transition-all cursor-default"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
