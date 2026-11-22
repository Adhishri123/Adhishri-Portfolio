import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tags, gradient, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm flex flex-col"
    >
      {/* Gradient banner instead of a screenshot. Replace with an <img> later if you want. */}
      <div className={`h-40 w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white text-3xl font-bold text-center px-4">{title}</span>
      </div>
      <div className="relative p-4 flex flex-col gap-3 flex-1">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-purple-200 border border-[#7042f88b] rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm hover:underline">
            View project
          </a>
        )}
      </div>
    </motion.div>
  );
}
