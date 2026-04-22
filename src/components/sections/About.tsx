import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function About() {
  const [text, setText] = useState("");
  const fullText = `> Executing whoami...
Ashutosh Lodha — Platform Engineer / DevOps Engineer

> Analyzing profile...
Building cloud-native platforms and distributed backend systems.
Currently focused on Go-based system design, Infrastructure as Code,
and Kubernetes-native deployments.

> Loading attributes...
[+] Designs golden paths and self-service developer platforms
[+] Ships production-grade Go services and gateways
[+] Lives in Kubernetes, Helm, Terraform, and AWS
[+] Instruments everything with Prometheus + Grafana

> Ready. Waiting for input...`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    // Create an IntersectionObserver to start typing when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
              currentText += fullText[currentIndex];
              setText(currentText);
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("about-terminal");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px bg-border flex-1" />
          <h2 className="font-mono text-2xl font-bold text-foreground">
            <span className="text-primary">01.</span> ./identity.sh
          </h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div 
            id="about-terminal"
            className="rounded-lg overflow-hidden border border-border bg-card shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-chart-5/80" />
                <div className="w-3 h-3 rounded-full bg-chart-4/80" />
              </div>
              <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                bash - root@ashutosh-node
              </div>
              <div className="w-12" /> {/* Spacer for balance */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-foreground min-h-[300px]">
              <pre className="whitespace-pre-wrap font-mono">
                <span className="text-primary">{text}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 md:h-5 bg-secondary ml-1 align-middle"
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
