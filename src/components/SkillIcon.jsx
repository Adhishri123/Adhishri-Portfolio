import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillIcon({ name, Icon, color, index }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 w-[110px] py-4 rounded-xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm"
    >
      <Icon size={44} color={color} />
      <span className="text-sm text-gray-200 text-center">{name}</span>
    </motion.div>
  );
}
