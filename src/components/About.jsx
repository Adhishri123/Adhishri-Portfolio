import { motion } from "framer-motion";
import { profile } from "../data/index.js";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center py-20 px-6 relative z-[20]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        About Me
      </h1>
      <div className="flex flex-col gap-5 max-w-[800px] w-full">
        {profile.about.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
