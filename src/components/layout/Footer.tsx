import { Terminal } from "lucide-react";
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card py-8 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>Connection closed. Session ended at {new Date().toLocaleTimeString()}</span>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-sm">
            <a href="https://github.com/ashutosh-lodha" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">[ GitHub ]</a>
            <a href="https://www.linkedin.com/in/ashutosh-lodha/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-secondary">[ LinkedIn ]</a>
            <a href="https://leetcode.com/u/flsEPqZ27o/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">[ LeetCode ]</a>
            <a href="mailto:lodhaashutosh@gmail.com" className="text-muted-foreground hover:text-secondary">[ Email ]</a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground/50 font-mono">© {year} Ashutosh Lodha. Build passing.</p>
      </div>
    </footer>
  );
}