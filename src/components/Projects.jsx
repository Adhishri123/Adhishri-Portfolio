import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/index.js";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative z-[20]" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </div>
  );
}
