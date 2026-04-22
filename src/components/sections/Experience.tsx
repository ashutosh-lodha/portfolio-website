import { motion } from "framer-motion";
import { GitCommit, GitBranch, GitMerge } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Research Analyst",
      company: "Copperpod IP",
      location: "Mohali",
      date: "Jan 2024 – Dec 2025",
      commits: [
        "Performed source code review and technical analysis of patent claims in software and hardware domains.",
        "Performed patent portfolio analysis, claim charts for infringement & prior art, prepared legal memos."
      ]
    },
    {
      title: "Intern (Spyder Project)",
      company: "HERE Technologies",
      location: "Remote",
      date: "Jun 2023 – Aug 2023",
      commits: [
        "Collected real-time location data via Python scrapers (BeautifulSoup, Scrapy).",
        "Debugged with Chrome DevTools, transformed data into GeoJSON maps.",
        "Utilized Trello for Agile project tracking."
      ]
    },
    {
      title: "Summer Intern",
      company: "GAIL India",
      location: "Vijaipur",
      date: "Jun 2022 – Jul 2022",
      commits: [
        "Built Tourney web app using MERN for advertising and participant registration.",
        "Implemented user auth + sessions, responsive UI, connected with MongoDB."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px bg-border flex-1" />
          <h2 className="font-mono text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-primary">03.</span> git log --oneline
          </h2>
          <div className="h-px bg-border flex-1" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <GitCommit className="w-4 h-4 text-primary" />
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="text-primary font-mono text-sm mt-1">
                        @ {exp.company} <span className="text-muted-foreground ml-2">[{exp.location}]</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="text-sm font-mono text-muted-foreground">{exp.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.commits.map((commit, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                        <GitMerge className="w-4 h-4 shrink-0 text-secondary mt-0.5" />
                        <span>{commit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Initial commit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 pt-4"
            >
              <div className="absolute -left-[17px] top-4 w-8 h-8 bg-background border-2 border-muted rounded-full flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-mono text-muted-foreground">
                Initial commit: B.Tech CSE @ UPES Dehradun (CGPA 8.35)
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
