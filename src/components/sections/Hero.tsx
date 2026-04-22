import { motion, useScroll, useTransform } from "framer-motion";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  Activity,
  GitBranch,
  Cpu,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeroSceneSafe } from "../three/HeroSceneSafe";

const ROLES = [
  "Platform Engineer",
  "DevOps Engineer",
  "Backend Dev",
  "Kubernetes Operator",
];

function useTypewriter(words: string[], typingMs = 80, holdMs = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? typingMs / 2 : typingMs,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typingMs, holdMs]);

  return text;
}

function GlitchText({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-primary opacity-70 mix-blend-screen animate-[glitch_3.6s_infinite]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-secondary opacity-70 mix-blend-screen animate-[glitch2_4.2s_infinite]"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
      >
        {children}
      </span>
    </span>
  );
}

const PODS = [
  { name: "idp-platform", status: "Running", node: "ap-south-1a" },
  { name: "api-gateway-rate-limiter", status: "Running", node: "ap-south-1b" },
];

export function Hero() {
  const role = useTypewriter(ROLES);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-24 overflow-hidden"
    >
      {/* Layer 1: 3D scene fills the right ~half as backdrop */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-90">
          <HeroSceneSafe />
        </div>
        {/* gradient masks so text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Layer 2: subtle grid + glow */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Layer 3: content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-4 md:px-6 z-10 grid lg:grid-cols-12 gap-10 items-center pt-16"
      >
        {/* Left: identity + headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-widest">
              SYSTEM.STATUS: ONLINE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            <GlitchText>Ashutosh</GlitchText>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_6s_linear_infinite]">
              Lodha.
            </span>
          </h1>

          <div className="flex items-center gap-2 text-lg md:text-xl font-mono text-muted-foreground">
            <span className="text-primary">$</span>
            <span>whoami →</span>
            <span className="text-foreground">{role}</span>
            <span className="inline-block w-2 h-5 bg-primary animate-pulse" />
          </div>

          <p className="max-w-[560px] text-muted-foreground leading-relaxed text-base md:text-lg">
            I design{" "}
            <span className="text-foreground">internal developer platforms</span>{" "}
            and ship{" "}
            <span className="text-foreground">cloud-native distributed systems</span>{" "}
            in Go. I live in Kubernetes manifests, Terraform plans, and Grafana
            dashboards — turning rough infrastructure into golden paths.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#projects"
              className="group px-5 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-sm hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-[0_0_24px_rgba(0,229,255,0.25)] hover:shadow-[0_0_32px_rgba(0,229,255,0.45)]"
            >
              <Terminal className="w-4 h-4" />
              deploy --now
              <ArrowRight className="w-4 h-4 -mr-1 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="px-5 py-3 border border-border bg-card/50 backdrop-blur-sm font-mono text-sm rounded-sm hover:border-primary/50 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              cat bio.md
            </a>
            <div className="flex gap-2 ml-1">
              <a
                href="https://github.com/ashutosh-lodha"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors rounded-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-lodha/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 border border-border bg-card/60 backdrop-blur-sm hover:border-secondary/50 text-muted-foreground hover:text-secondary transition-colors rounded-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:lodhaashutosh@gmail.com"
                aria-label="Email"
                className="p-3 border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors rounded-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: kubectl status panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="rounded-lg border border-border/70 bg-card/70 backdrop-blur-md overflow-hidden shadow-[0_8px_60px_rgba(0,229,255,0.08)]">
            {/* terminal header */}
            <div className="flex items-center justify-between px-3 py-2 bg-muted/60 border-b border-border/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                ashutosh@lodha:~/k8s
              </span>
              <span className="font-mono text-[11px] text-primary">live</span>
            </div>

            {/* fake kubectl output */}
            <div className="p-4 font-mono text-[12px] leading-relaxed">
              <div className="text-primary">
                $ kubectl get pods -n platform
              </div>
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 mt-2 text-[11px] uppercase text-muted-foreground/70 tracking-wider">
                <span>name</span>
                <span>status</span>
              </div>
              <div className="h-px bg-border/60 my-1.5" />
              {PODS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="grid grid-cols-[1fr_auto_auto] gap-x-4 py-0.5 items-center"
                >
                  <span className="text-foreground truncate">{p.name}</span>
                  <span className="inline-flex items-center gap-1 text-chart-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-chart-4 animate-pulse" />
                    {p.status}
                  </span>
                </motion.div>
              ))}
              <div className="text-primary mt-3 flex items-center">
                $<span className="ml-1.5 inline-block w-2 h-3.5 bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Layer 5: marquee tech strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/40 bg-background/60 backdrop-blur-sm overflow-hidden">
        <div className="flex whitespace-nowrap py-2.5 animate-[marquee_38s_linear_infinite] font-mono text-[11px] text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "GO", "KUBERNETES", "TERRAFORM", "HELM", "CI/CD", "DOCKER",
              "AWS", "PROMETHEUS", "GRAFANA", "REDIS", "POSTGRES", "NGINX",
              "GITOPS", "OBSERVABILITY", "PLATFORM ENGINEERING", "SRE",
            ].map((t) => (
              <span key={`${k}-${t}`} className="mx-6 inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                <span className="tracking-[0.3em]">{t}</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground/70 hover:text-primary transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll → init
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.a>
    </section>
  );
}
