import SkillText from "./SkillText.jsx";
import SkillIcon from "./SkillIcon.jsx";
import { skillGroups } from "../data/index.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-20 z-[20]"
    >
      <SkillText />

      {skillGroups.map((group) => (
        <div key={group.title} className="flex flex-col items-center gap-4 mt-6 px-4">
          <h2 className="text-gray-300 text-lg font-medium">{group.title}</h2>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {group.items.map((item, index) => (
              <SkillIcon key={item.name} index={index} {...item} />
            ))}
          </div>
        </div>
      ))}

      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" playsInline loop muted autoPlay src="/cards-video.webm" />
        </div>
      </div>
    </section>
  );
}
