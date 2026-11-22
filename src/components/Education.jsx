import { motion } from "framer-motion";
import { education } from "../data/index.js";

export default function Education() {
  return (
    <section id="education" className="flex flex-col items-center py-20 px-6 relative z-[20]">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        Education
      </h1>
      <div className="flex flex-col gap-4 max-w-[800px] w-full">
        {education.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm rounded-lg p-4 text-gray-200"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
