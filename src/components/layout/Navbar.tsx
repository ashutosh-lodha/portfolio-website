import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "cat bio.md" },
    { href: "#skills", label: "ls /skills" },
    { href: "#experience", label: "git log" },
    { href: "#projects", label: "kubectl get deployments" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-mono font-bold tracking-tight text-lg">
            ashutosh<span className="text-primary">@</span>lodha<span className="text-muted-foreground">:~</span>$
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:lodhaashutosh@gmail.com"
            className="px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 rounded-sm font-mono text-sm transition-colors"
          >
            ./contact.sh
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-mono">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-primary mr-2">&gt;</span>
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:lodhaashutosh@gmail.com"
                className="text-primary"
                onClick={() => setOpen(false)}
              >
                <span className="text-primary mr-2">&gt;</span>./contact.sh
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
