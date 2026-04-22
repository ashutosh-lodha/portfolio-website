import { motion } from "framer-motion";
import { Activity, Github, ShieldCheck, Box, Server } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "idp-platform",
      slug: "idp-platform",
      description:
        "Internal Developer Platform — a Kubernetes-native control plane that abstracts infra so engineers can ship services with a single manifest. Self-service environments, golden paths, and GitOps-driven deploys.",
      stack: ["Go", "Kubernetes", "Helm", "Terraform", "AWS", "ArgoCD"],
      metrics: {
        status: "passing",
        latency: "120ms p95",
        lastDeploy: "12h ago",
      },
      icon: <Box className="w-5 h-5" />,
      repo: "https://github.com/ashutosh-lodha/idp-platform",
    },
    {
      title: "api-gateway-rate-limiter",
      slug: "api-gateway-rate-limiter",
      description:
        "Distributed API gateway with token-bucket rate limiting backed by Redis. Pluggable middleware, per-route policies, and Prometheus metrics for production observability.",
      stack: ["Go", "Redis", "NGINX", "Docker", "Prometheus", "Grafana"],
      metrics: {
        status: "operational",
        latency: "8ms p99",
        lastDeploy: "2d ago",
      },
      icon: <Server className="w-5 h-5" />,
      repo: "https://github.com/ashutosh-lodha/api-gateway-rate-limiter",
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px bg-border flex-1" />
          <h2 className="font-mono text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">04.</span> kubectl get deployments
          </h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors w-full sm:w-[420px] lg:w-[460px]"
            >
              {/* Card Header - Service Status Style */}
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold">
                  {project.icon}
                  {project.title.toLowerCase().replace(/ /g, '-')}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-chart-4 animate-pulse" />
                  <span className="text-chart-4 uppercase">{project.metrics.status}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-muted/30 rounded-md border border-border/50">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono uppercase">Metric 1</span>
                    <span className="text-sm font-mono text-foreground">
                      <Activity className="w-3 h-3 inline mr-1 text-primary" />
                      {Object.values(project.metrics)[1]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono uppercase">Deployed</span>
                    <span className="text-sm font-mono text-foreground">
                      {project.metrics.lastDeploy}
                    </span>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-background border border-border rounded-sm text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional accomplishments fake terminal block */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto"
        >
          <div className="font-mono text-sm">
            <div className="text-primary mb-4">$ cat achievements.log</div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 shrink-0 text-chart-4" />
                <span><strong className="text-foreground">AWS Academy Graduate</strong> - Certified cloud practitioner competencies.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 shrink-0 text-secondary" />
                <span><strong className="text-foreground">Cloud Security Alliance</strong> - Member at UPES chapter.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 shrink-0 text-primary" />
                <span><strong className="text-foreground">Sports Leadership</strong> - Sports Committee Member & Zonal Volleyball Player representing Guna District.</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
